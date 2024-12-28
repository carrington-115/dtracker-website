"use client";
import { linkType } from "@/globaltypes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { headerLinks } from "@/constants";
import { Buttons } from ".";
import { useRouter } from "next/navigation";
import { colors } from "@/styles";

export default function componentName() {
  const router = useRouter();
  return (
    <Container>
      <img src="/images/full-logo.svg" alt="logo" />
      <section>
        {headerLinks.map((elementProps: linkType, index) => (
          <LinkElement {...elementProps} key={index} />
        ))}
      </section>
      <div className="btns-container">
        {[
          {
            name: "Waitlist",
            fgColor: "transparent",
            bgColor: "#000000",
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
  return <LinkContainer href={link}>{name}</LinkContainer>;
};

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 90px;
  align-items: center;
  height: fit-content;
  .btns-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

const LinkContainer = styled(Link)``;
