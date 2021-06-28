import { combineEpics, ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { ping, pong } from "../features/ping/pingSlice";

export const pingEpic = (action$) => {
  return action$.pipe(ofType(ping), delay(1000), mapTo(pong()));
};

export const rootEpic = combineEpics(pingEpic);
