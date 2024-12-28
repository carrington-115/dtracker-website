"use client";
import styled from "styled-components";
import {
  FeaturesSection,
  Header,
  Hero,
  MoneyComponent,
  WorkElement,
} from "@/components";
import { colors, textFontStyles } from "@/styles";
import { moneyElements } from "@/constants";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <FeaturesSection />
      <WorkElement />
      <section className="money-section">
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
      </section>
    </Container>
  );
}

const Container = styled.section`
  .money-section {
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
  }
`;
