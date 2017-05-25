//---------------------manuel

function main_menu()
{
	var xbo= 10;
	var ybo= 11;
	var window = LoadWindowStyle("papiro.rws");
	//var finger = LoadImage();
	// define the location of th selection-finger
	// yfinger2 is used as a memory buffer to remember the position of the finger
	// in the previous menu window
	var yfinger = 18-5, yfinger2 = 18;
	var redraw = true;
	var mode = "main";
	var quit = false;
	//var font = LoadFont("tahoma_22.rfn");
	//var Cyan 		=CreateColor(0,   255, 255, 255);
	var Black 		=CreateColor(0,   0,   0,   255);
	//var White		=CreateColor(255, 255, 255, 255);
	do
	{
		if (redraw)
		{
			RenderMap();
			window.drawWindow(xbo,ybo,190-xbo*2,290-ybo*2);
			font.setColorMask(Black);
			font.drawText(25, 12, "Emolex");
			font.drawText(25, 42, "Items" );
			font.drawText(25, 72, "Tagebuch ");
			font.drawText(25, 102, "Steuerung ");
			font.drawText(25, 132, "Speichern");
			font.drawText(25, 162, "Laden");
			font.drawText(25, 192, "Exit");
		}
		ShowPicture2("menues/dreieck.png",(mode=="main")?6:5,yfinger,20,16);
		//finger.blit((mode=="main")?6:5, yfinger);
		FlipScreen();
		
		// defines the selection of the finger and changes the 'mode'
		//	accordingly
		if (AreKeysLeft())
		{
		switch (GetKey())
		{
			case KEY_DOWN:
			{
				if (mode=="main")
				{
					if (yfinger < 192) yfinger += 30;
					else yfinger = 18;
				}
				break;
			}
			case KEY_UP:
			{
				if (mode=="main")
				{
					if (yfinger > 18) yfinger -= 30;
					else yfinger = 198;
				}
				break;
			}
			
			// picks the next menu window to show with SPACE
			case key_talk:
			{
				if (mode == "main")
				{
					if	  (yfinger ==  13)  {redraw = true; emolex(progress); yfinger2 = 18;}
					else if (yfinger == 43) { redraw = true; showInventory();   yfinger2 = 48;}
					else if (yfinger == 73) { redraw = true; questi(); yfinger2 = 78;}
					else if (yfinger == 103) { redraw = true; control(); yfinger2 = 108;}
					else if (yfinger == 133) { Save_Game();}
					else if (yfinger == 163) { Load_Game();}
					else if (yfinger == 193) { Exit();}
					else;	//uh oh.
				}
				// handles different modes on main menu
				/*
				else if (mode=="equip")
				{
					equipmenu( (yfinger-15) / 58);	//char relative to pointer
					mode = "main";
					yfinger = 8;
				}
				else if (mode == "status")
				{
					statmenu( (yfinger-15) / 58);
					mode = "main";
					yfinger = 8;
				}
				break;
				*/
			}
			case key_cancel:
			{
				if (mode != "main") {
					mode = "main";
					yfinger = 8;
					if( (yfinger2-8)%15 == 0 )
						yfinger = yfinger2;
				}
				else quit = true;
				break;
			}
		}
		}
	}while(!quit)
}
//-----------------------------------------lyc

function control(){
	var pic = "emo2.png";
	var key=0;
	while(key!=key_cancel){
		RenderMap();
		ShowPicture(pic,130,130,300,300);
		FlipScreen();
		key=getTheFuckingKeys();
	}	
}

//-----------------------------------------klops
function soundMenu(song){ 
	var entry_highlighted=(volume*10);
	var key=0;
	var entrys=10;
	while (key!=key_cancel)
	{
		if (key==80)
		{
			if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));
		} 
		if (key==78)
		{
			if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;
		}
		if (key==key_talk)
		{
		volume=entry_highlighted/10;
		var save = OpenFile("INI.ini");	
		save.write("volume", volume);
		save.flush();
		save.close();
		song.stop();
		showGameMenu();
		}
	ShowPicture2("menues/buchmenue.png",0,0,800,600);
	font.drawTextBox(200,200,200,80,0,"Lautstärke");
	Rectangle(150,300,450,30,CreateColor(80,80,80));
	Rectangle(150+((entry_highlighted-1)*1.6*30),300,30,30,CreateColor(0,0,0));
	displayEntry(300,350,150,50,"Enter",false,"menues/wood_grain.gif",false)
	FlipScreen();	
	key=getTheFuckingKeys();
	}
}

