export const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE|ERROR|SUCCESS)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  // console.log("====================================");
  // console.log(["FAILURE", "ERROR"].includes(requestState), requestState);
  // console.log("====================================");
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
    //      else clear errorMessage when receiving GET_TODOS_REQUEST
    [requestName.toLowerCase()]: ["FAILURE", "ERROR"].includes(requestState)
      ? payload?.message
      : "",
  };
};

// api/selectors.js
// import _ from "lodash";
// export const createErrorMessageSelector = (actions) => (state) => {
//   // returns the first error messages for actions
//   // * We assume when any request fails on a page that
//   //   requires multiple API calls, we shows the first error
//   return (
//     _(actions)
//       .map((action) => _.get(state, `api.error.${action}`))
//       .compact()
//       .first() || ""
//   );
// };
