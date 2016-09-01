function respostaDeContato() {
  ss = SpreadsheetApp.getActiveSheet();
  var values = ss.getRange(ss.getLastRow(), 2, 1, ss.getLastColumn()).getValues();
  values = values[0];
  
var respostas =       
'<html><body>'+
'<h2><b>Formulário Relatórios</b></h2>'+
'<b>- Nome completo: </b>&nbsp;'+values[0]+'<br><br>'+
'<b>- E-mail de contato: </b>&nbsp;'+values[1]+'<br><br>'+
'<b>- Site: </b>&nbsp;'+values[2]+'<br><br>'+
'<b>- ID da conta AdWords:</b>&nbsp; '+values[3]+'<br><br>'+
'<b>- E-mail de acesso da conta AdWords: </b>&nbsp;'+values[4]+'<br><br>'+
'<b>- Telefone: </b>&nbsp;'+values[5]+'<br><br>'+
'<b>- Como soube da Clinks: </b>&nbsp;'+values[6]+'<br><br>'+
'<b>- Acordo com os termos de uso e políticas de privacidade da Clinks: </b>&nbsp;'+values[7]+'<br><br>'+
'<b>- Qual período é para gerar o relatório: </b>&nbsp;'+values[8]+'<br><br>'+
'<b>- Inicia nessa data: </b>&nbsp;'+new Date(values[9]).toLocaleDateString()+'<br><br>'+
'<b>- Termina nessa data: </b>&nbsp;'+new Date(values[10]).toLocaleDateString()+'<br><br>';

 var texto_reposta = HtmlService.createHtmlOutputFromFile('Texto').getContent();
  MailApp.sendEmail('contato@clinks.com.br','Relatório Clinks - '+values[0],'',{htmlBody: respostas, replyTo:values[0]});
 MailApp.sendEmail(values[1], 'Relatório Clinks','', {htmlBody: texto_reposta});
 
}

