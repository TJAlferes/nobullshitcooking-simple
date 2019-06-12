import React, { Component } from 'react';
import axios from 'axios';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/react/lib/Dashboard';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

class RecipeImagesUploader extends Component {
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
      onBeforeFileAdded(currentFile, files) {
        const modifiedFile = Object.assign(
          {},
          currentFile,
          {name: currentFile + Date.now()}
        );
        return modifiedFile;
      }
    })
    .use(Dashboard, {
      width: 840,
      height: 520,
      thumbnailWidth: 280
    })
    .use(AwsS3, {
      getUploadParameters(file) {
        return axios.post('/sign-s3-images-1', {
          filename: file.name,
          contentType: file.type
        })
        .then(res => ({
          method: res.data.method,
          url: res.data.url,
          fields: res.data.fields
        }));
      }
    });
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    return <Dashboard uppy={this.uppy} />;
  }
}

export default RecipeImagesUploader;