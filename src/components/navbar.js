import React from "react";
import NavItem from "./nav-item";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Finanças
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{ flexGrow: 6 }}></div>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <NavItem href="/home" label="Home" />
          <NavItem href="/user-register" label="Usuários" />
          <NavItem href="/releases" label="Lançamentos" />
          <NavItem href="/login" label="Logout" />

        </ul>
      </div>
    </nav>
  );
}
