const { prettier } = require('@siberiacancode/prettier');

/** @type {import('prettier').Config} */
module.exports = {
  ...prettier,
  endOfLine: 'crlf',
  plugins: ['prettier-plugin-tailwindcss']
};
