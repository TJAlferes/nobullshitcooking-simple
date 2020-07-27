import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Crop } from 'react-image-crop';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import isHotKey from 'is-hotkey';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { IContentType } from '../../store/data/types';
import {
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue
} from '../../store/editor/actions';
import {
  ICreatingContentInfo,
  IEditingContentInfo
} from '../../store/user/content/types';
import {
  staffCreateNewContent,
  staffEditContent
} from '../../store/staff/content/actions';
import {
  userCreateNewContent,
  userEditContent
} from '../../store/user/content/actions';
import {
  getCroppedImage
} from '../../utils/imageCropPreviews/imageCropPreviews';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import {
  BlockButton,
  Element,
  InsertImageButton,
  Leaf,
  LinkButton,
  MarkButton,
  Toolbar
} from './components/index';
import { toggleMark, withImages, withLinks } from './helpers';

const endpoint = NOBSCBackendAPIEndpointOne;
const HOTKEYS: {
  [index: string]: any;
  'mod+b': string;
  'mod+i': string;
} = {
  'mod+b': 'bold',
  'mod+i': 'italic'
};

export function NewContent({
  oneColumnATheme,
  staffIsAuthenticated,
  editing,
  staffMessage,
  userMessage,
  dataContentTypes,
  creating,
  editingId,
  value,
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue,
  staffCreateNewContent,
  staffEditContent,
  userCreateNewContent,
  userEditContent
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ saveType, setSaveType ] = useState("draft");
  const [ contentTypeId, setContentTypeId ] = useState<number>(0);
  const [ published, setPublished ] = useState<string | null>(null);
  const [ title, setTitle ] = useState("");
  const [ prevContentImage, setPrevContentImage ] =
    useState("nobsc-content-default");
  const [ contentImage, setContentImage ] =
    useState<string | ArrayBuffer | null>(null);
  const [ fullContentImage, setFullContentImage ] = useState<File | null>(null);
  const [ thumbContentImage, setThumbContentImage ] =
    useState<File | null>(null);

  const [ crop, setCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState("");
  const [ cropThumbSizePreview, setCropThumbSizePreview ] = useState("");

  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingContentToEdit = async () => {
      if (!id) {
        const redirectPath = staffIsAuthenticated
        ? '/staff-dashboard'
        : '/dashboard';
        history.push(redirectPath);
        return;
      }

      window.scrollTo(0,0);
      setLoading(true);

      const url = staffIsAuthenticated
      ? `${endpoint}/staff/content/edit`
      : `${endpoint}/user/content/edit`;

      const { data } = await axios.post(url, {}, {withCredentials: true});
      if (data) {
        editorSetEditingId(Number(data.content_id));
        editorSetValue(data.content_items);
      }

      setLoading(false);
    };

    if (editing) {
      editorClearWork();
      getExistingContentToEdit();
    } else {
      editorClearWork();
      editorSetCreating();
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const message = staffIsAuthenticated ? staffMessage : userMessage;
      const redirectPath = staffIsAuthenticated
      ? '/staff-dashboard'
      : '/dashboard';

      if (message !== "") window.scrollTo(0,0);

      setFeedback(message);

      if (message === "Content created." || message === "Content updated.") {
        setTimeout(() => history.push(redirectPath), 3000);
      }

      setLoading(false);  // move?
    }

    return () => {
      isSubscribed = false;
    };
  }, [staffMessage, userMessage]);

  const editor = useMemo(
    () => withHistory(withImages(withLinks(withReact(createEditor())))),
    []
  );

  const handleContentTypeChange = (e: React.SyntheticEvent<EventTarget>) => {
    setContentTypeId(Number((e.target as HTMLInputElement).value));
  };

  const handleSaveTypeChange = (e: React.SyntheticEvent<EventTarget>) => {
    setSaveType((e.target as HTMLInputElement).name)
  };

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const handleChange = (value: Node[]) => editorSetValue(value);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    for (const hotkey in HOTKEYS) {
      if (!isHotKey(hotkey)(e as unknown as KeyboardEvent)) continue;
      e.preventDefault();  // required?
      toggleMark(editor, HOTKEYS[hotkey]);
    }
  };

  const makeClientCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, imageRef.current, crop, "newFile.jpeg"
    );
    const thumb = await getCroppedImage(
      100, 62, imageRef.current, crop, "newFile.jpeg"
    );
    if (!full || !thumb) return;
    setCropFullSizePreview(full.resizedPreview);
    setCropThumbSizePreview(thumb.resizedPreview);
    setFullContentImage(full.resizedFinal);
    setThumbContentImage(thumb.resizedFinal);
  };

  const cancelContentImage = () => {
    setCropFullSizePreview("");
    setCropThumbSizePreview("");
    setContentImage(null);
    setFullContentImage(null);
    setThumbContentImage(null);
  };

  const handleSave = () => {
    if (editing && editingId) {

      const editingContentInfo = {
        contentId: editingId,
        contentTypeId,
        published,
        title,
        contentItems: value,
        prevContentImage,
        contentImage,
        fullContentImage,
        thumbContentImage
      };

      if (staffIsAuthenticated) staffEditContent(editingContentInfo);
      else userEditContent(editingContentInfo);

    } else {

      const creatingContentInfo = {
        contentTypeId,
        published: saveType,
        title,
        contentItems: value,
        contentImage,
        fullContentImage,
        thumbContentImage
      };

      if (staffIsAuthenticated) staffCreateNewContent(creatingContentInfo);
      else userCreateNewContent(creatingContentInfo);

    }
  };

  return loading
  ? <LoaderSpinner />
  : (
    <div className={`new-content ${oneColumnATheme}`}>

      <h1 className="new-content__heading">New Content</h1>

      <p className="new-content__feedback">{feedback}</p>

      <button className="new-content__save-button" onClick={handleSave}>
        Save
      </button>

      {staffIsAuthenticated && (
        <div className="new-content-section-content-type">
          <h2
            className="new-content-heading-two"
            data-test="content-type-heading"
          >
            Type of Content
          </h2>
          <select
            name="contentType"
            id="content_type_id"
            required
            onChange={handleContentTypeChange}
            value={contentTypeId}
          >
            <option value=""></option>
            {dataContentTypes.map(contentType => (
              <option
                key={contentType.content_type_id}
                value={contentType.content_type_id}
                data-test={contentType.content_type_name}
              >
                {contentType.content_type_name}
              </option>
            ))}
          </select>
        </div>
      )}

      <h2 className="new-content-heading-two" data-test="save-type-heading">
        Save Type
      </h2>
      <div className="save-type-spans">
        <span className="save-type-span">
          <input
            className="save-type-span-input"
            type="radio"
            name="draft"
            checked={published === null}
            onChange={handleSaveTypeChange}
            value="draft"
            //disabled={true}
          />
          <label className="save-type-span-label">Draft</label>
        </span>
        <span className="save-type-span">
          <input
            className="save-type-span-input"
            type="radio"
            name="publish"
            checked={published !== null}
            onChange={handleSaveTypeChange}
            value="publish"
            //disabled={true}
          />
          <label className="save-type-span-label">Publish</label>
        </span>
      </div>
      
      <Slate
        editor={editor}
        value={value}
        onChange={handleChange}
      >
        <Toolbar className="toolbar">
          <MarkButton format="bold" icon="bold" />
          <MarkButton format="italic" icon="italic" />
          <BlockButton format="heading-one" icon="h1" />
          <BlockButton format="heading-two" icon="h2" />
          <LinkButton />
          <InsertImageButton />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
          onKeyDown={handleKeyDown}
          placeholder="COOK EAT WIN REPEAT"
        />
      </Slate>
    </div>
  );
}

interface RootState {
  data: {
    contentTypes: IContentType[];
  };
  editor: {
    creating: boolean;
    editingId: number | null;
    value: Node[];
  };
  auth: {
    staffIsAuthenticated: boolean;
  };
  staff: {
    message: string;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
  dataContentTypes: state.data.contentTypes,
  creating: state.editor.creating,
  editingId: state.editor.editingId,
  value: state.editor.value,
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  staffMessage: state.staff.message,
  userMessage: state.user.message
});

const mapDispatchToProps = {
  editorClearWork: () => editorClearWork(),
  editorSetCreating: () => editorSetCreating(),
  editorSetEditingId: (id: number) => editorSetEditingId(id),
  editorSetValue: (value: Node[]) => editorSetValue(value),
  staffCreateNewContent: (contentInfo: ICreatingContentInfo) =>
    staffCreateNewContent(contentInfo),
  staffEditContent: (contentInfo: IEditingContentInfo) =>
    staffEditContent(contentInfo),
  userCreateNewContent: (contentInfo: ICreatingContentInfo) =>
    userCreateNewContent(contentInfo),
  userEditContent: (contentInfo: IEditingContentInfo) =>
    userEditContent(contentInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewContent);