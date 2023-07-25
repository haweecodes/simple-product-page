export interface ImageItem {
    index: number;
    thumbnail_link: string;
    url_link: string;
}
export interface ImageGalleryProps {
    images: ImageItem[];
    propKey: keyof ImageItem;
}
