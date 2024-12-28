"use client";
import { linkType } from "@/globaltypes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { headerLinks } from "@/constants";
import { Buttons } from ".";
import { useRouter, usePathname } from "next/navigation";
import { colors } from "@/styles";

export default function componentName() {
  const router = useRouter();

  return (
    <Container>
      <img src="/images/full-logo.svg" alt="logo" />
      <nav>
        {headerLinks.map((elementProps: linkType, index) => (
          <LinkElement {...elementProps} key={index} />
        ))}
      </nav>
      <div className="btns-container">
        {[
          {
            name: "Waitlist",
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
            hfgColor: colors.primaryContainer,
          },
        ].map((props, index) => (
          <Buttons {...props} key={index} />
        ))}
      </div>
    </Container>
  );
}

const LinkElement = ({ link, name }: linkType) => {
  const location = usePathname();

  return (
    <LinkContainer
      href={link}
      style={{ fontWeight: location == link ? "bold" : "normal" }}
    >
      {name}
    </LinkContainer>
  );
};

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 90px;
  align-items: center;
  height: fit-content;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
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
