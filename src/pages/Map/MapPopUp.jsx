import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/16/solid";
import {
    Drawer,
    Typography,
    IconButton,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Coordinates as MapCenter } from "../../helpers/locationCenter";

export default function MapPopUp({
    openBottom,
    closeDrawerBottom,
    mapData,
    image,
    isImageLoading,
    setRoute,
    route
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
    const [isFetchingLocation, setIsFetchingLocation] = useState(false);

    const arrayOfCoordinates =
        Coordinates &&
        Coordinates.split("\n").map((item) =>
            item.split(",").map((coord) => coord.trim()),
        );

    const locationCenter = MapCenter(arrayOfCoordinates);

    // const locationCoords = `https://www.google.com/maps/dir/?api=1&destination=${arrayOfCoordinates[0][0]},${arrayOfCoordinates[0][1]}`;

    // let imageUrl = `${import.meta.env.VITE_MAIN_URL}${image}`;

    // if (image && typeof image === "string" && image.includes("blob:")) {
    //     imageUrl = image; // The image is a Blob URL
    // }
    const handleError = useEffect(() => {
        // Set a fallback image when the main image fails to load
        setImgSrc(`${image}`); // Replace with your fallback image path
    }, [image]);

    const handleNavigate = () => {
        setIsFetchingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setIsFetchingLocation(false);
                    const { latitude, longitude } = position.coords;
                    setRoute({
                        isActive: true,
                        start: [latitude, longitude],
                        end: [locationCenter[0], locationCenter[1]],
                    });
                },
                (error) => {
                    setIsFetchingLocation(false);
                    console.error("Error getting current location:", error);
                    // Handle error case here if needed
                },
            );
        } else {
            setIsFetchingLocation(false);
            console.log("Geolocation not supported");
        }
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         const { latitude, longitude } = position.coords;
        //         console.log(latitude, longitude);
        //         setRoute({
        //             isActive: true,
        //             start: [latitude, longitude],
        //             end: [arrayOfCoordinates[0][0], arrayOfCoordinates[0][1]],
        //         });
        //     },
        //     (error) => {
        //         console.error("Error getting current location:", error);
        //         // Handle error case here if needed
        //     },
        // );
    };

    const handleStopNavigation = () => {
        setRoute({
            isActive: false,
            start: [],
            end: [],
        });
    };

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
            <div className="overflow-auto h-full lg:p-0 p-20">
                <div className="lg:flex lg:flex-row md:flex-row md:flex gap-5 ">
                    <div className="lg:basis-auto md:basis-1/2 sm:basis-full">
                        <div className="grid grid-flow-col auto-cols-auto">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {isImageLoading ? (
                                    <div className="animate-pulse bg-gray-300 w-full h-full flex items-center justify-center">
                                        <Spinner className="h-12 w-12 " />
                                    </div>
                                ) : (
                                    image && (
                                        <img
                                            src={imgSrc}
                                            alt={Title}
                                            className="object-cover w-screen h-[400px] object-center"
                                            onError={handleError}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="lg:basis-auto md:basis-1/2 sm:basis-full">
                        <div className="py-5 px-2">
                            <div className="mb-5">
                                <Typography
                                    variant="h4"
                                    color="blue-gray"
                                    className="mb-3"
                                >
                                    {Title}
                                </Typography>
                                <Typography variant="small" className="mb-5">
                                    {Description && Description.length > 600
                                        ? `${Description.substring(0, 600)} ...`
                                        : Description}
                                </Typography>

                                {ContactNumber && (
                                    <Typography
                                        variant="small"
                                        className="mb-1 flex gap-3"
                                    >
                                        <PhoneIcon className="h-5 w-5" />
                                        {ContactNumber}
                                    </Typography>
                                )}

                                {EmailAddress && (
                                    <Typography
                                        variant="small"
                                        className="mb-5 flex gap-3"
                                    >
                                        <EnvelopeIcon className="h-5 w-5" />
                                        {EmailAddress}
                                    </Typography>
                                )}
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
                            <div className="flex gap-4">
                                {/* <a href={locationCoords} target="_blank"> */}
                                <Button
                                    className="flex gap-2 justify-center w-full bg-primary"
                                    onClick={handleNavigate}
                                    disabled={isFetchingLocation}
                                >
                                    {isFetchingLocation ? (
                                        <Spinner className="h-4 w-4" />
                                    ) : (
                                        <MapPinIcon className="h-4 w-4" />
                                    )}
                                    {isFetchingLocation
                                        ? "Fetching Location..."
                                        : "Navigate"}
                                </Button>
                                <Button
                                    className="flex gap-2 justify-center w-full bg-red-500"
                                    onClick={handleStopNavigation}
                                    disabled={!route.isActive}
                                >
                                    Stop Navigation
                                </Button>
                                {/* </a> */}
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

                        {Status === "Renovated" ||
                            (Status === "Under Construction" && (
                                <div className="w-full pr-5">
                                    <div className="flex">
                                        <Typography
                                            variant="h6"
                                            className="w-full mt-6 flex gap-2 px-3"
                                        >
                                            <BuildingOffice2Icon className="w-6 h-6 text-primary" />
                                            Status
                                        </Typography>
                                    </div>
                                    <section className="border-solid border-gray border-4 mt-3">
                                        <div className="w-full">
                                            <div className="p-2">
                                                <Typography
                                                    variant="h6"
                                                    className="mt-1"
                                                >
                                                    {Status}
                                                </Typography>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ))}
                    </div>
                    {/* <div className="lg:basis-auto md:basis-1/2 sm:basis-full">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-10">
                            {Status === "Renovated" ||
                                (Status === "Under Construction" && (
                                    <div className="w-full pr-5">
                                        <div className="flex">
                                            <Typography
                                                variant="h6"
                                                className="w-full mt-6 flex gap-2 px-3"
                                            >
                                                <BuildingOffice2Icon className="w-6 h-6 text-primary" />
                                                Status
                                            </Typography>
                                        </div>
                                        <section className="border-solid border-gray border-4 mt-3">
                                            <div className="w-full">
                                                <div className="p-2">
                                                    <Typography
                                                        variant="h6"
                                                        className="mt-1"
                                                    >
                                                        {Status}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </Drawer>
    );
}
