//---------------------------------------------lyc
function ShowPicture2(picture_path,x,y,width,height)//zeigt bild an x,y mit ver?nderter gr??e/h?he an-verzerrt das bild zur not(+bildname,+posx,posy,breite,h?he)
{
  var img = LoadImage(picture_path);
  img.transformBlit(x, y, x+width, y, x+width, y+height, x, y+height)
}

function ShowPicture(picture_path,x,y,width,height)//zeigt bild an x,y mit ver?nderter gr??e/h?he an-beh?lt gr??enverh?ltnisse bei(+bildname,+posx,posy,breite,h?he)
{
  var img = LoadImage(picture_path);
  var factor = Math.min(width / img.width, height / img.height);
	img.zoomBlit(x, y,factor);
}
  
//zeichnet eine textbox
function TextBox(text)
{
  window.drawWindow(15,GetScreenHeight()-35,100,20);
  font.drawText(15,GetScreenHeight()-35,text);
  FlipScreen();
  GetKey();
}

// Textbox bei Mapwechsel
function mapChangeBox(text){
		
	var mapname = "";
     var t=searchmaps(text);
     mapname=t[0];
		/*switch (text){
		case "Detektei":
		{
			mapname = "Detektei";
			break;
		}
		case "buero":
		{
			mapname = "Buero";
			break;
		}
		case "Detektei_Polizei_Buero":
		{
			mapname = "Stadt";
			break;
		}
		case "Detektei1OG":
		{
			mapname = "1. Obergeschoss, Detektei";
			break;
		}
		case "Dorf":
		{
			mapname = "Dorf";
			break;
		}
		case "einkauf-kulturzentrum_strasse":
		{
			mapname = "Einkaufs und Kultur Strasse";
			break;
		}
		case "Einkaufzentrum_1S":
		{
			mapname = "1. Stock, Einkaufszentrum";
			break;
		}
		case "Einkaufzentrum_2S":
		{
			mapname = "2. Stock, Einkaufszentrum";
			break;
		}
		case "Einkaufzentrum_EG":
		{
			mapname = "Erdgeschoss, Einkaufszentrum";
			break;
		}
		case "kulturzetrum_eingang":
		{
			mapname = "Galerie";
			break;
		}
		case "Park":
		{
			mapname = "Filmpark";
			break;
		}
		case "PloizeiHaupt":
		{
			mapname = "Polizeistation";
			break;
		}
		case "Uni":
		{
			mapname = "Universitaet";
			break;
		}
		case "Wohnviertel":
		{
			mapname = "Wohnviertel";
			break;
		}
		case "zimmer":
		{
			mapname = "eigene Wohnung";
		}*/
	//}

	window.drawWindow(GetScreenWidth()/4,GetScreenHeight()/4,GetScreenWidth()/2,GetScreenHeight()/2);
	font.drawText((GetScreenWidth()/2)-((mapname.length*8)/2),GetScreenHeight()/2-5,mapname);
	FlipScreen();

	while (GetKey()!=key_talk){
		window.drawWindow(GetScreenWidth()/4,GetScreenHeight()/4,GetScreenWidth()/2,GetScreenHeight()/2);
		font.drawText((GetScreenWidth()/2)-((mapname.length*8)/2),GetScreenHeight()/2-5,mapname);
	}
	FlipScreen();
}

//checkt, ob member in array vorhanden ist. gibt true zur?ck, wenn das element nicht vorhanden ist. ansonsten false, falls es vorhanden ist
function isMemberDouble(array,entry){
if (array.length==0) {return true;}
for (i=0;i<array.length;i++){
if (array[i]==entry){ return false;} 
}
return true;
}

//zeichnet eine textbox mit einstellbarer Breite
function TextBox_W(text,width)
{
  window.drawWindow(15,GetScreenHeight()-35,width,20);
  font.drawText(15,GetScreenHeight()-35,text);
  FlipScreen();
  GetKey();
}

