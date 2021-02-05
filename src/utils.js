import path from 'path';

const normalizePath = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath)
);

const getTypeOfFile = (filepath) => path.extname(filepath);

export { normalizePath, getTypeOfFile };
