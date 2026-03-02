export default function cloudinaryLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    // If it's already a Cloudinary URL, we can optimize it
    if (src.includes('res.cloudinary.com')) {
        // Split the URL to insert transformations
        // URL format: https://res.cloudinary.com/cloud_name/image/upload/v1234567/public_id.jpg
        const parts = src.split('/upload/');
        if (parts.length === 2) {
            const params = [
                `w_${width}`,
                'c_limit',
                `q_${quality || 'auto'}`,
                'f_auto',
            ];
            return `${parts[0]}/upload/${params.join(',')}/${parts[1]}`;
        }
    }
    // Return original src if not a standard Cloudinary URL or transformation failed
    return src;
}
