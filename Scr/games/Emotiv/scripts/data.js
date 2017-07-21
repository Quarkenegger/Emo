var text = {
  line1: 'good;', 
  line2: {name: 'bad'}, 
  line3: ['u','g','l','y']
}


var emotions={
emotion1:{name:'amuesiert',description:'sich vergnuegen; sich auf angenehme Art die Zeit vertreiben, seinen Spass haben',picture:'amuesiert.png'},
emotion2:{name:'angeekelt',description:'jemanden anwidern, jemandes Ekel, Abscheu, Widerwillen erregen',picture:'angeekelt.png'},
emotion3:{name:'angstvoll',description:'von Angst erfuellt, voller Angst',picture:'angstvoll.png'},
emotion4:{name:'aergerlich',description:'voller Aerger, veraergert, [sehr] verdrossen, verdriesslich, ungehalten, aufgebracht, unwillig, unmutig',picture:'aergerlich.png'},
emotion5:{name:'beleidigt',description:'in seiner Ehre verletzt',picture:'beleidigt.png'},
emotion6:{name:'betroffen',description:'durch etwas (Negatives, Trauriges) verwirrt, innerlich bewegt, beruehrt',picture:'betroffen.png'},
emotion7:{name:'beunruhigt',description:'in Unruhe, Sorge versetzen',picture:'beunruhigt.png'},
emotion8:{name:'dankbar',description:'vom Gefuehl des Dankes erfuellt, dies erkennen lassend; geneigt und bereit, etwas Gutes, das einem zuteilwurde, anzuerkennen und sich dafuer erkenntlich zu zeigen',picture:'dankbar.png'},
emotion9:{name:'eifersuechtig',description:'von Eifersucht erfuellt, bestimmt',picture:'eifersuechtig.png'},
emotion10:{name:'enthusiastisch',description:'leidenschaftlich begeistert, schwaermerisch, ueberschwaenglich',picture:'enthusiastisch.png'},
emotion11:{name:'entschudligend',description:'jemanden wegen eines falschen Verhaltens oder Aehnliches um Verstaendnis, Nachsicht, Verzeihung bitten',picture:'entschuldigend.png'},
emotion12:{name:'entsetzt',description:'enpoert, bestuerzt, fassungslos',picture:'entsetzt.png'},
emotion13:{name:'enttaeuscht',description:'desillusioniert, niedergeschlagen, ernuechtert',picture:'enttaeuscht.png'},
emotion14:{name:'erleichtert',description:'von Angst und Sorge befreit, voller Erleichterung',picture:'erleichtert.png'},
emotion15:{name:'erwartungsvoll',description:'voller Erwartung',picture:'erwartungsvoll.png'},
emotion16:{name:'frustriert',descriptipon:'enttaeuscht, voller Frustration',picture:'frustriert.png'},
emotion17:{name:'gekraenkt',description:'jemanden mit einer Aeusserung oder einer Handlung, durch die er sich zurueckgesetzt, gedemuetigt oder in seiner guten Absicht verkannt fuehlt, in seinem Selbstgefuehl treffen',picture:'gekraenkt.png'},
emotion18:{name:'gelangweilt',description:'Langeweile haben, empfinden',picture:'gelangweilt.png'},
emotion19:{name:'heiter',description:'durch Unbeschwertheit, Frohsinn und innere Ausgeglichenheit gekennzeichnet; froehlich',picture:'heiter.png'},
emotion20:{name:'interessiert',description:'[starken] Anteil nehmend; Interesse habend, zeigend; geistig aufgeschlossen, aufmerksam',picture:'interessiert.png'},
emotion21:{name:'melancholisch',description:'von Melancholie befallen; niedergedrueckt Melancholie hervorrufend; Duesternis ausstrahlend',picture:'melancholisch.png'},
emotion22:{name:'mitleidig',description:'voller Mitleid',picture:'mitleidig.png'},
emotion23:{name:'neidisch',description:'von Neid bestimmt, geleitet oder eine entsprechende Haltung erkennen lassend',picture:'neidisch.png'},
emotion24:{name:'neugierig',description:'voller Neugier, Neugier erkennen lassend',picture:'neugierig.png'},
emotion25:{name:'schuldig',description:'(an etwas)[die] Schuld tragend, in Bezug auf jemanden, etwas Schuld auf sich geladen habend',picture:'schuldig.png'},
emotion26:{name:'schwaermerisch',description:'zu sehr gefuehlsbetonter Begeisterung, uebertriebener Empfindsamkeit neigend oder davon erfuellt und diesen Wesenszug zum Ausdruck bringend, erkennen lassend',picture:'schwaermerisch.png'},
emotion27:{name:'stolz',description:'von Selbstbewusstsein und Freude ueber einen Besitz, eine [eigene] Leistung erfuellt; ein entsprechendes Gefuehl zum Ausdruck bringend oder hervorrufend',picture:'stolz.png'},
emotion28:{name:'traurig',description:'Trauer empfindend, ausdrueckend, bekuemmert, betruebt; in niedergedrueckter Stimmung',picture:'traurig.png'},
emotion29:{name:'ueberrascht',description:'unvorbereitet getroffen [und deshalb in Erstaunen versetzt]',picture:'ueberrascht.png'},
emotion30:{name:'verachtend',description:'als schlecht, minderwertig, unwuerdig ansehen; auf jemanden, etwas geringschaetzig herabsehen',picture:'verachtend.png'},
emotion31:{name:'vergebend',description:'(gehoben) verzeihen',picture:'vergebend.png'},
emotion32:{name:'verlegen',description:'in einer peinlichen, unangenehmen Situation nicht so recht wissend, wie man sich verhalten soll; Unsicherheit und eine Art von Hilflosigkeit ausdrueckend',picture:'verlegen.png'},
emotion33:{name:'verliebt',description:'von Liebe zu jemandem bzw. zueinander ergriffen',picture:'verliebt.png'},
emotion34:{name:'verwirrt',description:'verstoert, konsterniert',picture:'verwirrt.png'},
emotion35:{name:'verzweifelt',description:'hoffnungslos, ausweglos; desperat',picture:'verzweifelt.png'},
emotion36:{name:'wehmuetig',description:'Wehmut empfindend',picture:'wehmuetig.png'},
emotion37:{name:'wuetend',description:'voller Wut, durch Wut erregt',picture:'wuetend.png'},
emotion38:{name:'zufrieden',description:'sich mit dem Gegebenen, den gegebenen Umstaenden, Verhaeltnissen in Einklang befindend und daher innerlich ausgeglichen und keine Veraenderung der Umstaende wuenschend',picture:'zufrieden.png'},
emotion39:{name:'zuversichtlich',description:'voller Zuversicht, hoffnungsvoll, optimistisch',picture:'zuversichtlich.png'},
emotion40:{name:'zweifelnd',description:'in Bezug auf einen Sachverhalt unsicher; skeptisch; misstrauisch',picture:'zweifelnd.png'}

}

