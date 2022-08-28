import { SET } from "./language.action";

export function languageReducer(state = "en", action) {
  switch (action.type) {
    case SET:
      return action.payload.language;

    default:
      return state;
  }
}
