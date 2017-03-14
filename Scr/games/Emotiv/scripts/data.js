var text = {
  line1: 'good;', 
  line2: {name: 'bad'}, 
  line3: ['u','g','l','y']
}
var emotions={
emotion1:{name:'amuesiert',description:'sich vergnuegen; sich auf angenehme Art die Zeit vertreiben, seinen Spaß haben',picture:'amuesiert.png'},
emotion2:{name:'angeekelt',description:'jemanden anwidern, jemandes Ekel, Abscheu, Widerwillen erregen',picture:'angeekelt.png'},
emotion3:{name:'angstvoll',description:'von Angst erfuellt, voller Angst',picture:'angstvoll.png'},
emotion4:{name:'aergerlich',description:'voller Aerger, veraergert, [sehr] verdrossen, verdrießlich, ungehalten, aufgebracht, unwillig, unmutig',picture:'aergerlich.png'},
emotion5:{name:'beleidigt',description:'in seiner Ehre verletzt',picture:'beleidigt.png'},
emotion6:{name:'betroffen',description:'durch etwas (Negatives, Trauriges) verwirrt, innerlich bewegt, berührt',picture:'betroffen.png'},
emotion7:{name:'beunruhigt',description:'in Unruhe, Sorge versetzen',picture:'beunruhigt.png'},
emotion8:{name:'dankbar',description:'vom Gefuehl des Dankes erfüllt, dies erkennen lassend; geneigt und bereit, etwas Gutes, das einem zuteilwurde, anzuerkennen und sich dafür erkenntlich zu zeigen',picture:'dankbar.png'},
emotion9:{name:'eifersuechtig',description:'von Eifersucht erfüllt, bestimmt',picture:'eifersuechtig.png'},
emotion10:{name:'enthusiastisch',description:'leidenschaftlich begeistert, schwaermerisch, überschwaenglich',picture:'enthusiastisch.png'},
emotion11:{name:'entschudligend',description:'jemanden wegen eines falschen Verhaltens oder Aehnliches um Verstaendnis, Nachsicht, Verzeihung bitten',picture:'entschuldigend.png'},
emotion12:{name:'entsetzt',description:'enpört, bestürzt, fassungslos',picture:'entsetzt.png'},
emotion13:{name:'enttaeuscht',description:'desillusioniert, niedergeschlagen, ernüchtert',picture:'enttaeuscht.png'},
emotion14:{name:'erleichtert',description:'von Angst und Sorge befreit, voller Erleichterung',picture:'erleichtert.png'},
emotion15:{name:'erwartungsvoll',description:'voller Erwartung',picture:'erwartungsvoll.png'},
emotion16:{name:'frustriert',descriptipon:'enttaeuscht, voller Frustration',picture:'frustriert.png'},
emotion17:{name:'gekraenkt',description:'jemanden mit einer Aeußerung oder einer Handlung, durch die er sich zurückgesetzt, gedemütigt oder in seiner guten Absicht verkannt fühlt, in seinem Selbstgefühl treffen',picture:'gekraenkt.png'},
emotion18:{name:'gelangweilt',description:'Langeweile haben, empfinden',picture:'gelangweilt.png'},
emotion19:{name:'heiter',description:'durch Unbeschwertheit, Frohsinn und innere Ausgeglichenheit gekennzeichnet; fröhlich',picture:'heiter.png'},
emotion20:{name:'interessiert',description:'[starken] Anteil nehmend; Interesse habend, zeigend; geistig aufgeschlossen, aufmerksam',picture:'interessiert.png'},
emotion21:{name:'melancholisch',description:'von Melancholie befallen; niedergedrückt Melancholie hervorrufend; Düsternis ausstrahlend',picture:'melancholisch.png'},
emotion22:{name:'mitleidig',description:'voller Mitleid',picture:'mitleidig.png'},
emotion23:{name:'neidisch',description:'von Neid bestimmt, geleitet oder eine entsprechende Haltung erkennen lassend',picture:'neidisch.png'},
emotion24:{name:'neugierig',description:'voller Neugier, Neugier erkennen lassend',picture:'neugierig.png'},
emotion25:{name:'schuldig',description:'(an etwas)[die] Schuld tragend, in Bezug auf jemanden, etwas Schuld auf sich geladen habend',picture:'schuldig.png'},
emotion26:{name:'schwaermerisch',description:'zu sehr gefühlsbetonter Begeisterung, übertriebener Empfindsamkeit neigend oder davon erfüllt und diesen Wesenszug zum Ausdruck bringend, erkennen lassend',picture:'schwaermerisch.png'},
emotion27:{name:'stolz',description:'von Selbstbewusstsein und Freude über einen Besitz, eine [eigene] Leistung erfüllt; ein entsprechendes Gefühl zum Ausdruck bringend oder hervorrufend',picture:'stolz.png'},
emotion28:{name:'traurig',description:'Trauer empfindend, ausdrückend, bekümmert, betrübt; in niedergedrückter Stimmung',picture:'traurig.png'},
emotion29:{name:'ueberrascht',description:'unvorbereitet getroffen [und deshalb in Erstaunen versetzt]',picture:'ueberrascht.png'},
emotion30:{name:'verachtend',description:'als schlecht, minderwertig, unwürdig ansehen; auf jemanden, etwas geringschaetzig herabsehen',picture:'verachtend.png'},
emotion31:{name:'vergebend',description:'(gehoben) verzeihen',picture:'vergebend.png'},
emotion32:{name:'verlegen',description:'in einer peinlichen, unangenehmen Situation nicht so recht wissend, wie man sich verhalten soll; Unsicherheit und eine Art von Hilflosigkeit ausdrückend',picture:'verlegen.png'},
emotion33:{name:'verliebt',description:'von Liebe zu jemandem bzw. zueinander ergriffen',picture:'verliebt.png'},
emotion34:{name:'verwirrt',description:'verstört, konsterniert',picture:'verwirrt.png'},
emotion35:{name:'verzweifelt',description:'hoffnungslos, ausweglos; desperat',picture:'verzweifelt.png'},
emotion36:{name:'wehmuetig',description:'Wehmut empfindend',picture:'wehmuetig.png'},
emotion37:{name:'wuetend',description:'voller Wut, durch Wut erregt',picture:'wuetend.png'},
emotion38:{name:'zufrieden',description:'sich mit dem Gegebenen, den gegebenen Umstaenden, Verhaeltnissen in Einklang befindend und daher innerlich ausgeglichen und keine Veraenderung der Umstaende wünschend',picture:'zufrieden.png'},
emotion39:{name:'zuversichtlich',description:'voller Zuversicht, hoffnungsvoll, optimistisch',picture:'zuversichtlich.png'},
emotion40:{name:'zweifelnd',description:'in Bezug auf einen Sachverhalt unsicher; skeptisch; misstrauisch',picture:'zweifelnd.png'}

}

