window.addEventListener('DOMContentLoaded', () => {
  const ace = require('ace-builds');
  require('ace-builds/webpack-resolver');
  const editor = ace.edit('editor');
  editor.session.setMode('ace/mode/lua');
  editor.setTheme('ace/theme/monokai');
  editor.setValue('-- Write your Lua code here\n', -1);

  const runBtn = document.getElementById('runBtn');
  runBtn.addEventListener('click', () => {
    console.log('Running Lua code:\n' + editor.getValue());
  });
});
