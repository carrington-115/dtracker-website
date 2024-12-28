"use client";

import { colors, textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName() {
  return (
    <Container>
      <div className="title-content">
        <h1
          style={{
            ...textFontStyles.display.displayMediumBold,
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          Most Essen
          <strong
            style={{
              color: colors.secondaryColor,
            }}
          >
            tial Features
          </strong>
        </h1>
        <p
          style={{
            ...textFontStyles.title.titleLargeRegular,
            color: "#525151",
          }}
        >
          Explore an all-in-one platform designed to simplify waste management,
          empower local agents, and foster a greener planet. From tracking waste
          to creating economic opportunities, DTRACKER transforms the way
          individuals and businesses handle recycling and sustainability.
        </p>
      </div>
      <div className="contents-cards"></div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  .title-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    h1,
    p {
      text-align: center;
      line-height: normal;
    }
  }
`;
