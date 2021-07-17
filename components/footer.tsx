import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "../modules/index/social-icons";
import Logo from "../public/logo.png";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <Container className="w-5/6">
        <Image
          src={Logo}
          height="75"
          width="175"
          alt="World of CryptoPups"
          placeholder="blur"
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 text-sm">
          <div className="flex flex-wrap items-start">
            <div className="">
              <h5 className="text-gray-600 font-medium uppercase tracking-wide">
                Pages
              </h5>
              <ul className="text-gray-100">
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Home">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/gallery">
                    <a className="hover:text-white" title="Goto Gallery">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/blog">
                    <a className="hover:text-white" title="Goto Blog">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/contact-us">
                    <a className="hover:text-white" title="Goto Us">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mx-12 md:mx-20 lg:mx-32">
              <h5 className="text-gray-600 font-medium uppercase tracking-wide">
                Social Media
              </h5>
              <ul className="text-gray-100">
                {SocialLinks.map((s, index) => (
                  <li className="my-1" key={index}>
                    <a
                      className="hover:text-white"
                      title={`Goto ${s.name}`}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-gray-600 font-medium uppercase tracking-wide">
                Others
              </h5>
              <ul className="text-gray-100">
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Development">
                      Leaderboard
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/development">
                    <a className="hover:text-white" title="Goto Development">
                      Development
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://discord.io/worldofcryptopups"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-800 duration-300 text-gray-100 py-2 lg:py-3 px-8 rounded-full"
            >
              <FontAwesomeIcon className="text-2xl mr-2" icon={faDiscord} />
              Join Our Clubhouse
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />

        <div className="text-sm text-gray-200 flex items-center justify-between">
          <p className="tracking-wider">
            All Rights Reserved | &copy; {new Date().getFullYear()}
          </p>
          <p className="tracking-wider">World of CryptoPups</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
