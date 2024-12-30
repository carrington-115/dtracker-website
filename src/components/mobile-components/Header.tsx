"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function componentName() {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const router = useRouter();

  const setSmoothNavigation = (linkId: string) => {
    const id = linkId.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    <Container
      style={{
        position: scrolling ? "fixed" : "relative",
        transition: scrolling
          ? "all 1s 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          : "none",
        background: scrolling ? "rgba(255, 255, 255, 0.50)" : "white",
        backdropFilter: "blur(10px)",
        right: 0,
        left: 0,
        top: 0,
      }}
    >
      <img src="/images/full-logo.svg" alt="logo" />
      <div className="menu-icon">
        <span className="top" />
        <span className="bottom" />
      </div>
    </Container>
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
    span {
      width: 50px;
      height: 5px;
      background-color: black;
    }
  }
`;
