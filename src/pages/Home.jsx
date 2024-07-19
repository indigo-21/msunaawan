import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Home () {
    return (
        <>
            <Carousel>
            <div className="w-full h-[450px]">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid place-items-center ">
                    <div className="w-full md:w-full px-[5%]">
                        <div className="flex justify-start gap-2">
                            <Button size="lg" color="white" bg="#016575" style={{backgroundColor: "#016575",color:"#fff"}}>
                                Click to Visit the Website
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            </Carousel>
            <div className="container">
                <Typography className="mb-12 opacity-80">
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
                </Typography>
            </div>
        </>
    );
}