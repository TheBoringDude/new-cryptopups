import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Container from './container';
import MobileMenu from './mobile-menu';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    if (!headerRef.current) return;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      headerRef.current.classList.remove('py-3');
      headerRef.current.classList.add('py-1');
    } else {
      headerRef.current.classList.add('py-3');
      headerRef.current.classList.remove('py-1');
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="py-3 bg-black/50 hover:bg-black duration-500 fixed w-full z-40"
    >
      <Container className="w-11/12 text-center">
        {/* <Link href="/">
          <a className="flex">
            <Image src={Logo} height="30" width="130" alt="World of Cryptopups" />
          </a>
        </Link> */}

        <MobileMenu />

        <ul className="hidden sm:flex items-center justify-center text-stone-300 text-sm font-semibold">
          <li className="px-6 lg:px-8 xl:px-10 py-2">
            <Link href="/">
              <a className="tracking-wide hover:text-white" title="Home">
                Home
              </a>
            </Link>
          </li>
          <li className="px-6 lg:px-8 xl:px-10 py-2">
            <Link href="/gallery">
              <a className="tracking-wide hover:text-white" title="Gallery">
                Gallery
              </a>
            </Link>
          </li>
          <li className="px-6 lg:px-8 xl:px-10 py-2">
            <Link href="/pup-squad">
              <a className="tracking-wide hover:text-white" title="Gallery">
                Pup Squad
              </a>
            </Link>
          </li>
          {/* 
          // TODO: For Consideration
          <li className="px-4 md:px-6 lg:px-8 py-2">
            <Link href="/blog">
              <a className="tracking-wide hover:text-white" title="Goto Blog">
                Blog
              </a>
            </Link>
          </li> */}
          <li className="px-6 lg:px-8 xl:px-10 py-2">
            <a
              className="tracking-wide hover:text-white"
              title="Join the Community"
              href="https://discord.io/worldofcryptopups"
              target="_blank"
              rel="noreferrer"
            >
              Community
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
