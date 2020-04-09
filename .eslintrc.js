module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // sobrescrevendo regras que vem por default no padrão de style guide da AirBnB
    'prettier/prettier': 'error', // vai apontar todos os erros encontrados que desrespeitem o plugin do prettier
    'react/jsx-filename-extension': [
      // emite warns quando as extensões dos arquivos react forem diferentes de .jsx, .js
      'warn',
      { extensions: ['.jsx', '.js'] },
    ],
    'import/prefer-default-export': 'off', // possibilita que seja utilizado o export sem obrigatoriamente declararmos o default
    'no-console': ['error', { allow: ['tron'] }], // possibilta que possamos utilizar o console do reactotron
  },
};
