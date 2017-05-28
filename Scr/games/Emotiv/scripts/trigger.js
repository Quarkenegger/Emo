/*
Questfortschrittzaehler  (trigger_progress[0]==0) fuer Gebiete unterteilt:
ab
001 -Stadt
1001- Wohngebiet
2001-Uni
3001-Park
4001-Tunnel
Feld [0] = Hauptquest
Feld [1-x]=nebenquest
*/

/*
Triggernamen:
triggerXYZ_SinnvollerName
XYZ siehe Questfortschrittzaehler
SinnvollerName=Was macht der Trigger (UpperCamelCase)
*/

/*
fehlende Sachen sind mit "Todo:" markiert
*/



//-------------------------------------------------------------------Trash Galerie
function Trash_Tobi (){
if (trigger_progress[0]>2){
Dialog("Trash_001");
}
};

function Trash_Didi (){
if (trigger_progress[0]>2){
Dialog("Trash_002");
}
};

function Trash_Mona (){
if (trigger_progress[0]>2){
Dialog("Trash_003");
}
};

function Trash_Typ (){
if (trigger_progress[0]>2){
Dialog("Trash_004");
}
};

function Trash_Pferd (){
if (trigger_progress[0]>2){
Dialog("Trash_005");
}
};

function Trash_FettesKind (){
if (trigger_progress[0]>2){
Dialog("Trash_006");
}
};


//------------------------------------------Trash Lifefiller Stadt
//Typ vor der Detektei
function Trash_001_RandomEncounter (){
    Dialog("Trash_007");
};


//------------------------------------Spielstart/Tutorial Quark

function trigger001_GameStart (){
if (trigger_progress[0]==0){
var picture1=saveTilePicture(2,18,3,4,4);
setTileArray(2,18,3,4,4,1649);
UpdateMapEngine();
map_sound = LoadSound("MAPgallery.mp3");
map_sound.setVolume(10);
map_sound.play(true);
RenderMap();
personAlign("Galerist Hubert",GetPersonX("Galerist Hubert"),GetPersonY("Galerist Hubert"),GetPersonX("Galerist Hubert"),GetPersonY("Galerist Hubert")+10);
Dialog("dialog_001");
instantSound("save.mp3");
lightning("white.png");
showTilePicture(2,picture1,18,3,4,4);
Dialog("dialog_003");
trigger_progress[0]=trigger_progress[0]+1; //1
}
};

//Tutorial vor Bild
function trigger002_FrontBild (){
if (trigger_progress[0]==1){
Dialog("dialog_004");
trigger_progress[0]=trigger_progress[0]+1; //2
}
};

//Tutorial Bild
function trigger003_InteractBild (){
if (trigger_progress[0]==2){
Dialog("dialog_005");
trigger_progress[0]=trigger_progress[0]+1;  //3
}
};

//Tutorial Polizist mit Port
function trigger004_Polizeichef (){
if (trigger_progress[0]==3){
Dialog("dialog_006");
MapChange("PloizeiHaupt.rmp",133,86,"MAPcity.wav");
trigger_progress[0]=trigger_progress[0]+1; //4
}
};

//Storyeinleitung
function trigger005_PolizeiQuesterklaerung(){
if (trigger_progress[0]==4){
personAlign("Polizeichef Rick Bury",GetPersonX("Polizeichef Rick Bury"),GetPersonY("Polizeichef Rick Bury"),GetPersonX("Polizeichef Rick Bury"),GetPersonY("Polizeichef Rick Bury")+10);
personAlign(main_char,GetPersonX(main_char),GetPersonY(main_char),GetPersonX(main_char),GetPersonY(main_char)-10);
UpdateMapEngine();
Dialog("dialog_007");
getQuest(1);
trigger_progress[0]=trigger_progress[0]+1; //5
}
};

//-----------------------------------------------------Stadt Quark
//Port Polizei Stadt
function trigger006_PolizeizuStadt (){
MapChange("Detektei_Polizei_Buero.rmp",248,281,"MAPcity.wav");
};

//Port Stadt Detektei
function trigger007_StadtzuDetektei (){
MapChange("Detektei.rmp",134,225,"MAPcity.wav");
personAlign("Sam",GetPersonX("Sam"),GetPersonY("Sam"),GetPersonX("Sam"),GetPersonY("Sam")+10);
personAlign("Max",GetPersonX("Max"),GetPersonY("Max"),GetPersonX("Max"),GetPersonY("Max")+10);
FlipScreen();
if (trigger_progress[0]<10){
SetPersonVisible("Max",false);
}
};

