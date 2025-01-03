"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MenuLink } from "..";

export default function componentName() {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const router = useRouter();

  const setSmoothNavigation = (linkId: string) => {
    const id = linkId.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowMenu = () => {
    setMenuClicked(!menuClicked);
  };

  const handleCloseMenu = () => {
    setMenuClicked(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
      setScrolling(scrollPos > 50);
    };
    if (typeof window !== undefined) {
      handleScroll();
    }
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }
    setIsClient(true);
  }, [scrollPos, scrolling]);

  if (!isClient) return null;
  return (
    <>
      <MenuLink show={menuClicked} setShowFalse={handleCloseMenu} />
      <Container
        style={{
          position: scrolling ? "fixed" : "relative",
          transition: scrolling
            ? "all 1s 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            : "none",
          background: scrolling ? "rgba(255, 255, 255, 0.50)" : "white",
          backdropFilter: "blur(10px)",
          height: scrolling ? "8%" : "auto",
          right: 0,
          left: 0,
          top: 0,
        }}
      >
        <img
          src="/images/full-logo.svg"
          alt="logo"
          style={{ width: "138px" }}
        />
        <button className="menu-icon" type="button" onClick={handleShowMenu}>
          <span
            className="top"
            style={{
              transform: menuClicked ? "rotateZ(45deg)" : "none",
              transition: "all 250ms 250ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          />
          <span
            className="bottom"
            style={{
              transform: menuClicked
                ? "rotateZ(-45deg) translate(8px, -11px)"
                : "none",
              transition: "all 250ms 250ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          />
        </button>
      </Container>
    </>
  );
}

const Container = styled.header`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  .menu-icon {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    span,
    .top,
    .bottom {
      width: 35px;
      height: 2.5px;
      background-color: black;
    }
  }
`;
