
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, THEME } from '../constants';
import { NavLinkItem } from '../types';
import { MenuIcon, CloseIcon } from './Icons';
import ScrollIndicator from './ScrollIndicator';

const NavLink: React.FC<{ item: NavLinkItem; isActive: boolean; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ item, isActive, onClick }) => (
    <a
        href={item.href}
        onClick={onClick}
        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-primary hover:text-accent hover:bg-white/10'}`}
    >
        {item.label}
        {isActive && (
            <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-accent"
                style={{ backgroundColor: THEME.accent }}
            />
        )}
    </a>
);


const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            const sections = NAV_LINKS.map(link => document.querySelector(link.href) as HTMLElement);
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        setMenuOpen(false);
    };

    return (
        <>
            <ScrollIndicator />
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A192F]/90 backdrop-blur-md shadow-lg border-b border-[#233554]' : 'bg-transparent border-b border-transparent'}`}>
                <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                    <a href="#pendahuluan" onClick={handleLinkClick} className="text-2xl font-bold transition-colors" style={{ color: THEME.text.primary, }}>
                        Kripto<span style={{ color: THEME.accent }}>Interaktif</span>
                    </a>

                    <div className="hidden lg:flex items-center space-x-2">
                        {NAV_LINKS.map(link => (
                            <NavLink key={link.href} item={link} isActive={activeSection === link.href.substring(1)} onClick={handleLinkClick} />
                        ))}
                    </div>

                    <a href="#pendahuluan" onClick={handleLinkClick} className="hidden lg:block bg-accent text-primary-bg font-semibold px-6 py-2 rounded-full border-2 border-accent transition-all duration-300 hover:bg-transparent hover:text-accent hover:shadow-[0_0_15px_rgba(100,255,218,0.5)]">
                        Mulai Jelajah
                    </a>
                    
                    <button onClick={() => setMenuOpen(!isMenuOpen)} className="lg:hidden z-50 text-2xl" style={{color: THEME.text.primary}}>
                       {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </nav>
            </header>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 top-0 bg-[#112240]/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                 <div className="flex flex-col items-center justify-center h-full pt-20">
                    <nav className="flex flex-col items-center space-y-6">
                        {NAV_LINKS.map(link => (
                             <a key={link.href} href={link.href} onClick={handleLinkClick} className={`text-2xl font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-primary'}`}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                     <a href="#pendahuluan" onClick={handleLinkClick} className="mt-12 bg-accent text-primary-bg font-semibold px-8 py-3 rounded-full border-2 border-accent transition-all duration-300 hover:bg-transparent hover:text-accent">
                        Mulai Jelajah
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
