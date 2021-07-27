import React, { useState, createContext } from 'react';

const Context = createContext({});

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(() => window.sessionStorage.getItem("theme"));

    const toggleTheme = () => {
        if(theme === "light") {
            setTheme("dark");
            window.sessionStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            window.sessionStorage.setItem("theme", "light");
        }
    }

    return (
        <Context.Provider value={{ theme, toggleTheme }}>{children}</Context.Provider>
    )
}

export default Context;
