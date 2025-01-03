"use client";

import React from "react";
import styled from "styled-components";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { textFontStyles } from "@/styles";

export default function componentName({
  show,
  setShowFalse,
}: {
  show: boolean;
  setShowFalse: any;
}) {
  return (
    <Container
      style={{
        display: show ? "flex" : "none",
        background: "rgba(255, 255, 255, .8)",
        backdropFilter: "blur(10px)",
      }}
    >
      {headerLinks.map(({ link, name }, index) => (
        <Link
          href={link}
          key={index}
          style={{ ...textFontStyles.title.titleLargeMedium }}
          onClick={setShowFalse}
        >
          {name}
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 92%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 15px;
`;
