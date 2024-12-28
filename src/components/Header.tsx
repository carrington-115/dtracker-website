"use client";
import { linkType } from "@/globaltypes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { headerLinks } from "@/constants";

export default function componentName() {
  return (
    <Container>
      <img src="/images/full-logo.svg" alt="logo" />
      <section>
        {headerLinks.map((elementProps: linkType, index) => (
          <LinkElement {...elementProps} key={index} />
        ))}
      </section>
    </Container>
  );
}

const LinkElement = ({ link, name }: linkType) => {
  return <LinkContainer href={link}>{name}</LinkContainer>;
};

const Container = styled.header``;

const LinkContainer = styled(Link)``;
