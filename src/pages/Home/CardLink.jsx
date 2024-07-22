import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CardLink({ title, icon, children }) {
  return (
    <Card className="w-full mt-10">
      <CardHeader className="grid h-10 pl-3 mx-0 bg-primary rounded-md">
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 flex gap-2"
        >
          {icon}
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-1 text-black border-l border-r border-b border-primary">
        {children}
      </CardBody>
    </Card>
  );
}
