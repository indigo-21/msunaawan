import { useRef, useState } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    Drawer,
    Card,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LOCATIONS } from "./MapCoords";

export default function MapSidebarBurgerMenu({ onClickBuilding }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const search = useRef();
    const [locationList, setLocationList] = useState(LOCATIONS);

    const handleKeyDown = (event) => {
        if (event.keyCode === 8) {
            setLocationList(LOCATIONS);
        }
    };

    const handleClick = () => {
        setLocationList(
            locationList.filter((location) =>
                location.title
                    .toLowerCase()
                    .includes(search.current.value.toLowerCase()),
            ),
        );
    };

    const handleClickSidenav = (location) => {
        setIsDrawerOpen(false);

        onClickBuilding([location.coords[0][0], location.coords[0][1]]);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer} className="p-5">
                <div className="w-full mb-5">
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

                        <button
                            className="h-10 ml-1 text-white text-sm my-auto px-3 flex items-center bg-primary rounded hover:bg-[#1e1e85]"
                            type="button"
                            onClick={handleClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <Card className="w-full bg-gray-100">
                    {locationList.length > 0 && (
                        <List>
                            {locationList.map((location, key) => {
                                return (
                                    <ListItem
                                        key={key}
                                        onClick={() =>
                                            handleClickSidenav(location)
                                        }
                                    >
                                        <div>
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                            >
                                                {location.title}
                                            </Typography>
                                        </div>
                                    </ListItem>
                                );
                            })}
                        </List>
                    )}
                </Card>
            </Drawer>
        </>
    );
}
