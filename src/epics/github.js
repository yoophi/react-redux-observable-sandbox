import { ofType } from "redux-observable";
import { of, race } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, delay, map, mergeMap, takeUntil } from "rxjs/operators";
import { fetchUserCancelled, fetchUserError, fetchUserRequest, fetchUserSuccess } from "../features/github/githubSlice";

export const githubEpic = (action$, state$) => {	
	return action$.pipe(
	  ofType(fetchUserRequest),
	  mergeMap((action) =>
		race(
		  ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
			delay(1000),
			map(response => fetchUserSuccess(response)),
			takeUntil(action$.pipe(ofType(fetchUserCancelled))),
			catchError(error =>
			  of(fetchUserError(error))
			)
		  )
		)
	  )
	);
  };
