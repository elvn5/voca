import {Navbar} from "@/features";

export default function Home() {
    return (
        <div className="pt-5 min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex justify-center items-center w-full">
                <img src={"welcome.svg"} alt="welcome" className="max-w-2xl"/>
            </div>
        </div>
    );
}