//zeigt das spielmen? am anfang
function showGameMenu(){
	var song=instantSoundRepeat("MENUoverworld.wav"); 
	var entry_highlighted=1;
	var key=0;
	var entrys=5;
	while (true)
	{	
		if (key==77)
		{
			if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));
		} 
		if (key==79)
		{
			if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;
		}
		if (key==key_talk){
			if (entry_highlighted===1) {song.stop();newGame();}
			if (entry_highlighted===2) {song.stop();Load_Game();}
			if (entry_highlighted===3) {soundMenu(song);}
			if (entry_highlighted===4) {song.stop(); Exit();}
			if (entry_highlighted===5) ;//credits();
			}
ShowPicture2("menues/buchmenue2.png",0,0,800,600);
ShowPicture("menues/minik-mini-bleistift.png",300,160,400,400);
ShowPicture("menues/kaffee.png",-30,200,300,400);
//ShowPicture("menues/schwarz.png",670,40,150,400);
//ShowPicture("menues/schwarz.png",620,40,150,400);

showMenuEntrys(entry_highlighted);
FlipScreen();
key=getTheFuckingKeys();
		}
}


function showMenuEntrys(marked){
var textarray=["Neues Spiel","Laden","Optionen","Ende","Credits"];
for (i=0;i<5;i++){
if (i==(marked-1))
displayEntry(250,i*80+130,200,60,textarray[i], true,"menues/wood_grain.gif",false);
else
displayEntry(250,i*80+130,200,60,textarray[i], false,"menues/wood_grain.gif",false);
}
}

function displayEntrys(y_entry,x_entry,mark,progress)//zeichnet entrys und markiert sie(f?r emolex)
{
mark=mark-1;
var maxentrys=5;
var anf=mark%maxentrys;
var mul=((mark-anf)/maxentrys);
var maxdisplay=Math.min(progress.length,mul*maxentrys+5);
for(var i = mul*maxentrys; i < maxdisplay;i=i+1)
  { 
  if (i==mark)
  {
		displayEntry(GetScreenWidth()/5+60,(i%5*(y_entry+5))+120,x_entry,y_entry,eval("emotions.emotion"+progress[i]+".name"),true,"",true);
 }
  else
		displayEntry(GetScreenWidth()/5+60,(i%5*(y_entry+5))+120,x_entry,y_entry,eval("emotions.emotion"+progress[i]+".name"),false,"",true);
  }
  if (progress.length>0){
  Rectangle(GetScreenWidth()/5*4-100,110,15,((5*(y_entry+5))+40),CreateColor(80, 80,80));
  Rectangle(GetScreenWidth()/5*4-100,((5*(y_entry+5))+40)*(mark/progress.length)+110,15,25,CreateColor(0, 0,0));}
}

function displayEmotion(entry_highlighted)//f?r die anzeige eines bestimmten eintrags(+emonummer)
{
font.setColorMask( CreateColor(0, 0,0));
displayEntry(GetScreenWidth()/5+55,100,GetScreenWidth()/5*2+25,330,"",true,"emotions/"+eval("emotions.emotion"+progress[entry_highlighted-1]+".picture"),false);
font2 = LoadFont("tahoma12fett.rfn");
font2.setColorMask( CreateColor(0, 0,0));
drawOffsetText(GetScreenWidth()/5+180,((5*(50+5))+180),GetScreenWidth()/5*3,80,0,eval("emotions.emotion"+progress[entry_highlighted-1]+".name"),font2);
displayEntry(GetScreenWidth()/5+150,((5*(50+5))+210),GetScreenWidth()/5+50,100,"",true,"",true);
drawOffsetText(GetScreenWidth()/5+160,((5*(50+5))+220),GetScreenWidth()/5+40,100,0,eval("emotions.emotion"+progress[entry_highlighted-1]+".description"),font);
}

