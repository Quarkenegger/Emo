RequireScript('data.js');//datenbank
RequireScript('trigger.js');
RequireScript('Dialoge.js');
RequireScript('Movement.js');
RequireScript('QuestsDialog.js')
RequireScript('BasicFunctions.js')
RequireScript('Menues.js')

//globale spielvariablen zu charakterverwaltung
var progress=[1];
var inventory=[];
var questlist=[[],[]];
var font=LoadFont("tahoma11.rfn");
var window = GetSystemWindowStyle();
var bilder = [];
var sound;
var map_sound;
var savegame2;
var main=false;
var witchMenu="null";
var w = GetScreenWidth();
var h = GetScreenHeight();
var oberwelt_karte_array= [1,1,1,0,0,0];
var time=0;
var points=0;
var emomap=false;
//key bindings
var key_talk = KEY_SPACE;
var key_cancel = KEY_TAB;
var key_menu = KEY_TAB;
var key_help = KEY_H;
var key_emolex = KEY_E;
var key_map = KEY_M;
var key_quest = KEY_Q;
var key_inventory = KEY_I;
var key_sprint = KEY_SHIFT;

var persons_progress=[0];
var trigger_progress=[0];
var volume=0;
var over=true;
var maps=[1,2,3,5,6,7];
var main_char = "Indiana Ford";
var timeseconds=0;

function game() //initialisierung
{
	/*font.setColorMask(CreateColor(0, 0,0));
  Rectangle(0,0,800,600,CreateColor(256,256,256));
  ShowPicture2("Icon.png",200,50,400,400);
  font.drawZoomedText(250, 450, 5, "Emotiv");
  var save = OpenFile("INI.ini");
	volume=save.read("volume","volume - not found");
	save.close;
  //drawOffsetText(300,500,400,100,0,"Emotiv",font);
  FlipScreen();
  GetKey();*/
  showGameMenu();  
}

//startet neues spiel
function newGame(){  
	font.setColorMask(CreateColor(0, 0,0));
  Rectangle(0,0,800,600,CreateColor(256,256,256));
  ShowPicture2("Icon.png",200,50,400,400);
  font.drawZoomedText(250, 450, 5, "Emotiv");
  //drawOffsetText(300,500,400,100,0,"Emotiv",font);
  FlipScreen();
  //showGameMenu();
  GetKey();
	CreatePerson(main_char, "detective.rss", false);
	SetPersonSpeed(main_char,GetPersonSpeedX(main_char)*1.5)
	AttachInput(main_char);
	AttachCamera(main_char);
	SetUpdateScript("updation();");
	MapEngine("kulturzentrum_eingang.rmp", 60);
	font.setColorMask( CreateColor(0, 0,0));
}
	/*CreatePerson(main_char, "blond_woman_1.rss", false);
	AttachInput(main_char);
	AttachCamera(main_char);
  SetUpdateScript("updation();");
  //SetRenderScript("updation();"):
	MapEngine("firstmap.rmp", 60);

}*/

//---------------------------------------------manuel

function updation()
{
	//timecount
	if (time<1000){
		time++;
	}else
	{
		time=0;
	}

	//tastenabfangen
    if(IsKeyPressed(key_sprint)) SetPersonSpeed(main_char,3); else SetPersonSpeed(main_char,1.5);

 if((IsKeyPressed(key_menu))&&(!main)) {over=main_menu();main=true; timeseconds=time;};
 if((IsKeyPressed(key_help))&&(!main)) {over= control();main=true; timeseconds=time;};
 if((IsKeyPressed(key_inventory))&&(!main)) {over= showInventory();main=true; timeseconds=time;};
 if (emomap){
     if((IsKeyPressed(key_map))&&(!main)) {over= map();main=true; timeseconds=time;};
     if((IsKeyPressed(key_emolex))&&(!main)) {over= emolex(progress);main=true; timeseconds=time;};
 }
 if ((Math.abs(timeseconds-time)>=50)&&(over==false)){
	main=false;


}

 //if(IsKeyPressed(key_map)) oberwelt_karte();
}

//-----------------------------------------------------------------------klops

//funktion wird f?r time ausgef?hrt-gameengine l?uft weiter
function activeWait(time)
{
	stop=timeseconds;
	while (Math.abs(Math.abs(stop)-Math.abs(timeseconds))<time){
	if (IsKeyPressed(KEY_UP)) QueuePersonCommand(main_char, COMMAND_MOVE_NORTH, false);
	if (IsKeyPressed(KEY_DOWN)) QueuePersonCommand(main_char, COMMAND_MOVE_SOUTH, false);
	if (IsKeyPressed(KEY_RIGHT)) QueuePersonCommand(main_char, COMMAND_MOVE_EAST, false);
	if (IsKeyPressed(KEY_LEFT)) QueuePersonCommand(main_char, COMMAND_MOVE_WEST, false);
		UpdateMapEngine();
		RenderMap();
		Rectangle(0,0,50,50,CreateColor(255,255,255));
		FlipScreen();
		//eval(function2);
	}
}

//ruft das soundmen? auf

function persons()//testfunction
{
emolex(progress);
//SetPersonY("hans2", 130);
}


function wait(time)//wartet time-millisekunden
{
	var start = GetTime();
	while (GetTime() < start + time)
	{
	}
}


