import React from 'react';
import axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';

const RecipeImagesUploader = props => {
  const getUploadParams = async ({ meta: { type } }) => {
    const {
      signedRequest,
      fileUrl,
      uploadUrl
    } = await axios.post(
      `${NOBSCBackendAPIEndpointOne}/sign-s3-images-1`,
      {
        imageDir: props.imageDir,
        fileName: props.imageName,
        fileType: type
      }
    );
    return {
      signedRequest,
      meta: {
        fileUrl
      },
      url: uploadUrl
    };
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onSubmit={handleSubmit}
      accept="image/jpg, image/jpeg, image/png"
      maxSizeBytes={200000}
      maxFiles={1}
      validate
      styles={{
        dropzone: {
          width: "280px",
          height: "174px",
          border: "1px solid #aaa",
          borderRadius: "2px",
          overflow: "hidden"
        },
        inputLabel: {
          color: "#68abe6",
          fontFamily: "'Play', sans-serif"
        },
        submitButton: {
          fontFamily: "'Play', sans-serif"
        }
      }}
    />
  );

}

export default RecipeImagesUploader;