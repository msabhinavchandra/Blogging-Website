import Header from "./Header";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return (
<main className="p-2.5 ml-60 max-w-3xl mx-0 my-auto">
            <Header />
            <Outlet/>
            </main>

    );
}