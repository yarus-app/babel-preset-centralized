import fs from 'fs';

const fixtures = fs.readdirSync(__dirname).filter(
  file => file.indexOf('.') !== 0 && file !== basename
  // && file.slice(-3) === '.js'
  // && fs.lstatSync(file).isDirectory()
  // && fs.existsSync(file + '/package.json')
);
// .map(file => {})

export default fixtures;
