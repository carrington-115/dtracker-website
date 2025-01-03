"use client";
import styled from "styled-components";
import {
  DemoSection,
  FeaturesSection,
  Header,
  Hero,
  MobileHeader,
  MoneySection,
  Newsletter,
  PartnerSection,
  ValuesSection,
  WaitlistSection,
  WorkElement,
} from "@/components";

export default function Home() {
  return (
    <Container>
      <Header />
      <MobileHeader />
      <Hero />
      <FeaturesSection />
      <WorkElement />
      <MoneySection />
      <ValuesSection />
      <WaitlistSection />
      <PartnerSection />
      <DemoSection />
      <Newsletter />
    </Container>
  );
}

const Container = styled.section``;
