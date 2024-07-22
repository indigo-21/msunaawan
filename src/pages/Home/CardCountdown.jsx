import { Card, Typography } from "@material-tailwind/react";

export default function CardCountdown({ text }) {
  return (
    <Card className=" mb-10 bg-primary text-center h-30 pt-3 pb-6 ">
      <Typography variant="h1" className="text-secondary">
        0
      </Typography>
      <div className="bg-secondary absolute bottom-[-20px] rounded-md h-10 mt-10 left-0 right-0 mx-auto w-[80%] place-content-center">
        <Typography variant="h6" className="text-primary">
          {text}
        </Typography>
      </div>
    </Card>
  );
}
