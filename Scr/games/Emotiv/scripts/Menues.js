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
	//main=true;
	mode="main";
	var quit = false;
	//var font = LoadFont("tahoma_22.rfn");

	var red 		=CreateColor(0,   80, 80, 80);
	var Black 		=CreateColor(0,   0,   0,   255);
	//var White		=CreateColor(255, 255, 255, 255);

	key=0;
    while (key!=(key_cancel)){
        RenderMap();
			window.drawWindow(xbo,ybo,190-xbo*2,290-ybo*2);
			font.setColorMask(Black);
			if (!emomap)
                font.setColorMask(red);
            font.drawText(25, 132, "Karte(m)");
			font.drawText(25, 12, "Emolex(e)");
            font.setColorMask(Black);
			font.drawText(25, 42, "Items(i)" );
			font.drawText(25, 72, "Tagebuch(q)");
			font.drawText(25, 102, "Steuerung(h)");
			font.drawText(25, 162, "Speichern");
			font.drawText(25, 192, "Laden");
			font.drawText(25, 222, "Menue verlassen");

		ShowPicture2("menues/dreieck.png",(mode=="main")?6:5,yfinger,20,16);
		//finger.blit((mode=="main")?6:5, yfinger);
		FlipScreen();

		// defines the selection of the finger and changes the 'mode' accordingly
		key=getTheFuckingKeys()

		switch (key)
		{
            case key_menu:
            	if (main2==1) {return false; };
			case KEY_DOWN:
			{
				if (mode=="main")
				{
					if (yfinger < 222) yfinger += 30;
					else yfinger = 13;
				}
				break;
			}
			case KEY_UP:
			{
				if (mode=="main")
				{
					if (yfinger > 18) yfinger -= 30;
					else yfinger = 223;
				}
				break;
			}
			
			// picks the next menu window to show with SPACE
			case key_talk:
			{
				if (mode == "main")
				{
					if	  (yfinger ==  13)  {if (emomap){ redraw = true; emolex(progress); yfinger2 = 18;}}
					else if (yfinger == 43) { redraw = true; showInventory();   yfinger2 = 48;}
					else if (yfinger == 73) { redraw = true; questi(); yfinger2 = 78;}
					else if (yfinger == 103) { redraw = true; control(); yfinger2 = 108;}
					else if (yfinger == 133) {if (emomap){ redraw = true; map(); yfinger2 = 138;}}
					else if (yfinger == 163) { Save_Game(); return false;}
					else if (yfinger == 193) { Load_Game();return false;}
					else if (yfinger == 223) { key=key_cancel}
					else;	//uh oh.
				}

			}
			case key_cancel:
			{

			}}
		}
		key=0;
   return false;

}
//-----------------------------------------lyc

function control(){
	var pic = "menues/Steuerung.png";
	var key=0;
	while(key!=key_cancel){
		RenderMap();
		ShowPicture(pic,130,130,300,300);
		FlipScreen();
		key=getTheFuckingKeys();
        if((key==key_help)&&(main2==2)) {return false;};
	}
	return false;
}

function map(){
	oberwelt_karte();
    return false;
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
	font.drawTextBox(200,200,200,80,0,"Lautstaerke");
	Rectangle(150,300,450,30,CreateColor(80,80,80));
	Rectangle(150+((entry_highlighted-1)*1.6*30),300,30,30,CreateColor(0,0,0));
	displayEntry(300,350,150,50,"Leertaste",false,"menues/wood_grain.gif",false)
	FlipScreen();	
	key=getTheFuckingKeys();
	}
}

function credits(song){
    var entry_highlighted=(volume*10);
    var key=0;
    var entrys=10;
    while (key!=key_talk)
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
        font.drawTextBox(200,200,200,50,0,"Credits");
        font.drawTextBox(150,250,500,200,0,"Dieses Spiel wurde von Alexander Ullrich, Manuel Tenoro Fenton, Johannes Wutzke und Johannes Zeisse programmiert. \n" +
			"Die Artworks sowie Sounds stammen von Tim Malte Zaruba.  \n" +
			"Weitere Ideen und Zuarbeiten stammen von Miriam Labrenz, Christian Hammer, Sara Aryanejad Kurumi und Danny Puhan.  \n");
        displayEntry(300,450,150,50,"Zurueck",true,"menues/wood_grain.gif",true);
        FlipScreen();
        key=getTheFuckingKeys();
    }
}

