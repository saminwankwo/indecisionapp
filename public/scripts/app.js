'use strict';

console.log('aoo iuuiuhuiuhb uuui');
var app = {
    title: 'sugar rush',
    subtitle: 'pronvex'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'name'
    ),
    React.createElement(
        'p',
        null,
        'ade'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
