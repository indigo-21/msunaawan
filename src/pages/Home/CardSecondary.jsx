import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CardSecondary() {
  return (
    <Card className="my-2 w-96 mr-10 rounded-none">
      <CardBody className="p-0 bg-primary">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <img
              src="https://msunaawan.edu.ph/wp-content/uploads/2024/07/IMG_8905-2048x1365.jpg"
              alt=""
            />
          </div>
          <div className="basis-1/2 place-content-center p-2 ">
            <Typography color="white" className="text-[9px] font-extrabold hover:text-secondary hover:underline cursor-pointer">
              Inception Meeting of the Newly-Funded PCAARRD-GIA Projects on Sea
              Cucumber
            </Typography>
            <div className="flex gap-1 mt-1">
              <Typography className="text-[9px]" color="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </Typography>
              <Typography color="white" className="text-[9px]">
                July 18, 2024
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
      <div className="bg-secondary h-2"></div>
      </Card>
  );
}
