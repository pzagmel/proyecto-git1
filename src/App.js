import React, { useState } from "react";
import Hijo from "./Components/Hijo";

export const userContext = React.createContext();

function App() {

  const [user, setUser] = useState(null);

  const cambiaLogin = () => {
    if (user) {
      setUser(null);
    }else{
      setUser({
        name:"Pedro",
        email: "pedro@mail.com"
      });
    }
  }

  return (
    <userContext.Provider value={user}>
      <button onClick={cambiaLogin}>Cambia Login</button>
      <div className="App">
        <Hijo />
      </div>
    </userContext.Provider>
  );
}

export default App;
