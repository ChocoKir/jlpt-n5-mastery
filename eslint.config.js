import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    // 1. Global Ignores
    { ignores: ["dist"] },

    // 2. Base Configurations
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // 3. Custom Rules and Plugin Definitions
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
            },
        },
        // We only pass the plugin object directly
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            // Spread the rules only, avoiding the meta/configs objects
            ...reactHooks.configs.recommended.rules,

            // Fixes the 'only-export-components' error
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    }
);