import React, { useState } from "react";
import styled from "styled-components";
import { btnsType } from "@/globaltypes";
import { textFontStyles } from "../styles";

export default function componentName({
  icon,
  name,
  bgColor,
  fgColor,
  hbgColor,
  hfgColor,
  action,
}: btnsType) {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Container
      style={{
        background: isHover ? hbgColor : bgColor,
        color: isHover ? hfgColor : fgColor,
      }}
      onClick={action}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon && icon}
      <p style={{ ...textFontStyles.body.bodyLargeRegular }}>{name}</p>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 30px;
  gap: 12px;
`;
