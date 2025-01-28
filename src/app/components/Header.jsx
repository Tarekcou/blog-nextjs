"use client";

import Link from "next/link";
import useAuth from "./useAuth";

const Header = () => {
  const { user, isAuthenticated, login, logout, loading } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const menu = (
    <div className="flex gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"login"}>Login</Link>
      <Link href={"logout"}>Logout</Link>
    </div>
  );
  // console.log(useAuth());
  return (
    <div className="bg-base-100 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm"
          >
            {menu}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Blog</a>
      </div>
      <div className="lg:flex hidden navbar-center">
        <ul className="px-1 menu menu-horizontal">{menu}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Header;
