import * as imageService from '../services/image.service.js';

const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const serializeImage = (image) => ({
    imageId: image._id,
    fileName: image.fileName,
    mimeType: image.mimeType,
    createdAt: image.createdAt,
    dataUrl: `data:${image.mimeType};base64,${image.imageData.toString('base64')}`,
});

export const uploadImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No PNG image uploaded.' });
        }

        if (!req.file.buffer.subarray(0, pngSignature.length).equals(pngSignature)) {
            return res.status(400).json({ success: false, message: 'The uploaded file is not a valid PNG image.' });
        }

        const image = await imageService.saveImage(
            req.file.originalname,
            req.file.buffer
        );

        return res.status(201).json({ success: true, data: serializeImage(image) });
    } catch (error) {
        next(error);
    }
};

export const listImages = async (req, res, next) => {
    try {
        const images = await imageService.getImages();
        return res.json({ success: true, data: images.map(serializeImage) });
    } catch (error) {
        next(error);
    }
};