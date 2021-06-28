import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "./githubSlice";
import styles from "./Github.module.css";

export const GithubUser = () => {
  const { user } = useSelector((state) => state.github);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button className={styles.button} onClick={() => dispatch(fetchUserRequest("yoophi"))}>
          fetchUser
        </button>
      </div>
      <pre className={styles.result}>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
