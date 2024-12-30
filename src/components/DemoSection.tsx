"use client";

import React from "react";
import styled from "styled-components";
import { Buttons } from ".";
import { colors, textFontStyles } from "@/styles";
import { useRouter } from "next/navigation";

export default function componentName() {
  const router = useRouter();
  return (
    <>
      <Container>
        <section className="inner-container">
          <div className="content">
            <h2
              style={{
                ...textFontStyles.headline.headlineLargeBold,
                fontWeight: "bold",
              }}
            >
              Book a
              <strong style={{ color: colors.primaryColor }}> Demo</strong>
            </h2>
            <p style={{ ...textFontStyles.title.titleLargeRegular }}>
              See how DTracker can revolutionize waste management for you or
              your business.
            </p>
            <ul>
              <li style={{ ...textFontStyles.title.titleLargeRegular }}>
                Personalized walkthrough of our features.
              </li>
              <li style={{ ...textFontStyles.title.titleLargeRegular }}>
                Live Q&A session with our team.
              </li>
            </ul>
            <Buttons
              name="Book a Demo"
              bgColor={colors.primaryColor}
              fgColor="white"
              hbgColor={colors.onPrimaryContainer}
              hfgColor="white"
              action={() => router.push("/#waitlist")}
            />
          </div>
          <img src="/images/demo.png" alt="demo image" />
        </section>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .inner-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;
      ul {
        li {
          list-style-type: disc;
        }
      }
    }
    img {
      width: 65%;
    }
  }

  @media (min-width: 320px) and (max-width: 599px) {
    .inner-container {
      flex-direction: column;
      gap: 20px;
      img {
        width: 100%;
      }
    }
  }
`;
