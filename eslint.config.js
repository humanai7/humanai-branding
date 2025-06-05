import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',       // ✅ Make unused vars a warning instead of error
      '@typescript-eslint/no-explicit-any': 'warn',       // ✅ Warn on 'any', but don’t block build
    },
  },
];
