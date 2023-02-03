import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navBar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "active-border";
    } else "";
  }

  return (
    <div>
      <section className="bg-dark text-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
            <Link className="navbar-brand fs-4" href="/">
              <span className="text-danger fw-bold fs-3">E</span>{" "}
              <span className="text-white">- Commerce</span>
            </Link>
            <div className="d-flex gap-4 align-items-center list-style-none">
              <button className="text-white btn shadow-none">
                <i className="bi bi-cart"></i>
              </button>
              <button className="text-white btn shadow-none">
                <i className="bi bi-search"></i>
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 align-items-center ">
                <li className={isActive("/login")}>
                  <Link
                    href="/login"
                    className="nav-link text-decoration-none text-white"
                  >
                    Login
                  </Link>
                </li>
                /
                <li className={isActive("/signup")}>
                  <Link
                    href="/signup"
                    className="nav-link text-decoration-none text-white"
                  >
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default navBar;
