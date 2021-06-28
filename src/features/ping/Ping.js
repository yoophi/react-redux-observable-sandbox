import React from "react";
import { selectPing, ping, pong } from "./pingSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Ping.module.css";

export const Ping = () => {
  const isPinging = useSelector(selectPing);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span className={styles.value}>{isPinging ? "PING" : "PONG"}</span>
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(ping());
          }}
        >
          PING
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(pong());
          }}
        >
          PONG
        </button>
      </div>
    </div>
  );
};
