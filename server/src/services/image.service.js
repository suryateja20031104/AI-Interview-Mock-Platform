import Image from '../models/Image.model.js';

export const saveImage = async (userId, fileName, imageData) => {
  return Image.create({ userId, fileName, imageData, mimeType: 'image/png' });
};

export const getUserImages = async (userId) => {
  return Image.find({ userId })
    .select('fileName mimeType imageData createdAt')
    .sort({ createdAt: -1 });
};