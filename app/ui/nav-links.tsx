import Link from "next/link";
import NavLink from "../lib/nav-link";

export default function NavLinks() {
    const links: NavLink[] = [
        { name: 'lab', href: '/lab', displayText: 'Lab' }
    ]
    return (
        <>
            {links.map((link) => {
                return (
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-white mr-4"
                        href={link.href}
                        key={link.name}>
                        {link.displayText}
                    </Link>
                )
            })}
        </>
    )
}