var puzzles={
puzzle1:{question:'noch so ein test?', answers:['du bist dumm','langweilig','schlechte implementierung'],correct:3,reward:0}, 
puzzle2:{question:'was soll das hier?',answers:['schlechte implementierung','langweilig'],correct:2,reward:1} ,
//---
puzzle3:{question:'Wie fühlt sich Hausmeister Billy?', answers:['Heiter','Traurig','Gelangweilt','Dankbar'],picture:'Billy_gelangweilt.jpg',correct:3,reward:0}, 
puzzle4:{question:'Gisela ist traurig. Auf welchem Bild sieht sie traurig aus?', answers:['Gisela_traurig.jpg','Gisela_rnd1.jpg','Gisela_rnd2.jpg','Gisela_rnd3.jpg'],picture:'',correct:1,reward:0}, 
puzzle5:{question:'Sieht man mir meinen Stress nicht an?', answers:['Jace_rnd1.jpg','Jace_rnd2.jpg','Jace_rnd3.jpg','Jace_frustriert.jpg'],picture:'',correct:4,reward:0}, 
puzzle6:{question:'Ich soll neidisch sein? Niemals?!', answers:['Yuga_rnd1.jpg','Yuga_neid.jpg','Yuga_rnd2.jpg','Yuga_rnd3.jpg'],picture:'',correct:2,reward:0},
puzzle7:{question:'Die arme Yuga. Ich fühle mich ganz:', answers:['frustriert','vergebend','schuldig','eifersüchtig'],picture:'Hilda_vergebend.jpg',correct:2,reward:0},
	puzzleRegisseur1:{question:'Neulich onboard in der Kombüse hatte sich das ereignet. Welchen Ausdruck hat der Mann gemacht?', answers:['zufrieden','melancholisch','angeekelt'],picture:'suppe/006',correct:3, reward:0},
	puzzleRegisseur2:{question:'Wie hat sich die blonde Frau verhalten?', answers:['amüsiert','überrascht','heiter'],picture:'suppe/007',correct:1, reward:0},
	puzzleRegisseur3:{question:'Der Mann war sehr emotionvoll, welche Emotion hat er gestikuliert?', answers:['wütend', 'traurig','beleidigt'],picture:'suppe/008',correct:1, reward:0},
	puzzleCowboy1:{question:'Im Duell ist es wichtig keine Emotionen zu zeigen. Kannst du eine Emotion bei mir erkennen?',answers:['Ja','Nein'],picture:'Cowboy/002.jpg',correct:2,reward:0},
	puzzleCowboy2:{question:'Ok, welchen Gesichtsausdruck habe ich jetzt?',answers:['wehmütig','enttäuscht','keinen'],picture:'Cowboy/002.jpg',correct:3,reward:0},
	puzzleCowboy3:{question:'Jetzt zeige ich dir wie ein Cowboy aussieht, der ein Duell gewonnen hat. Welche Emotion ist das?',answers:['wütend','neutral','angeekelt'],picture:'Cowboy/002',correct:2,reward:0},
	puzzleKoenig1:{question:'Welche Emotion spielt der König?',answers:['gekränkt','angeekelt','verlegen'],picture:'König',correct:1,reward:0},
	puzzleKoenig2:{question:'Welche Emotion spielt der König?',answers:['ärgerlich','gekränkt','verachtend'],picture:'König',correct:2,reward:0},
	puzzleKoenig3:{question:'Welche Emotion spielt der König?',answers:['melancholisch','gekränkt','verwirrt'],picture:'König',correct:2,reward:0},
	puzzleProf1:{question:'Welche Emotion sieht man auf dem Bild?',answers:['stolz','zuversichtlich','wütend'],picture:'profquiz_zuversichtlich',correct:2,reward:0},
	puzzleProf2:{question:'Welche Emotion sieht man auf dem Bild?',answers:['verliebt','interessiert','beunruhigt'],picture:'profquiz_verliebt',correct:1,reward:0},
	puzzleProf3:{question:'Welche Emotion sieht man auf dem Bild?',answers:['betroffen','amüsiert','überrascht'],picture:'profquiz_überrascht',correct:3,reward:0},
	puzzleProf4:{question:'Welche Emotion sieht man auf dem Bild?',answers:['neugierig','traurig','zweifelnd'],picture:'profquiz_traurig',correct:2,reward:0},
	puzzleProf5:{question:'Welche Emotion sieht man auf dem Bild?',answers:['gekränkt','angstvoll', 'schuldig' ],picture:'profquiz_angstvoll',correct:2,reward:0},
	puzzleProf6:{question:'Welche Emotion sieht man auf dem Bild?',answers:['enthusiastisch','erleichtert','heiter'],picture:'profquiz_heiter',correct:3,reward:0},
	puzzleProf7:{question:'Welche Emotion sieht man auf dem Bild?',answers:['entsetzt','wehmütig','mitleidig'],picture:'profquiz_entsetzt',correct:1,reward:0},
	puzzleProf8:{question:'Welche Emotion sieht man auf dem Bild?',answers:['ärgerlich','erleichtert','beleidigt'],picture:'profquiz_erleichtert',correct:2,reward:0},
	puzzleProf9:{question:'Welche Emotion sieht man auf dem Bild?',answers:['mitleidig','schwärmerisch','vergebend'],picture:'profquiz_mitleidig',correct:1,reward:0},
	puzzleProf10:{question:'Welche Emotion sieht man auf dem Bild?',answers:['neidisch','dankbar','frustriert'],picture:'profquiz_dankbar',correct:2,reward:0}
}

