"use client";
import logo from "@/public/shared/logo.svg";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { Navbar } from "../navbar";
import hamburger from "@/public/shared/icon-hamburger.svg";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <header className={style.header}>
      <div className={style["logo-wrapper"]}>
        <Link href="/">
          {" "}
          <Image src={logo} alt="Space Tourism Logo" width={48} height={48} />
        </Link>
        <div className={style.line}></div>
      </div>
      <button className={style.hamburger} onClick={toggle}>
        <Image src={hamburger} alt="Hamburger icon" />
      </button>
      <Navbar isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
