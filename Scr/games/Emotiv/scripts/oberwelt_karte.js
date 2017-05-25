


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
	
	var Black 		=CreateColor(0,   0,   0,   255);
	var White		=CreateColor(255, 255, 255, 255);
	var Some_blues = CreateColor(100,0,255,200);
	var pointer_case= 0;
	//var font = LoadFont("tahoma_22.rfn");
	//var key_talk = KEY_ENTER;
	//var key_cancel = KEY_BACKSPACE;
	
// this should be declared as a global variable in the script
//	game_code.js. It refers to the display cases of the mini maps
//	within the upper world map:  0 := grayscale, 1 := colors
//	the correspoindng indexes are the following:
//	0 - stadt_mini
//	1 - galerie_mini
//	2 - uni_mini
//	3 - wohnvierel_mini
//	4	- park_mini
//var oberwelt_karte_array= [1,0,0,0,0];

/*
Function that displays the overworld map (oberwelt karte), containing miniatures that represent
the different worlds, and an icon of the detective, allowing the player to move among the different
maps during the game.
*/
function oberwelt_karte()
{
	var quit = false;
	pointer_case =  0;
	while(quit==false)
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
			font.drawText(110, 126, "Universit�t");
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
		if ((key==KEY_UP)&&(pointer_case<5)) pointer_case++;
		if ((key==KEY_DOWN)&&(pointer_case>0)) pointer_case--;
		if ((key==KEY_RIGHT)&&(pointer_case<5)) pointer_case++;
		if ((key==KEY_LEFT)&&(pointer_case>0)) pointer_case--;
		
		 
		//determine the place where the pointer must be painted
		//depending on the keys pressed
		/*
		if (AreKeysLeft())
		{
			switch (GetKey())
			{
				case KEY_DOWN:
				{
					if(pointer_case == 3)pointer_case= 2;
					else if(pointer_case == 4)pointer_case = 1;
					else if(pointer_case == 1)pointer_case = 0;
					break;
				}
				case KEY_UP:
				{
					if(pointer_case == 0)pointer_case= 1;
					else if(pointer_case == 1)pointer_case = 4;
					else if(pointer_case == 2)pointer_case = 3;
					else if(pointer_case == 3)pointer_case = 5;
					else if(pointer_case == 4)pointer_case = 5;
					break;
				}
				case KEY_LEFT:
				{
					if(pointer_case == 0)pointer_case= 1;
					else if(pointer_case == 1)pointer_case = 2;
					else if(pointer_case == 4)pointer_case = 3;
					else if(pointer_case == 5)pointer_case = 3;					
					break;
				}
				case KEY_RIGHT:
				{
					if(pointer_case == 2)pointer_case= 1;
					else if(pointer_case == 3)pointer_case = 4;
					else if(pointer_case == 5)pointer_case = 4;
					else if(pointer_case == 1)pointer_case = 0;				
					break;
				}
				*/
				// picks the world where the player has to ve respawned, or dislplays
				//	the "blocked message on screen"
				if  (key==key_talk)
				{
					if	  ((pointer_case ==  0)&&(oberwelt_karte_array[0]==1)) {MapChange("Dorf.rmp",264,29,"MAPdorf.ogg");quit = true;break;}  // teleport to dorf
					else if ((pointer_case == 1)&&(oberwelt_karte_array[1]==1)){ MapChange("Detektei_Polizei_B�ro.rmp",670,950,"MAPcity.wav");quit = true;break;} // teleport to city
					else if ((pointer_case == 2)&&(oberwelt_karte_array[2]==1)){ MapChange("einkauf-kulturzentrum_strasse.rmp",1643,524,"MAPcity.wav");quit = true;break;} // teleport to gallery
					else if ((pointer_case == 3)&&(oberwelt_karte_array[3]==1)){ MapChange("Uni.rmp",493,904,"MAPcampus.ogg");quit = true;break;} // teleport to uni
					else if ((pointer_case == 4)&&(oberwelt_karte_array[4]==1)) {MapChange("Wohnviertel.rmp",429,996,"MAPwohngebiet.wav");quit = true;break;} // teleport to wohngebiet
					else if ((pointer_case == 5)&&(oberwelt_karte_array[5]==1)) {MapChange("Park.rmp",871,1576,"MAPpark2.wav");quit = true;break;} // teleport to park
					else debugText("Nicht freigeschaltet2!");
				}
				if (key== key_cancel)
				{
					quit = true;
					break;
				}
			 //switch key
		 // if areKeysLeft

	}
}

function unlockMap(map){
oberwelt_karte_array[map]=1;
}

function setPointer(pointer_case){
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
		// paints pointer
		// cross (perhaps better for war-related games XD)
		//Line(center_x - 70, center_y, center_x + 70, center_y, Black);
		//Line(center_x, center_y - 70, center_x, center_y + 70, Black);
		//point
		//Rectangle(center_x - 12, center_y - 12, 24, 24, Black);
		//inner screen
		//Line(center_x - 35, center_y - 35, center_x + 35, center_y - 35, White);
		//Line(center_x - 35, center_y - 35, center_x - 35, center_y + 35, White);
		//Line(center_x - 35, center_y + 35, center_x + 35, center_y + 35, White);
		//Line(center_x + 35, center_y - 35, center_x + 35, center_y + 35, White);
		detective_icon.blit(center_x - 35, center_y - 35);
}


