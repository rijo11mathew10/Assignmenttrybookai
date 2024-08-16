import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (newTheme: string) => {
    document.querySelector("html")?.classList.replace(theme, newTheme);

    setTheme(newTheme);
  };
  if (theme === "light") {
    return <Moon onClick={() => toggleTheme("dark")} />;
  }

  return <Sun onClick={() => toggleTheme("light")} />;
}
export default ThemeToggle;
