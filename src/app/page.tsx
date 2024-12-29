"use client";
import styled from "styled-components";
import {
  DemoSection,
  FeaturesSection,
  Header,
  Hero,
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
      <DemoSection />
    </Container>
  );
}

const Container = styled.section``;
