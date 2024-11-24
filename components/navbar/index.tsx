"use client";

import { useEffect, useRef } from "react";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import closeIcon from "@/public/shared/icon-close.svg";
import style from "./style.module.scss";
import { usePathname } from "next/navigation";

interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { path: "/", number: "00", label: "HOME" },
  { path: "/destination", number: "01", label: "DESTINATION" },
  { path: "/crew", number: "02", label: "CREW" },
  { path: "/technology", number: "03", label: "TECHNOLOGY" },
] as const;

export const Navbar: FC<NavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      ref={navbarRef}
      className={`${style.navbar} ${isOpen ? style.isOpen : ""}`}
    >
      <button
        className={style.close_btn}
        onClick={onClose}
        aria-label="Close navigation menu"
      >
        <Image src={closeIcon} alt="Close icon" />
      </button>
      <nav>
        <ul className={style.nav_list}>
          {NAV_ITEMS.map(({ path, number, label }) => (
            <li
              key={path}
              onClick={onClose}
              className={pathname === path ? style.active : ""}
            >
              <Link href={path}>
                <span>{number}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
