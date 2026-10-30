
import { Search, BookmarkMinus, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const location = useLocation();


    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Explore', href: '/explore' },
        { name: 'News', href: '/news' }
    ]


    const getLinksClass = (href) =>
        `transition-colors duration-200 ${location.pathname === href
            ? 'text-green-400'
            : 'text-gray-300 hover:text-green-400'
        }`;

    return (
        <div className="absolute top-0 left-0 z-50 w-full px-4 pt-4">
            <nav aria-label="Main navigation"  className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-[#111313]/50 px-5 py-4 backdrop-blur-lg">

                {/* Top Row */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        className="text-xl font-bold text-yellow-400"
                        to="/"
                    >
                        Animance
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden items-center gap-5 md:flex">
                        {navLinks.map((link) =>
                            <Link
                                key={link.href}
                                to={link.href}
                                className={getLinksClass(link.href)}
                            >
                                {link.name}
                            </Link>
                        )}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-4 md:flex">
                        <button aria-label="Search">
                            <Search size={20} />
                        </button>

                        <button aria-label="Watchlist">
                            <BookmarkMinus size={20} />
                        </button>

                        <button className="rounded-full bg-green-400 px-5 py-2 font-medium text-black transition-colors hover:bg-green-300">
                            Login
                        </button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button aria-label="Search">
                            <Search size={20} />
                        </button>

                        <button
                            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Links - Always visible for now */}
                {isMenuOpen && (<div className="mt-5 flex flex-col items-center gap-4 border-t border-white/10 pt-4 md:hidden">
                    {navLinks.map((link) =>
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={closeMenu}
                            className={getLinksClass(link.href)}
                        >
                            {link.name}
                        </Link>
                    )}
                    <button className="w-fit rounded-full bg-green-400 px-5 py-2 font-medium text-black">
                        Login
                    </button>
                </div>)}

            </nav>
        </div>
    )
}

export default Navbar
