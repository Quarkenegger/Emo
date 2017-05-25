/*
Questfortschrittz�hler  (trigger_progress[0]==0) f�r Gebiete unterteilt:
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
XYZ siehe Questfortschrittz�hler
SinnvollerName=Was macht der Trigger (UpperCamelCase)
*/

/*
fehlende Sachen sind mit "Todo:" markiert
*/



//-------------------------------------Trash Galerie
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
trigger_progress[0]=trigger_progress[0]+1;
}
};

//Tutorial vor Bild
function trigger002_FrontBild (){
if (trigger_progress[0]==1){
Dialog("dialog_004");
trigger_progress[0]=trigger_progress[0]+1;
}
};

//Tutorial Bild
function trigger003_InteractBild (){
if (trigger_progress[0]==2){
Dialog("dialog_005");
trigger_progress[0]=trigger_progress[0]+1;
}
};

//Tutorial Polizist mit Port
function trigger004_Polizeichef (){
if (trigger_progress[0]==3){
Dialog("dialog_006");
MapChange("PloizeiHaupt.rmp",133,86,"MAPcity.wav");
trigger_progress[0]=trigger_progress[0]+1;
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
trigger_progress[0]=trigger_progress[0]+1;
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
trigger_progress[0]=trigger_progress[0]+1;
}
};

//Detektei Port hoch - Max ist nicht da
function trigger009_DetekteiTreppeHoch (){
MapChange("Detektei1OG.rmp",340,210,"MAPcity.wav");
FlipScreen();
if (trigger_progress[0]==7){
Dialog("dialog_011");
trigger_progress[0]=trigger_progress[0]+1;
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
trigger_progress[0]=trigger_progress[0]+1;
}
};

//Fahrstuhl
function trigger011_Fahrtuhlsound (){
if ((trigger_progress[0]==6) || (trigger_progress[0]==7)){
instantSound("SchrittStein.wav");
Dialog("dialog_009");
}
if (trigger_progress[0]==9){
trigger_progress[0]=trigger_progress[0]+1;
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
trigger_progress[0]=trigger_progress[0]+1;
}
if (trigger_progress[0]==10){
Dialog("dialog_014");
closeQuest(1);
getQuest(3);
trigger_progress[0]=trigger_progress[0]+1;
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
oberwelt_karte();
//MapChange("Dorf.rmp",264,29,"MAPdorf.ogg");
//FlipScreen();
};

//Port B�ro
function trigger019_InsBuero (){
MapChange("buero.rmp",24,137,"MAPdorf2.mp3");
FlipScreen();
};

//Port aus B�ro
function trigger020_BueroInStadt (){
MapChange("Detektei_Polizei_Buero.rmp",1159,654,"MAPcity.wav");
FlipScreen();
};

//Port Dorf zu Stadt - Oberwelt
function trigger020_DorfInStadt (){
oberwelt_karte();
//MapChange("Detektei_Polizei_Buero.rmp",1566,1146,"MAPcity.wav");
//FlipScreen();
};

//Port Stadt zu Einkaufstrasse - Oberwelt
function trigger021_StadtzuEinkaufsstrasse (){
oberwelt_karte();
//MapChange("einkauf-kulturzentrum_strasse.rmp",1643,524,"MAPcity.wav");
//FlipScreen();
};

//Port Einkaufsstrasse in Stadt
function trigger022_EinkaufsstrasseInStadt (){
oberwelt_karte();
//MapChange("Detektei_Polizei_Buero.rmp",35,1149,"MAPcity.wav");
//FlipScreen();
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
oberwelt_karte();



//MapChange("Wohnviertel.rmp",429,996,"MAPwohngebiet.wav");
//FlipScreen();
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

//-------------------------------------------------------------------Wohngebiet Quark

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
oberwelt_karte();

//MapChange("Uni.rmp",493,904,"MAPcampus.ogg");
//FlipScreen();
}
else{
Dialog("dialog_1009");
}
};

