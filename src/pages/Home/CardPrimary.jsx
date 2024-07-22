import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CardPrimary() {
  return (
    <Card className="mt-5 w-full">
      <CardHeader color="blue-gray" className="relative h-50 m-0 rounded-none ">
        <img
          className="transition duration-500 hover:scale-110"
          src="https://msunaawan.edu.ph/wp-content/uploads/2024/07/IMG_2967-2048x1536.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody className="h-[15rem] bg-primary p-4">
        <div className="flex gap-2">
          <Typography color="white" className="text-[9px] mb-3">
            OIPP MSUN | May 25, 2022
          </Typography>
        </div>
        <Typography
          variant="h6"
          color="white"
          className="font-bold hover:text-secondary hover:underline cursor-pointer"
        >
          MSUN hosts Regional Sea Cucumber Roadshow - Mindanao Node
        </Typography>
        <Typography color="white" variant="small" className="mt-3">
          Funded by the Australian Centre for International Agricultural
          Research (ACIAR) Sanfish Project that aimed to enhance the skills of
          sea cucumber farmers in aquaculture and
        </Typography>
      </CardBody>
      <div className="bg-secondary h-2"></div>
    </Card>
  );
}
