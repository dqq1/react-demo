module.exports = {
    extends: [
        require.resolve('@umijs/fabric/dist/eslint'),
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'no-redeclare': 0,
        'max-len': ['error', { code: 160 }],
        'react-hooks/exhaustive-deps': 0,
        'arrow-body-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-var-requires': 0,
        'no-debugger': 1,
        'no-return-await': 0,
        'import/prefer-default-export': 0,
        'no-plusplus': 0,
        'operator-linebreak': 0,
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        // 'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
    },
};