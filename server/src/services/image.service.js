import Image from '../models/Image.model.js';

export const saveImage = async (fileName, imageData) => {
    return Image.create({ fileName, imageData, mimeType: 'image/png' });
};

export const getImages = async () => {
    return Image.find()
        .select('fileName mimeType imageData createdAt')
        .sort({ createdAt: -1 });
};