//l?dt das Spiel und setzt globale Variablen aus der Datei ein
// erst figur und musik töten
function Load_Game(){
	var list = GetFileList("save");
	var filename1="1.js";
	filename1="Savegame_"+filename1;
	var save2 = OpenFile(filename1);
	var fileobject2=save2.read("save","");
	var ak=eval("savegame2="+fileobject2);
	save2.close();
		progress=savegame2.emo; 
		inventory=savegame2.inv;
		questlist[0]=savegame2.cquest;
		questlist[1]=savegame2.squest;
		trigger_progress[0]=savegame2.trigger_pr[0];
    	trigger_progress[1]=savegame2.trigger_pr[1];
    	oberwelt_karte_array=savegame2.map_pr;
    	emomap=savegame2.emomap;
		volume=savegame2.volume;

	//RequireScript(filename1);
	if(IsMapEngineRunning() == false){

		wassaved=true;
        var persons=GetPersonList();
        if (!isMemberDouble(persons,"Indiana Ford")){
        DestroyPerson("Indiana Ford"); if (map_sound.isPlaying()){
            map_sound.stop();
        }} //test}
		CreatePerson(main_char, "detective.rss", false);
		SetPersonSpeed(main_char,GetPersonSpeedX(main_char)*1.5); 
		AttachInput(main_char); 
		AttachCamera(main_char);
		SetUpdateScript("updation();");
		SetPersonX(main_char,savegame2.person_x);
		SetPersonY(main_char,savegame2.person_y);
        map_sound = LoadSound("MAPgallery.mp3");
		//map_sound = LoadSound(savegame2.map_sound);
		wassaved=true;
		savevariables=[savegame2.person_x,savegame2.person_y,savegame2.map];
		map_sound.setVolume(volume*255);
        TextBox_W("Spiel erfolgreich geladen.Leer fuer weiter.",400);

	//	MapChange(savegame2.map,savegame2.person_x,savegame2.person_y,"MAPdorf.ogg");
		MapEngine(savegame2.map, 60);
        //MapChange(savegame2.map,savegame2.person_x,savegame2.person_y,"MAPdorf.ogg");
	}else{
            if (map_sound.isPlaying()){
                map_sound.stop();
            }
       /* CreatePerson(main_char, "detective.rss", false);
        SetPersonSpeed(main_char,GetPersonSpeedX(main_char)*1.5);
        AttachInput(main_char);
        AttachCamera(main_char);
        SetUpdateScript("updation();");
        SetPersonX(main_char,savegame2.person_x);
        SetPersonY(main_char,savegame2.person_y);
        map_sound = LoadSound("MAPgallery.mp3");
        map_sound.setVolume(volume*255);
        MapEngine(savegame2.map, 60);*/
       // DestroyPerson("Indiana Ford");
        RenderMap();
		TextBox_W("Spiel erfolgreich geladen. Leer fuer weiter.",400);

        wassaved=true;
        savevariables=[savegame2.person_x,savegame2.person_y,savegame2.map];
	MapChange(savegame2.map,savegame2.person_x,savegame2.person_y,"MAPdorf.ogg");
	}
	
	
}


