// import { createContext } from "react";
// // import * as React from "react";

// export const initialState = {
//   name: "",
// };

// const appContext = createContext({
//   name: initialState,
//   // setName: () => null,
// });

// export default appContext;

import { createContext } from "react";

// const initialState =

const appContext = createContext({
  name: "trans",
  setName: () => null,
});

export default appContext;
