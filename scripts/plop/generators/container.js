const { join } = require('path');

const firstUpperCase = ([first]) =>
  first === first.toUpperCase() ||
  'The name must begin with an upper case letter';

module.exports = function (plop, projectSrc) {
  plop.setGenerator('container', {
    description: 'View container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'container name',
        validate: firstUpperCase,
      },
      {
        type: 'directory',
        name: 'path',
        message: 'container path',
        basePath: join(projectSrc, 'containers'),
      },
    ],
    actions: () => [
      {
        type: 'add',
        path: join(projectSrc, 'containers/{{path}}/{{name}}/index.tsx'),
        templateFile: 'templates/container/index.tsx.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'containers/{{path}}/{{name}}/styles.ts'),
        templateFile: 'templates/container/styles.ts.hbs',
      },
      {
        type: 'add',
        path: join(projectSrc, 'containers/{{path}}/{{name}}/connect.ts'),
        templateFile: 'templates/container/connect.ts.hbs',
      },
    ],
  });
};