//zeigt das spielmen? am anfang
function showGameMenu(){
	var song=instantSoundRepeat("MENUoverworld.wav");
    song.setVolume(volume*255);
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
			if (entry_highlighted===5) {credits(song);}
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
        if ((key==key_emolex)&&(main2==5)) return false;
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
    return false;
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
        if ((key==key_inventory)&&(main2==3)) return false;
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
    return false;
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
  var cluetext="";
  var dataclues=eval("quests.quest"+questlist[0][i]+".clues");

  if (cluequest[0] != null){
  	//debugText(cluequest[0][0])
  	for (i2=0;i2<cluequest.length;i2++){
  		if (cluequest[i2][0]==questlist[0][i]){
            //debugText(dataclues);
            cluetext="\n Hinweise: ";
  			for (i3=1;i3<cluequest[i2].length;i3++){
                cluetext=cluetext+dataclues[cluequest[i2][i3]]+'\n';
			}

		}
	}
  }
  var questtext=eval("quests.quest"+questlist[0][i]+".description")+cluetext;
  questEntry(x_entry-10,5,x_entry,y_entry+195,questtext,true,"",false);
  //questEntry(x_entry-10,5,x_entry,y_entry+195,eval("quests.quest"+questlist[0][i]+".description"),true,"",false);

  }
  else
  questEntry(5,((i)*(y_entry+25))+5,x_entry,y_entry+20,eval("quests.quest"+questlist[0][i]+".name"),false,"",true);
  }
  }else
  {
  var progress=maps;
  if (mark>=progress.length) mark=progress.length-1;
  for(var i = 1; i < progress.length;i=i+1)
  { 
  if (i==mark){
  questEntry(5,((i-1)*(y_entry+5))+5,x_entry,y_entry,eval("maparray.map_"+maps[i]+".name"),true,"",true);
  questEntry(x_entry+10,5,x_entry,y_entry+195,eval("maparray.map_"+maps[i]+".description"),true,"",false);
  }
  else
  questEntry(5,((i-1)*(y_entry+5))+5,x_entry,y_entry,eval("maparray.map_"+maps[i]+".name"),false,"",true);
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
	if ((key==key_quest)&&(main2==6)) return false;
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
entrys=maps.length-1;
}
RenderMap();
ShowPicture2("menues/buch1.png",0,0,GetScreenWidth(), GetScreenHeight());
if (isquest) ShowPicture("menues/dreieck.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32); 
else { ShowPicture("menues/dreieck2.png",GetScreenWidth()-380, GetScreenHeight()-70,311,32);}
questEntrys(y_entry,x_entry,entry_highlighted,isquest);
FlipScreen();
key=getTheFuckingKeys();
}return false;
}




