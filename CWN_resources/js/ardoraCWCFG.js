//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFBEC"; colorButton="#4D6879"; colorText="#000000"; colorSele="#173860";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Grat job, you win!"; messageTime=""; messageError="Sorry! Something is wrong."; messageErrorG="Sorry! Something is wrong."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1dO"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["VA","SA","Tw","VQ","Uw","QQ","Tg","RA","","","","","","Uw",""],["RQ","","","","SQ","","","RQ","","","","","","RQ",""],["Tg","","","","WA","","","Qw","","VA","Vw","RQ","TA","Vg","RQ"],["","","VA","","VA","","","RQ","","","","","","RQ",""],["","","SA","","WQ","","QQ","TQ","SQ","TA","TA","SQ","Tw","Tg",""],["","","SQ","","Uw","","","Qg","","","","","","",""],["VA","SA","Ug","RQ","RQ","","","RQ","SQ","Rw","SA","VA","SA","",""],["","","VA","","Vg","","","Ug","","","","","","",""],["","","WQ","","RQ","","","Rg","","","","","","",""],["","","Uw","","Tg","","Tg","SQ","Tg","RQ","VA","WQ","Tw","Tg","RQ"],["","","RQ","","","","","Ug","","","","","","SQ",""],["","","Qw","","","","","Uw","SQ","WA","","","","Tg",""],["","","Tw","","","","","VA","","","","","","RQ",""],["","","Tg","","","","","","","","","","","VA",""],["","","RA","","Uw","SQ","WA","VA","WQ","Rg","SQ","Rg","VA","SA",""]];
var x1=[1,10,7,1,8,7,8,5,1,5,8,14,3,14];
var y1=[1,3,5,7,7,10,12,15,1,1,1,1,4,10];
var x2=[8,15,14,5,13,15,10,14,1,5,8,14,3,14];
var y2=[1,3,5,7,7,10,12,15,3,10,13,5,15,15];
var imaCW=["","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","",""];
var defCW=["When a have 1,000 birds, I can say: I have a __________ birds","12","1,000,000","3","8th","91","6","65th","10","67","Dec 1st.","7","32nd","9th"];
var colNum=15;
var rowNum=15;