//speichert das Spiel in 'Savegame.ini'
function Save_Game(){
	var map_name = GetCurrentMap();
	var person_x = GetPersonX(main_char);
	var person_y = GetPersonY(main_char);
	var person_d = GetPersonDirection(main_char);
	var list = GetFileList("save");
	var filename1="Savegame_1.js";
	var save_sound = LoadSound("save.mp3",true);
	//var loc = .pathname;
  //var dir = loc.substring(0, loc.lastIndexOf('/'));
	var save = OpenFile(filename1);
	
	var uuu= "{map:'"+map_name+"',person_x:"+person_x+",person_y:"+person_y+",direction:'"+person_d+"',inv:["+inventory+"],emo:["+progress+"],cquest:["+questlist[0]+"],squest:["+questlist[1]+"],trigger_pr:["+trigger_progress+"],map_pr:["+oberwelt_karte_array+"],volume:"+volume+",emomap:"+emomap+"}";
//	var blaa2="{map:"+map_name+",person_x:"+person_x;
	//var blaa='{map:'+map_name+',person_x:'+person_x+',person_y:'+person_y+',direction:'+person_d+',inv:'+inventory+',emo:'+progress+',cquest:'+questlist[0]+',squest:'+questlist[1]+',trigger_pr:'+trigger_progress+',map_pr:'+oberwelt_karte_array',volume:'+volume+'}';
	//save.write("var save", eval("{map:"+map_name+",person_x:"+person_x+",person_y:"+person_y+",direction:"+person_d+",inv:"+inventory+",emo:"+progress+",cquest:"+questlist[0]+",squest:"+questlist[1]+",trigger_pr:"+trigger_progress+",map_pr:"+oberwelt_karte_array",volume:"+volume+"}"));
		save.write("save", uuu);
	
		//save.write("bla","bl2");
		/*	
	save.write("map", map_name);
	save.write("X", person_x);
	save.write("Y", person_y);
	save.write("direction", person_d);
	save.write("inv", inventory);
	save.write("emo", progress);
	save.write("cquest", questlist[0]);
	save.write("squest", questlist[1]);
	save.write("person_pr", persons_progress);
	save.write("trigger_pr",  trigger_progress);
	save.write("map_pr", oberwelt_karte_array);
	save.write("volume",volume);

			*/
	save.flush();
	save.close();
	save_sound.play();
    RenderMap();
	TextBox_W("Spiel erfolgreich gespeichert.",200);
}



//conversation mit Bild
function Conversation(text,picture_path){
 
 RenderMap();
 
 if(picture_path != ""){
  //Rahmen - Bild
  window.drawWindow(w-160,h-249,145,164);
 
  //Bild
  var img = LoadImage("characters/"+picture_path);
  //img.zoomBlit(w-167, h-256, 0.44);
  img.transformBlit(w-167, h-256, w-9, h-256, w-9, h-95, w-167, h-95);
 }
 
 //Rahmen - Text
 window.drawWindow(15,h-85,w-30,70);
 //Text
 font.drawTextBox(15,h-85,w-15,75,0,text);
 
 //Anzeige
 FlipScreen();
 
 while (AreKeysLeft()) GetKey();
 while (GetKey() != key_talk);
}


//vergleicht den namen aus 'string' mit den ersten buchstaben aus 'p_array'
function picture_char_allocation(string,p_array){
	var person = "";
	var picture;
	var p_array_prune = [];
	var s_temp = "";
	var s_temp_2 = "";
	var i = 0;
	var j = 0;

	while (string[i] != ":") {
		person = person + string[i];
		i++;
	}
	
	i = 0;
	while (p_array[i] != null){
		s_temp = p_array[i];
		j = 0;
		s_temp_2 = "";
		while (s_temp[j] != "_"){
			s_temp_2 = s_temp_2 + s_temp[j];
			j++;
		}
		p_array_prune[i] = s_temp_2;
		i++;
	}
	
	j = 0;
	while (p_array_prune[j] != null){
		if(p_array_prune[j] == person){
			picture = p_array[j];
		}
		j++;
	}
	return picture;
}



//erzeugt den Videoplayer [Frame] neu
function VideoPlayer(video_path,sound_path,display_text_bottom){
	//leert den Key Buffer
	while (AreKeysLeft()) GetKey();
	var list = [];
	
	list = GetFileList("images/"+video_path);
	
	map_sound.pause();
	
  LoadVideo(list,video_path,sound_path);
  PlayVideo(8,8,GetScreenWidth()-17,500,list.length,display_text_bottom);
  while (GetKey() == KEY_R){
		PlayVideo(8,8,GetScreenWidth()-17,500,list.length,display_text_bottom);
  }
  map_sound.play(true);
}


