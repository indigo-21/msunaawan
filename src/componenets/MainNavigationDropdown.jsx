import { useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
export default function MainNavigationDropdown({ dropdownItems, page }) {
    const [openMenu, setOpenMenu] = useState(false);
    const dropdownList = dropdownItems.map((dropdownItem, index) => <MenuItem key={index}>{dropdownItem.subPage}</MenuItem>)
    return (
        <>
            <Menu open={openMenu} handler={setOpenMenu} allowHover>
                <MenuHandler>
                    <Typography
                        variant="small"
                        className="p-1 font-bold text-primary"
                    >
                        {page}{" "}
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3.5 w-3.5 transition-transform inline-flex ${
                                openMenu ? "rotate-180" : ""
                            }`}
                        />
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl lg:block">
                    <ul className="col-span-4 flex w-full flex-col gap-1 dropdown-list">
                        {dropdownList}
                    </ul>
                </MenuList>
            </Menu>
        </>
    );
}
