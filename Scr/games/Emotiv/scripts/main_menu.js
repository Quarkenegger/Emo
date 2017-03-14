function main_menu()
{
	var xbo= 10;
	var ybo= 11;
	var window = LoadWindowStyle("papiro.rws");
	var finger = LoadImage("thefinger.png");
	// define the location of th selection-finger
	// yfinger2 is used as a memory buffer to remember the position of the finger
	// in the previous menu window
	var yfinger = 18, yfinger2 = 18;
	var redraw = true;
	var mode = "main";
	var quit = false;
	var font = LoadFont("tahoma_22.rfn");
	var key_talk = KEY_ENTER;
	var key_cancel = KEY_BACKSPACE;
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
			font.drawText(25, 10, "Emolex");
			font.drawText(25, 40, "Items" );
			font.drawText(25, 70, "Tagebuch ");
			font.drawText(25, 100, "Speichern");
			font.drawText(25, 130, "Loaden");
			font.drawText(25, 160, "Exit");
			font.drawText(25,225, money);
			font.drawText(45,225, "euro");
		}
		finger.blit((mode=="main")?6:5, yfinger);
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
					if (yfinger < 168) yfinger += 30;
					else yfinger = 18;
				}
				break;
			}
			case KEY_UP:
			{
				if (mode=="main")
				{
					if (yfinger > 18) yfinger -= 30;
					else yfinger = 168;
				}
				break;
			}
			
			// picks the next menu window to show with ENTER
			case key_talk:
			{
				if (mode == "main")
				{
					if	  (yfinger ==  18)  {redraw = true; emolex_menu(); yfinger2 = 18;}
					else if (yfinger == 48) { redraw = true; items_menu();   yfinger2 = 48;}
					else if (yfinger == 78) { redraw = true; tagebuch_menu(); yfinger2 = 78;}
					else if (yfinger == 108) { if (saveable) LoadGameMenu("save");}
					else if (yfinger == 138) { LoadGameMenu("load"); return;}
					else if (yfinger == 168) { quit= true; break;}
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