import image1 from '../assets/images/desktop/image-graphic-design.jpg';
import image2 from '../assets/images/desktop/image-photography.jpg';

type PhotoSection = {
    title: string;
    content: string;
    color: string;
    img: ImageMetadata;
    alt: string;
}

export const photoData: PhotoSection[] = [
    {
        title : "Graphic Design",
        content : "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention",
        color : "hsl(167, 40%, 24%)",
        img : image1,
        alt : "image 1"
    },

    {
        title : "Photography",
        content : "Increase your credibility by getting the most stunning, high quality photos, that improve your business image.",
        color : "hsl(198, 62%, 26%)",
        img : image2,
        alt : "image 2"
    },
];