var puzzles={
puzzle3:{question:'Wie fuehlt sich Hausmeister Billy?', answers:['Heiter','Traurig','Gelangweilt','Dankbar'],picture:'Billy_gelangweilt.jpg',correct:3,reward:0}, 
puzzle4:{question:'Gisela ist traurig. Auf welchem Bild sieht sie traurig aus?', answers:['Gisela_traurig.jpg','Gisela_rnd1.jpg','Gisela_rnd2.jpg','Gisela_rnd3.jpg'],picture:'',correct:1,reward:0}, 
puzzle5:{question:'Sieht man mir meinen Stress nicht an?', answers:['Jace_rnd1.jpg','Jace_rnd2.jpg','Jace_rnd3.jpg','Jace_frustriert.jpg'],picture:'',correct:4,reward:0}, 
puzzle6:{question:'Ich soll neidisch sein? Niemals?!', answers:['Yuga_rnd1.jpg','Yuga_neid.jpg','Yuga_rnd2.jpg','Yuga_rnd3.jpg'],picture:'',correct:2,reward:0},
puzzle7:{question:'Die arme Yuga. Ich fuehle mich ganz:', answers:['frustriert','vergebend','schuldig','eifersuechtig'],picture:'Hilda_vergebend.jpg',correct:2,reward:0},
puzzle8:{question:'Die arme Studentin weiss nicht wo er ist, wie fuehlt er sich wohl: ', answers:['frustriert','verwirrt','dumm','schlau'],picture:'studentin_verwirrt.png',correct:2,reward:0},
puzzle9:{question:'Der arme Narr Cedric hat seine Muetze verloren, wie fuehlt er sich?', answers:['frustriert','traurig','gelangweilt','enttaeuscht'],picture:'Narr_enttaeuscht.png',correct:4,reward:0},
puzzle10:{question:'Wie fuehlt sich Winry, nachdem du sie auf frischer Tat ertappt hast?', answers:['entsetzt','betroffen','schuldig','wuetend'],picture:'Winry_schuldig.png',correct:3,reward:0},
puzzle11:{question:'Wie sieht Jonathan aus als er ueber Rosalina spricht?', answers:['schwaermerisch','heiter','verliebt','verlegen'],picture:'Jonathan_schwaermerisch.png',correct:1,reward:0},
puzzle12:{question:'Wie sieht Roaslina aus als sie den Brief liest?', answers:['verliebt','verlegen','neugierig','schwaermerisch'],picture:'Rosalina_verlegen.jpg',correct:2,reward:0},
puzzle13:{question:'Wie reagierte Roaslina nachdem sie den Brief gelesen hat?', answers:['verliebt','heiter','frustriert','ueberrascht'],picture:'Rosalina_verliebt.jpg',correct:1,reward:0},
}

