import React, { useState } from "react";
import UserHeader from "./UserHeader";

const App = () => {
  const [state, setState] = useState({
    hello:
      "Let's get started! You can delete this state as you won't need it going forward.",
  });

  return (
    <div>
     <h1>GitHub user card</h1>
      <UserHeader></UserHeader>
    </div>
  );
};

export default App;
