const promptDirectory = require('inquirer-directory');
const { join } = require('path');

const projectSrc = join(__dirname, '../../src');

module.exports = function runPlop(plop) {
  plop.setPrompt('directory', promptDirectory);

  require('./generators/component')(plop, projectSrc);
  require('./generators/container')(plop, projectSrc);
};
