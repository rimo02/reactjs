import useTheme from "../context/theme"; // Importing the custom hook

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();  // Getting theme values from context

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) darkTheme(); // If checked, switch to dark mode
        else lightTheme();  // Otherwise, switch to light mode
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"} // Check if current theme is dark
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                            rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                            peer-checked:after:border-white after:content-[''] after:absolute 
                            after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                            after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                            dark:border-gray-600 peer-checked:bg-blue-600">
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