//Detektei Fahrstuhl
function trigger008_EintrittDetektei (){
if (trigger_progress[0]==5){
Dialog("dialog_008");
trigger_progress[0]=trigger_progress[0]+1; //6
}
};

//Detektei Port hoch - Max ist nicht da
function trigger009_DetekteiTreppeHoch (){
MapChange("Detektei1OG.rmp",340,202,"MAPcity.wav");
FlipScreen();
if (trigger_progress[0]==7){
Dialog("dialog_011");
trigger_progress[0]=trigger_progress[0]+1; //8
getQuest(2);
}
};

//Detektei Oben nach unten
function trigger010_DetekteiTrepperunter (){
MapChange("Detektei.rmp",340,215,"MAPcity.wav");
if (trigger_progress[0]<10){
SetPersonVisible("Max",false);
}
personAlign("Sam",GetPersonX("Sam"),GetPersonY("Sam"),GetPersonX("Sam"),GetPersonY("Sam")+10);
personAlign("Max",GetPersonX("Max"),GetPersonY("Max"),GetPersonX("Max"),GetPersonY("Max")+10);
FlipScreen();
};

//Hausmeisterquest
function trigger011_HausmeisterKaputt (){
if ((trigger_progress[0]==6) || (trigger_progress[0]==7)){
Dialog("dialog_009");
}
if (trigger_progress[0]==8){
Dialog("dialog_012");
//Todo: puzzle3 1Bild 4 antworten
miniGame("puzzle3");
giveItem(3);
getEmotion(18); //Gelangweilt
trigger_progress[0]=trigger_progress[0]+1; //9
}
};

//Fahrstuhl
function trigger011_Fahrtuhlsound (){
if ((trigger_progress[0]==6) || (trigger_progress[0]==7)){
instantSound("SchrittStein.wav");
Dialog("dialog_009");
}
if (trigger_progress[0]==9){
trigger_progress[0]=trigger_progress[0]+1; //10
closeQuest(2);
CreatePerson("Max2","companion_2.rss",true);
SetPersonX("Max2",324);
SetPersonY("Max2",205);
IgnoreTileObstructions("Max2",true);
IgnorePersonObstructions("Max2",true);
Dialog("dialog_013");
getEmotion(3); //angst
moveQueue("Max2",[136,202,136,120,90,115]);
personAlign("Max2",GetPersonX("Max2"),GetPersonY("Max2"),GetPersonX("Max2"),GetPersonY("Max2")+10);
}
};

//Sam and Max Quest
function trigger012_SaminDetektei (){
if (trigger_progress[0]==6){
Dialog("dialog_010");
trigger_progress[0]=trigger_progress[0]+1; //7
}
if (trigger_progress[0]==10){
Dialog("dialog_014");
closeQuest(1);
getQuest(3);
trigger_progress[0]=trigger_progress[0]+1; //11
}

};

//Port Detektei zu Stadt
function trigger013_DetekteizuStadt (){
MapChange("Detektei_Polizei_Buero.rmp",670,950,"MAPcity.wav");
};

//Get Emolex
function trigger014_Professorkommt (){
if (trigger_progress[0]==11){
trigger_progress[0]=trigger_progress[0]+1;
CreatePerson("Prof","professor.rss",true);
SetPersonX("Prof",136);
SetPersonY("Prof",233);
IgnoreTileObstructions("Prof",true);
IgnorePersonObstructions("Prof",true);
moveTo("Prof",136,204);
//SetDelayScript(200,'Dialog("dialog_015")');
Dialog("dialog_015");
moveTo("Prof",136,233);
DestroyPerson("Prof");
//schalte Dorf und Einkaufscenter
//Todo: EMolex ins Menue
    emomap(true);
}
};

//Get Tux
function trigger015_GetTux (){
if ((trigger_progress[0]==12) || (trigger_progress[0]==13) || (trigger_progress[0]==14)){
giveItem(4);
Dialog("dialog_016");
IgnorePersonObstructions("MCTux",true);
}
};

//Port Haus
function trigger016_DetektivZimmer (){
MapChange("zimmer.rmp",136,167,"MAPdorf.ogg");
FlipScreen();
};

//Port aus Haus
function trigger017_DetektivZimmerzuDorf (){
MapChange("Dorf.rmp",88,206,"MAPdorf.ogg");
FlipScreen();
};

