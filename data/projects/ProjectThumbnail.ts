/**
 * An interface for a project thumbnail, consisting of a title, a link
 * to an image, and a description.
 */
export default interface ProjectThumbnail {
    title: string;
    image: string;
    description: string;
    link: string;
    tags: string[];
}