var items={
item1:{name:'Christians Hammer',description:'das ist voll der hammer. kann alle charaktere töten.',picture:'schraubenschlüssel.png'},
item2:{name:'Brecheisen',description:'öffnet alle türen',picture:'schraubenschlüssel.png'},
item3:{name:'Schraubenschlüssel',description:'Damit kann man Willy-Regale aufbauen... oder Sicherungen überbrücken.',picture:'schraubenschlüssel.png'},
item4:{name:'Mc Tux Puppe',description:'Eine coole Puppe über die sich Kinder sehr freuen.',picture:'MCTux.png'},
item5:{name:'Tacker',description:'Büromaterial.',picture:'tacker.png'},
item6:{name:'Büroklammern',description:'Büromaterial.',picture:'klammer.png'},
item7:{name:'Aktenordner',description:'Büromaterial.',picture:'ordner.png'},
item8:{name:'Stifte',description:'Büromaterial.',picture:'stift.png'},
item9:{name:'Pistole',description:'Dient als Schutz. Hoffentlich.',picture:'pistol.png'},
item10:{name:'Karotte',description:'Dient als Schutz. Hoffentlich.',picture:'Karotte.png'},
item11:{name:'Erste Hilfe',description:'Damit kann man verletzten Menschen helfen.',picture:'erste_hilfe.jpg'},
item12:{name:'Bohrmaschine',description:'Bruuuuummmmmmm',picture:'bohrmaschine.png'},
item301:{name:'Eintrittskarte', description: 'Damit kannst du den Filmpark besuchen.',picture:'eintrittskarte.png'},
item302:{name:'Krone', description: 'Die Krone macht dich zum König im Filmpark.',picture:'krone.png'},
item303:{name:'Spielzeugwaffe', description: 'Damit erledigst du jeden Bürohengst.',picture:'nerfgun.png'}
}

