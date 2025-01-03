"use client";

import { moneyComponentTypes } from "@/globaltypes";
import { textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName({
  image,
  content,
  bgColor,
  fgColor,
}: moneyComponentTypes) {
  return (
    <Container>
      <img src={image} alt="image element" />
      <div style={{ backgroundColor: bgColor }}>
        <p style={{ ...textFontStyles.body.bodyLargeMedium, color: fgColor }}>
          {content}
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
  }

  @media (min-width: 320px) and (max-width: 599px) {
    div {
      padding: 30px 15px;
    }
  }
`;
