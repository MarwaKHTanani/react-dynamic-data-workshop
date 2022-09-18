import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    hello:
      "Let's get started! You can delete this state as you won't need it going forward.",
  });

  return <div>{state.hello}</div>;
};

export default App;
