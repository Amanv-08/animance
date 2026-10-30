
import { Search, BookmarkMinus, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeLink, setActiveLink] = useState('');

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'explore', 'news'];

            for (const id of sections.toReversed()) {
                const section = document.getElementById(id);

                if (section && section.getBoundingClientRect().top <= 150) {
                    setActiveLink(`#${id}`);
                    break;
                };
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Explore', href: '#explore' },
        { name: 'News', href: '#news' }
    ]

    const handleLinkClick = (href) => {
        setActiveLink(href);
        closeMenu();
    };

    const getLinksClass = (href) =>
        `transtion-colors duration-200 ${activeLink === href ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}`
    
    return (
        <div className="flex justify-center px-4 pt-4">
            <nav className="w-full max-w-6xl rounded-3xl border border-white/10 bg-[#111313]/95 px-5 py-4 backdrop-blur-lg">

                {/* Top Row */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        className="text-xl font-bold text-yellow-400"
                        href="#home"
                    >
                        Animance
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden items-center gap-5 md:flex">
                        {navLinks.map((link) =>
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={getLinksClass(link.href)}
                            >
                                {link.name}
                            </a>
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
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Links - Always visible for now */}
                {isMenuOpen && (<div className="mt-5 flex flex-col items-center gap-4 border-t border-white/10 pt-4 md:hidden">
                    {navLinks.map((link) =>
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={getLinksClass(link.href)}
                        >
                            {link.name}
                        </a>
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
 