//conversation mit Video
function VideoConversation(text,video_path){

 RenderMap();

 var list = [];
 var i = 1;
 list = GetFileList("images/movies/"+video_path);

 //Rahmen - Bild
 window.drawWindow(w-160,h-249,145,164);
 //Rahmen - Text
 window.drawWindow(15,h-85,w-30,70);
 
 //Text
 font.drawTextBox(15,h-85,w-15,75,0,text);

 bilder[0] = LoadImage("movies/"+video_path+"/"+list[0]);
 //bilder[0].zoomBlit(w-167, h-256, 0.44);
 bilder[0].transformBlit(w-167, h-256, w-9, h-256, w-9, h-95, w-167, h-95);

 FlipScreen();
 RenderMap();

 //lade Video
 if (bilder[0] != LoadImage("movies/"+video_path+"/"+list[0])){
  while(list[i] != null){
   bilder[i] = LoadImage("movies/"+video_path+"/"+list[i]);
   i++;
  }
 }

 i = 0;
 // spiele Video
 while(i < list.length){
  var start = GetTime();
  while (GetTime() < start + 40) {
   //Rahmen - Bild
   window.drawWindow(w-160,h-249,145,164);
   //Rahmen - Text
   window.drawWindow(15,h-85,w-30,70);
 
   //Text
   font.drawTextBox(15,h-85,w-15,75,0,text);
 
   //Bild
   //bilder[i].zoomBlit(w-167, h-256, 0.44);
   bilder[i].transformBlit(w-167, h-256, w-9, h-256, w-9, h-95, w-167, h-95);
 
   //Anzeige
   FlipScreen();
   RenderMap();
   }
  i++;
 }
 
 while (AreKeysLeft()) GetKey();
 while (GetKey() != key_talk);
}

//l?dt die bilder f?r ein video
function LoadVideo(list,video_path,sound_path,frames){
  var i = 0;

	//lade Video
	if (bilder[0] != LoadImage(video_path+"/"+list[0])){
		while(list[i] != null){
			bilder[i] = LoadImage(video_path+"/"+list[i]);
			
			// Text: video l?dt
			font.drawText(GetScreenWidth()-460,GetScreenHeight()-400,"Lade Video.");
			
			//Fortschrittsbalken
			Rectangle(50, 340, GetScreenWidth()-130, 10, CreateColor(100, 100, 100));
			Rectangle(50, 340, (0+(i*((GetScreenWidth()-130)/list.length))), 10, CreateColor(130, 130, 130));
			FlipScreen();
		
			i++;
			}
	}	
	sound = LoadSound(sound_path);
}

//spielt das video ab
function PlayVideo(x,y,width,height,frames,display_text_bottom){
	
	i = 0;
	p_height = bilder[0].height
    //sound.setVolume
	sound.play(false);
	while(i < frames){
		var factor = Math.min(width / bilder[i].width, height / bilder[i].height);
		var start = GetTime();
		while (GetTime() < start + 40) {
			//Rahmen
			window.drawWindow(15,15,GetScreenWidth()-30,p_height*factor-14);
			window.drawWindow(15,p_height*factor+20,GetScreenWidth()-30,30);
			window.drawWindow(15,p_height*factor+72,GetScreenWidth()-30,73);
			
			//bilder
			bilder[i].zoomBlit(x, y, factor);
			
			//Texte + Zeiten
			font.drawText(GetScreenWidth()-70,p_height*factor+20,"0:"+(frames/25));
			font.drawText(30,p_height*factor+20,Math.round(i/25));
			if(i >= (frames-5)) font.drawText(310,p_height*factor+33,"Zum wiederholen 'R' dr?cken.");
			if(display_text_bottom != "") font.drawText(15,p_height*factor+80,display_text_bottom);
			
			//Fortschrittsbalken
			Rectangle(50, p_height*factor+20, GetScreenWidth()-130, 10, CreateColor(100, 100, 100));
			Rectangle(50, p_height*factor+20, (0+(i*((GetScreenWidth()-130)/frames))), 10, CreateColor(130, 130, 130));
			FlipScreen();
		}
		i++;
	}
	sound.stop();
	while (AreKeysLeft()) GetKey();
}

