"use client";
import styled from "styled-components";
import { FeaturesSection, Header, Hero } from "@/components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <FeaturesSection />
    </Container>
  );
}

const Container = styled.section``;
