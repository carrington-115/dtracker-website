"use client";

import { colors, textFontStyles } from "@/styles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { doc, setDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import app from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

export default function componentName() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [check, setCheck] = useState<{
    name: boolean;
    email: boolean;
    submitted: boolean;
  }>({
    name: true,
    email: true,
    submitted: false,
  });
  const db = getFirestore(app);
  const router = useRouter();

  const handleSubmitNewsletter = async (event: any) => {
    try {
      event.preventDefault();
      if (email === "" && name === "") {
        setCheck((prev) => {
          return {
            ...prev,
            email: false,
            name: false,
          };
        });

        throw new Error("Email and name field is empty");
      } else if (name === "" && email !== "") {
        setCheck((prev) => {
          return {
            ...prev,
            name: true,
          };
        });
        throw new Error("name field is empty");
      } else if (name !== "" && email === "") {
        setCheck((prev) => {
          return {
            ...prev,
            email: false,
          };
        });
      } else {
        const subscribersList = doc(db, "subscribers", `${name}`);
        await setDoc(subscribersList, {
          name,
          email,
        });
        setCheck((prev) => {
          return {
            ...prev,
            submitted: true,
          };
        });
        if (window !== undefined) window.location.reload();
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (name !== "") {
      setCheck((prev) => {
        return {
          ...prev,
          name: true,
        };
      });
    }

    if (email !== "") {
      setCheck((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
    }
  }, [name, email, check]);

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
          <form onSubmit={handleSubmitNewsletter}>
            <input
              style={{
                borderColor:
                  check.name === false ? "red" : "rgba(153, 153, 153, 1)",
              }}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              style={{
                borderColor:
                  check.email === false ? "red" : "rgba(153, 153, 153, 1)",
              }}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              value="Join out Newsletter"
              type="submit"
              className="form-btn"
              required
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

  @media (min-width: 320px) and (max-width: 599px) {
    .inner-container {
      width: 90%;
      flex-direction: column;
      gap: 50px;
      .content,
      form {
        width: 100%;
      }
    }
  }
`;
