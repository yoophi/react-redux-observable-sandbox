import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCancelled, fetchUserRequest } from "./githubSlice";
import styles from "./Github.module.css";

export const GithubUser = () => {
  const { user, isLoading } = useSelector((state) => state.github);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const fetchUser = useCallback(() => {
    dispatch(fetchUserRequest(username));
  }, [username]);

  return (
    <div>
      <div>
        <span>username: </span>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <button className={styles.button} onClick={fetchUser}>
          fetchUser
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(fetchUserCancelled());
          }}
        >
          Cancel
        </button>
      </div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre className={styles.result}>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
};
