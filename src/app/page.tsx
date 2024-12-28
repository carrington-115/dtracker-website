"use client";
import styled from "styled-components";
import {
  FeaturesSection,
  Header,
  Hero,
  MoneyComponent,
  MoneySection,
  ValuesSection,
  WorkElement,
} from "@/components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <FeaturesSection />
      <WorkElement />
      <MoneySection />
      <ValuesSection />
    </Container>
  );
}

const Container = styled.section``;
