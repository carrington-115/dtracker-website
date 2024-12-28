"use client";

import { cardsElementType } from "@/globaltypes";
import { textFontStyles } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function componentName({
  actionLink,
  imgLink,
  title,
  body,
  bgColor,
  fgColor,
}: cardsElementType) {
  return (
    <Container
      href={actionLink}
      style={{ color: fgColor, background: bgColor }}
    >
      <img src={imgLink} alt="image link" />
      <div className="content">
        <h3
          style={{
            ...textFontStyles.headline.headlineMediumBold,
            fontWeight: "bold",
            lineHeight: "normal",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            ...textFontStyles.title.titleLargeRegular,
            lineHeight: "normal",
          }}
        >
          {body}
        </p>
      </div>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 30px;
  align-items: center;
  img {
    width: 80%;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
