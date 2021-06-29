import { combineEpics } from "redux-observable";
import { githubEpic } from './github';
import { pingEpic } from './ping';


export const rootEpic = combineEpics(githubEpic, pingEpic);
