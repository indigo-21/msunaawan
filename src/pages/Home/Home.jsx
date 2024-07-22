import { Carousel, Button, Typography } from "@material-tailwind/react";
import CardCountdown from "./CardCountdown";
import CardLink from "./CardLink";
import cardLists from "./CardLinkLists";
import CardSC from "./CardSC";
import cardSCLists from "./CardSCLists";
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";

export default function Home() {
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
                <Button
                  size="lg"
                  color="white"
                  bg="#016575"
                  style={{ backgroundColor: "#016575", color: "#fff" }}
                >
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
      <section className="container my-24">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-10 sm:gap-2">
          <CardCountdown text="Days" />
          <CardCountdown text="Hours" />
          <CardCountdown text="Minutes" />
          <CardCountdown text="Seconds" />
        </div>

        <Typography variant="h3" className="text-primary text-center mb-10">
          before Graduation Day!
        </Typography>
      </section>

      <section className="container ">
        <div className="grid md:grid-cols-3 md:gap-10 sm:gap-2 md:mt-20">
          {cardLists.map((list) => (
            <CardLink key={list.title} title={list.title} icon={list.icon}>
              {list.lists.map((listData, index) => (
                <ul key={index} className="list-disc mx-2">
                  <li>
                    <Typography variant="small">
                      <a href="#">{listData.list}</a>
                    </Typography>
                  </li>
                </ul>
              ))}
            </CardLink>
          ))}
        </div>
      </section>

      <section className="container my-10">
        <Typography variant="h4" className="text-primary text-center">
          School and Colleges
        </Typography>
        <div className="mt-10">
          <div className="grid md:grid-cols-3 gap-4">
            {cardSCLists.map((school, index) => {
              return (
                <CardSC
                  key={index}
                  school={school.school}
                  image={school.image}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="container my-20">
        <div className="md:flex md:flex-row">
          <div className="md:basis-2/3 basis-full">
            <Typography variant="h4" className="text-primary">
              News and Updates
            </Typography>
            <div className="flex flex-row">
              <div className="basis-1/2 pr-5">
                <CardPrimary />
              </div>
              <div className="md:basis-1/2 basis-full">
              <div className="grid grid-rows-4 grid-flow-col gap-4 mt-4">
                <div><CardSecondary /></div>
                <div><CardSecondary /></div>
                <div><CardSecondary /></div>
              </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <Typography variant="h4" className="text-primary">
              Follow us on Facebook
            </Typography>
          </div>
        </div>

        {/* <div className="mt-5">
          <div className="grid md:grid-cols-3 gap-4"></div>
        </div> */}
      </section>
    </>
  );
}
