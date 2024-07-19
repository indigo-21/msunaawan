import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
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
import { 
    ChevronDownIcon, 
    Bars3Icon,
    XMarkIcon, 
} from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

import MainNavigationDropdown from "./MainNavigationDropdown";
import MainMobileNavigationDropdown from "./MainMobileNavigationDropdown";

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
                { subPage: "Annual Report", link: "/annual-report" },
            ],
        },
        {
            page: "Organization",
            dropdown: true,
            dropdownItems: [
                { subPage: "Office of the Chancellor", link: "/vmgc-history" },
                { subPage: "Office of the Vice Chancellor for Academic Affairs", link: "/contacts" },
                { subPage: "Office of the Vice Chancellor for Research & Extension", link: "/annual-report" },
                { subPage: "Office of the Vice Chancellor for Administration & Finance", link: "/annual-report" },
                { subPage: "Office of the Vice-Chancellor for Planning & Development", link: "/annual-report" },
                { subPage: "Faculty and Staff", link: "/annual-report" },
            ],
        },
        { 
            page: "Academics", 
            dropdown: true,
            dropdownItems: [
                { subPage: "University Admission", link: "/vmgc-history" },
                { subPage: "Academic Calendar", link: "/contacts" },
                { subPage: "Schools & Colleges", link: "/annual-report" },
                { subPage: "Campus Library", link: "/annual-report" },
            ],
         },
        { 
            page: "Research", 
            dropdown: true,
            dropdownItems: [
                { subPage: "Research Division", link: "/vmgc-history" },
                { subPage: "Niche Center for Sea Cucumber", link: "/contacts" },
                { subPage: "Journal of Environment & Aquatic Resources", link: "/annual-report" },
                { subPage: "Intellectual Property Rights Office", link: "/annual-report" },
            ],
        },
        { page: "Extension", dropdown: false },
        { page: "International", dropdown: false },
        { 
            page: "Services", 
            dropdown: true,
            dropdownItems: [
                { subPage: "Application for University ID", link: "/vmgc-history" },
                { subPage: "Request for Registrar Documents", link: "/contacts" },
                { subPage: "Library OPAC", link: "/annual-report" },
                { subPage: "ICTC Multimedia Services Reservation", link: "/annual-report" },
                { subPage: "MSUN Vehicle Reservation", link: "/annual-report" },
            ],
        },
        { 
            page: "Login", 
            dropdown: true,
            dropdownItems: [
                { subPage: "MySchool for Students", link: "/vmgc-history" },
                { subPage: "MyWork for Employees", link: "/contacts" },
                { subPage: "Student Admission", link: "/annual-report" },
                { subPage: "Bids & Awards Committee", link: "/annual-report" },
                { subPage: "Vendors & Suppliers", link: "/annual-report" },
                { subPage: "Chancellor’s VirtualDesk", link: "/annual-report" },
            ],
        },
    ];

    return (
        <>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:py-4">
                <div className="md:container md:mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
                    <img src={Logo} className="nav-logo"/>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                {navLists.map((navList, index) => {
                                    if (navList.dropdown) {
                                        return (
                                            <li key={index}>
                                                <MainNavigationDropdown
                                                    dropdownItems={
                                                        navList.dropdownItems
                                                    }
                                                    page={navList.page}
                                                />
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={index}>
                                                <Typography
                                                    variant="small"
                                                    className="p-1 font-bold text-primary"
                                                >
                                                    {navList.page}
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
                            color="blue-gray"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon
                                    className="h-6 w-6"
                                    strokeWidth={2}
                                />
                            ) : (
                                <Bars3Icon
                                    className="h-6 w-6"
                                    strokeWidth={2}
                                />
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navLists.map((navList, index) => {
                        if (navList.dropdown === true) {
                            const dropdownItems = navList.dropdownItems;
                            return (
                                <li key={index}>
                                    
                                    <MainMobileNavigationDropdown page={navList.page} dropdownItems={dropdownItems}/>
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    <Typography variant="small" className="p-1 font-bold text-primary">
                                        <a href="#" className="flex items-center">
                                            {navList.page}
                                        </a>
                                    </Typography>
                                </li>
                            );
                        }
                    })}
                </Collapse>
            </Navbar>
        </>
    );
}
