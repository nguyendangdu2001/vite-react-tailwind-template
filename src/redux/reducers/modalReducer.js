export const modalReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(OPEN|CLOSE)_(.*)_(MODAL)/.exec(type);

  //not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestState, requestName] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName.toLowerCase()]: requestState === "OPEN",
  };
};
export const createLoadingSelector = (actions) => (state) => {
  // returns true only when all actions is not loading
  return actions?.some((action) => state.loading?.[action?.toLowerCase()]);
};
