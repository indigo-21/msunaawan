import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { 
    CalendarDateRangeIcon,
    ClockIcon
} from "@heroicons/react/24/outline";
export default function AnnouncementsEvents({title, image, date, time, category}) {
    return (
        <>
            <Card className="w-full max-w-[48rem] min-h-[15rem] flex-row mb-5 border-t-4 border-primary rounded-md">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none p-4"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className="py-5 pl-0 pr-4">
                    <Typography variant="paragraph" color="gray" className="w-[75%] uppercase bg-primary text-white text-center text-xs rounded-md py-1 mb-2">
                        {category}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2 text-md font-extrabold">
                        {title}
                    </Typography>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Typography variant="paragraph" color="blue-gray" className="mb-2 text-xs">
                                <CalendarDateRangeIcon className="h-4 inline"/>  <span> {date}</span>
                            </Typography> 
                        </div>
                        <div>
                            <Typography variant="paragraph" color="blue-gray" className="mb-2 text-xs">
                            <ClockIcon className="h-4 inline"/>  <span> {time}</span>
                            </Typography> 
                        </div>
                        
                    </div>     

                </CardBody>
            </Card>
        </>
    );
}
