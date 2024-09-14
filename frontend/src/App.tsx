import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Button onClick={() => setCount((count) => count + 1)}>
            <img src={reactLogo} className="App-logo" alt="logo" />
            <img src={viteLogo} className="App-logo" alt="logo" />
            <p>
                Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
            <p>
                <span>Count: </span>
                <span>{count}</span>
            </p>
        </Button>
    );
}

export default App;
