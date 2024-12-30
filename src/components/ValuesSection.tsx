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
  h1 {
    font-size: 45px;
  }
  .values-container {
    width: 80%;
    display: flex;
    gap: 50px;
  }

  @media (min-width: 320px) and (max-width: 599px) {
    h1 {
      font-size: 32px;
      text-align: center;
    }
    .values-container {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }
`;
