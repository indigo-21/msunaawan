import { Outlet } from "react-router-dom"
import MainNavigation from "../componenets/MainNavigation"
import MainFooter from "../componenets/MainFooter"
export default function RootLayout () {
    return (
        <>
            {/* <div className="md:container md:mx-auto"> */}
            <MainNavigation/>
            <main className="container mx-auto">
                <Outlet />
            </main>
            <MainFooter />
            {/* </div> */}
        </>
    )
}