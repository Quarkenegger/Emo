
//-------------------------------klops
function moveQueue(person,movearray)//bewegt person zu verschiedenen zielen nacheinander(in einem weg) movearray gibt ziele in der form array=x,y,x2,y2... an(+personenname,+ziele)
{
movearray.push(GetPersonX(person),GetPersonY(person));
for(var i = 0; i < movearray.length-2;i=i+2)
  {
  if (i==0)
   moveTo2(movearray[movearray.length-2],movearray[movearray.length-1],person,movearray[i],movearray[i+1]);
  else
    moveTo2(movearray[i-2],movearray[i-1],person,movearray[i],movearray[i+1]);
  }
}

function moveTo2(xalt,yalt,person,X,Y)//bewegt person zu x,y auf der map in graden linien alte position wird vorgegeben(+xkoordalt,+ykoordalt,+personenname,+zielx,+ziely)
{
	var schnell=GetPersonSpeedY(person);
	var wiederholungeny=(Y-yalt)*schnell;
	personAlign(person, 0,yalt, 0,Y);
	for (i=0;i<Math.abs(wiederholungeny);i++)
	{
	if (yalt>Y)
		QueuePersonCommand(person, COMMAND_MOVE_NORTH, false);
	if (yalt<Y)
		QueuePersonCommand(person, COMMAND_MOVE_SOUTH, false);
	}
	personAlign(person, xalt,50, X,50);
	var wiederholungenx=(X-xalt)*schnell;
	for (i=0;i<Math.abs(wiederholungenx);i++)
	{
	if (xalt<X)
		QueuePersonCommand(person, COMMAND_MOVE_EAST, false);
	if (xalt>X)
		QueuePersonCommand(person, COMMAND_MOVE_WEST, false);
	}
}

function moveTo(person,X,Y)//bewegt person zu x,y auf der map in gradeen linien, personposition wird ermittelt(personenname,zielx,ziely)
{
	personAlign(person, 0,GetPersonY(person), 0,Y);
	var schnell=GetPersonSpeedY(person);
	var wiederholungeny=(Y-GetPersonY(person))*schnell;
	personAlign(person, 0,GetPersonY(person), 0,Y);
	for (i=0;i<Math.abs(wiederholungeny);i++)
	{
		if (GetPersonY(person)>Y)
			QueuePersonCommand(person, COMMAND_MOVE_NORTH, false);
		if (GetPersonY(person)<Y)
			QueuePersonCommand(person, COMMAND_MOVE_SOUTH, false);
	}
	personAlign(person, GetPersonX(person),50, X,50);
	var wiederholungenx=(X-GetPersonX(person))*schnell;
	for (i=0;i<Math.abs(wiederholungenx);i++)
	{
		if (GetPersonX(person)<X)
			QueuePersonCommand(person, COMMAND_MOVE_EAST, false);
		if (GetPersonX(person)>X)
			QueuePersonCommand(person, COMMAND_MOVE_WEST, false);
	}
}

function personAlign(person,altx,alty,neux,neuy)//richtet eine person auf nex,neuy aus(+personenname,+koordaltx,+koordalty,koordneux,koordneuy)
{
	if ((alty>neuy) && (altx==neux)) 
		QueuePersonCommand(person, COMMAND_FACE_NORTH, true);
	if ((alty>neuy) && (altx>neux)) 
		QueuePersonCommand(person, COMMAND_FACE_NORTHWEST, true);
	if ((alty>neuy) && (altx<neux)) 
		QueuePersonCommand(person, COMMAND_FACE_NORTHEAST, true);
	if ((alty<neuy) && (altx==neux)) 
		QueuePersonCommand(person, COMMAND_FACE_SOUTH, true);
	if ((alty<neuy) && (altx>neux)) 
		QueuePersonCommand(person, COMMAND_FACE_SOUTHWEST, true);
	if ((alty<neuy) && (altx<neux)) 
		QueuePersonCommand(person, COMMAND_FACE_SOUTHEAST, true);
	if ((alty==neuy) && (altx<neux)) 
		QueuePersonCommand(person, COMMAND_FACE_EAST, true);
	if ((alty==neuy) && (altx>neux)) 
		QueuePersonCommand(person, COMMAND_FACE_WEST, true);
}

//führt eine zufällige bewegung von x,y aus mit maxreichweite rangex,rangey 
function randomMove(person,X,Y,rangex,rangey)
{
var newx=X+(((Math.random()*2)-1)*rangex);
var newy=Y+(((Math.random()*2)-1)*rangex);
moveto(person,newx,newy);
//QueuePersonCommand(person, COMMAND_ANIMATE, true);
}