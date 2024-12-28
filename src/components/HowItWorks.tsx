"use client";

import React from "react";
import styled from "styled-components";

interface worksType {
  contentImage: string;
  title: string;
  stepsContent: { title: string; step: string }[];
}

export default function componentName({
  contentImage,
  title,
  stepsContent,
}: worksType) {
  return (
    <Container>
      <img src={contentImage} alt="content image" />
      <div className="content">
        <h2>{title}</h2>
        <div className="grid-steps">
          {stepsContent.map(({ title, step }, index) => (
            <div className="step-style">
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
`;
