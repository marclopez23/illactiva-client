import React from "react";
import { useLocation } from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./Navbar.scss";
import { crear, buscar, eventos, perfil, home } from "../../assets/menu/";
const Navbar = () => {
  const location = useLocation();
  const sections = [
    { icon: home, link: "/" },
    { icon: buscar, link: "/buscar" },
    { icon: crear, link: "/crear-evento" },
    { icon: eventos, link: `/eventos/` },
    { icon: perfil, link: "/perfil" },
  ];

  return (
    <section className="navbarContainer">
      <article className="navbar">
        {sections.map(({ icon, link }) => (
          <NavbarItem
            icon={icon}
            link={link}
            key={link}
            active={location.pathname === link}
          />
        ))}
      </article>
    </section>
  );
};

export default Navbar;
