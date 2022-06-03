import { useState } from "react";
import appContext from "./app-context";

function AppProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <div>
      <appContext.Provider value={{ name, setName }}>
        <div>{children}</div>
      </appContext.Provider>
    </div>
  );
}

export default AppProvider;

// import { useState, useEffect } from "react";
// import appContext, { initialState } from "./app-context";

// function AppProvider({ children }) {
//   const [name, setName] = useState(initialState);

//   // useEffect(() => {
//   //   const storageResult = window.localStorage.getItem("userID");
//   //   // console.log("useEffect");
//   //   storageResult &&
//   //     getUserByID(Number(storageResult))
//   //       .then((result) => {
//   //         setUser(result);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   // }, [setUser]);

//   return (
//     <appContext.Provider value={{ name, setName }}>
//       <div>{children}</div>
//     </appContext.Provider>
//   );
// }

// export default AppProvider;
