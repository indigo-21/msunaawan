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
} from "@material-tailwind/react";
import CarouselComponent from "../../componenets/CarouselComponent";

export default function MapPopUp({ openBottom, closeDrawerBottom, mapData }) {
    const {
        title,
        image,
        description,
        coords,
        contactInformation,
        status,
        event,
    } = mapData;

    const locationCoords = `https://www.google.com/maps/dir/?api=1&destination=${coords[0][0]},${coords[0][1]}`;
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
                    <div>
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="py-5 px-2">
                        <div className="mb-5">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-3"
                            >
                                {title}
                            </Typography>
                            <Typography variant="small">
                                {description.length > 400
                                    ? `${description.substring(0, 400)} ...`
                                    : description}
                            </Typography>
                            <Typography variant="small" className="py-3">
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
                        </div>
                        <div className="grid grid-cols-2 gap-4 ">
                            <a href={locationCoords} target="_blank">
                                <Button className="flex gap-2 justify-center w-full bg-primary">
                                    <MapPinIcon className="h-4 w-4" />
                                    Navigate
                                </Button>
                            </a>
                            <a
                                href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                                target="_blank"
                            >
                                <Button className="flex gap-2 justify-center w-full bg-primary">
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                    View Page
                                </Button>
                            </a>
                        </div>
                    </div>
                    {event.length > 0 && (
                        <div className="mr-5 h-[400px] overflow-auto">
                            <div>
                                <Typography
                                    variant="h6"
                                    className="w-full mt-6 flex gap-2 px-3"
                                >
                                    <CalendarDaysIcon className="w-6 h-6 text-primary" />
                                    Event
                                </Typography>
                                <CarouselComponent>
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
                                </CarouselComponent>
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
                                            className="!-mt-3"
                                        >
                                            {contactInformation.phone}
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
                                            className="!-mt-3 mb-3"
                                        >
                                            {contactInformation.email}
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
                                            {status}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <div className="w-full pr-5">
                        <div className="flex">
                            <Typography
                                variant="h6"
                                className="w-full mt-6 flex gap-2 px-3"
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
                                    {contactInformation.phone}
                                </Typography>
                            </div>

                            <div className="grid px-3">
                                <Typography variant="h6" className="mt-1 mb-3">
                                    Email:
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="!-mt-3 mb-3"
                                >
                                    {contactInformation.email}
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
                                    {status}
                                </Typography>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Drawer>
    );
}
