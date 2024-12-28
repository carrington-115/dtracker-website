"use client";
import styled from "styled-components";
import { Header, Hero } from "@/components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}

const Container = styled.section``;
