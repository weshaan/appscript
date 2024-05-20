function onOpen() {
  FormApp.getUi()
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
      openDialog();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  FormApp.getUi() 
      .showModalDialog(html, 'Dialog title');
}
