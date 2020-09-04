import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

import { IWorkContent } from '../../../store/data/types';

export function Content({
  activateModal,
  content,
  creatingContent,
  deactivateModal,
  deleteName,
  editingId,
  getApplicationNode,
  handleDeleteContent,
  modalActive
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">

      <h2 className="staff-dashboard-content-heading">Content</h2>

      <Link className="create-new-entity" to="/staff-content/submit">
        Create New Content
      </Link>

      {modalActive ? (
        <AriaModal
          dialogClass="content-delete-modal"
          focusDialog={true}
          focusTrapOptions={{returnFocusOnDeactivate: false}}
          getApplicationNode={getApplicationNode}
          onExit={deactivateModal}
          titleText="Cancel?"
          underlayClickExits={false}
        >
          <p className="content-delete-prompt">
            {'Delete Content: '}{deleteName}{' ?'}
          </p>
          <button
            className="content-delete-cancel-button"
            onClick={deactivateModal}
          >
            No
          </button>
          <button
            className="content-delete-button"
            onClick={handleDeleteContent}
          >
            Yes, Delete Content
          </button>
        </AriaModal>
      ) : false}

      {content && content.map(c => (
        <div className="staff-dashboard-content-item" key={c.id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/content/${c.id}`}>{c.title}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/staff-content/edit/${c.id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => activateModal(c.id, c.title)}
          >
            Delete
          </span>
        </div>
      ))}

    </div>
  );
}

type Props = {
  activateModal(id: number, name: string): void;
  content: IWorkContent[];
  creatingContent: boolean;
  deactivateModal(): void;
  deleteName: string;
  editingId: number | null;
  getApplicationNode(): Element | Node;
  handleDeleteContent(): void;
  modalActive: boolean;
};