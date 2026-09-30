import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
    {
        fileName: {
            type: String,
            required: true,
        },
        mimeType: {
            type: String,
            enum: ['image/png'],
            default: 'image/png',
        },
        imageData: {
            type: Buffer,
            required: true,
        },
    },
    { timestamps: true }
);

const Image = mongoose.model('Image', imageSchema);
export default Image;