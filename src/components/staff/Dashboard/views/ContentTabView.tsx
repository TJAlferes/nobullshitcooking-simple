import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

import { IWorkContent } from '../../../../store/data/types';

export function ContentTabView({
  deleteContentModalActive,
  deactivateDeleteContentModal,
  getApplicationNode,
  deleteContentName,
  handleDeleteContent,
  content,
  activateDeleteContentModal
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">

      <h2 className="staff-dashboard-content-heading">Official Content</h2>

      <Link className="create-new-entity" to="/staff-content/submit">
        Create New Content
      </Link>

      {deleteContentModalActive ? (
        <AriaModal
          dialogClass="content-delete-modal"
          titleText="Cancel?"
          onExit={deactivateDeleteContentModal}
          focusDialog={true}
          getApplicationNode={getApplicationNode}
          focusTrapOptions={{returnFocusOnDeactivate: false}}
          underlayClickExits={false}
        >
          <p className="content-delete-prompt">
            {'Delete Content: '}{deleteContentName}{' ?'}
          </p>
          <button
            className="content-delete-cancel-button"
            onClick={deactivateDeleteContentModal}
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

      {content.map(con => (
        <div className="staff-dashboard-content-item" key={con.content_id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/content/${con.content_id}`}>{con.title}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/staff-content/edit/${con.content_id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => activateDeleteContentModal(con.content_id, con.title)}
          >
            Delete
          </span>
        </div>
      ))}

    </div>
  );
}

type Props = {
  deleteContentModalActive: boolean;
  deactivateDeleteContentModal(): void;
  getApplicationNode(): Element | Node;
  deleteContentName: string;
  handleDeleteContent(): void;
  content: IWorkContent[];
  activateDeleteContentModal(id: number, name: string): void;
};