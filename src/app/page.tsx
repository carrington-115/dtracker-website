"use client";
import styled from "styled-components";
import { FeaturesSection, Header, Hero, WorkElement } from "@/components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <FeaturesSection />
      <WorkElement />
      <section className="money-section">
        <h1>
          How do I make Money on <strong>DTRACKER</strong>
        </h1>
      </section>
    </Container>
  );
}

const Container = styled.section``;
