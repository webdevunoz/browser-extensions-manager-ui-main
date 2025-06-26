import { useState } from "react";
import ThemeBar from "./components/ThemeBar";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";
import FilterButtons from "./components/FilterButtons";
import ExtensionsGrid from "./components/ExtensionsGrid";

function App() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState(0);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  document.body.className = theme;

  return (
    <>
      <header>
        <ThemeBar
          logoSymbolColor={theme === "dark" ? "hsl(3, 86%, 64%)" : "#C7231A"}
          logoTextColor={theme === "dark" ? "#FFFFFF" : "#091540"}
          themeHandler={handleTheme}
          themeIcon={theme === "dark" ? sunIcon : moonIcon}
        />
      </header>
      <main>
        <header>
          <div id="heading-filter-buttons">
            <h1 className="text-preset-1">Extensions List</h1>
            <FilterButtons setFilter={setFilter} />
          </div>
        </header>
        <ExtensionsGrid filter={filter} />
      </main>
    </>
  );
}

export default App;
