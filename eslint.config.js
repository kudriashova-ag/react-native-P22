module.exports = {
  extends: ['expo'],  // Базова конфігурація для Expo/RN
  plugins: ['react'], // Додаємо плагін react
  rules: {
    // Активуємо правила, щоб ESLint розумів використання в JSX
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // Для невикористаних змінних/імпортів
    'no-unused-vars': 'warn',  // або 'error' для червоного
    // Якщо використовуєте TypeScript:
    // '@typescript-eslint/no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',  // Автоматично визначає версію React
    },
  },
};