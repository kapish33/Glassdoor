var tex = document.getElementById('searc');

tex.onfocus = () => {
    var d = document.getElementById('a2');
    d.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 1px 1px 5px 1px lightblue;`);
}

tex.onblur = () => {
    var d = document.getElementById('a2');
    d.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 0px 0px 0px 0px;`);
}
var tex1 = document.getElementById('ta4');

tex1.onfocus = () => {
    tex1.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 1px 1px 5px 1px lightblue;`);
}

tex1.onblur = () => {
    tex1.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 0px 0px 0px 0px;`);
}