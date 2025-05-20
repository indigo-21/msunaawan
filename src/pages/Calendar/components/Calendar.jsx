import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Modal from "./CalendarModal";
import { useState } from "react";

const Calendar = ({ eventData, isOpen, onClose, openModal, colorScheme }) => {
    const [modalContent, setModalContent] = useState(null);

    const handleEventClick = (arg) => {
        console.log("Event clicked:", arg.event.extendedProps);
        openModal();

        setModalContent(
            <>
            <h2 className="text-xl font-bold mb-4">{arg.event.title}</h2>
            <div className="mb-4">
                {arg.event.extendedProps.description
                ? <span dangerouslySetInnerHTML={{ __html: arg.event.extendedProps.description }} />
                : "No Description Available"}
            </div>
            <div className="mb-4">
                <a
                href={arg.event.extendedProps.link}
                className="text-sm"
                style={{ color: colorScheme?.fillColor || "#2563eb" }}
                target="_blank"
                rel="noopener noreferrer"
                >
                View more details...
                </a>
            </div>
            <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={onClose}
            >
                Close
            </button>
            </>
        );
    };

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="p-4 bg-white rounded-lg shadow-md m-20">
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={onClose}>
                        {modalContent}
                    </Modal>
                )}
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    eventClick={handleEventClick}
                    events={eventData}
                    height="auto"
                />
            </div>
        </div>
    );
};

export default Calendar;
