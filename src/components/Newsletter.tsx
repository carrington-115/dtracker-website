"use client";

import { colors, textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName() {
  return (
    <>
      <Container>
        <section className="inner-container">
          <div className="content">
            <h3
              style={{
                ...textFontStyles.headline.headlineLargeBold,
                fontWeight: "bold",
              }}
            >
              Join our{" "}
              <strong style={{ color: colors.primaryColor }}>Newsletter</strong>
            </h3>
            <p style={{ ...textFontStyles.title.titleLargeRegular }}>
              With DTRACKER, we are dedicated to make waste disposal systems
              reliable and sustainable, and empower communities.
            </p>
          </div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input
              value="Join out Newsletter"
              type="submit"
              className="form-btn"
            />
          </form>
        </section>
      </Container>
    </>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
  .inner-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 45%;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20;
      align-items: center;
      width: 45%;
      input {
        width: 100%;
        padding: 20px 20px;
        border-radius: 10px;
        border: 1px solid rgba(153, 153, 153, 1);
        background-color: white;
        margin-bottom: 20px;
        font-size: 18px;
      }
      .form-btn {
        font-size: 18px;
        width: auto;
        padding: 10px 50px;
        color: white;
        background-color: ${colors.primaryColor};
        border-radius: 100px;
      }
    }
  }
`;
