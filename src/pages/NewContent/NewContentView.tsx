import React from 'react';
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import { Node } from 'slate';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate
} from 'slate-react';

import { LoaderSpinner } from '../../components/LoaderSpinner/LoaderSpinner';
import { IContentType } from '../../store/data/types';
import {
  BlockButton,
  InsertImageButton,
  LinkButton,
  MarkButton,
  Toolbar
} from './components/index';

export function NewContentView({
  cancelImage,
  contentTypeId,
  crop,
  dataContentTypes,
  editor,
  feedback,
  handleContentTypeChange,
  handleEditorChange,
  handleKeyDown,
  handleSubmit,
  handleSaveTypeChange,
  loading,
  onCropChange,
  onCropComplete,
  oneColumnATheme,
  onImageLoaded,
  onSelectFile,
  prevImage,
  published,
  renderElement,
  renderLeaf,
  staffIsAuthenticated,
  value
}: Props): JSX.Element {
  return loading
  ? <LoaderSpinner />
  : (
    <div className={`new-content ${oneColumnATheme}`}>

      <h1 className="new-content__heading">New Content</h1>

      <p className="new-content__feedback">{feedback}</p>

      <button className="new-content__save-button" onClick={handleSubmit}>
        Save
      </button>

      {staffIsAuthenticated && (
        <>
          <h2 className="new-content__h2" data-test="content-type-heading">
            Type of Content
          </h2>
          <select
            id="content_type_id"
            name="contentType"
            onChange={handleContentTypeChange}
            required
            value={contentTypeId}
          >
            <option value=""></option>
            {dataContentTypes.map(c => (
              <option data-test={c.name} key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </>
      )}

      <h2 className="new-content__h2" data-test="save-type-heading">
        Save Type
      </h2>
      <div className="save-type-spans">
        <span className="save-type-span">
          <input
            checked={published === null}
            className="save-type-span-input"
            //disabled={true}
            name="draft"
            onChange={handleSaveTypeChange}
            type="radio"
            value="draft"
          />
          <label className="save-type-span-label">Draft</label>
        </span>
        <span className="save-type-span">
          <input
            checked={published === null}
            className="save-type-span-input"
            //disabled={true}
            name="publish"
            onChange={handleSaveTypeChange}
            type="radio"
            value="publish"
          />
          <label className="save-type-span-label">Publish</label>
        </span>
      </div>
      
      <Slate editor={editor} onChange={handleEditorChange} value={value}>
        <Toolbar className="toolbar">
          <MarkButton format="bold" icon="bold" />
          <MarkButton format="italic" icon="italic" />
          <BlockButton format="heading-one" icon="h1" />
          <BlockButton format="heading-two" icon="h2" />
          <LinkButton />
          <InsertImageButton />
        </Toolbar>
        <Editable
          autoFocus
          onKeyDown={handleKeyDown}
          placeholder="COOK EAT WIN REPEAT"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
        />
      </Slate>
    </div>
  );
}

type Props = {
  cancelImage(): void;
  contentTypeId: number;
  crop: Crop;
  dataContentTypes: IContentType[];
  editor: any;  // finish
  feedback: string;
  handleContentTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  handleEditorChange(value: Node[]): void;
  handleKeyDown(e: React.KeyboardEvent): void;
  handleSubmit(): void;
  handleSaveTypeChange(e: React.SyntheticEvent<EventTarget>): void;
  loading: boolean;
  onCropChange(crop: Crop): void;
  onCropComplete(crop: Crop): void;
  oneColumnATheme: string;
  onImageLoaded(image: HTMLImageElement): void;
  onSelectFile(e: React.ChangeEvent<HTMLInputElement>): void;
  prevImage: string;
  published: string | null;
  renderElement(props: RenderElementProps): JSX.Element;
  renderLeaf(props: RenderLeafProps): JSX.Element;
  staffIsAuthenticated: boolean;
  value: Node[];
};