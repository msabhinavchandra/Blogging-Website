import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex justify-between mb-12 items-center mt-5">
      <Link to="/" className="decoration-inherit font-bold text-2xl">
        MyBlog
      </Link>
      <nav className="flex gap-x-4">
        <Link to="/login">Login</Link>
        <Link to="/register" className="decoration-inherit">
          Register
        </Link>
      </nav>
    </header>
  );
}

// className="decoration-inherit"
