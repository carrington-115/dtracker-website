"use client";

import { valueContents } from "@/constants";
import React from "react";
import styled from "styled-components";
import { ValuesElement } from ".";
import { colors, textFontStyles } from "@/styles";

export default function componentName() {
  return (
    <Container id="benefits">
      <h1
        style={{
          ...textFontStyles.display.displayMediumBold,
          fontWeight: "bold",
        }}
      >
        Why should I use
        <strong style={{ color: colors.primaryColor }}> DTRACKER</strong>
      </h1>
      <div className="values-container">
        {valueContents.map((props, index) => (
          <ValuesElement {...props} key={index} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  gap: 40px;
  width: 100%;
  .values-container {
    width: 80%;
    display: flex;
    gap: 50px;
  }
`;
