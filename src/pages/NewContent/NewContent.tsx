import axios from 'axios';
import isHotKey from 'is-hotkey';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { Crop } from 'react-image-crop';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';

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
  staffCreateNewContent,
  staffEditContent
} from '../../store/staff/content/actions';
import {
  userCreateNewContent,
  userEditContent
} from '../../store/user/content/actions';
import {
  ICreatingContentInfo,
  IEditingContentInfo
} from '../../store/user/content/types';
import {
  getCroppedImage
} from '../../utils/imageCropPreviews/imageCropPreviews';
import { Element, Leaf } from './components/index';
import { toggleMark, withLinks } from './helpers';
import { NewContentView } from './NewContentView';

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
  creating,
  dataContentTypes,
  editing,
  editingId,
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue,
  oneColumnATheme,
  staffCreateNewContent,
  staffEditContent,
  staffIsAuthenticated,
  staffMessage,
  userCreateNewContent,
  userEditContent,
  userMessage,
  value
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ contentTypeId, setContentTypeId ] = useState<number>(0);
  const [ published, setPublished ] = useState<string | null>(null);
  const [ saveType, setSaveType ] = useState("draft");
  const [ title, setTitle ] = useState("");
  const [ prevImage, setPrevImage ] = useState("nobsc-content-default");
  const [ image, setImage ] = useState<string | ArrayBuffer | null>(null);
  const [ fullImage, setFullImage ] = useState<File | null>(null);
  const [ thumbImage, setThumbImage ] = useState<File | null>(null);

  const [ crop, setCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ fullCrop, setFullCrop ] = useState("");
  const [ thumbCrop, setThumbCrop ] = useState("");

  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingContentToEdit = async () => {
      if (!id) {
        const redirectPath = staffIsAuthenticated
          ? '/staff-dashboard' : '/dashboard';
        history.push(redirectPath);
        return;
      }

      window.scrollTo(0,0);
      setLoading(true);

      const url = staffIsAuthenticated
        ? `${endpoint}/staff/content/edit` : `${endpoint}/user/content/edit`;

      const { data } = await axios.post(url, {}, {withCredentials: true});

      if (data) {
        editorSetEditingId(Number(data.content_id));
        editorSetValue(data.content_items);
        setPrevImage(data.content_image)
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
        ? '/staff-dashboard' : '/dashboard';

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

  const editor =
    useMemo(() => withHistory(withLinks(withReact(createEditor()))), []);

  const cancelImage = () => {
    setFullCrop("");
    setThumbCrop("");
    setImage(null);
    setFullImage(null);
    setThumbImage(null);
  };

  const handleEditorChange = (value: Node[]) => editorSetValue(value);

  const handleContentTypeChange = (e: React.SyntheticEvent<EventTarget>) =>
    setContentTypeId(Number((e.target as HTMLInputElement).value));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    for (const hotkey in HOTKEYS) {
      if (!isHotKey(hotkey)(e as unknown as KeyboardEvent)) continue;
      e.preventDefault();  // required?
      toggleMark(editor, HOTKEYS[hotkey]);
    }
  };

  const handleSubmit = () => {
    // TO DO: validate

    if (editing && editingId) {

      const editingContentInfo = {
        id: editingId,
        contentTypeId,
        published,
        title,
        items: value,
        prevImage,
        image,
        fullImage,
        thumbImage
      };

      if (staffIsAuthenticated) staffEditContent(editingContentInfo);
      else userEditContent(editingContentInfo);

    } else {

      const creatingContentInfo = {
        contentTypeId,
        published: saveType,
        title,
        items: value,
        image,
        fullImage,
        thumbImage
      };

      if (staffIsAuthenticated) staffCreateNewContent(creatingContentInfo);
      else userCreateNewContent(creatingContentInfo);

    }
  };

  const handleSaveTypeChange = (e: React.SyntheticEvent<EventTarget>) =>
    setSaveType((e.target as HTMLInputElement).name);

  const makeCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;

    const full =
      await getCroppedImage(280, 172, imageRef.current, crop, "newFile.jpeg");

    const thumb =
      await getCroppedImage(100, 62, imageRef.current, crop, "newFile.jpeg");

    if (!full || !thumb) return;

    setFullCrop(full.resizedPreview);
    setThumbCrop(thumb.resizedPreview);
    setFullImage(full.resizedFinal);
    setThumbImage(thumb.resizedFinal);
  };

  const onCropChange = (crop: Crop) => setCrop(crop);

  const onCropComplete = (crop: Crop) => makeCrops(crop);

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => setImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <NewContentView
      cancelImage={cancelImage}
      contentTypeId={contentTypeId}
      crop={crop}
      dataContentTypes={dataContentTypes}
      editor={editor}
      feedback={feedback}
      handleContentTypeChange={handleContentTypeChange}
      handleEditorChange={handleEditorChange}
      handleKeyDown={handleKeyDown}
      handleSubmit={handleSubmit}
      handleSaveTypeChange={handleSaveTypeChange}
      loading={loading}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      oneColumnATheme={oneColumnATheme}
      onImageLoaded={onImageLoaded}
      onSelectFile={onSelectFile}
      prevImage={prevImage}
      published={published}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      staffIsAuthenticated={staffIsAuthenticated}
      value={value}
    />
  );
}

interface RootState {
  auth: {
    staffIsAuthenticated: boolean;
  };
  data: {
    contentTypes: IContentType[];
  };
  editor: {
    creating: boolean;
    editingId: number | null;
    value: Node[];
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
  editing: boolean;
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  creating: state.editor.creating,
  dataContentTypes: state.data.contentTypes,
  editingId: state.editor.editingId,
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  staffMessage: state.staff.message,
  userMessage: state.user.message,
  value: state.editor.value,
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