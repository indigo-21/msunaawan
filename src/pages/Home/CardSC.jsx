import { Card, Typography } from "@material-tailwind/react";

export default function CardSC({ school, image }) {
  return (
    <Card className="w-full p-3">
      <div className="border border-primary p-2 rounded-md">
        <div className="flex flex-row">
          <div className="basis-1/4 w-full">
            <img src={image} alt={school} />
          </div>
          <div className="basis-3/4 pl-4 place-content-center">
            <Typography variant="small" color="black">
              {school}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}
