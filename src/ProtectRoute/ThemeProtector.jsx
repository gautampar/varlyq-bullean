import { useContext, useEffect } from "react";
import { darkThemeContext } from "../context/darkTheme";

export const ThemeProtector = ({ children }) => {
  const { theme, setTheme } = useContext(darkThemeContext);
  useEffect(() => {
    const theme = localStorage.getItem("theme") 
    if(theme){
      setTheme(theme);
    }
  }, [theme]);
    return children;
};