//--------------------------------------------Uni
//Port Uni zu Wohnviertel  - Oberwelt
function trigger2001_UnizuWohngebiet (){
oberwelt_karte();
//MapChange("Wohnviertel.rmp",39,566,"MAPwohngebiet.wav");
//FlipScreen();
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
oberwelt_karte();
//MapChange("Park.rmp",868,1575,"MAPpark2.wav");
//FlipScreen();
};

/*//-------------------------------------------------------Tunnel

function trigger401_Minenarbeiterkommt (){
//if (trigger_progress[0]){
//trigger_progress[0]=trigger_progress[0]+1;
CreatePerson("Prof","cheerful_man_1.rss",true);
SetPersonX("Prof",341);
SetPersonY("Prof",374);
//IgnoreTileObstructions("Prof",true);
//IgnorePersonObstructions("Prof",true);

CreatePerson("M1","mine_worker_1.rss",true);
SetPersonX("M1",105);
SetPersonY("M1",236);
IgnoreTileObstructions("M1",true);
IgnorePersonObstructions("M1",true);
CreatePerson("M2","mine_worker_2.rss",true);
SetPersonX("M2",296);
SetPersonY("M2",315);
CreatePerson("M3","mine_worker_1.rss",true);
SetPersonX("M3",94);
SetPersonY("M3",266);
IgnoreTileObstructions("M3",true);
IgnorePersonObstructions("M3",true);
//moveTo("Prof",353,374);
SetDelayScript(300,Dialog("dialog_401"));  
//Dialog("dialog_015");
//Delay(800); 
moveTo("Prof",353,300);
moveTo("M1",105,136);
moveTo("M2",269,360);
moveTo("M3",295,266);

//lightning("explosiv.png");
//lightning("explosiv1.png");
//delay(800); 
//DestroyPerson("Prof");
//}
};
function trigger402_Vorarbeiter (){
//if (trigger_progress[0]==6){
Dialog("dialog_402");
//trigger_progress[0]=trigger_progress[0]+1;
//getQuest(3);
//trigger_progress[0]=trigger_progress[0]+1;
}

//Itemget f�r erste Hilfe Kasten
function trigger_4003_ErsteHilfe (){
if (trigger_progress[1]>=0){
getItem(11);
}
};

//Itemget f�r Bohrmaschine
function trigger_4005_Bohrmaschine (){
if (trigger_progress[1]>=0){
getItem(12);
}
};

//Port Dorf zu cave
function trigger4004_DorfzuCave (){
MapChange("cave.rmp",361,440,"MAPcave.mp3");
FlipScreen();
};
*/

