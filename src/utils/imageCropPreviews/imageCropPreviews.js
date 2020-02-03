export const getCroppedImage = async (
  imageWidth,
  imageHeight,
  image,
  crop,
  fileName
) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    imageWidth,
    imageHeight
  );

  const resizedPreview = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, 'image/jpeg', 1);
  });

  const resizedFinal = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      blob.name = fileName;
      const image = new File([blob], "resizedFinal", {type: "image/jpeg"});
      resolve(image);
    }, 'image/jpeg', 1);
  });

  return {resizedPreview, resizedFinal};
};