"use client";
import Link from "next/link";
import style from "./style.module.scss";
import { usePathname } from "next/navigation";
import closeIcon from "@/public/shared/icon-close.svg";
import Image from "next/image";
import { FC } from "react";
import { useRef, useEffect } from "react";
interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar: FC<NavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={navbarRef}
      className={`${style.navbar} ${isOpen ? style.isOpen : ""}`}
    >
      <button className={style.close_btn} onClick={onClose}>
        <Image src={closeIcon} alt="Close icon" />
      </button>
      <ul className={style.nav_list}>
        <li className={pathname === "/" ? style.active : ""}>
          <Link href="/">
            <span>00</span>
            HOME
          </Link>
        </li>
        <li className={pathname === "/destination" ? style.active : ""}>
          <Link href="/destination">
            <span>01</span>
            DESTINATION
          </Link>
        </li>
        <li className={pathname === "/crew" ? style.active : ""}>
          <Link href="/crew">
            <span>02</span>
            CREW
          </Link>
        </li>
        <li className={pathname === "/technology" ? style.active : ""}>
          <Link href="/technology">
            <span>03</span>
            TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  );
};
