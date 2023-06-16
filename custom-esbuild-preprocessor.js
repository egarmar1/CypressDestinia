const esbuild = require('esbuild-wasm');
const fs = require('fs/promises');

module.exports = (file, options) => {
  return async () => {
    const code = await fs.readFile(file, 'utf8');
    const result = await esbuild.transform(code, options);
    return result.code;
  };
};