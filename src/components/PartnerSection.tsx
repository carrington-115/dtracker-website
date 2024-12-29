"use client";

import { colors, textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName() {
  return (
    <>
      <Container>
        <section className="inner-section">
          <h1
            style={{
              ...textFontStyles.display.displayMediumBold,
              fontWeight: "bold",
            }}
          >
            Proudly
            <strong style={{ color: colors.primaryColor }}> Backed by</strong>
          </h1>
          <div className="inner-grid">
            {[
              "/images/icons/bevisioneers.svg",
              "/images/icons/athena.svg",
              "/images/icons/microsoft.svg",
              "/images/icons/fi-lagos.svg",
              "/images/icons/tic-sap.svg",
              "/images/icons/mecitech.svg",
            ].map((props, index) => (
              <img src={props} key={index} alt="icon logo" />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  .inner-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 80%;
    .inner-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
      justify-items: center;
      align-items: center;
    }
  }
`;
