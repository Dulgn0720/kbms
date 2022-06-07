module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: ["group-hover"],
            transitionProperty: {
                width: "width",
            },
            colors: {
                custom: {
                    DEFAULT: "#46c800",
                },
            },
            // animation: {
            //     "spin-slow": "spin 1s linear infinite",
            // },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
        // ...
    ],
    variants: {
        scrollbar: ["rounded"],
    },
};