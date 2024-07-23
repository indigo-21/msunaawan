import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IMAGES } from "./PartnerImages";
export default function OurPartnersCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 9,
        },
        tablet: {
            breakpoint: { max: 1119, min: 640 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel responsive={responsive} draggable={true} swipeable={true} infinite={true} autoPlay={true}>
            {IMAGES.map((image, index) => (
                <div key={index} className="bg-white rounded-full w-[120px] h-[120px] p-2 mx-auto">
					<a href={image.url} target="_blank">
						<img
							src={image.img}
							alt="{image.title}"
							className="m-auto object-center obejct-fit rounded-full"
						/>
					</a>
                </div>
            ))}
        </Carousel>
    );
}
