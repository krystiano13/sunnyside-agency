import imageEmily from '../assets/images/image-emily.jpg';
import imageJennie from '../assets/images/image-jennie.jpg';
import imageThomas from '../assets/images/image-thomas.jpg';

type testimonial = {
    img: ImageMetadata;
    alt: string;
    text: string;
    name: string;
    job: string;
}

export const testimonialsData: testimonial[] = [
    {
        img: imageEmily,
        alt: 'Emily',
        text: 'We put our trust on Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        name: 'Emily R.',
        job: "Marketing Director"
    },
    {
        img: imageThomas,
        alt: "Thomas",
        text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",
        name: "Thomas S.",
        job: "Chief Operating Officer"
    },
    {
        img: imageJennie,
        alt: "Jennie",
        text: "Incredible end result! Our sales increase over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        job: "Business Owner"
    },
];