function emolex(progress)//zeigt emolex, progress sind die emotionen, die freigeschaltet sind(im array)
{
	var y_entry=50;
	var x_entry=120;
	var entry_highlighted=1;
	var entrys=progress.length;
	var key=0;
	while (key!=key_cancel)
	{	
		if (key==77)
		{
			if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));
			
		} 
		if (key==79)
		{
			if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;
		}
		if ((key==key_talk)&&(entrys>0)){
		while(key!=key_cancel){
			RenderMap();
			ShowPicture2("menues/emolex6.png",GetScreenWidth()/5+10,0,GetScreenWidth()/5*3-20,GetScreenHeight());
			displayEmotion(entry_highlighted);
			FlipScreen();
			key=getTheFuckingKeys();}
			key=0;
			}
			
		RenderMap();
		ShowPicture2("menues/emolex5.png",GetScreenWidth()/5+10,0,GetScreenWidth()/5*3-20,GetScreenHeight());
		displayEntrys(y_entry,x_entry,entry_highlighted,progress);
		FlipScreen();
		key=getTheFuckingKeys();
	}
	FlipScreen();
}

function showInventory()//zeigt ds inventar
{
	var entry_highlighted=1;
	var ishighlighted=false;
	var entrys=6;
	var key=0;
	while (key!=key_cancel)
	{
		RenderMap();
		if (key==77)
		{
			if (entry_highlighted>2) (entry_highlighted=(entry_highlighted-3));
		} 
		if (key==79)
		{
			if (entry_highlighted<entrys-3) entry_highlighted=entry_highlighted+3;
		}
		if (key==80)
		{
			if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));
		} 
		if (key==78)
		{
			if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;
		}
		ShowPicture2("menues/rucksack.png",GetScreenWidth()/6, GetScreenHeight()/4,GetScreenWidth()/3*2, GetScreenHeight()/2);
		for (i=0;i<6;i++)
		{
			if (i==entry_highlighted-1) 
				ishighlighted=true;
			else 
				ishighlighted=false;
			var seite=(i-(i%3))/3;
			if (ishighlighted){
				if (i<inventory.length){
				Rectangle(0.35*GetScreenWidth(),GetScreenHeight()/6+(seite*GetScreenHeight()/5*2.2),2*GetScreenWidth()/5,GetScreenHeight()/10,	CreateColor(222,184,135));
				Triangle(0.35*GetScreenWidth()+(i%3*((GetScreenWidth()/8)+5))+((GetScreenWidth()/8)+5)/2,GetScreenHeight()/5-10+(seite*1.88+1)*((GetScreenHeight()/8)+5),0.35*GetScreenWidth()+(i%3*((GetScreenWidth()/8)+5)),GetScreenHeight()/6+(seite*GetScreenHeight()/5*1.7)+GetScreenHeight()/10,0.35*GetScreenWidth()+(((i%3)+1)*((GetScreenWidth()/8)+5)),GetScreenHeight()/6+(seite*GetScreenHeight()/5*1.7)+GetScreenHeight()/10,CreateColor(222,184,135))
				//var completeText=eval("items.item"+inventory[i]+".name")+"                                 "+eval("items.item"+inventory[i]+".description");
				font.drawTextBox(0.35*GetScreenWidth()+10,GetScreenHeight()/6+(seite*GetScreenHeight()/5*2.2),2*GetScreenWidth()/5-20,40,0,eval("items.item"+inventory[i]+".name")+":");
				font.drawTextBox(0.35*GetScreenWidth()+10,GetScreenHeight()/6+(seite*GetScreenHeight()/5*2.2)+20,2*GetScreenWidth()/5-20,GetScreenHeight()/10-20,0,eval("items.item"+inventory[i]+".description"));
				}			
		}
			if (i<inventory.length){
				displayEntry(0.35*GetScreenWidth()+(i%3*((GetScreenWidth()/8)+5)),GetScreenHeight()/5-10+(seite+1)*((GetScreenHeight()/8)+5),GetScreenWidth()/5-0.4*GetScreenWidth()/5,GetScreenHeight()/8-5,"", ishighlighted,"white.png",false);
				displayEntry(0.35*GetScreenWidth()+(i%3*((GetScreenWidth()/8)+5)),GetScreenHeight()/5-10+(seite+1)*((GetScreenHeight()/8)+5),GetScreenWidth()/5-0.4*GetScreenWidth()/5,GetScreenHeight()/8-5,"", ishighlighted,"items/"+eval("items.item"+inventory[i]+".picture"),false);
				}
			else 
					displayEntry(0.35*GetScreenWidth()+(i%3*((GetScreenWidth()/8)+5)),GetScreenHeight()/5-10+(seite+1)*((GetScreenHeight()/8)+5),GetScreenWidth()/5-0.4*GetScreenWidth()/5,GetScreenHeight()/8-5,"", ishighlighted,"blanc.png",false);
				}
		FlipScreen();
		key=getTheFuckingKeys();
	}	
}

