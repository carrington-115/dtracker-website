"use client";
import { linkType } from "@/globaltypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { headerLinks } from "@/constants";
import { Buttons } from ".";
import { useRouter, usePathname } from "next/navigation";
import { colors } from "@/styles";

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
        transition: scrolling
          ? "all 1s 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          : "none",
        background: scrolling ? "rgba(255, 255, 255, 0.50)" : "white",
        backdropFilter: "blur(10px)",
        position: scrolling ? "sticky" : "relative",
        top: 0,
        right: 0,
        left: 0,
        padding: scrolling ? "10px 90px" : "20px 90px",
      }}
    >
      <img src="/images/full-logo.svg" alt="logo" />
      <nav>
        {headerLinks.map((elementProps: linkType, index) => (
          <LinkElement
            action={setSmoothNavigation(elementProps.link)}
            {...elementProps}
            key={index}
          />
        ))}
      </nav>
      <div className="btns-container">
        {[
          {
            name: "Join the Waitlist",
            fgColor: colors.onPrimaryContainer,
            bgColor: "transparent",
            action: () => router.push("/"),
            hbgColor: colors.primaryContainer,
            hfgColor: colors.onPrimaryContainer,
          },
          {
            name: "Book a Demo",
            fgColor: "#ffffff",
            bgColor: colors.primaryColor,
            action: () => router.push("/"),
            hbgColor: colors.onPrimaryContainer,
            hfgColor: "#ffffff",
          },
        ].map((props, index) => (
          <Buttons {...props} key={index} />
        ))}
      </div>
    </Container>
  );
}

interface linkElementType {
  link: string;
  name: string;
  action: any;
}

const LinkElement = ({ link, name, action }: linkElementType) => {
  const location = usePathname();

  return (
    <LinkContainer
      href={link}
      style={{ fontWeight: location == link ? "bold" : "normal" }}
      onClick={action}
    >
      {name}
    </LinkContainer>
  );
};

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
  @media (min-width: 320px) and (max-width: 599px) {
    display: none;
  }
  .btns-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

const LinkContainer = styled(Link)`
  &:hover {
    font-weight: bold;
  }
`;