//------------------------------------------------------klops
// schaltet einen Clue fuer die gegbene Quest frei eingabe, clues sind zuvor in data definiert worden(questnummer, cluenummer)
function getClue(qnumber,cnumber){
    if (cluequest[0] != null){
    	var g=true;
        for (i2=0;i2<cluequest.length;i2++){
            if (cluequest[i2][0]==qnumber){
                if (isMemberDouble(cluequest[i2],cnumber)==true){cluequest[i2].push(cnumber);}

                g=false;
            }

            }
            if (g) cluequest.push([qnumber,cnumber]);
        }else cluequest.push([qnumber,cnumber]);
    }


function searchmaps(name){
	//debugText("hallo");
    var c=eval("maparray.map_1.entrys")
	var all=eval("maparray");
	var right;
	var text;
	var rimap;
    for(var i = 0; i <c;i=i+1){
    	//if (i>0) return 10;
		rimap="map_"+(i+2);
		text=eval("all."+rimap+".realname");
            //text = eval("maparray.map_"+(i+2)+".realname");
        //if (text==name) //debugText((eval("maparray.map_"+(i+2)+".music"))+"jetzt");


    if (text==name) {right=i+2;return [eval("maparray.map_"+(right)+".name"),eval("maparray.map_"+(right)+".music")]}  //var uu=[eval("maparray.map_"+(i+2)+".name"),eval("maparray.map_"+(i+2)+".music")];return uu }
    } return [eval("maparray.map_"+(right)+".name"),eval("maparray.map_"+(right)+".music")];


}
function checkresults(table,number,name)//?berpr?ft antworten, liefert bool(+varname in data,+gew?hlteantwortnummer,+fragenname)
{
	if (eval(table+"."+name+".correct")==number) 
		return true;
	else 
		return false; 
}

function getRightAnswer(table,name)//?berpr?ft antworten, liefert bool(+varname in data,+gew?hlteantwortnummer,+fragenname)
{
    var right=eval(table+"."+name+".correct");
    var field=eval(table+"."+name+".answers");
    return field[right-1];

}

function displayAnswers(name, marked,answerfield)//anzeigen von verschiedenen antworten f?r puzzles mit markierung(+fragenname(wird in puzzles nachgeschaut),+istmarkiert(bool))
{
	var font = GetSystemFont();
	font.setColorMask( CreateColor(0, 0,0));
	if (name==""){
	var teiler=answerfield.length;
	var offset=GetScreenHeight()*0.75;
	var abstand=(GetScreenHeight()*0.25)/teiler;
	for (i=0; i<answerfield.length;i++)
	{
		font.drawTextBox(GetScreenWidth()/2,offset+i*abstand+10,GetScreenWidth()/2,offset-5+((i+1)*abstand),0,answerfield[i]);
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

function getTheFuckingKeys2()//wartet auf eingaben und gibt integer zur?ck
{
    if (AreKeysLeft())
        return GetKey();

}

function getTheFuckingKeys()//wartet auf eingaben und gibt integer zur?ck
{
  while (AreKeysLeft()) 
  {
		GetKey(); 
  }
  return GetKey();
}

//soll einzelnen eintrag darstellen, gr??e, rahmen einstellbar(posx,posy,breite,h?he,istmarkiert(bool),bildname,isttext(bool))
function displayEntry(x,y,width,height,text, marked,picture,textbool)
{
	font.setColorMask( CreateColor(0, 0,0));
	if (marked)
		OutlinedRectangle(x, y, width, height, CreateColor(204, 0, 0), 5);
	else
		OutlinedRectangle(x, y, width, height, CreateColor(100, 0, 0), 5);
	if (textbool)
		drawOffsetText(x,y,width,height,6,text,font);
	else
	{
		ShowPicture2(picture,x+5, y+5,width-11,height-11);
		drawOffsetText(x,y,width,height,6,text,font);
	}
}

//erzeugt den Videoplayer [Frame] neu
function VideoPlayer(video_path,sound_path,display_text_bottom){
	//leert den Key Buffer
	while (AreKeysLeft()) GetKey();
	var list = [];
	
	list = GetFileList("images/"+video_path);
	
	map_sound.pause();
	
  LoadVideo(list,video_path,sound_path);
  PlayVideo(8,8,GetScreenWidth()-17,500,list.length,display_text_bottom);
  while (GetKey() == KEY_R){
		PlayVideo(8,8,GetScreenWidth()-17,500,list.length,display_text_bottom);
  }
  map_sound.play(true);
}

//l?dt die bilder f?r ein video
function LoadVideo(list,video_path,sound_path,frames){
  var i = 0;

	//lade Video
	if (bilder[0] != LoadImage(video_path+"/"+list[0])){
		while(list[i] != null){
			bilder[i] = LoadImage(video_path+"/"+list[i]);
			
			// Text: video l?dt
			font.drawText(GetScreenWidth()-460,GetScreenHeight()-400,"Lade Video.");
			
			//Fortschrittsbalken
			Rectangle(50, 340, GetScreenWidth()-130, 10, CreateColor(100, 100, 100));
			Rectangle(50, 340, (0+(i*((GetScreenWidth()-130)/list.length))), 10, CreateColor(130, 130, 130));
			FlipScreen();	
			i++;
			}
	}	
	sound = LoadSound(sound_path);
}


function debugText(text)// zum anzeigen von vars zwecks debug(+text)
{
    var font2=LoadFont("tahoma12fett.rfn");

    displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3,"", true,"white.png",false);
    drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,150,200,0,text,font2);
    FlipScreen();

    while (GetKey()!=key_talk){
        displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3,"", true,"white.png",false);
        drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,150,200,0,text,font2);
    }

}

