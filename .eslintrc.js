module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: '@react-native-community',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
    'import/order': 0,
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'space-before-function-paren': 0,
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned' }
    ],
    // 'react/jsx-first-prop-new-line': [1, 'multiline'],
    // 'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    'no-useless-catch': 0,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['*'],
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ]
  }
}
