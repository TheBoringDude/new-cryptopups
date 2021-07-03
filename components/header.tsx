import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="py-4">
      <Container className="w-11/12 text-center">
        <ul className="flex items-center justify-center">
          <li className="px-8 py-2">
            <Link href="/">
              <a>Lorem Ipsum</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a>Lorem Ipsum</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a>Lorem Ipsum</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a>Lorem Ipsum</a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