//Port Dorf - Oberwelt
function trigger018_InsDorf (){
//oberwelt_karte();
MapChange("Dorf.rmp",264,29,"MAPdorf.ogg");
FlipScreen();
};

//Port Buero
function trigger019_InsBuero (){
    MapChange("buero.rmp",24,137,"MAPdorf2.mp3");
    FlipScreen();
};

//Port aus Buero
function trigger020_BueroInStadt (){
MapChange("Detektei_Polizei_Buero.rmp",1159,654,"MAPcity.wav");
FlipScreen();
};

//Port Dorf zu Stadt - Oberwelt
function trigger020_DorfInStadt (){
//oberwelt_karte();
MapChange("Detektei_Polizei_Buero.rmp",1566,1146,"MAPcity.wav");
FlipScreen();
};

//Port Stadt zu Einkaufstrasse - Oberwelt
function trigger021_StadtzuEinkaufsstrasse (){
//oberwelt_karte();
MapChange("einkauf-kulturzentrum_strasse.rmp",1643,524,"MAPcity.wav");
FlipScreen();
};

//Port Einkaufsstrasse in Stadt
function trigger022_EinkaufsstrasseInStadt (){
//oberwelt_karte();
MapChange("Detektei_Polizei_Buero.rmp",35,1149,"MAPcity.wav");
FlipScreen();
};

//Port in Kaufhaus
function trigger023_EinkaufsstrasseInsKaufhaus (){
MapChange("Einkaufzentrum_EG.rmp",334,604,"MAPshopping.mp3");
FlipScreen();
};

//Port Kaufhaus zu Strasse
function trigger024_KaufhauszuEinkaufsstrasse (){
MapChange("einkauf-kulturzentrum_strasse.rmp",1320,490,"MAPcity.wav");
FlipScreen();
};

//Port aus Galerie
function trigger025_GaleriezuEinkaufsstrasse (){
MapChange("einkauf-kulturzentrum_strasse.rmp",249,411,"MAPcity.wav");
FlipScreen();
};

//Port in Galerie
function trigger026_EinkaufsstrassezuGalerie (){
MapChange("kulturzentrum_eingang.rmp",280,475,"MAPgallery.mp3");
DestroyPerson("Polizeichef Rick Bury");
personAlign("Galerist Hubert",GetPersonX("Galerist Hubert"),GetPersonY("Galerist Hubert"),GetPersonX("Galerist Hubert"),GetPersonY("Galerist Hubert")+10);
FlipScreen();
};

// Quest Buero
function trigger027_BueroQuest (){
if (trigger_progress[0]==12){
trigger_progress[0]=trigger_progress[0]+1; //13
Dialog("dialog_017");
getEmotion(16);
miniGame("puzzle5");
getQuest(5);
}

else{
	if(closeQuest(5)==true){
	closeQuest(3);
	Dialog("dialog_021");
	getEmotion(14); //Erleichtert
	getQuest(6);
	trigger_progress[0]=1001; //1001 Freischalten des Wohngebiets
	}

	else {
		if ((trigger_progress[0]==13) || (trigger_progress[0]==14) || (trigger_progress[0]==15)){
		Dialog("dialog_018");
		}
			else {
		if ((trigger_progress[0]==16)){
		Dialog("dialog_026");
		}
	}
	}
	}
};

// Quest Giesla Einkaufscenter
function trigger028_QuestGisela (){
if (trigger_progress[0]>=15){
MapChange("Einkaufzentrum_1S.rmp",413,195,"MAPshopping.mp3"); //port 1OG
}
else{
if (trigger_progress[0]==13){
trigger_progress[0]=trigger_progress[0]+1; //14
Dialog("dialog_019");
miniGame("puzzle4");
getEmotion(28);
getQuest(4);
}
	else {
			if (	closeQuest(4)==true){
			Dialog("dialog_020");
			getEmotion(19);
			trigger_progress[0]=trigger_progress[0]+1; //15
			}
		else{
			if (closeQuest(4)==false){
			Dialog("dialog_019");
		}
		}
	}
}		
};

//Port Kaufhaus 1S zu EG
function trigger029_EinkaufsstrasseInsKaufhaus (){
MapChange("Einkaufzentrum_EG.rmp",416,202,"MAPshopping.mp3");
FlipScreen();
};

