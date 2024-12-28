"use client";

import { valueElementtypes } from "@/globaltypes";
import { textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName({
  icon,
  title,
  content,
}: valueElementtypes) {
  return (
    <Container>
      <img src={icon} alt="value icon" />
      <div className="inner-container">
        <h3 style={{ ...textFontStyles.headline.headlineSmallBold }}>
          {title}
        </h3>
        <p style={{ ...textFontStyles.title.titleMediumRegular }}>{content}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  .inner-container {
    display: flex;
    flex-direction: column;
    h3,
    p {
      text-align: center;
    }
  }
`;
