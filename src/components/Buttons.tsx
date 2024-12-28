import React from "react";
import styled from "styled-components";
import { btnsType } from "@/globaltypes";
import { textFontStyles } from "@/constants";

export default function componentName({
  icon,
  name,
  bgColor,
  fgColor,
  action,
}: btnsType) {
  return (
    <Container
      style={{
        background: bgColor,
        color: fgColor,
      }}
      onClick={action}
    >
      {icon && icon}
      <p style={{ ...textFontStyles.body.bodyLargeRegular, color: fgColor }}>
        {name}
      </p>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 30px;
  p {
  }
`;