var items={
item1:{name:'Christians Hammer',description:'das ist voll der hammer. kann alle charaktere toeten.',picture:'schraubenschluessel.png'},
item2:{name:'Brecheisen',description:'oeffnet alle tueren',picture:'schraubenschluessel.png'},
item3:{name:'Schraubenschluessel',description:'Damit kann man Willy-Regale aufbauen... oder Sicherungen ueberbruecken.',picture:'schraubenschluessel.png'},
item4:{name:'Mc Tux Puppe',description:'Eine coole Puppe ueber die sich Kinder sehr freuen.',picture:'MCTux.png'},
item5:{name:'Tacker',description:'Bueromaterial.',picture:'tacker.png'},
item6:{name:'Bueroklammern',description:'Bueromaterial.',picture:'klammer.png'},
item7:{name:'Aktenordner',description:'Bueromaterial.',picture:'ordner.png'},
item8:{name:'Stifte',description:'Bueromaterial.',picture:'stift.png'},
item9:{name:'Pistole',description:'Dient als Schutz. Hoffentlich.',picture:'pistol.png'},
item10:{name:'Karotte',description:'Dient als Schutz. Hoffentlich.',picture:'Karotte.png'},
item11:{name:'Erste Hilfe',description:'Damit kann man verletzten Menschen helfen.',picture:'erste_hilfe.jpg'},
item12:{name:'Bohrmaschine',description:'Bruuuuummmmmmm',picture:'bohrmaschine.png'},
item12:{name:'Bohrmaschine',description:'Bruuuuummmmmmm',picture:'bohrmaschine.png'},
item201:{name:'Buch',description:'Das sieht nach einem sehr interessanten Buch aus.',picture:'buch.jpg'},
item301:{name:'Eintrittskarte', description: 'Damit kannst du den Filmpark besuchen.',picture:'eintrittskarte.png'},
item302:{name:'Liebesbrief', description: 'Ein Liebesbrief von Jonathan an Rosalina.',picture:'liebesbrief.jpg'},
}

var maparray={
map_1:{entrys:15},
map_2:{name:'Galerie',description:'Hier standen schon so viele Meisterwerke. Die Kuenstler werden von Jahr zu Jahr besser.', realname:'kulturzetrum_eingang',music:'MAPgallery.mp3'},
map_3:{name:'Filmpark',description:'Im Filmpark triffst du viele Schauspieler. Sie sind Meister im Nachahmen von Emotionen.',realname:'Park',music:'MAPpark2.ogg'} ,
map_4:{name:'Stadt',description:'Deine Reise beginnt in deiner Heimatstadt... Hier findest du viele schoene Orte und hilfreiche Personen',realname:'Detektei_Polizei_Buero',music:'MAPcity.wav'},
map_5:{name:'Wohnviertel',description:'Im Wohnviertel wohnen die meisten Menschen dieser Stadt. Hier treffen sich alle Schichten',realname:'Wohnviertel',music:'MAPwohngebiet.wav'},
map_6:{name:'Dorf',description:'Das Dorf am Rande der Stadt ist ein gemuetlicher Rueckzugsort. Hier findest du auch dein eigenes Haus.',realname:'Dorf',music:'MAPdorf2.mp3'},
map_7:{name:'Universitaet',description:'Die Uni ist ein ort des Lernens und der Lernvermeidung',realname:'Uni',music:'MAPcampus.ogg'},
map_8:{name:'Buero',description:'nothing',realname:'buero',music:'MAPlabor.mp3'},
map_9:{name:'1. Obergeschoss, Detektei',description:'nothing',realname:'Detektei1OG',music:'MAPlabor.mp3'},
map_10:{name:'Einkaufs und Kultur Strasse',description:'nothing',realname:'einkauf-kulturzentrum_strasse',music:'KaufhausmusicMiro.mp3'},
map_11:{name:'1. Stock, Einkaufszentrum',description:'nothing',realname:'Einkaufzentrum_1S',music:'KaufhausmusicMiro.mp3'},
map_12:{name:'2. Stock, Einkaufszentrum',description:'nothing',realname:'Einkaufzentrum_2S',music:'KaufhausmusicMiro.mp3'},
map_13:{name:'Erdgeschoss, Einkaufszentrum',description:'nothing',realname:'Einkaufzentrum_EG',music:'KaufhausmusicMiro.mp3'},
map_14:{name:'Polizeistation',description:'nothing',realname:'PloizeiHaupt',music:'MAPlabor.mp3'},
map_15:{name:'Eigene Wohnung',description:'nothing',realname:'zimmer',music:'MAPlabor.mp3'},
map_16:{name:'Detektei',description:'nothing',realname:'Detektei',music:'MAPlabor.mp3'}
 }

