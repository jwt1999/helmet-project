module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Vue3 推荐规则
    'plugin:@typescript-eslint/recommended', // TS 推荐规则
    'plugin:prettier/recommended', // 集成 prettier
  ],
  rules: {
    // ===== 这里可以按需调整 =====
    'vue/multi-word-component-names': 'off', // 允许单词组件名
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any
    '@typescript-eslint/no-empty-interface': 'off',  // 禁用空接口规则
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        printWidth: 100,
      },
    ],
  },
}
