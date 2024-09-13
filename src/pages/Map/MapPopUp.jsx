import {
    ArrowTopRightOnSquareIcon,
    BuildingOffice2Icon,
    CalendarDaysIcon,
    IdentificationIcon,
    MapPinIcon,
} from "@heroicons/react/16/solid";
import { Button, Typography } from "@material-tailwind/react";
import CarouselComponent from "../../componenets/CarouselComponent";

const MapPopUp = ({ locations }) => {
    const locationCoords = `https://www.google.com/maps/dir/?api=1&destination=${locations.coords[0][0]},${locations.coords[0][1]}`;

    return (
        <div className="grid grid-cols-1 pr-4">
            <section className="text-center ">
                <img src={locations.image} alt={locations.title} />
                <Typography variant="h4" className="mt-5 mb-3">
                    {locations.title}
                </Typography>
                <div className="grid grid-cols-2 gap-4 ">
                    <a href={locationCoords} target="_blank">
                        <Button className="flex gap-2 justify-center w-full">
                            <MapPinIcon className="h-4 w-4" />
                            Navigate
                        </Button>
                    </a>
                    <a
                        href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                        target="_blank"
                    >
                        <Button className="flex gap-2 justify-center w-full">
                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            View Page
                        </Button>
                    </a>
                </div>
            </section>

            <Typography variant="small">
                {locations.description.length > 150
                    ? `${locations.description.substring(0, 150)} ...`
                    : locations.description}
            </Typography>

            <Typography variant="small">
                <a
                    href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                    target="_blank"
                >
                    <label className="flex gap-1 w-auto cursor-pointer">
                        Read More
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </label>
                </a>
            </Typography>

            <Typography variant="h6" className="w-full mt-2 flex gap-2 px-3">
                <CalendarDaysIcon className="w-6 h-6" />
                Event
            </Typography>
            {locations.event.length > 0 && (
                <CarouselComponent>
                    {locations.event.map((event, key) => {
                        return (
                            <section
                                className="flex flex-row border-solid border-gray border-2 "
                                key={key}
                            >
                                <div className="basis-1/3 bg-black p-2 align-center content-center">
                                    <Typography
                                        variant="h5"
                                        className="text-center p-1 text-white "
                                    >
                                        {event.time}
                                    </Typography>
                                </div>
                                <div className="basis-2/3">
                                    <div className="p-2">
                                        {/* <div className="flex float-end">
                                            <a
                                                href={event.link}
                                                target="_blank"
                                            >
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4 m-2" />
                                            </a>
                                        </div> */}
                                        <Typography
                                            variant="h6"
                                            className="mt-1 mb-3"
                                        >
                                            <a
                                                href={event.link}
                                                target="_blank"
                                                className="!text-gray-900 hover:!text-gray-700"
                                            >
                                                {event.title.length > 30
                                                    ? `${event.title.substring(
                                                          0,
                                                          30,
                                                      )} ...`
                                                    : event.title}
                                            </a>
                                        </Typography>

                                        <Typography
                                            variant="small"
                                            className=" mb-3"
                                        >
                                            {event.date}
                                        </Typography>
                                    </div>
                                </div>
                            </section>
                            // <section className="border-4 " key={key}>
                            //     <section>
                            //         <div className="flex float-end">
                            //             <a href={event.link} target="_blank">
                            //                 <ArrowTopRightOnSquareIcon className="h-5 w-5 m-2" />
                            //             </a>
                            //         </div>
                            //         <div className="grid px-3">
                            //
                            //             <div className="flex gap-3">
                            //                 <Typography
                            //                     variant="small"
                            //                     className="!-mt-3 mb-3"
                            //                 >
                            //                     {event.date}
                            //                 </Typography>
                            //                 <Typography
                            //                     variant="small"
                            //                     className="!-mt-3 mb-3"
                            //                 >
                            //                     |
                            //                 </Typography>
                            //                 <Typography
                            //                     variant="small"
                            //                     className="!-mt-3 mb-3"
                            //                 >
                            //                     {event.time}
                            //                 </Typography>
                            //             </div>
                            //         </div>
                            //     </section>
                            // </section>
                        );
                    })}
                </CarouselComponent>
            )}
            <hr className="border-solid my-5" />

            <div className="flex">
                <Typography
                    variant="h6"
                    className="w-full mt-5 flex gap-2 px-3"
                >
                    <IdentificationIcon className="w-6 h-6" />
                    Contact Information
                </Typography>
            </div>
            <div className="border-4 my-3">
                <div className="grid px-3">
                    <Typography variant="h6" className="mt-1 mb-3">
                        Contact Number:
                    </Typography>
                    <Typography variant="small" className="!-mt-3">
                        {locations.contactInformation.phone}
                    </Typography>
                </div>

                <div className="grid px-3 !-mt-4">
                    <Typography variant="h6" className="mt-1 mb-3">
                        Email:
                    </Typography>
                    <Typography variant="small" className="!-mt-3 mb-3">
                        {locations.contactInformation.email}
                    </Typography>
                </div>
            </div>

            <div className="flex">
                <Typography
                    variant="h6"
                    className="w-full mt-5 flex gap-2 px-3"
                >
                    <BuildingOffice2Icon className="w-6 h-6" />
                    Status
                </Typography>
            </div>
            <div className="border-4 my-3">
                <div className="grid px-3">
                    <Typography variant="h6" className="mt-1 mb-3">
                        {locations.status}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default MapPopUp;
