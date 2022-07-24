module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {},
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    },
    ],
    'import/prefer-default-export': 'off',
    'vue/no-v-html': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['case'],
        next: 'case',
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: 'case',
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'multiline-ternary': [
      'error',
      'always',
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'dot-location': [
      'error',
      'property',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    semi: [
      'error',
      'never',
    ],
    'no-return-assign': 0,
    'vue/require-prop-types': 0,
    camelcase: 0,
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/multi-word-component-names': 0,
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/no-setup-props-destructure': 0,
    '@typescript-eslint/no-explicit-any': 0,
    indent: ['error', 2],
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