//soll auswahlm?glichkeiten beiten und den dialog je nach auswahl fortsetzen, die dialoge sind ?ber die stelle im array zugeordnet.(+frage/begr??ung,+auswahlm?glichkeiten(array),+verkn?pfte dialognummern(array))
function choiceDialog(question,choicearray,dialogarray)
{
var entry_highlighted=1;
	var font = GetSystemFont();
	var entrys=eval("puzzles."+name+".answers").length;
	var key=0;
	while (key!=key_talk){
		
		if (key==77){
		if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
		if (key==79){
		if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
		RenderMap();
		Rectangle(0, GetScreenHeight()*0.75,GetScreenWidth(), GetScreenHeight()*0.25, CreateColor(256, 256,256));
		font.drawTextBox(10,GetScreenHeight()*0.75+10,GetScreenWidth()/2-20,GetScreenHeight()*0.25-10,0,question);
		displayAnswers("",entry_highlighted,dialogarray);
		FlipScreen();
		key=getTheFuckingKeys();
	}	
	dialog(dialogarray[entry_highlighted-1]);
}

function videoMinigame(name)//name des puzzles/videos-videoplayer muss noch sinnvoll eingebunden werden, fragen funktionieren
{
	var entry_highlighted=1;
	var font = GetSystemFont();
	var entrys=eval("puzzles."+name+".answers").length;
	
	font.setColorMask( CreateColor(0, 0,0));
	VideoPlayer(name,name_sound,frames);
	var key=0
	
	while (IsKeyPressed(key_talk)==false){
		RenderMap();
		if (key==77){
		if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
		if (key==79){
		if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
		
		//Rectangle(0, GetScreenHeight()*0.75,GetScreenWidth(), GetScreenHeight()*0.25, CreateColor(256, 256,256));
		//Rectangle(0, GetScreenHeight()*0.65, GetScreenWidth(), GetScreenHeight()*0.35, CreateColor(256, 256,256));
		window.drawWindow(15,h*0.75,w-30,h*0.25-15);
		font.drawTextBox(10,GetScreenHeight()*0.75+10,GetScreenWidth()/2-20,GetScreenHeight()*0.25-10,0,eval("puzzles."+name+".question"));
		displayAnswers(name,entry_highlighted);
		
		//UpdateMapEngine();
		FlipScreen();
		key=getTheFuckingKeys();
	}	
	if (checkresults("puzzles",entry_highlighted,name)) return true;
	else  return false;
}

function checkresults(table,number,name)//?berpr?ft antworten, liefert bool(+varname in data,+gew?hlteantwortnummer,+fragenname)
{
	if (eval(table+"."+name+".correct")==number) 
		return true;
	else 
		return false; 
}

function displayAnswers(name, marked,answerfield)//anzeigen von verschiedenen antworten f?r puzzles mit markierung(+fragenname(wird in puzzles nachgeschaut),+istmarkiert(bool))
{
	var font = GetSystemFont();
	font.setColorMask( CreateColor(0, 0,0));
	if (name==""){
	var teiler=eval("puzzles."+name+".answers").length;
	var offset=GetScreenHeight()*0.75;
	var abstand=(GetScreenHeight()*0.25)/teiler;
	for (i=0; i<eval("puzzles."+name+".answers").length;i++)
	{
		font.drawTextBox(GetScreenWidth()/2,offset+i*abstand+10,GetScreenWidth()/2,offset-5+((i+1)*abstand),0,eval("puzzles."+name+".answers")[i]);
		if (i==(marked-1))  Triangle(GetScreenWidth()/2-10,offset+i*abstand+10,GetScreenWidth()/2-5, offset+i*abstand+15, GetScreenWidth()/2-10, offset+i*abstand+20, CreateColor(204, 0, 0));
	}}
	else
	{
	var teiler=answerfield.length;
	var offset=GetScreenHeight()*0.75;
	var abstand=(GetScreenHeight()*0.25)/teiler;
	for (i=0; i<answerfield.length;i++)
	{
		font.drawTextBox(GetScreenWidth()/2,offset+i*abstand+10,GetScreenWidth()/2,offset-5+((i+1)*abstand),0,answerfield[i]);
		if (i==(marked-1))  Triangle(GetScreenWidth()/2-10,offset+i*abstand+10,GetScreenWidth()/2-5, offset+i*abstand+15, GetScreenWidth()/2-10, offset+i*abstand+20, CreateColor(204, 0, 0));
	}}
	
}

 function bla2()//testfunction2 
  {
RenderMap();
CreatePerson("hans1", "blond_woman_1.rss", true);
 SetPersonX("hans1", 120);
SetPersonY("hans1", 120);
var movearray=new Array(80,120,120,80);

moveQueue("hans1",movearray)
CreatePerson("hans2", "blond_woman_1.rss", true);
 SetPersonX("hans2", 120);
SetPersonY("hans2", 40);

//Conversation("hallo du fettarsch","test.png");
videoMinigame("puzzle1");
//eval("emotions.line"+progress[i])
//Rectangle(1,1,30,30,"black");
//var z=LoadSurface(dir+"test22.png")
//var w = GetScreenWidth();
  //var h = GetScreenHeight();
 // var img = LoadImage("job.gif");
 
  //Blit the image.
  //img.blit(16, 16);
FlipScreen();
  GetKey();
  }
 
 function bla3()//testfunction2 
  {
  while (IsKeyPressed(KEY_ENTER)==false){
	
  var key=getTheFuckingKeys();
	debugText(key);}
  }
