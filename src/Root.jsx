import { Outlet } from "react-router-dom";
import RootLayout from "./Layout/DrayerLayout";

const Root = () => {
    return (
        <div>
            <RootLayout>
     <Outlet></Outlet>
            </RootLayout>
        </div>
    );
};

export default Root;