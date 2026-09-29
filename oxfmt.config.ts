import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 120,
  singleQuote: true,
  sortImports: {
    groups: [
      ['value-builtin', 'type-builtin'],
      ['value-sibling', 'value-parent', 'type-sibling', 'type-parent'],
      ['value-index', 'type-index'],
      'unknown',
    ],
  },
});
