"use client";

import styled from "styled-components";
import React from "react";
import { colors, textFontStyles } from "@/styles";
import { moneyElements } from "@/constants";
import { MoneyComponent } from ".";

export default function componentName() {
  return (
    <>
      <Container className="money-section">
        <h1
          style={{
            ...textFontStyles.display.displayMediumBold,
            fontWeight: "bold",
          }}
        >
          How do I make Money on
          <strong style={{ color: colors.primaryColor }}> DTRACKER</strong>
        </h1>
        <div className="inner-container">
          {moneyElements.map((props, index) => (
            <MoneyComponent {...props} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  width: 100%;
  .inner-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }
`;
