export const getCroppedFullImage = async (image, crop, fileName) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = 280;
  canvas.height = 172;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    280,
    172
  );

  const resizedFullPreview = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, 'image/jpeg', 1);
  });

  const resizedFullFinal = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const image = new File([blob], "fullFinal", {type: "image/jpeg"});
      resolve(image);
    }, 'image/jpeg', 1);
  });

  return {resizedFullPreview, resizedFullFinal};
};



export const getCroppedThumbImage = async (image, crop, fileName) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = 100;
  canvas.height = 62;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    100,
    62
  );

  const resizedThumbPreview = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, 'image/jpeg', 1);
  });

  const resizedThumbFinal = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const image = new File([blob], "thumbFinal", {type: "image/jpeg"});
      resolve(image);
    }, 'image/jpeg', 1);
  });

  return {resizedThumbPreview, resizedThumbFinal};
};



export const getCroppedTinyImage = async (image, crop, fileName) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = 28;
  canvas.height = 18;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    28,
    18
  );

  const resizedTinyPreview = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, 'image/jpeg', 1);
  });

  const resizedTinyFinal = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const image = new File([blob], "tinyFinal", {type: "image/jpeg"});
      resolve(image);
    }, 'image/jpeg', 1);
  });

  return {resizedTinyPreview, resizedTinyFinal};
};