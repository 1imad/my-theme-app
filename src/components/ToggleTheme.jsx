import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            style={{
                padding: "10px 20px",
                background: theme === "light" ? "#333" : "#fff",
                color: theme === "light" ? "#fff" : "#000",
                border: "none",
                cursor: "pointer",
            }}
        >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;
