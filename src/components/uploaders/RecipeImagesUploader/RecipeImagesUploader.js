import React, { Component } from 'react';
import axios from 'axios';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/react/lib/Dashboard';
import AwsS3 from '@uppy/aws-s3';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

class RecipeImagesUploader extends Component {
  constructor(props) {
    super(props);
    this.uppy = new Uppy({
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
    .use(AwsS3, {
      id: "AwsS3",
      getUploadParameters(file) {
        return axios.post(`${endpoint}/sign-s3-images-1`, {
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
    /*.use(Dashboard, {
      id: "Dashboard",
      width: 840,
      height: 520,
      thumbnailWidth: 280
    });*/
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    return <Dashboard uppy={this.uppy} plugins={['AwsS3']} />;
  }
}

export default RecipeImagesUploader;