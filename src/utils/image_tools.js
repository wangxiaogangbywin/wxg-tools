import { saveAs } from 'file-saver';

/**
 * @param {string} url  http or base64
 * @param {string} name default name of image
 */
export const downloadImage = (url, name = 'downloadImage.png') => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    let canvas = document.createElement('CANVAS');
    const ctx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      saveAs(blob, name);
    });
    canvas = null;
  };
  img.src = url;
};

/**
 * @param {string} url
 * @param {function} callback
 */
export const urlToBase64 = (url, callback = () => {}) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    let canvas = document.createElement('CANVAS');
    const ctx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    const base64 = canvas.toDataURL('image/jpeg');
    callback(base64);
    canvas = null;
  };
  img.src = url;
};