/*//------------------------------------------------------------------- Park Danny

function trigger3000_mapChangePark(){
	MapChange("Park.rmp",872,1576,"MAPpark.ogg");
}

function trigger3001_profRuns(){
	if(trigger_progress[0]==0 ){		
		moveTo("Prof",855,760);
		trigger_progress[0]+=1;
		getQuest(301); //Betrete den Park
		Dialog("dialog_3000");
	}			
}

function trigger3002_einlass(){
	giveItem(301);//Eintrittskarte, ##############################l�schen! muss vorher im Spiel gefunden werden
	if( isInInventory(301) ){ //Eintrittskarte
		if(trigger_progress[0]==1){
			closeQuest(301);
			getQuest(302); // Suche den Professor - Suche nach Informationen im Park
			DestroyPerson("Prof");
			trigger_progress[0]+=1;
		}
		
		if(persons_progress[0]>0 ){
			Dialog("dialog_3004");
			
		}else{ Dialog("dialog_3001");
			persons_progress[0]+=1;
		}	
		//Dialog("dialog_3005");
	}else{ Dialog("dialog_3002"); moveTo("Indiana Ford", GetPersonX("Indiana Ford"),GetPersonY("Indiana Ford") +10);}
			
}
function trigger3003_Regisseur(){
	if(persons_progress[2]>2){	
		instantSound('LEXOW35.mp3')
	}
	
	if(persons_progress[2]==1 ){
		Dialog("dialog_3011")
	}else{
		
		if(persons_progress[2]==2){
			Dialog("dialog_3021");
			closeQuest(303); //QuestComplete M�dchen
			
			//replace
			SetPersonX("Lenard Cabrio", 250);
			SetPersonY("Lenard Cabrio", 905);
			SetPersonX("Emil M.", 330);
			SetPersonY("Emil M.", 870);
			
			trigger_progress[1]+=1;
			persons_progress[2]+=1;
			
			//replace, unfollow
			FollowPerson("Kind","",16);
			SetPersonX("Kind",GetPersonX("Lars von Hier")+10);
			SetPersonY("Kind",GetPersonY("Lars von Hier"));
			
			QueuePersonCommand("Lenard Cabrio", COMMAND_ANIMATE, true);
			QueuePersonCommand("Emil M.", COMMAND_ANIMATE, true);
		}else{
			
			if(trigger_progress[0]==2 ){	
				Dialog("dialog_3006");
				trigger_progress[0]+=1;
				trigger_progress[1]=1;
				persons_progress[2]=1;
				
				//FilmQuiz
				var a;
				a = videoMiniGame("suppe/006","suppe/suppe006.mp3","puzzleRegisseur1")+
				videoMiniGame("suppe/007","suppe/suppe007.mp3","puzzleRegisseur2")+
				videoMiniGame("suppe/008","suppe/suppe008.mp3","puzzleRegisseur3");
				//------------------------------------------------------------------//
				
				if(a > 2){
					Dialog("dialog_3007"); //only correct answers
				}else{
					Dialog("dialog_3008"); //have misses
					instantSound('Westrom35.mp3');
				}
				//replace mainchar
				QueuePersonCommand("Indiana Ford", COMMAND_FACE_NORTH, true);
				SetPersonX("Indiana Ford",GetPersonX("Lars von Hier"));
				SetPersonY("Indiana Ford",GetPersonY("Lars von Hier")+16);
				
				//replace
				SetPersonX("Lenard Cabrio", 290);
				SetPersonY("Lenard Cabrio", 995);
				
				//replace
				SetPersonX("Emil M.", 336);
				SetPersonY("Emil M.", 995);
				
				//stop animation
				SetPersonScript("Lenard Cabrio", SCRIPT_COMMAND_GENERATOR, QueuePersonCommand("Lenard Cabrio", COMMAND_ANIMATE, false));
				SetPersonScript("Emil M.", SCRIPT_COMMAND_GENERATOR, QueuePersonCommand("Emil M.", COMMAND_ANIMATE, false));
				
				Dialog("dialog_3009");
				
				closeQuest(302);
				getQuest(304);//Suche den Professorn�rdlich des Labyrinths
				getEmotion(35) //Verzweifelt 35
				
				//NQuest
				Dialog("dialog_3010");
				getQuest(303);//Das Kind im Labyrinth		
				}
			}
		}		
}

function triggermegacheat (){
MapChange("Park.rmp",1242,492,"empty.ogg");
trigger_progress[0]==4;

			giveItem(303); //nerfgun
			trigger_progress[0]++
			
			Dialog("dialog_3014");
			
			//Set Prof
			SetPersonVisible("Professor",true);
			IgnorePersonObstructions("Professor",false);
			QueuePersonCommand("Professor", COMMAND_FACE_EAST, true);
			SetTile(79, 33, 1, 1997); //draw Prof's canvas
			
	//		closeQuest(304);
		//	getQuest(305); //Sprich mit dem Professor Hinter der Kinoleinwand		
	
}
//left cowboy
function trigger3004_cowboy(){
	if(trigger_progress[0]==3){
		Dialog("dialog_3012");
		
		//BildQuiz
		videoMiniGame("Cowboy/nE","empty.ogg","puzzleCowboy1");
		videoMiniGame("Cowboy/nE","empty.ogg","puzzleCowboy2"); 
		videoMiniGame("Cowboy/nE","empty.ogg","puzzleCowboy3"); 
		//---------------------------------------------------//
		getEmotion(41); //emotionslos
		
		Dialog("dialog_3013");
		
		moveTo('Lukas Lack', GetPersonX('Steven Walker')+8, GetPersonY('Steven Walker') );
		trigger_progress[0]+=1 //4
	}
}
//right cowboy
function trigger3005_cowboy(){
		
	if(trigger_progress[0]==4){
			giveItem(303); //nerfgun
			trigger_progress[0]++
			
			Dialog("dialog_3014");
			
			//Set Prof
			SetPersonVisible("Professor",true);
			IgnorePersonObstructions("Professor",false);
			QueuePersonCommand("Professor", COMMAND_FACE_EAST, true);
			SetTile(79, 33, 1, 1997); //draw Prof's canvas
			
			closeQuest(304);
			getQuest(305); //Sprich mit dem Professor Hinter der Kinoleinwand		
	}
}

function trigger3006_professor(){
		closeQuest(305);
		
		Dialog("dialog_3015");
		
		QueuePersonCommand("Professor", COMMAND_ANIMATE, true);
		SetTile(79, 33, 1, 1998);//update Prof's canvas
		
		SetDelayScript(120,"Dialog('dialog_3016');"); //wait to see animation
		
		lightning('white.png');
		QueuePersonCommand("Professor", COMMAND_ANIMATE, false);
		
		Dialog("dialog_3017");
		
		//Quiz
		videoMiniGame('profquiz_zuversichtlich',"empty.ogg","puzzleProf1");
		videoMiniGame('profquiz_verliebt',"empty.ogg","puzzleProf2");
		//videoMiniGame('profquiz_�berrascht',"empty.ogg","puzzleProf3");
		videoMiniGame('profquiz_traurig',"empty.ogg","puzzleProf4");
		videoMiniGame('profquiz_angstvoll',"empty.ogg","puzzleProf5");
		videoMiniGame('profquiz_heiter',"empty.ogg","puzzleProf6");
		videoMiniGame('profquiz_entsetzt',"empty.ogg","puzzleProf7");
		videoMiniGame('profquiz_erleichtert',"empty.ogg","puzzleProf8");
		videoMiniGame('profquiz_mitleidig',"empty.ogg","puzzleProf9");
		videoMiniGame('profquiz_dankbar',"empty.ogg","puzzleProf10");
		//----------------------------------------------------------//
		
		Dialog("dialog_3018");
		
		IgnorePersonObstructions("Professor",true);
		moveTo("Professor", 1255,580);
		SetTile(79, 33, 1, 38);
		FollowPerson("Indiana Ford","Professor",10);
		FollowPerson("Indiana Ford","",0); //unfollow
		SetDelayScript(120,"trigger3007_professor();");
		
}

function trigger3007_professor(){
	Dialog("dialog_3019");
	MapChange("cave.rmp",262,137,"MAPcave.mp3");
	getQuest(306); //Stelle das Bild des Professors in der Gallerie auf. Gallerie: closeQuest(305)
	 
}
function trigger3007_m�dchen(){
	if(trigger_progress[1]==1 ){
		persons_progress[2]+=1;
		FollowPerson("Kind","Indiana Ford",16);
	}
}

function trigger3008_k�nig(){
	Dialog("dialog_3022");

	//#Soundquiz
	instantSound('LEXOW17.mp3');
	videoMiniGame('soundQuiz',"LEXOW17.mp3","puzzleKoenig1");
	instantSound('Rothkirch17.mp3');
	videoMiniGame('soundQuiz',"Rothkirch17.mp3","puzzleKoenig2");
	instantSound('Stegmann17.mp3');
	videoMiniGame('soundQuiz',"Stegmann17.mp3","puzzleKoenig3");
	//---------------------------------------------------------//
	
	Dialog("dialog_3023");
	giveItem(302); //Krone
	getEmotion(17); //gekr�nkt
}

function trigger3009_changeToFinal(){
	MapChange("kulturzentrum_eingang_cave.rmp",503,137,"MAPgallery.mp3");
}

function trigger3010_bildAufstellen(){
	moveTo('Prof',280,260);
	SetDelayScript(350,"for(i=0; i<36; i++){ SetTile(15+(i%6), 9+Math.floor(i/6), 0, 2496+i);	}; SetTile(14, 14, 0, 448);");  //draw picture
	closeQuest(306);
	
	Dialog("dialog_3024");	
}
*/