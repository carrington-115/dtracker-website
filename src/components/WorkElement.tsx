"use client";

import React from "react";
import styled from "styled-components";
import HowItWorks from "./HowItWorks";
import { colors, textFontStyles } from "@/styles";
import { agentSteps, userSteps } from "@/constants";

export default function componentName() {
  return (
    <Container id="how-it-works">
      <h1
        style={{
          ...textFontStyles.display.displayMediumBold,
          fontWeight: "bold",
        }}
      >
        How It <strong style={{ color: colors.primaryColor }}>Works</strong>
      </h1>
      <HowItWorks
        contentImage="/images/user-image.png"
        title="As a User"
        stepsContent={userSteps}
      />
      <HowItWorks
        contentImage="/images/agent-image.png"
        title="As an Agent"
        stepsContent={agentSteps}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 25px;
`;
