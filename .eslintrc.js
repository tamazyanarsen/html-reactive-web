module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    rules: {
        '@typescript-eslint/space-before-function-paren': 0,
        '@typescript-eslint/semi': ['error', 'always'],
        semi: ['error', 'always'],
        '@typescript-eslint/indent': ['error', 4],
        indent: ['error', 4]
    }
};
