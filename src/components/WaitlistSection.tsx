"use client";

import { colors, textFontStyles } from "@/styles";
import React from "react";
import styled from "styled-components";
import { Buttons } from ".";
import { useRouter } from "next/navigation";
import { handleOpenWaitlist } from "@/functions.config";

export default function componentName() {
  const router = useRouter();

  return (
    <Container>
      <section className="inner-container">
        <div className="content">
          <h3
            style={{
              ...textFontStyles.headline.headlineLargeBold,
              fontWeight: "bold",
            }}
          >
            Join the Waitlist
          </h3>
          <p className="text-presentation">
            Revolutionize waste management in your community. DTRACKER is your
            all-in-one solution for simplifying trash disposal and promoting
            sustainability.
          </p>
          <ul>
            <p
              style={{
                margin: "5px 0px",
              }}
            >
              Why join the waitlist:
            </p>
            <li>Early Access to Our Platform</li>
            <li>Exclusive Updates</li>
            <li>A Greener Future</li>
          </ul>
          <section className="btn-container">
            <Buttons
              name="Join the Waitlist"
              bgColor={colors.primaryColor}
              fgColor="white"
              hbgColor={colors.onPrimaryContainer}
              hfgColor="white"
              action={() => handleOpenWaitlist()}
            />
          </section>
        </div>
        <img src="/images/waitlist.png" alt="waitlist image" />
      </section>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  background-color: ${colors.TextureContainerColor};
  .inner-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
      display: flex;
      flex-direction: column;
      width: 40%;
      ul {
        li {
          list-style-type: disc;
          font-size: 20px;
        }
        p {
          font-size: 21px;
        }
      }
      .btn-container {
        margin: 15px 0px;
        width: 100%;
      }
      .text-presentation {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 599px) {
    padding: 50px 0px;
    .inner-container {
      flex-direction: column;
      width: 80%;
      gap: 52px;
      .content {
        width: 100%;
        .btn-container {
          margin-top: 30px;
        }
      }
    }
  }
`;
