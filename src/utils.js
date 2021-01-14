import path from 'path';

const normalizePath = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath)
);

export default normalizePath;
