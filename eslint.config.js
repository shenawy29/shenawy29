import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...astro.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },
];
