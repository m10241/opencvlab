import Link from "next/link";
import NavLinks from "./nav-links";

export default function TopNav() {
    return (
        <nav className="bg-gray-200 dark:bg-gray-800">
            <div className="flex items-center justify-between flex-wrap p-6">
                <div className="flex flex-shrink-0 text-black dark:text-white lg:mr-6">
                    <Link href="/">
                        <div className="flex flex-shrink-0 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 164 153" fill="none"><path d="M144.618 79.1998C156.154 85.9868 163.907 98.5221 163.932 112.877C163.969 134.484 146.484 152.031 124.877 152.068C103.269 152.106 85.7225 134.62 85.6847 113.013C85.6597 98.6587 93.3683 86.0964 104.881 79.2691L116.123 98.2666C116.405 98.7431 116.245 99.3554 115.787 99.6669C111.536 102.561 108.748 107.443 108.758 112.973C108.773 121.837 115.972 129.011 124.836 128.995C133.701 128.98 140.874 121.781 140.859 112.917C140.849 107.387 138.044 102.515 133.783 99.6355C133.324 99.3256 133.162 98.7139 133.442 98.2364L144.618 79.1998Z" fill="#128DFF"></path><path d="M58.2668 78.9714C52.6177 75.8052 46.1027 74 39.1662 74C17.5588 74 0.0426025 91.5162 0.0426025 113.124C0.0426025 134.731 17.5588 152.247 39.1662 152.247C60.8798 152.247 78.8229 133.813 78.2771 112.12H56.2529C55.6746 112.12 55.2192 112.609 55.2155 113.188C55.1596 121.833 47.9463 129.174 39.1662 129.174C30.3016 129.174 23.1155 121.988 23.1155 113.124C23.1155 104.259 30.3016 97.0729 39.1662 97.0729C41.4876 97.0729 43.694 97.5657 45.6863 98.4525C46.1732 98.6692 46.7542 98.505 47.0247 98.0459L58.2668 78.9714Z" fill="#8BDA67"></path><path d="M61.431 72.834C49.9062 66.0268 42.1757 53.4779 42.1757 39.1235C42.1757 17.5162 59.6919 0 81.2992 0C102.907 0 120.423 17.5162 120.423 39.1235C120.423 53.4779 112.692 66.0268 101.167 72.834L89.9591 53.8169C89.678 53.3399 89.8386 52.7279 90.2968 52.4171C94.5531 49.5307 97.3499 44.6537 97.3499 39.1235C97.3499 30.259 90.1638 23.0729 81.2992 23.0729C72.4347 23.0729 65.2485 30.259 65.2485 39.1235C65.2485 44.6537 68.0453 49.5307 72.3016 52.4171C72.7599 52.7279 72.9204 53.3399 72.6393 53.8169L61.431 72.834Z" fill="#FF2A44"></path></svg>
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
                        <NavLinks></NavLinks>
                    </div>
                    {/* <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div> */}
                </div>
            </div>
        </nav>
    )
}