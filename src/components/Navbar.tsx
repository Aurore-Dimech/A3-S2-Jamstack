import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <ul className="flex px-20 py-3 justify-between items-center">
                <li>
                    <Link href="/"><Image src="/asset/icon.webp" height="56" width="56"  alt="" className="w-auto"/></Link>
                </li>
                <li>
                    <Link href="/heroes" className="uppercase text-xl">Héroînes</Link>
                </li>
                <li>
                    <Link href="/unities" className="uppercase text-xl">Unités</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;