//Port Kaufhaus 1S zu 2S
function trigger030_EinkaufsstrasseInsKaufhaus (){
MapChange("Einkaufzentrum_2S.rmp",416,182,"MAPshopping.mp3");
FlipScreen();
};

//Einkauf Stift und Klammer
function trigger031_Einkauf1 (){
if (trigger_progress[0]==15){
trigger_progress[0]=trigger_progress[0]+1; //16
Dialog("dialog_022");
giveItem(8);
giveItem(6);
}
else{
Dialog("dialog_025");
}
};

//Einkauf Ordner und Tacker
function trigger032_Einkauf2 (){
if (trigger_progress[0]==16){
trigger_progress[0]=trigger_progress[0]+1; //17
Dialog("dialog_023");
giveItem(7);
giveItem(5);
}
else {
Dialog("dialog_024");
}
};

//Port Sadt zu Wohnviertel - Oberwelt
function trigger033_StadtzuWohngebiet (){
if (trigger_progress[0]>=1001){
unlockMap(4);
//oberwelt_karte();



MapChange("Wohnviertel.rmp",429,996,"MAPwohngebiet.wav");
FlipScreen();
}
else{
Dialog("dialog_027");
}
};

//Port Wohnviertel zu Stadt
function trigger034_WohngebietzuSadt (){
MapChange("Detektei_Polizei_Buero.rmp",982,40,"MAPcity.wav");
FlipScreen();
};



//----------------------------------------------------------------------------------------------------------------------Wohngebiet Quark

//Quest Chandra
function trigger1001_Chandra (){
if (trigger_progress[0]==1001){
Dialog("dialog_1001");                //Todo: VideoDialog
getEmotion(12); //entsetzt 
getQuest(7);
trigger_progress[0]=trigger_progress[0]+1; //1002
}
else{
Dialog("dialog_1002");
}
};

//Quest Helena
function trigger1002_Helena (){
if (trigger_progress[0]==1002){
Dialog("dialog_1003");							//Todo Videodialog
getQuest(8);
getEmotion(40); //zweifel
trigger_progress[0]=trigger_progress[0]+1; //1003
}
else{
	if (trigger_progress[0]==1004){
	Dialog("dialog_1006");
	closeQuest(8);
	closeQuest(7);
	trigger_progress[0]=trigger_progress[0]+1; //1005
	getQuest(9);
	}
}
};

//Get karotte
function trigger1003_Getkarotte (){
if (trigger_progress[0]==1003){
giveItem(10);
Dialog("dialog_1004");
DestroyPerson("Karotte");
}
};

//Get Pistole
function trigger1004_GetPistole (){
if (trigger_progress[0]==1003){
Dialog("dialog_1005");
giveItem(9);
trigger_progress[0]=trigger_progress[0]+1; //1004
}
};

//Quest Yuga
function trigger1005_Yuga (){
if (trigger_progress[0]==1005){
Dialog("dialog_1007");
closeQuest(9);
miniGame("puzzle6");
getEmotion(23); //neid 
getQuest(10);
trigger_progress[0]=trigger_progress[0]+1; //1006
}
};

//Quest Hilda
function trigger1006_Hilda (){
if (trigger_progress[0]==1006){
Dialog("dialog_1008");
closeQuest(10);
closeQuest(6);
miniGame("puzzle7");
getEmotion(31); //vergebend 
getQuest(11);
trigger_progress[0]=2001; //2001 Uni freigeschaltet
}
};

//Port Wohnviertel zu Uni
function trigger1007_WohngebietZuUni (){
if (trigger_progress[0]>=2001){
unlockMap(3);
//oberwelt_karte();

MapChange("Uni.rmp",493,904,"MAPcampus.ogg");
FlipScreen();
}
else{
Dialog("dialog_1009");
}
};

//--------------------------------------------Uni
//Port Uni zu Wohnviertel  - Oberwelt
function trigger2001_UnizuWohngebiet (){
//oberwelt_karte();
MapChange("Wohnviertel.rmp",39,566,"MAPwohngebiet.wav");
FlipScreen();
};

function cheatTrigger_Uni(){
trigger_progress[0]=0;
giveItem(301);
unlockMap(5);
debugText("gehe zum park!");
}
//--------------------------------------------------------Park
//Port Uni zu Park  - Oberwelt
function trigger3001_UnizuPark (){
//oberwelt_karte();
MapChange("Park.rmp",868,1575,"MAPpark2.wav");
FlipScreen();
};

//Ich will nur pushen