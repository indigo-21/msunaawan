import { List, ListItem, Card, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

export default function MapList({ onClickBuilding, mapData }) {
    const search = useRef();
    const [locationList, setLocationList] = useState(mapData);

    useEffect(() => {
        setLocationList(mapData);
    }, [mapData]);

    const handleKeyDown = (event) => {
        if (event.keyCode === 8) {
            setLocationList(mapData);
        } else {
            setLocationList(
                locationList.filter((location) =>
                    location.Title.toLowerCase().includes(
                        search.current.value.toLowerCase(),
                    ),
                ),
            );
        }
    };

    // console.log(locationList);

    return (
        <>
            <div className="w-full mb-5 ">
                <div className="relative flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <input
                        className="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                        placeholder="MSU Naawan Buildings ..."
                        ref={search}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />

                    {/* <button
                        className="h-10 ml-1 text-white text-sm my-auto px-3 flex items-center bg-primary rounded hover:bg-[#1e1e85]"
                        type="button"
                        onClick={handleClick}
                    >
                        Search
                    </button> */}
                </div>
            </div>
            {locationList && (
                <Card className="w-full bg-[#19196e] h-[80vh] overflow-auto ">
                    <List>
                        {locationList.map((location) => {
                            const locationId = location.__metadata.id;
                            const arrayOfCoordinates =
                                location.Coordinates &&
                                location.Coordinates.split("\n").map((item) =>
                                    item
                                        .split(",")
                                        .map((coord) => coord.trim()),
                                );
                            // console.log(
                            //     arrayOfCoordinates && arrayOfCoordinates[0],
                            // );
                            return (
                                <ListItem
                                    key={locationId}
                                    onClick={() =>
                                        onClickBuilding([
                                            arrayOfCoordinates[0][0],
                                            arrayOfCoordinates[0][1],
                                        ])
                                    }
                                    className="hover:bg-secondary active:bg-secondary focus:bg-secondary group"
                                >
                                    <div>
                                        <Typography
                                            variant="h6"
                                            className="text-[#fddd00] group-hover:text-primary group-active:text-primary group-focus:text-primary"
                                        >
                                            {location.Title}
                                        </Typography>
                                    </div>
                                </ListItem>
                            );
                        })}
                    </List>
                </Card>
            )}
        </>
    );
}