var quests={
	quest1:{name:'Erzaehle Sam und Max von dem Fall',description:'Du hast von dem Polizeichef einen wichtigen Fall uebertragen bekommen um den Taeter aus der Ausstellung [Fest der Emotionen] zu finden. Suche deine 2 Gehilfen Sam und Max und berichte ihnen davon. Tipp: Gehe in die Detektei, die sind im suedlichen Zentrum der Staadt befindet.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest2:{name:'Untersuche den Fahrstuhl',description:'Max ist nicht finden. Vielleicht steckt er im Fahrstuhl fest. Tipp: Du solltest mit einem Fachkundigen Hausmeister reden.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[3]},
	quest3:{name:'Beginne mit den Ermittlungen',description:'Befrage die Leute in der Stadt um Hinweise zu dem Taeter zu finden Tipp: Im Buerogebaeude befinden sich viele Menschen. Es befindet sich im Nordosten der Stadt.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest4:{name:'Troeste Gisela',description:'Troeste die [traurige] Gisela. Finde dazu etwas aufmunterndes. Tipp: Du solltest in dein Haus im Dorf gehen. Dort befindet sich in einem deiner Regale bestimmt etwas nuetzliches.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[4]},
	quest5:{name:'Besorge Bueromaterial',description:'Besorge [Tacker], [Bueroklammern], [Aktenordner] und [Stifte]. Tipp: Bueromaterial kann man im Kaufhaus kaufen. Es befindet sich westlich vom Stadtzentrum',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[5,6,7,8]},
	quest6:{name:'Erkunde das Wohnviertel',description:'Befrage die Leute in dem Wohngebiet um Hinweise zu dem Taeter zu finden. Tipp: Das Wohngebiet befindet sich noerdlich des Stadtzentrums.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest7:{name:'Befrage Helena Graf',description:'Gehe zu den Plattenbauten und finde Helena Graf. Tipp: Helena treibt sich gern auf Hinterhöfen herum.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest8:{name:'Schutz',description:'Finde etwas um dich in gefaehrlichen Situationen zu schuetzen, wie z.B. einne Waffe. Tipp: im Sued-Westen der Stadt treiben sich seltsame Leute herum.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[9]},
	quest9:{name:'Die Kuenstlerin',description:'Suche im Wohnviertel nach der Kuenstlerin Yuga. Vielleicht hat sie Hinweise oder macht sich verdaechtig. Tipp: Yuga ist immer in der Naehe von Helena.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest10:{name:'Die bessere Kuenstlerin',description:'Yuga verdaechtigt Hilda, bestimmt aus Neid. Du solltest trotzdem mir ihr reden. Tipp: Hilda wohnt in einem schoenen Einfamilienhaus.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest11:{name:'Der Ort des Wissens.',description:'Du hast den Hinweis bekommen, dass in der Uni viel untersucht wird. Gehe zur Uni und ermittel dort weiter. Tipp: Die Uni ist westlich vom Wohngebiet.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
  quest12:{name:'Studentenleben',description:'Hilf den Studenten. Wenn ihre Sorgen geklaert sind hat der Professor Zeit fuer eine Befragung.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
  quest13:{name:'Der grosse Filmpark.',description:'Gehe in den Filmpark. Dort musst du nach dem Taeter suchen. Alle Hinweise weisen auf den Professor hin, jedoch warum sollte er sowas getan haben?!.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest14:{name:'Suche den Professor.',description:'Der Professor soll hier irgendwo im Filmpark befinden. Suche ihn mit hilfe der anderen G�ste und Angesellten.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest15:{name:'Beschaffe den Schraubenschluessel wieder.',description:'Tobias der Mechaniker sucht seinen Schraubenschluessel. Wenn du ihn findest, hilft er dir den Professor zu finden.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[3]},
	quest16:{name:'Bringe den Liebesbrief zu Rosalina.',description:'Der arme Jonathan traut sich nicht Rosalina einen Liebesbrief zu uebergeben. Wenn du das fuehr ihn machst, gibt er dir einen weiteren Hinweis darauf wo sich der Professor aufhalten koennte.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},


}