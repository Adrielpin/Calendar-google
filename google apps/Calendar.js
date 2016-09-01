/**
*
* script de inserção de evento dia inteiro no calendar google
* @author Adriel Pinheiro <adrielpin@gmail.com>
*
*/

function onOpen() {

  SpreadsheetApp.getUi().createMenu('NOME DO MENU').addItem('NOME DA EXECUÇAO', 'showPrompt').addToUi();
  
}

function showPrompt(){

  var response = SpreadsheetApp.getUi().prompt('Linha da data:');
  
  if(response.getSelectedButton() == SpreadsheetApp.getUi().Button.OK){
  
    takingEvent(response.getResponseText());
    
  }
  
}

function takingEvent(linha){

  var ss = SpreadsheetApp.getActiveSheet();
  var emails = ss.getRange(3, 2, 1, ss.getLastColumn()).getValues();
  emails = emails[0];
  var eventos = ss.getRange(linha, 1, 1, ss.getLastColumn()).getValues();
  eventos = eventos[0];
  
  for(var i = 0; i < emails.length; i++) {
    
    var mail = emails[i];
    Logger.log(mail);
    
    if(mail != ''){
      
      var date = new Date(eventos[0]);
      var evento = eventos[i+1];
      
      if(evento != ''){
      
        CalendarApp.getCalendarById(mail).createAllDayEvent(evento, date);
        
      }
      
    }
    
  }
  
}
