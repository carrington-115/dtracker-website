"use client";

import { worksType } from "@/globaltypes";
import { colors, textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName({
  contentImage,
  title,
  stepsContent,
}: worksType) {
  return (
    <Container style={{ display: "flex" }}>
      <img src={contentImage} alt="content image" />
      <div className="content">
        <h2
          style={{
            ...textFontStyles.headline.headlineLargeBold,
            fontWeight: "bold",
            color: colors.onPrimaryContainer,
          }}
        >
          {title}
        </h2>
        <div className="grid-steps">
          {stepsContent.map(({ title, step }, index) => (
            <div className="step-style" key={index}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px 10px",
                  borderRadius: "100%",
                  backgroundColor: colors.onPrimaryContainer,
                }}
              >
                <p
                  style={{
                    ...textFontStyles.body.bodyLargeRegular,
                    color: "white",
                  }}
                >
                  {index + 1}
                </p>
              </span>
              <div className="text-content">
                <h3
                  style={{
                    ...textFontStyles.title.titleLargeBold,
                    color: colors.onPrimaryContainer,
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    ...textFontStyles.body.bodyLargeRegular,
                    color: colors.onPrimaryContainer,
                  }}
                >
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 80%;
  gap: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 35%;
  }
  .content {
    display: flex;
    flex-direction: column;
    h2 {
    }
    .grid-steps {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 22px;
      column-gap: 20px;
      padding: 20px 0px;
      .step-style {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        .text-content {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
    width: 90%;
    img {
      width: 85%;
    }
    .content {
      align-items: center;
      .grid-steps {
        column-gap: 10px;
        .step-style {
          gap: 10px;
        }
      }
    }
  }
`;
