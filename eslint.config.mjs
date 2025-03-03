import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    pluginJs.configs.recommended,
];