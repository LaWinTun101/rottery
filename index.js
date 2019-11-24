function update(){
var idoc = document.getElementById("iframe").contentWindow.document;
idoc.open();
idoc.write(editor.getValue());
idoc.close();
}

function setupEditor(){
window.editor = ace.edit("editor");
editor.setTheme = ("ace/theme/monokai);
editor.getSession().setMode("ace/mode/html");
editor.setValue(`
<`DOCTYPE  html>
<html>
<head>
<title>
</title>
</head>
<body>
</body>
</html> ` , 1);

editor.getSession().on('change',function()
{
update();
});

editor.focus();
editor.setOptions({
  fontfamily: "Monaco",
  fontSize: "16pt",
  showLineNumbers: false,
  showGutter: false,
  vScrollBarAlwaysVisible: true,
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
});
editor.setShowPrintMargin(false);
editor.setBehaviorsEnabled(false);
}

function ready(){

          setupEditor();
          update();

}
