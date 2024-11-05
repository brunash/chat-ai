import { Outlet, Link } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="tootLayout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>BOBA AI</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