var maparray={

map_1:{name:'Tunnel',description:'Ein misteriöser dunkler Tunnel, der soll zur Gallerie führen?'},
map_2:{name:'Gallerie',description:'Hier standen schon so viele Meisterwerke. Die Künstler werden von Jahr zu Jahr besser.'},
map_3:{name:'Park',description:'Du bist schon sehr weit herumgekommen. Jetzt gönnst Du Dir eine schöne Zeit. Im Filmpark triffst du viele Schauspieler, die ihr können unter Beweis stellen möchten. Sie sind Meister im Nachahmen von Emotionen. Viel Spaß mit Ihnen und Ihren Kunststücken. Auch Deine Mission steuert auf neue Erkenntisse zu. Es gibt dunkle Schächte die so manches Geheimnis verbergen.'} ,
map_5:{name:'Stadt',description:'Deine Reise beginnt in den Tiefen einer verwinkelten Metropole... Das Polizeihauptpräsidium ist Dein häufigster Auftraggeber, deshalb hast Du Dein Büro in unmittelbarer Nähe. Aber auch für Kultur und Konsum ist gesorgt. Entdecke die Straßen dieser Stadt... keine Angst es ist zur Zeit kein Berufsverkehr.'},
map_6:{name:'Wohnviertel',description:'Also der Schein trügt, hier gibt es so manche dunkle Ecke. Natürlich kennst Du in Deiner Nachtbarschaft jeden schrägen Nerd, auch eine besondere Anwältin ist Dir leider nicht ganz unbekannt. Deine Ermittlungen führen Dich bestimmt in den einen oder anderen Hinterhof. Falls Du Dich erholen oder in Deinen persönlichen Sachen stöbern möchtest, kannst Du ja Dein Privathaus aufsuchen. Komisch in letzter Zeit konntest Du kaum schlafen... da sind Bauarbeiten in der nahegelegen Kanalisation. Hoffentlich hat der Keller Deines Hauses keinen Schaden genommen.'},
map_7:{name:'Dorf',description:'Ja, die gute Landluft... es geht doch nichts über eine ausgedehnte Wanderung, besonders wenn man dabei die Ermittlungen vorantreiben kann. Die Landbevölkerung ist Dir gegenüber offen, wann sieht man schon mal einen Dedektiv bei der Arbeit.'},
 }