/*
Function that displays the overworld map (oberwelt karte), containing miniatures that represent
the different worlds, and an icon of the detective, allowing the player to move among the different
maps during the game.
*/
function oberwelt_karte(){
	var ob_karte = LoadImage("menues/ob_karte.png");
	var galerie_mini_colors = LoadImage("menues/galerie_mini_colors.png");
	var galerie_mini_grayscale = LoadImage("menues/galerie_mini_grayscale.png");
	var park_mini_colors = LoadImage("menues/park_mini_colors.png");
	var park_mini_grayscale = LoadImage("menues/park_mini_grayscale.png");
	var stadt_mini_colors = LoadImage("menues/stadt_mini_colors.png");
	var stadt_mini_grayscale = LoadImage("menues/stadt_mini_grayscale.png");
	var uni_mini_colors = LoadImage("menues/uni_mini_colors.png");
	var uni_mini_grayscale = LoadImage("menues/uni_mini_grayscale.png");
	var wohnviertel_mini_colors = LoadImage("menues/wohnviertel_mini_colors.png");
	var wohnviertel_mini_grayscale = LoadImage("menues/wohnviertel_mini_grayscale.png");
	var dorf_house_mini = LoadImage("menues/dorf_haus_mini.png");
	var detective_icon = LoadImage("menues/detective_icon.png");
	
	var White		=CreateColor(255, 255, 255, 255);
	var Some_blues = CreateColor(100,0,255,200);
	var pointer_case= 0;

	var quit = false;
	pointer_case =  0;
	key=0;
	while(!quit)
	{
		ob_karte.blit(0,0);
		// in any case, the house of the detective in the village must be set active
		dorf_house_mini.blit(642,517);
		font.setColorMask(Some_blues);
		font.drawText(645,507,"Dorf");
		// determine the display mode of the mini maps with the global variable:
		// 	oberwelt_karte_array
		if(oberwelt_karte_array[0] == 0){
			stadt_mini_grayscale.blit(340,420);
		}
		else{
			stadt_mini_colors.blit(340,420);
			font.drawText(460, 550, "Stadt");
		}
		if(oberwelt_karte_array[1] == 0){
			galerie_mini_grayscale.blit(30,420);
		}
		else{
			galerie_mini_colors.blit(30,420);
			font.drawText(110, 550, "Galerie/Einkaufzentrum");
		}
		if(oberwelt_karte_array[3] == 0){
			uni_mini_grayscale.blit(30,150);
		}
		else{
			uni_mini_colors.blit(30,150);
			font.drawText(110, 126, "Universitaet");
		}
		if(oberwelt_karte_array[4] == 0){
			wohnviertel_mini_grayscale.blit(580,60);
		}
		else{
			wohnviertel_mini_colors.blit(580,60);
			font.drawText(600, 230, "Wohngebiet");
		}
		if(oberwelt_karte_array[5] == 0){
			park_mini_grayscale.blit(280,0);
		}
		else{
			park_mini_colors.blit(280,0);
			font.drawText(290, 146, "Park");
		}
		
		setPointer(pointer_case);
		FlipScreen();
		
		var key=getTheFuckingKeys();
       if((key==key_map)&&(main2==4)) {quit = true;};
		if ((key==KEY_UP)&&(pointer_case<5)) pointer_case++;
		if ((key==KEY_DOWN)&&(pointer_case>0)) pointer_case--;

		//if ((key==KEY_RIGHT)&&(pointer_case<5)&&(pointer_case>3)) pointer_case++;
        if ((key==KEY_RIGHT)&&(pointer_case>0)) pointer_case--;
		if ((key==KEY_LEFT)&&(pointer_case<5)) pointer_case++;
        //if ((key==KEY_LEFT)&&(pointer_case>4)) pointer_case--;

				// picks the world where the player has to ve respawned, or dislplays
				//	the "blocked message on screen"
				if  (key==key_talk)
				{
					if	  ((pointer_case ==  0)&&(oberwelt_karte_array[0]==1)) {MapChange("Dorf.rmp",264,29,"MAPdorf.ogg");quit = true;break;}  // teleport to dorf
					else if ((pointer_case == 1)&&(oberwelt_karte_array[1]==1)){ MapChange("Detektei_Polizei_Buero.rmp",670,950,"MAPcity.wav");quit = true;break;} // teleport to city
					else if ((pointer_case == 2)&&(oberwelt_karte_array[2]==1)){ MapChange("einkauf-kulturzentrum_strasse.rmp",1643,524,"MAPcity.wav");quit = true;break;} // teleport to gallery
					else if ((pointer_case == 3)&&(oberwelt_karte_array[3]==1)){ MapChange("Uni.rmp",493,904,"MAPcampus.ogg");quit = true;break;} // teleport to uni
					else if ((pointer_case == 4)&&(oberwelt_karte_array[4]==1)) {MapChange("Wohnviertel.rmp",429,996,"MAPwohngebiet.wav");quit = true;break;} // teleport to wohngebiet
					else if ((pointer_case == 5)&&(oberwelt_karte_array[5]==1)) {MapChange("Park.rmp",871,1576,"MAPpark2.wav");quit = true;break;} // teleport to park
					else debugText("Noch nicht freigeschaltet!");
				}
				if (key== key_cancel)
				{
					quit = true;
				}

	}
    return false;
}

function unlockMap(map){
oberwelt_karte_array[map]=1;
}

function setPointer(pointer_case){
    var ob_karte = LoadImage("menues/ob_karte.png");
    var galerie_mini_colors = LoadImage("menues/galerie_mini_colors.png");
    var galerie_mini_grayscale = LoadImage("menues/galerie_mini_grayscale.png");
    var park_mini_colors = LoadImage("menues/park_mini_colors.png");
    var park_mini_grayscale = LoadImage("menues/park_mini_grayscale.png");
    var stadt_mini_colors = LoadImage("menues/stadt_mini_colors.png");
    var stadt_mini_grayscale = LoadImage("menues/stadt_mini_grayscale.png");
    var uni_mini_colors = LoadImage("menues/uni_mini_colors.png");
    var uni_mini_grayscale = LoadImage("menues/uni_mini_grayscale.png");
    var wohnviertel_mini_colors = LoadImage("menues/wohnviertel_mini_colors.png");
    var wohnviertel_mini_grayscale = LoadImage("menues/wohnviertel_mini_grayscale.png");
    var dorf_house_mini = LoadImage("menues/dorf_haus_mini.png");
    var detective_icon = LoadImage("menues/detective_icon.png");
	var center_x = 0;
	var center_y = 0;
	switch (pointer_case)
	{
		case 0:
		{
			center_x= 710;
			center_y= 490;
			break;
		}
		case 1:
		{
			center_x= 430;
			center_y= 480;
			break;
		}
		case 2:
		{
			center_x= 160;
			center_y= 480;
			break;
		}
		case 3:
		{
			center_x= 180;
			center_y= 200;
			break;
		}
		case 4:
		{
			center_x= 680;
			center_y= 130;
			break;
		}
		case 5:
			center_x= 400;
			center_y= 90;
	}
		detective_icon.blit(center_x - 35, center_y - 35);
}


