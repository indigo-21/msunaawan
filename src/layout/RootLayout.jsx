import { Outlet } from "react-router-dom"
import MainNavigation from "../componenets/MainNavigation"
export default function RootLayout () {
    return (
        <>
            {/* <div className="md:container md:mx-auto"> */}
            <MainNavigation/>
            <main className="md:container md:mx-auto">
                <Outlet />
            </main>
            {/* </div> */}
        </>
    )
}