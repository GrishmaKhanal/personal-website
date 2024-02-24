import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
};

export default Layout;
