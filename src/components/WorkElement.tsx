"use client";

import React from "react";
import styled from "styled-components";
import HowItWorks from "./HowItWorks";
import { colors, textFontStyles } from "@/styles";

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
        agent={false}
        stepsContent={[
          {
            title: "Sign Up",
            step: "Create your account in minutes by providing basic details and verifying your email or phone number.",
          },
          {
            title: "Connect with Local Agents",
            step: "Use our app to find verified agents or recyclers nearby for easy waste collection or recycling services.",
          },
          {
            title: "Schedule and manage Pickups",
            step: "Set pickup times, track the status of your request, and make payments directly through the app.",
          },
          {
            title: "Track Progress",
            step: "View your waste management history, get recycling insights, and see your contribution to a greener environment.",
          },
        ]}
      />
      <HowItWorks
        contentImage="/images/agent-image.png"
        title="As an Agent"
        agent={true}
        stepsContent={[
          {
            title: "Register as an agent",
            step: "Sign up to become a DTracker agent by filling out the agent application form and providing necessary documents.",
          },
          {
            title: "Verification and Onboarding",
            step: "Complete our simple verification process and attend a short onboarding session to learn how to use the platform.",
          },
          {
            title: "Access leads and Jobs",
            step: "Get notified about waste collection and recycling opportunities in your area through the app.",
          },
          {
            title: "Earn and Track income",
            step: "Manage your earnings directly on the platform with built-in financial tools to help you grow your business.",
          },
          {
            title: "Build your Reputation",
            step: "Deliver excellent service and receive ratings and reviews to attract more clients.",
          },
        ]}
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
