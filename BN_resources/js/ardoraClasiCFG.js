//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#DEEDF5"; colorButton="#1B09BD"; colorText="#000000"; colorSele="#EAAA15";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Great!"; messageTime="Time is over"; messageError=""; messageErrorG=""; messageAttempts="Fail"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","","","",""];
var img_G=["b1.jpg","h2.jpg","m1.jpg","t1.jpg","t2.jpg","B2.jpg"];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["NA","MQ","Mw","Mg","Mg","NA"];
var e_G=["Try again!","Try again!","Try again!","Try again!","Try again!","Try again!"];
var txtGr=["Hundreds","Thousands","Millions","Billions","Trillions"];
var imgGr=["hundred.jpg","thousand.jpg","million.jpg","billion.jpg","trillion.jpg"];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="";
var dirMedia="BN_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Qk4"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
