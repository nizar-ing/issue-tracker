import Link from "next/link";
import {AiFillBug} from "react-icons/ai";

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ];
    return (
        <nav className='flex items-center h-14 px-5 space-x-6 border-b mb-5'>
            <Link href='/'><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {
                    links.map((link) => <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' key={link.href} href={link.href}>{link.label}</Link>)
                }
            </ul>
        </nav>
    );
};
export default NavBar;
