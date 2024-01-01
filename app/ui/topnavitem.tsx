import Link from "next/link";

export default function TopNavItem({ href, displayText }: { href: string, displayText: string }) {
    return (
        <Link href={href} className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-white mr-4">
            {displayText}
        </Link>
    )
}