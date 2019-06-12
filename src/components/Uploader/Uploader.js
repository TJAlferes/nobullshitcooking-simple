import React, { Component } from 'react';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/react/lib/Dashboard';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.uppy = Uppy({
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: 999000,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ['.jpg', '.jpeg', '.png']
      },
      //meta: {},
      onBeforeFileAdded: function(currentFile, files) {
        const modifiedFile = Object.assign(
          {},
          currentFile,
          { name: currentFile + Date.now()}
        );
        return modifiedFile;
      },
      //onBeforeUpload: (files) => {},
      //locale: {},
      //store: new DefaultStore()
    });
    //.use();
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    return <Dashboard uppy={this.uppy} />;
  }
}

export default Uploader;