import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ToggleTheme"

const App = () => {
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        document.body.className = theme; // Apply theme globally
    }, [theme]);

    return (
        <div className="app">
            <h1>Theme Toggle with Redux</h1>
            <ThemeToggle />
        </div>
    );
};

export default App;
