//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#F1F7FA"; colorButton="#8BAEE2"; colorText="#000000"; colorSele="#386AC7";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Great job!"; messageTime="Time out!"; messageError="Error, Try again!"; messageErrorG="Error, Try again!"; messageAttempts="Sorry, you lost."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,1,1,1,0,1],[0,1,1,1,0,1,0],[0,1,0,1,1,1,1],[0,0,0,0,0,0,0]];
var vCell=[["0","1","1","1","1","0","1"],["0","1","1","1","1","1","1"],["0","1","0","0","1","1","0"],["0","0","0","0","0","0","0"]];
var a0Cell=[["Q2FyZGluYWwgbnVtYmVy","T25l","Rml2ZQ","TmluZQ","RmlmdHktZWlnaHQ","VHdlbnR5LVRocmVl","TmluZXR5LXR3bw"],["T3JkaW5hbCBuYW1l","Rmlyc3Q","RmlmdGg","TmluZXRo","RmlmdHktZWlnaHRo","VHdlbnR5LXRoaXJk","TmluZXR5LXNlY29uZA"],["T3JkaW5hbCBudW1iZXI","MXN0","NXRo","OXRo","NTh0aA","MjNyZA","OTJuZA"],["U3BhbmlzaA","UHJpbWVybw","UXVpbnRv","Tm92ZW5v","cXVpbmN1YWfpc2ltbyBvY3Rhdm8","Vmln6XNpbW8gdGVyY2Vybw","Tm9uYWfpc2ltbyBzZWd1bmRv"]];
var c=[[15,3,4,4,11,12,10],[12,5,5,6,12,12,13],[14,3,3,3,4,4,4],[7,7,6,6,20,16,18]];
var c1=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var a1Cell=[["Q2FyZGluYWwgbnVtYmVy","T25l","Rml2ZQ","TmluZQ","RmlmdHktZWlnaHQ","VHdlbnR5LVRocmVl","TmluZXR5LXR3bw"],["T3JkaW5hbCBuYW1l","Rmlyc3Q","RmlmdGg","TmluZXRo","RmlmdHktZWlnaHRo","VHdlbnR5LXRoaXJk","TmluZXR5LXNlY29uZA"],["T3JkaW5hbCBudW1iZXI","MXN0","NXRo","OXRo","NTh0aA","MjNyZA","OTJuZA"],["U3BhbmlzaA","UHJpbWVybw","UXVpbnRv","Tm92ZW5v","cXVpbmN1YWfpc2ltbyBvY3Rhdm8","Vmln6XNpbW8gdGVyY2Vybw","Tm9uYWfpc2ltbyBzZWd1bmRv"]];
var a2Cell=[["Q2FyZGluYWwgbnVtYmVy","T25l","Rml2ZQ","TmluZQ","RmlmdHktZWlnaHQ","VHdlbnR5LVRocmVl","TmluZXR5LXR3bw"],["T3JkaW5hbCBuYW1l","Rmlyc3Q","RmlmdGg","TmluZXRo","RmlmdHktZWlnaHRo","VHdlbnR5LXRoaXJk","TmluZXR5LXNlY29uZA"],["T3JkaW5hbCBudW1iZXI","MXN0","NXRo","OXRo","NTh0aA","MjNyZA","OTJuZA"],["U3BhbmlzaA","UHJpbWVybw","UXVpbnRv","Tm92ZW5v","cXVpbmN1YWfpc2ltbyBvY3Rhdm8","Vmln6XNpbW8gdGVyY2Vybw","Tm9uYWfpc2ltbyBzZWd1bmRv"]];
var a3Cell=[["Q2FyZGluYWwgbnVtYmVy","T25l","Rml2ZQ","TmluZQ","RmlmdHktZWlnaHQ","VHdlbnR5LVRocmVl","TmluZXR5LXR3bw"],["T3JkaW5hbCBuYW1l","Rmlyc3Q","RmlmdGg","TmluZXRo","RmlmdHktZWlnaHRo","VHdlbnR5LXRoaXJk","TmluZXR5LXNlY29uZA"],["T3JkaW5hbCBudW1iZXI","MXN0","NXRo","OXRo","NTh0aA","MjNyZA","OTJuZA"],["U3BhbmlzaA","UHJpbWVybw","UXVpbnRv","Tm92ZW5v","cXVpbmN1YWfpc2ltbyBvY3Rhdm8","Vmln6XNpbW8gdGVyY2Vybw","Tm9uYWfpc2ltbyBzZWd1bmRv"]];
var wordsGame="T05fMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=7;var showC=true;