//-------------------------------------christian
function questEntry(x,y,width,height,text, marked,picture,textbool)//soll einzelnen eintrag darstellen(f?r questbook)
{
var font2=font;
font2.setColorMask(CreateColor(200, 200,0));
if (marked==true){
font2 = LoadFont("tahoma12fett.rfn"); 
if (textbool) OutlinedRectangle(x+40, y+30, width-30, height-60, CreateColor(0, 180, 0), 40); else
OutlinedRectangle(x+20, y, width-10, height, CreateColor(0, 180, 0), 0);}
else{
font2 = LoadFont("tahoma11.rfn");
//OutlinedRectangle(x+40, y+30, width-30, height-60, CreateColor(180, 180, 180), 40);
}
drawOffsetText(x+45,y+30,width-45,height+10,6,text,font2);
}

function questEntrys(y_entry,x_entry,mark,quests2)//zeichnet entrys und markiert sie(f?r questbook)
{
if (quests2==true){
var progress=questlist[0];
for(var i = 0; i < progress.length;i=i+1)
  { 
  if (i==mark-1){
  var text = eval("quests.quest"+questlist[0][0]+".name");
  questEntry(5,((i)*(y_entry+25))+5,x_entry,y_entry+20,eval("quests.quest"+questlist[0][i]+".name"),true,"",true);
  questEntry(x_entry-10,5,x_entry,y_entry+195,eval("quests.quest"+questlist[0][i]+".description"),true,"",false);
  }
  else
  questEntry(5,((i)*(y_entry+25))+5,x_entry,y_entry+20,eval("quests.quest"+questlist[0][i]+".name"),false,"",true);
  }
  }else
  {
  var progress=maps;
  for(var i = 0; i < progress.length;i=i+1)
  { 
  if (i==mark-1){
  questEntry(5,((i)*(y_entry+5))+5,x_entry,y_entry,eval("maparray.map_"+maps[i]+".name"),true,"",true);
  questEntry(x_entry+10,5,x_entry,y_entry+195,eval("maparray.map_"+maps[i]+".description"),true,"",false);
  }
  else
  questEntry(5,((i)*(y_entry+5))+5,x_entry,y_entry,eval("maparray.map_"+maps[i]+".name"),false,"",true);
  }
  } 
}

function questi()//Questbuch schaltet sich je nach emotions quests frei, questprogress sind die emotionen, 
                              //die schon freigeschaltet sind (im array) var questprogress=[1,2,3,4,5,6,7,8,9];
{
var y_entry=91;
var x_entry=370;
var entry_highlighted=1;
var entrys=questlist[0].length;
questEntrys(y_entry,x_entry,entry_highlighted,questlist[0]);

var key=0;

var isquest=true;
while (key!=key_cancel){
if (key==77){
if (entry_highlighted>1) (entry_highlighted=(entry_highlighted-1));} 
if (key==79){
if (entry_highlighted<entrys) entry_highlighted=entry_highlighted+1;}
if (key==80){
//ShowPicture2("menues/buch1.png",0,0,GetScreenWidth(), GetScreenHeight());
//ShowPicture2("menues/beschreibung1finger.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32);
isquest=true;
entrys=questlist[0].length;
entry_highlighted=1;
}
if (key==78){
//ShowPicture2("menues/buch1.png",0,0,GetScreenWidth(), GetScreenHeight());
//ShowPicture("menues/beschreibung1finger.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32);
isquest=false;
entrys=maps.length;
}
RenderMap();
ShowPicture2("menues/buch1.png",0,0,GetScreenWidth(), GetScreenHeight());
if (isquest) ShowPicture("menues/dreieck.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32); 
else { ShowPicture("menues/dreieck2.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32);}
questEntrys(y_entry,x_entry,entry_highlighted,isquest);
FlipScreen();
key=getTheFuckingKeys();
}
}



