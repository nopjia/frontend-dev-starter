# frontend-dev-starter

Front-end web dev starter template

- Bower
- RequireJS
- RequireJS Optimizer
- Coffeescript
- Sass

## Run Scripts

Bower install packages

    bower install

Sass watch compile

    sass --watch app/scss:app/css

Coffee watch compile

    coffee -o app/js/ -cw app/coffee/

RequireJS Optimize

    r.js -o build/app.build.js