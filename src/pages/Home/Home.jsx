import { useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import OurPartnersCarousel from "./OurPartnersCarousel";
import OfferCard from "./OfferCard";
import AnnouncementsEvents from "./AnnouncementsEvents";
import CardCountdown from "./CardCountdown";
import CardLink from "./CardLink";
import cardLists from "./CardLinkLists";
import CardSC from "./CardSC";
import cardSCLists from "./CardSCLists";
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";

export default function Home() {
    return (
        <>
            <Carousel>
                <div className="w-full h-[450px]">
                    <img
                        src="https://msunaawan.edu.ph/icorfasa2024/wp-content/uploads/2024/03/ICORFASA_Website-Banner.gif"
                        alt="image 1"
                        className="h-full w-full object-fit sm:object-cover"
                    />
                    <div className="absolute inset-0 grid place-items-center ">
                        <div className="w-full md:w-full px-[5%]">
                            <div className="flex justify-start gap-2">
                                <Button
                                    size="lg"
                                    color="white"
                                    bg="#016575"
                                    style={{
                                        backgroundColor: "#016575",
                                        color: "#fff",
                                    }}
                                >
                                    Click to Visit the Website
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/a5dbe66ab2500bc51e6794acd698d12d/MSUN_Website-Banner_Jan-15.png"
                    alt="image 2"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/2a905429e199b0967738902f6e7243a2/MSUN_Website-Banner_MSUN-IDS.jpg"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/9faa96ab9545e6a6803aac1916df4cac/MSUN_Website-Banner_LET.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/053669a2a7c6c2f8d1a25c5cf566d9d4/MSUN_Website-Banner_CPAs.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/c3adfcce7455a864052e8fa56cf36584/13.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/489856a6877da5c6355693691af8b631/MSUN_Website-Banner_futures-thinking.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/018218edf5a834c4949c5e916fcf7ff3/FOR-SLIDERS.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
                <img
                    src="https://msunaawan.edu.ph/wp-content/uploads/slider/cache/60f68b88b4b57823579bdedeac9547c1/CALL-FOR-PAPERS.png"
                    alt="image 3"
                    className="h-full w-full object-fit sm:object-cover"
                />
            </Carousel>
            <section className="container my-24">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-10 sm:gap-2">
                    <CardCountdown text="Days" />
                    <CardCountdown text="Hours" />
                    <CardCountdown text="Minutes" />
                    <CardCountdown text="Seconds" />
                </div>
                <Typography
                    variant="h3"
                    className="text-primary text-center mb-10"
                >
                    before Graduation Day!
                </Typography>
            </section>

            <section className="container ">
                <div className="grid md:grid-cols-3 md:gap-10 sm:gap-2 md:mt-20">
                    {cardLists.map((list) => (
                        <CardLink
                            key={list.title}
                            title={list.title}
                            icon={list.icon}
                        >
                            {list.lists.map((listData, index) => (
                                <ul key={index} className="list-disc mx-2">
                                    <li>
                                        <Typography variant="small">
                                            <a href="#">{listData.list}</a>
                                        </Typography>
                                    </li>
                                </ul>
                            ))}
                        </CardLink>
                    ))}
                </div>
            </section>

            <section className="container my-10">
                <Typography variant="h4" className="text-primary text-center">
                    School and Colleges
                </Typography>
                <div className="mt-10">
                    <div className="grid md:grid-cols-3 gap-4">
                        {cardSCLists.map((school, index) => {
                            return (
                                <CardSC
                                    key={index}
                                    school={school.school}
                                    image={school.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="container my-10">
                <div className="md:flex md:flex-row">
                    <div className="md:basis-2/3 basis-full">
                        <Typography variant="h4" className="text-primary">
                            News and Updates
                        </Typography>
                        <div className="flex flex-row">
                            <div className="basis-1/2 pr-5">
                                <CardPrimary />
                            </div>
                            <div className="md:basis-1/2 basis-full">
                                <div className="grid grid-rows-3 grid-flow-col gap-4 mt-4">
                                    <div>
                                        <CardSecondary />
                                    </div>
                                    <div>
                                        <CardSecondary />
                                    </div>
                                    <div>
                                        <CardSecondary />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Typography variant="h4" className="text-primary mb-6">
                            Follow us on Facebook
                        </Typography>
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMSUNAAWANPH&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            className="w-full h-[500px]"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="container my-10">
                <Typography variant="h4" className="text-primary mb-7">
                    Announcements and Events
                </Typography>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5">
                    <div>
                        <AnnouncementsEvents
                            title="CET RESULTS ARE OUT!"
                            image="https://msunaawan.edu.ph/wp-content/uploads/2024/07/CET-results-150x150.png"
                            date="July 19, 2024"
                            time="1:48 PM"
                            category="Announcements"
                        />
                        <AnnouncementsEvents
                            title="CONFIRMED: BACHELOR OF SCIENCE IN NURSING IN MSUN STARTING SY 2024-2025"
                            image="https://msunaawan.edu.ph/wp-content/uploads/2024/06/MSUN-Pubmat-for-BSN-150x150.png"
                            date="June 10, 2024"
                            time="1:14 PM"
                            category="Announcements"
                        />
                    </div>
                    <div>
                        <AnnouncementsEvents
                            title="PRE-ADMISSION FOR INCOMING FIRST YEAR AND TRANSFEREE STUDENTS FOR SY 2024-2025"
                            image="https://msunaawan.edu.ph/wp-content/uploads/2024/07/Pre-Admission-2024-Undergraduate-Programs-150x150.png"
                            date="July 14, 2024"
                            time="2:28 PM"
                            category="Announcements"
                        />
                        <AnnouncementsEvents
                            title="Declaration of March 25 to 29, 2024, as Academic Break"
                            image="https://msunaawan.edu.ph/wp-content/uploads/2024/03/431151348_973851727504463_4629306927681888060_n-150x150.png"
                            date="July 19, 2024"
                            time="10:00 AM"
                            category="Announcements"
                        />
                    </div>
                    <div className="bg-white p-10 rounded-xl">
                        <div className="border-b-2 border-primary pb-1">
                            <Typography
                                variant="h5"
                                className="text-primary font-normal"
                            >
                                Bids and Awards
                            </Typography>
                        </div>
                        <ul className="my-5">
                            <li className="my-1 text-sm">
                                Request for Quotation
                            </li>
                            <li className="my-1 text-sm">Invitation to Bid</li>
                            <li className="my-1 text-sm">Notice of Award</li>
                            <li className="my-1 text-sm">Notice to Proceed</li>
                        </ul>
                        <div className="border-b-2 border-primary pb-1 pt-3">
                            <Typography
                                variant="h5"
                                className="text-primary font-normal"
                            >
                                Examination Results
                            </Typography>
                        </div>
                        <ul className="my-5">
                            <li className="my-1 text-sm">Senior High School</li>
                            <li className="my-1 text-sm">
                                Integrated Development School
                            </li>
                            <li className="my-1 text-sm">SASE/CET</li>
                            <li className="my-1 text-sm">Board Passers</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container my-10">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-5">
                    <OfferCard
                        title="Scholarship Programs"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/scholarships-300x200.png"
                    />
                    <OfferCard
                        title="Campus Life"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/dance-300x200.jpg"
                    />
                    <OfferCard
                        title="Facilities"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/IMG_0412-300x200.jpg"
                    />
                    <OfferCard
                        title="Publications"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/publication-e1679635377851-300x250.png"
                    />
                    <OfferCard
                        title="Research Centers"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/IMG_4732-300x200.jpg"
                    />
                    <OfferCard
                        title="Downloads"
                        image="https://msunaawan.edu.ph/wp-content/uploads/2023/03/PDF-download-icon-300x296.png"
                    />
                </div>
            </section>
            <section className="container my-10">
                <Typography
                    variant="h4"
                    className="text-primary text-center mb-7"
                >
                    Our Partners
                </Typography>
                <OurPartnersCarousel />
            </section>
        </>
    );
}
