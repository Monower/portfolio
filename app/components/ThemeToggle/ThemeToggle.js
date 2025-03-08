'use client';
import useDarkMode from '../../hooks/useDarkMode';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {isDarkMode ? <FaSun color={isDarkMode ? "white" : "black"} /> : <FaMoon color={isDarkMode ? "white" : "black"} />}
    </button>
  );
};

export default ThemeToggle;
