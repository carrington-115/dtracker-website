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
    </Container>
  );
}

const Container = styled.section``;
