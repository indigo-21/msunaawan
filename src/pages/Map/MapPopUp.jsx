import {
    ArrowTopRightOnSquareIcon,
    BuildingOffice2Icon,
    CalendarDateRangeIcon,
    CalendarDaysIcon,
    IdentificationIcon,
    MapPinIcon,
} from "@heroicons/react/16/solid";
import {
    Drawer,
    Typography,
    IconButton,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function MapPopUp({
    openBottom,
    closeDrawerBottom,
    mapData,
    image,
    isImageLoading,
}) {
    const {
        Title,
        Description,
        Coordinates,
        Status,
        ContactNumber,
        EmailAddress,
    } = mapData;
    const [imgSrc, setImgSrc] = useState(
        `${import.meta.env.VITE_MAIN_URL}${image}`,
    );

    const arrayOfCoordinates =
        Coordinates &&
        Coordinates.split("\n").map((item) =>
            item.split(",").map((coord) => coord.trim()),
        );

    const locationCoords = `https://www.google.com/maps/dir/?api=1&destination=${arrayOfCoordinates[0][0]},${arrayOfCoordinates[0][1]}`;

    // let imageUrl = `${import.meta.env.VITE_MAIN_URL}${image}`;

    // if (image && typeof image === "string" && image.includes("blob:")) {
    //     imageUrl = image; // The image is a Blob URL
    // }
    const handleError = useEffect(() => {
        // Set a fallback image when the main image fails to load
        setImgSrc(`${image}`); // Replace with your fallback image path
    }, [image]);

    return (
        <Drawer
            placement="bottom"
            open={openBottom}
            onClose={closeDrawerBottom}
            size={400}
            className="border-t-2 border-black"
            overlay={false}
        >
            <div className="absolute right-0 z-50">
                <div className="p-4">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                        className="bg-blue-gray-100 hover:bg-blue-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
            </div>
            <div className="mb-6 flex overflow-auto lg:overflow-hidden h-full lg:p-0 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense gap-5 ">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {isImageLoading ? (
                            <div className="animate-pulse bg-gray-300 w-full h-full flex items-center justify-center">
                                <Spinner className="h-12 w-12 " />
                            </div>
                        ) : image ? (
                            <img
                                src={imgSrc}
                                alt={Title}
                                className="object-cover w-full h-full"
                                onError={handleError}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Typography
                                    variant="small"
                                    className="text-center"
                                >
                                    No Image Available
                                </Typography>
                            </div>
                        )}
                    </div>
                    <div className="py-5 px-2">
                        <div className="mb-5">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-3"
                            >
                                {Title}
                            </Typography>
                            <Typography variant="small" className="mb-10">
                                {Description.length > 600
                                    ? `${Description.substring(0, 600)} ...`
                                    : Description}
                            </Typography>
                            {/* <Typography variant="small" className="py-3">
                                <a
                                    href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                                    target="_blank"
                                >
                                    <label className="flex gap-1 w-auto cursor-pointer">
                                        Read More
                                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                    </label>
                                </a>
                            </Typography> */}
                        </div>
                        <div className="grid grid-cols gap-4">
                            <a href={locationCoords} target="_blank">
                                <Button className="flex gap-2 justify-center w-full bg-primary">
                                    <MapPinIcon className="h-4 w-4" />
                                    Navigate
                                </Button>
                            </a>
                            {/* <a
                                href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                                target="_blank"
                            >
                                <Button className="flex gap-2 justify-center w-full bg-primary">
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                    View Page
                                </Button>
                            </a> */}
                        </div>
                    </div>
                    <div className="mr-5 h-[400px] overflow-auto">
                        <div>
                            <Typography
                                variant="h6"
                                className="w-full mt-6 flex gap-2 px-3"
                            >
                                <CalendarDaysIcon className="w-6 h-6 text-primary" />
                                Event
                            </Typography>

                            {/* <CarouselComponent>
                                    {event.map((event, key) => {
                                        return (
                                            <section
                                                className="border-solid border-gray border-2 "
                                                key={key}
                                            >
                                                <div className="w-full p-2 align-center content-center bg-primary">
                                                    <Typography
                                                        variant="h5"
                                                        className="text-center p-1 text-white "
                                                    >
                                                        {event.time}
                                                    </Typography>
                                                </div>
                                                <div className="w-full">
                                                    <div className="p-2">
                                                        <Typography
                                                            variant="h6"
                                                            className="mt-1"
                                                        >
                                                            <a
                                                                href={
                                                                    event.link
                                                                }
                                                                target="_blank"
                                                                className="!text-gray-900 hover:!text-gray-700"
                                                            >
                                                                {event.title
                                                                    .length > 50
                                                                    ? `${event.title.substring(
                                                                          0,
                                                                          50,
                                                                      )} ...`
                                                                    : event.title}
                                                            </a>

                                                            <div className="flex gap-1">
                                                                <CalendarDateRangeIcon className="w-4 h-4 my-auto" />
                                                                <Typography variant="small">
                                                                    {event.date}
                                                                </Typography>
                                                            </div>
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </section>
                                        );
                                    })}
                                </CarouselComponent> */}

                            <section className="border-solid border-gray border-4 mt-3">
                                <div className="w-full">
                                    <div className="p-2">
                                        <Typography
                                            variant="h6"
                                            className="mt-1"
                                        >
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="!text-gray-900 hover:!text-gray-700"
                                            >
                                                No Event
                                            </a>
                                        </Typography>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="w-full pr-5">
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="w-full mt-6 flex gap-2 px-3"
                                >
                                    <IdentificationIcon className="w-6 h-6 text-primary" />
                                    Contact Information
                                </Typography>
                            </div>
                            <div className="border-4 my-3">
                                <div className="grid px-3">
                                    <Typography
                                        variant="h6"
                                        className="mt-1 mb-3"
                                    >
                                        Contact Number:
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="!-mt-3 "
                                    >
                                        {ContactNumber
                                            ? ContactNumber
                                            : "No Contact Number available"}
                                    </Typography>
                                </div>

                                <div className="grid px-3">
                                    <Typography
                                        variant="h6"
                                        className="mt-1 mb-3"
                                    >
                                        Email:
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="!-mt-3 mb-3 break-all text-sm md:text-base"
                                    >
                                        {EmailAddress
                                            ? EmailAddress
                                            : "No Email Address available"}
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="w-full mt-5 flex gap-2 px-3"
                                >
                                    <BuildingOffice2Icon className="w-6 h-6 text-primary" />
                                    Status
                                </Typography>
                            </div>
                            <div className="border-4 my-3">
                                <div className="grid px-3">
                                    <Typography
                                        variant="h6"
                                        className="mt-1 mb-3"
                                    >
                                        {Status}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}
