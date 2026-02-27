import { useTheme } from "./ThemeProvider";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="relative flex items-center justify-center p-2 rounded-lg bg-gray-400/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 transition-all hover:bg-gray-400/30 dark:hover:bg-gray-800/60 active:scale-95 group"
        aria-label="Toggle Theme"
        title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        {/* Sun Icon */}
        <svg
          className={`w-5 h-5 transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          } text-orange-500`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`w-5 h-5 absolute transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          } text-sky-400`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleTheme;
