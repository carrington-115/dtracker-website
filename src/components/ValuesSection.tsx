"use client";

import { valueContents } from "@/constants";
import React from "react";
import styled from "styled-components";
import { ValuesElement } from ".";

export default function componentName() {
  return (
    <Container>
      <h1>
        Why should I use <strong>DTRACKER</strong>
        <div className="inner-container">
          {valueContents.map((props, index) => (
            <ValuesElement {...props} key={index} />
          ))}
        </div>
      </h1>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  gap: 40px;
  width: 100%;
  .inner-container {
    width: 80%;
    display: flex;
    gap: 50px;
  }
`;
