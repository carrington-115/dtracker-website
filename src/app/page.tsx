"use client";
import styled from "styled-components";
import {
  FeaturesSection,
  Header,
  Hero,
  MoneyComponent,
  MoneySection,
  PartnerSection,
  ValuesSection,
  WaitlistSection,
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
      <WaitlistSection />
      <PartnerSection />
    </Container>
  );
}

const Container = styled.section``;
