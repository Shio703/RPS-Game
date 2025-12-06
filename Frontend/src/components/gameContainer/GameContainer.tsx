"use client";
import React, { useEffect, useState } from "react";
import styles from "./GameContainer.module.css";

interface apiResponse {
  message: string;
  code: number;
}

const GameContainer = () => {
  const [computerValue, setComputerValue] = useState<apiResponse | null>(null);
  const [userValue, setUserValue] = useState<String>("");

  const getComputerMove = () => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => {
        setComputerValue(data);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  };

  useEffect(() => {
    getComputerMove();
  }, []);

  const values = ["Rock", "Paper", "Scissor"];
  // rock
  values[0] > values[1];
  values[0] < values[2];

  // paper
  values[1] < values[2];
  values[1] > values[0];

  // scissor
  values[2] > values[1];
  values[2] < values[0];

  return (
    <div className={styles.gameCont}>
      <div className={styles.computerResultCont}>
        <h2>{computerValue?.message || "Loading..."}</h2>
      </div>
      <div className={styles.userResultCont}>
        <h2>{userValue ? userValue : "Choose Your Value"}</h2>

        <div className={styles.buttonContainer}>
          {values.map((value, index, array) => (
            <button
              key={index}
              className={styles.valueButton}
              onClick={() => setUserValue(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