function debugText2(text)// zum anzeigen von vars zwecks debug(+text)
{
    displayEntry(GetScreenWidth()/4+(1*((GetScreenWidth()/4)+5)),(GetScreenHeight()/4)+(Math.round((1)/2))*((GetScreenHeight()/6)+5),GetScreenWidth()/4-5,GetScreenHeight()/6-5,text.toString(), true,"test.png",false);
    FlipScreen();
    while (GetKey()!=key_talk)
        displayEntry(GetScreenWidth()/4+(1*((GetScreenWidth()/4)+5)),(GetScreenHeight()/4)+(Math.round((1)/2))*((GetScreenHeight()/6)+5),GetScreenWidth()/4-5,GetScreenHeight()/6-5,text.toString(), true,"test.png",false);
    FlipScreen();;
}

function debugText3(text)// zum anzeigen von vars zwecks debug(+text), wartet nicht auf eingaben am ende
{
    var font2=LoadFont("tahoma12fett.rfn");

    displayEntry(GetScreenWidth()/3, GetScreenHeight()/3,GetScreenWidth()/3, GetScreenHeight()/3*2-20,"", true,"white.png",false);
    drawOffsetText(GetScreenWidth()/3+70,GetScreenHeight()/3+80,150,200,0,text,font2);



}

//verbindet 2 arrays zu einem, gibt das zur?ck(+1.array,+2.array)
function concatArray(array1,array2)
{
	var temp=array1;
	for (i=0;i<array2.length;i++) 
		temp.push(array2[i]);
	return temp;
}

//l?scht eine nummer aus einem array(nur die nummer, nicht die zelle, die mit nummer bezeichnet)(+array,+integer)
function deleteFromArray(array1,number)
{
	var test=[];
	for (i=0;i<array1.length;i++)
	{
		if (array1[i]!=number) test.push(array1[i]);
	}
	return test;
}

//z?hlt die zeit
function timeCount(){
timeseconds++;
}

//function f?r textanzeige in umrahmten rechteck. text wird mit offset in y und y achse dargestellt(xposition,yposition,gr??ex,gr??ey,randgr??e,text,font)
function drawOffsetText(x,y,spacex,spacey,offset,text,font)
{
font.drawTextBox(x+offset, y+offset,spacex-2*offset, spacey-2*offset,0, text);
}
