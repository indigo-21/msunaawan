import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMapLists } from "../../util/http";
import { Spinner, Typography } from "@material-tailwind/react";
import Calendar from "./components/Calendar";

const COLORSCHEME = {
    color: "#fddd00",
    fillColor: "#9E1416",
};

function MsuGensanCalendar() {
    const [eventDataFormat, setEventDataFormat] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const tenantName = "GENSAN";
    const gensanCalendar = {
        tenantName: tenantName,
        baseUrl:
            "https://msugensan2.sharepoint.com/sites/msugensan/_api/web/lists/GetByTitle('Events')/items",
        queryParams: {},
    };

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    const { data: eventData, isLoading } = useQuery({
        queryKey: ["mapData"],
        queryFn: () => fetchMapLists(gensanCalendar),
        // refetchInterval: 5000,
    });

    useEffect(() => {
        if (eventData) {
            const formattedEvents = eventData.map((event) => ({
                title: event.Title,
                start: event.EventDate,
                end: event.EndDate,
                description: event.Description,
                location: event.Location,
                link: `https://msugensan.eacomm.com/single-event/?id=${event.ID}&listname=Events`,
                color: COLORSCHEME.fillColor,
            }));
            setEventDataFormat(formattedEvents);
        }
    }, [eventData]);
    console.log(eventDataFormat);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Typography variant="lead" className="m-10">
                    Loading Events
                </Typography>
                <Spinner className="h-12 w-12" />
            </div>
        );
    }

    return (
        <div className="bg-transparent w-screen h-screen flex flex-col items-center justify-center">
            <Calendar
                eventData={eventDataFormat}
                colorScheme={COLORSCHEME}
            />
        </div>
    );
}

export default MsuGensanCalendar;