var quests={
	quest1:{name:'Erzähle Sam und Max von dem Fall',description:'Du hast von dem Polizeichef einen wichtigen Fall übertragen bekommen um den Täter aus der Ausstellung [Fest der Emotionen] zu finden. Suche deine 2 Gehilfen Sam und Max und berichte ihnen davon. Tipp: Gehe in die Detektei.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest2:{name:'Untersuche den Fahrstuhl',description:'Max ist nicht finden. Vielleicht steckt er im Fahrstuhl fest.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[3]},
	quest3:{name:'Beginne mit den Ermittlungen',description:'Befrage die Leute in der Stadt um Hinweise zu dem Täter zu finden Tipp: Im Bürogebäude befinden sich viele Menschen.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest4:{name:'Tröste Gisela',description:'Tröste die [traurige] Gisela. Finde dazu etwas aufmunterndes. Tipp: Du hast bestimmt etwas in deinem Haus in deinen Regalen.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[4]},
	quest5:{name:'Besorge Büromaterial',description:'Besorge [Tacker], [Büroklammern], [Aktenordner] und [Stifte]. Tipp: Büromaterial gibt es bestimmt im Kaufhaus.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[5,6,7,8]},
	quest6:{name:'Erkunde das Wohnviertel',description:'Befrage die Leute in dem Wohngebiet um Hinweise zu dem Täter zu finden.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest7:{name:'Befrage Helena Graf',description:'Gehe zu den Plattenbauten und finde Helena Graf.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest8:{name:'Schutz',description:'Finde etwas um dich in gefährlichen Situationen zu schützen.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[9]},
	quest9:{name:'Die Künstlerin',description:'Suche im Wohnviertel nach der Künstlerin Yuga. Vielleicht hat sie Hinweise oder macht sich verdächtig.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest10:{name:'Die bessere Künstlerin',description:'Yuga verdächtigt Hilda, bestimmt aus Neid. Du solltest trotzdem mir ihr reden.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
  quest11:{name:'Der Ort des Wissens.',description:'Du hast den Hinweis bekommen, dass in der Uni viel untersucht wird. Gehe zur Uni und ermittel dort weiter.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest301:{name:'Betritt den Filmark.',description:'Versuche herauszufinden, ob du wirklich den Professor gesehen hast.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[301]},
	quest302:{name:'Suche nach Informationen im Park',description:'Die Darsteller, Regisseure oder Techniker werden doch sicher was beobachtet haben.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest303:{name:'Suche die Tochter den Regisseurs.',description:'Lars von Hier, hat gerne seine Tochter bei sich, während er arbeitet.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest304:{name:'Nördlich des Labyrinths',description:'Dort befindet sich nur eine Straßen-Kulisse und die Westernstadt.',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest305:{name:'Im Kino gibtes viele spezial Effekte',description:'Hinter der Kinoleinwand ist es viel interessanter. Was der Professor dort wohl verloren hat?',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
	quest306:{name:'Der Tunnel',description:'Bring das Bild in die Gallerie. Rette mit dem Professor zusammen die Stadt!',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[]},
quest500:{name:'test',description:'itemtest',clues:[],rewardonbeginn:[],rewardonclose:[],neededitems:[1,2]}

}