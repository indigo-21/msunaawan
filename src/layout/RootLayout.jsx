import { Outlet } from "react-router-dom"
import MainNavigation from "../componenets/MainNavigation"
export default function RootLayout () {
    return (
        <>
        {/* <div className="container-lg"> */}
            <MainNavigation/>
            <main>
                <Outlet />
            </main>
            {/* </div> */}
        </>
    )
}