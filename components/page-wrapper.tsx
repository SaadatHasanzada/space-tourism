"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
interface PageWrapperProps {
  children: React.ReactNode;
}
const pages = [
  {
    path: "/",
    desktop: "/home/background-home-desktop.jpg",
    tablet: "/home/background-home-tablet.jpg",
    mobile: "/home/background-home-mobile.jpg",
  },
  {
    path: "/destination",
    desktop: "/destination/background-destination-desktop.jpg",
    tablet: "/destination/background-destination-tablet.jpg",
    mobile: "/destination/background-destination-mobile.jpg",
  },
  {
    path: "/crew",
    desktop: "/crew/background-crew-desktop.jpg",
    tablet: "/crew/background-crew-tablet.jpg",
    mobile: "/crew/background-crew-mobile.jpg",
  },
  {
    path: "/technology",
    desktop: "/technology/background-technology-desktop.jpg",
    tablet: "/technology/background-technology-tablet.jpg",
    mobile: "/technology/background-technology-mobile.jpg",
  },
];

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [page, setPage] = useState(pages[0]);
  const route = usePathname();
  useEffect(() => {
    const page = pages.find((page) => page.path === route) || pages[0];
    setPage(page);
  }, [route]);

  return (
    <div
      style={{ backgroundImage: `url(${page.desktop})` }}
      className="page-wrapper"
    >
      <style jsx>{`
        @media (max-width: 1024px) {
          .page-wrapper {
            background-image: url(${page.tablet}) !important;
          }
        }
        @media (max-width: 767px) {
          .page-wrapper {
            background-image: url(${page.mobile}) !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
};
