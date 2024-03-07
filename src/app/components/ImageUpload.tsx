'use client'

import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const ImageUpload = (props: any) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };

  return (
    <ImageUploader
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
      maxFileSize={5242880}
    />
  );
};

export default ImageUpload