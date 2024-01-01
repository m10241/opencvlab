import Image from "next/image";
import Link from "next/link";
import TopNavItem from "./topnavitem";

export default function TopNav() {
    return (
        <nav className="bg-gray-200 dark:bg-gray-900">
            <div className="flex items-center justify-between flex-wrap p-6">
                <div className="flex flex-shrink-0 text-black dark:text-white lg:mr-6">
                    <Link href="/">
                    <div className="flex flex-shrink-0 items-center">
                        <Image src={`https://opencv1.b-cdn.net/wp-content/uploads/2020/07/OpenCV_logo_no_text-1.svg`} alt="opencv logo" width="32" height="32"></Image>
                    </div>
                    </Link>
                    <div className="hidden sm:ml-2 sm:block">
                        <Link href="/">
                            <span className="font-semibold text-xl tracking-tight">OpenCV Lab</span>
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <TopNavItem href="/lab" displayText="Lab"></TopNavItem>
                    </div>
                    {/* <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div> */}
                </div>
            </div>
        </nav>
    )
}