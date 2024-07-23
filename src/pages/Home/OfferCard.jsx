import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
export default function OfferCard({title, image}) {
    return (
        <>
            <Card className="overflow-hidden bg-primary rounded-none">
                <CardHeader floated={false} shadow={true} color="transparent" className="m-0 rounded-none">
                    <img src={image} alt={title} className="h-[120px] w-full object-cover"/>
                </CardHeader>
                <CardBody className="p-1 border-t-4 border-secondary rounded-none">
                    <Typography variant="paragraph" color="gray" className="text-white text-center text-xs font-normal">
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </>
    );
}
