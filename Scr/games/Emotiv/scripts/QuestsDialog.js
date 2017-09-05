
//spielt einmaligen sound ab(+soundpath)
function instantSound(soundfile){
var insound=LoadSound(soundfile);
insound.setVolume(volume*100);
insound.play(false);
return insound;
}

//spielt wiederholten sound ab(+soundpath)
function instantSoundRepeat(soundfile){
var insound=LoadSound(soundfile);
insound.setVolume(volume*100);
insound.play(true);
return insound;
}

//nimmt quest mit nummer an(+questnummer)
function getQuest(number)
{
var font2=LoadFont("tahoma12fett.rfn");
	if (isMemberDouble(questlist[0],number)==true){
	questlist[0].push(number);
	RenderMap();
	displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3,"", true,"white.png",false);
	drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,200,100,0,"Neue Quest angenommen!",font2);
	FlipScreen();
	GetKey();
	rewards(number,true);}
}

//speichert einen bereich an tiles in einem array(+layer,+xpos,+ypos,+breite,+h�he)
function saveTilePicture(layer,x,y,sizex,sizey){
var pictureArray=[];
for (i=x;i<=x+sizex;i++)
{for (i2=y;i2<=y+sizey;i2++){
pictureArray.push(GetTile(i, i2, layer));
}
}
return pictureArray;
}

//zeigt ein gespeichertes tilearray(+layer,+xpos,+ypos,+breite,+h�he)
function showTilePicture(layer,tilearray,x,y,sizex,sizey){
var picture=0;
for (i=x;i<=x+sizex;i++)
{for (i2=y;i2<=y+sizey;i2++){
SetTile(i, i2, layer, tilearray[picture]);
picture++;
}
}
}

//setzt ein tilearray auf einen tile(+layer,+xpos,+ypos,+breite,+h�he,+tilenummer)
function setTileArray(layer,x,y,sizex,sizey,tile){
var i2=y;
for (i=x;i<=x+sizex;i++)
{for (i2=y;i2<=y+sizey;i2++){
SetTile(i, i2, layer, tile);
}; 
};
}

//schlie�t quest ab(+questnummer)
function closeQuest(number)
{
var font2=LoadFont("tahoma12fett.rfn");

if (!isMemberDouble(questlist[0],number)){
 var succ=rewards(number,false);

	if (succ==true){
	questlist[0]=deleteFromArray(questlist[0],number);
	questlist[1].push(number);
	RenderMap();
	displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3,"", true,"white.png",false);
	drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,150,200,0,"Quest abgeschlossen!",font2);
	FlipScreen();
	GetKey();
	}
	return succ;}
	else return false;
}

//pr�ft ob [number] item im inventar ist(+itemnummer)
function isInInventory(number){
for (i=0;i<inventory.length;i++){
if (inventory[i]==number) return true;}
return false;
}

//legt ein item mit nummer "number" in das inventar des spielers
function giveItem(number){
	inventory.push(number);
}

//loescht das item mit nummer "number" im inventar des spielers
function removeItem(number){
	inventory = deleteFromArray(inventory,number);
}

//schaltet eine emotion im emolex frei(+emonummer)
function getEmotion(number)
{
var font2=LoadFont("tahoma12fett.rfn");
if (isMemberDouble(progress,number)){	
progress.push(number);
RenderMap();
displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3,"", true,"white.png",false);
drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,200,100,0,"Neue Emotion freigeschaltet!",font2);
FlipScreen();	
GetKey();
}
}

function rewards(number,hasbegun)//verwaltet das inventar(+questnummer,+questbeginnt?)
{
var success=true;
	var temp;
	//var new_array;
	if (hasbegun)
	{
		inventory = concatArray(inventory,eval("quests.quest"+number+".rewardonbeginn"));
	}
	else 
	{
	temp=inventory;
	var needarray=eval("quests.quest"+number+".neededitems");
	for (i=0;i<needarray.length;i++) success=success&&isInInventory(needarray[i]);
	if (success)
		{
			inventory =concatArray(inventory,eval("quests.quest"+number+".rewardonclose"));
			for (i2=0;i2<needarray.length;i2++)
			{
					inventory=deleteFromArray(inventory,needarray[i2]);
					}
		}
	}
	return success;
}

