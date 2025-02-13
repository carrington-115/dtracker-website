"use client";
import React from "react";
import styled from "styled-components";
import { Buttons } from ".";
import { colors, textFontStyles } from "@/styles";
import { useRouter } from "next/navigation";
import { handleBookDemo, handleOpenWaitlist } from "@/functions.config";

export default function componentName() {
  const router = useRouter();

  return (
    <Container>
      <div className="content">
        <h1>
          Transform{" "}
          <strong style={{ color: colors.primaryColor }}>
            Waste Management{" "}
          </strong>
          with Ease
        </h1>
        <p style={{ ...textFontStyles.title.titleLargeRegular }}>
          Empowering communities to manage waste and recycle smarter.
        </p>
      </div>
      <div className="btns-container">
        {[
          {
            name: "Book a Demo",
            fgColor: "#ffffff",
            bgColor: colors.primaryColor,
            action: () => handleBookDemo(),
            hbgColor: colors.onPrimaryContainer,
            hfgColor: "#ffffff",
          },
          {
            name: "Join the Waitlist",
            fgColor: colors.onPrimaryContainer,
            bgColor: colors.TextureContainerColor,
            action: () => handleOpenWaitlist(),
            hbgColor: colors.primaryContainer,
            hfgColor: colors.onPrimaryContainer,
          },
        ].map((props, index) => (
          <Buttons {...props} key={index} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 40%;

  .content {
    display: inherit;
    flex-direction: column;
    gap: 20px;
    h1 {
      line-height: normal;
      font-weight: bold;
      font-size: 57px;
    }
  }
  .btns-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 320px) and (max-width: 599px) {
    width: 90%;
    .btns-container {
      width: 100%;
      justify-content: space-around;
    }
    .content {
      h1 {
        font-size: 45px;
      }
    }
  }
`;
