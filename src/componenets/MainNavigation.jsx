import { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Card,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import MainNavigationDropdown from "./MainNavigationDropdown";

export default function MainNavigation() {
    const [openNav, setOpenNav] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navLists = [
        {
            page: "About Us",
            dropdown: true,
            dropdownItems: [
                { subPage: "VMGC & History", link: "/vmgc-history" },
                { subPage: "Contacts", link: "/contacts" },
                { subPage: "Annual Report", link: "/annual-report" }
            ],
        },
        { 
            page: "Organization", 
            dropdown: true,
            dropdownItems: [
                { subPage: "VMGC & History", link: "/vmgc-history" },
                { subPage: "Contacts", link: "/contacts" },
                { subPage: "Annual Report", link: "/annual-report" }
            ],
        },
        { page: "Academics", dropdown: false },
        { page: "Research", dropdown: false },
        { page: "Extension", dropdown: false },
        { page: "International", dropdown: false },
        { page: "Services", dropdown: false },
        { page: "Login", dropdown: false }
    ];

    return (
        <>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography> */}
                    LOGO
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                {navLists.map((navList, index) => {
                                    // console.log(navList.page)
                                    if (navList.dropdown === true) {
                                        console.log(navList.page + "test")
                                        // const dropdownLists = navList.dropdownItems;
                                        return (
                                            <li key={navList.page}>
                                                {navList.dropdownItems !== "undefined" && <MainNavigationDropdown dropdownItems={navList.dropdownItems}/>}
                                                {/* <Menu allowHover>
                                                    <MenuHandler>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="p-1 font-normal dropdown"
                                                        >
                                                            <span>
                                                                {navList.title}{" "}
                                                                <ChevronDownIcon
                                                                    strokeWidth={2.5}
                                                                    className={`h-3.5 w-3.5 transition-transform inline-flex chevron-down`}
                                                                />
                                                            </span>
                                                        </Typography>
                                                    </MenuHandler>
                                                    <MenuList>
                                                        {dropdownLists.map(
                                                            (dropdownItem, index) => (
                                                                <MenuItem key={index}>
                                                                    {dropdownItem.title}
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </MenuList>
                                                </Menu> */}
                                            </li>
                                        );
                                    } else {
                                        console.log(navList.page)
                                        return (
                                            <li key={index}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="p-1 font-normal"
                                                key={index}
                                            >
                                                <a
                                                    href="#"
                                                    className="flex items-center"
                                                >
                                                    {navList.title}
                                                </a>
                                            </Typography>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                        {/* <div className="flex items-center gap-x-1">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Log In</span>
                            </Button>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign in</span>
                            </Button>
                        </div> */}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                {/* <Collapse open={openNav}>
                    {navLists.map((navList) => {
                        if (navList.dropdown === true) {
                            const dropdownLists = navList.dropdownItems;
                            return (
                                <li key={navList.title}>
                                    <Typography
                                        as="li"
                                        variant="small"
                                        color="blue-gray"
                                        className="p-1 font-normal"
                                        key={navList.title} 
                                    >
                                        <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                                            {navList.title}{" "}
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`h-3.5 w-3.5 transition-transform inline-flex ${
                                                    openMobileMenu
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                    </Typography>
                                    <Collapse open={openMobileMenu}>
                                        <ul>
                                            {dropdownLists.map((dropdownItem) => (
                                                <Typography
                                                as="li"
                                                variant="small"
                                                color="blue-gray"
                                                className="p-1 font-normal" key={dropdownItem.title}>
                                                    {dropdownItem.title}
                                                </Typography>
                                            ))}
                                        
                                        </ul>
                                    </Collapse>
                                </li>
                            );
                        } else {
                            return (
                                <li key={navList.title}>
                                    <Typography
                                        as="li"
                                        variant="small"
                                        color="blue-gray"
                                        className="p-1 font-normal"
                                    >
                                        <a
                                            href="#"
                                            className="flex items-center"
                                        >
                                            {navList.title}
                                        </a>
                                    </Typography>
                                </li>
                            );
                        }
                    })}
                </Collapse> */}
            </Navbar>
        </>
    );
}
