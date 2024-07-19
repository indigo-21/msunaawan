import { useState } from "react";
import { Collapse, Typography, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
export default function MainMobileNavigationDropdown({
    dropdownItems, page
}) {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <>
            <Typography
                variant="small"
                className="p-1 font-bold text-primary"
            >
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                    {page}{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform inline-flex ${
                            openMobileMenu ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </Typography>
            <Collapse open={openMobileMenu}>
                <ul>
                    {dropdownItems.map((dropdownItem, index) => (
                        <li key={index}>
                            <Typography variant="small" className="p-1 font-bold text-primary">
                                {dropdownItem.subPage}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Collapse>
        </>
    );
}