//soll auswahlm�glichkeiten beiten und den dialog je nach auswahl fortsetzen, die dialoge sind �ber die stelle im array zugeordnet.(+frage/begr��ung,+auswahlm�glichkeiten(array),+verkn�pfte dialognummern(array))
function choiceDialog(question,choicearray,dialogarray)
{
var entry_highlighted=1;
	var entrys=choicearray.length;
	var key=0;
	while (key!=key_talk){
		
		if (key==77){
		if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
		if (key==79){
		if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
		RenderMap();
		window.drawWindow(15,h*0.75,w-30,h*0.25-15);
		
		//Rectangle(0, GetScreenHeight()*0.75,GetScreenWidth(), GetScreenHeight()*0.25, CreateColor(256, 256,256));
		font.drawTextBox(10,GetScreenHeight()*0.75+10,GetScreenWidth()/2-20,GetScreenHeight()*0.25-10,0,question);
		displayAnswers("",entry_highlighted,choicearray);
		FlipScreen();
		key=getTheFuckingKeys();
	}	
	Dialog(dialogarray[entry_highlighted-1]);
	return entry_highlighted;
}

//name des puzzles/videos-videoplayer muss noch sinnvoll eingebunden werden, fragen funktionieren
function videoMiniGame(video_path,sound_path,name)
{
 var entry_highlighted=1;
 //var font = GetSystemFont();
 var entrys=eval("puzzles."+name+".answers").length;
 font.setColorMask(CreateColor(0,0,0));
 VideoPlayer(video_path,sound_path,eval("puzzles."+name+".question"));
 //VideoPlayer(name,name_sound,frames);
 var key=0
	while (key!=key_talk){
		RenderMap();
		if (key==77){
		if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
		if (key==79){
		if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
		
		//Rectangle(0, GetScreenHeight()*0.75,GetScreenWidth(), GetScreenHeight()*0.25, CreateColor(256, 256,256));
		//Rectangle(0, GetScreenHeight()*0.65, GetScreenWidth(), GetScreenHeight()*0.35, CreateColor(256, 256,256));
		window.drawWindow(15,h*0.75,w-30,h*0.25-15);
		font.drawTextBox(10,GetScreenHeight()*0.75+10,GetScreenWidth()/2-20,GetScreenHeight()*0.25-10,0,eval("puzzles."+name+".question"));
		displayAnswers(name,entry_highlighted,eval("puzzles."+name+".answers"));
		
		//UpdateMapEngine();
		FlipScreen();
		key=getTheFuckingKeys();
	}	
	if (checkresults("puzzles",entry_highlighted,name)) {debugText("gut gemacht!"); return true;}
	else  {debugText("Fast richtig!"); return false;}
}

//------------------------------lyc
//aendert die Map, setzt den Spieler an Position X,Y und spielt den neuen Mapsound ab 
function MapChange(map,x,y,sound_path){
	
	if (map_sound.isPlaying()){
		map_sound.stop();
	}
	ChangeMap(map);
	SetPersonX(main_char,x);
	SetPersonY(main_char,y);

	MapSound(sound_path);

//Anzeige des Mapnamens bei mapwechsel
/*
	var width = map.length*8;
		
	window.drawWindow(15,GetScreenHeight()-35,width,20);
	font.drawText(15,GetScreenHeight()-35,map);
	FlipScreen();
	getTheFuckingKeys();*/
maphaschanged=true;
mapname=map.toString();
mapcount=time;
}



//Dialog
function Dialog(dialog_ID){
	var char_pictures = [];
	var dialog = [];
	var text = "";
	var i = 0;
	
	//char_pictures = eval(dialog_ID+".pictures");
	dialog = eval(dialog_ID+".dialog");
	
	while(dialog[i] != null){
		text = dialog[i]
		
		if((dialog[i+1][dialog[i+1].length-4] == ".") || (dialog[i+1] == "")){
			if (dialog[i+1] != ""){ 
				Conversation(text,dialog[i+1]);
			}else{
				Conversation(text,"");
			}
		}else{
			VideoConversation(text,dialog[i+1]);
		}
		i=i+2;
	}
}

function MapSound(sound_path){
    map_sound2=sound_path;
 map_sound = LoadSound(sound_path);
 map_sound.setVolume(volume*255);
 map_sound.play(true);
}

function lightning(picture_path){
 var before = GrabImage(0, 0, w, h);
 var img = LoadImage(picture_path);
 
 var alpha = 0;
 var start = GetTime();

 while((time = GetTime()) < start+1000){
  alpha= alpha+35;
  if (alpha>255) alpha = 255;
  else if (alpha<0) alpha = 0;
  
  before.transformBlit(-1, -1, w-1, -1, w-1, h-1, -1, h-1);
  img.transformBlitMask(-1, -1, w-1, -1, w-1, h-1, -1, h-1, CreateColor(255,255,255,alpha));
  FlipScreen();
 }
 
 while((time = GetTime()) < start+3000){
  alpha= alpha-4;
  if (alpha>255) alpha = 255;
  else if (alpha<0) alpha = 0;
  
  before.transformBlit(-1, -1, w-1, -1, w-1, h-1, -1, h-1);
  img.transformBlitMask(-1, -1, w-1, -1, w-1, h-1, -1, h-1, CreateColor(255,255,255,alpha));
  FlipScreen();
 }
}

//f�r minigame
function displayPictures(name, marked){
 var pictures = [];
 var teiler = 4;
 
 for(i=0;i<=3;i++){
  pictures[i] = LoadImage("puzzles/"+eval("puzzles."+name+".answers")[i]);
 }
 var offset=GetScreenHeight()*0.75;
 var abstand=pictures[0].width/teiler;
 window.drawWindow(75,h*0.4,295+(4*abstand),pictures[0].height*0.4+30);
 
 for (i=0; i<eval("puzzles."+name+".answers").length;i++)
 {
  pictures[i].zoomBlit(75+i*(abstand+80), h*0.4, 0.4)
  if (i==(marked-1)){
   Triangle(55+i*(abstand+80)+abstand-17, offset-50, 95+i*(abstand+80)+abstand-17, offset-50, 75+i*(abstand+80)+abstand-17,offset-60, CreateColor(204, 0, 0))
  }
 }
}


//minigame
function miniGame(pname){
 var entry_highlighted=1;
 var font = GetSystemFont();
 var pic = false;
 var entrys=eval("puzzles."+pname+".answers").length;
 if(eval("puzzles."+pname+".picture") != ""){
    var picture = LoadImage("puzzles/"+eval("puzzles."+pname+".picture"));
 }
 var factor = 0.53;
 
 if(eval("puzzles."+pname+".answers")[0][eval("puzzles."+pname+".answers")[0].length-4] == "."){
  pic = true;
 }
 
 font.setColorMask( CreateColor(0, 0,0));

 var key=0
 
 while (key!=key_talk){
  RenderMap();
  
  window.drawWindow(15,h*0.75,w-30,h*0.25-15);
  font.drawTextBox(15,GetScreenHeight()*0.75+10,GetScreenWidth()/2-20,GetScreenHeight()*0.25-10,0,eval("puzzles."+pname+".question"));
  
  if(pic == false){
   if (key==77){
    if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
   if (key==79){
    if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
   
	 displayAnswers(pname,entry_highlighted,eval("puzzles."+pname+".answers"));
   window.drawWindow((w/2)-(picture.width/2)*factor,h*0.4,picture.width*factor,picture.height*factor);
   picture.transformBlit((w/2)-(picture.width/2)*factor-8, h*0.4-8, (w/2)-(picture.width/2)+(picture.width)-48, h*0.4-8, (w/2)-(picture.width/2)+picture.width-48, (h*0.4)+(picture.height*factor)+7, (w/2)-(picture.width/2)*factor-8, (h*0.4)+(picture.height*factor)+7);
  }else{
   if (key==80){
    if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
   if (key==78){
    if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
   displayPictures(pname,entry_highlighted);
  }
  
  FlipScreen();
  key=getTheFuckingKeys();
 }

  if (checkresults("puzzles",entry_highlighted,pname)){
  RenderMap();
  debugText("Gut gemacht!");
  }else{
   RenderMap();

  debugText("Leider falsch. \n Die richtige Antwort war: "+getRightAnswer("puzzles",pname));
  }
}