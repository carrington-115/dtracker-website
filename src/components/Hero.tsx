"use client";

import React from "react";
import styled from "styled-components";
import { HeroContent } from ".";

export default function componentName() {
  return (
    <Container>
      <HeroContent />
      <img src="/images/hero-image.svg" alt="hero image" />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 10px 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 55%;
  }
`;
