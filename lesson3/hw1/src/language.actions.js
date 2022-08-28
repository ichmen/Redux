export const SET = "LANGUAGE/SET";

export function setLanguage(language) {
  return {
    type: SET,
    payload: { language },
  };
}
