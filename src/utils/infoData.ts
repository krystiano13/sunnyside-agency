import egg from '../assets/images/desktop/image-transform.jpg';
import pink from '../assets/images/desktop/image-stand-out.jpg';

type info = {
    title: string;
    content: string;
    img: ImageMetadata;
    alt: string;
    color: string;
    flexDirection: string;
    id:string;
}

export const infoData:info[] = [
    {
        title: "Transform your brand",
        content: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you",
        color: "hsl(51, 100%, 49%)",
        flexDirection: "row",
        img: egg,
        alt: "egg image",
        id: "info1"
    },
    {
        title: "Stand out to the right audience",
        content: "Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places",
        color: "hsl(7, 99%, 70%)",
        flexDirection: "row-reverse",
        img: pink,
        alt: "pink image",
        id: "info1"
    },
]