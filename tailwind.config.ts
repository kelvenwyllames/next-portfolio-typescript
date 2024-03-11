import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url('/images/hero-bg.svg')",
            },
            boxShadow: {
                button: "0px 0px 68px 7px rgba(211, 86, 3, 0.4)",
            },
        },
    },
    plugins: [],
};
export default config;
