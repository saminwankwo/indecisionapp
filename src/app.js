console.log('aoo iuuiuhuiuhb uuui');
var app = {
    title:'sugar rush',
    subtitle: 'pronvex'
}
var template = (
    <div>
        <h1> { app.title } </h1>
        <p> { app.subtitle } </p>
    </div>
);

var template2 = (
    <div>
        <h1>name</h1>
        <p>ade</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);