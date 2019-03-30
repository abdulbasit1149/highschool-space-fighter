$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	canvas.style.border = "3pt solid";
	var mx, my;
	
	
//------------------------------------------------------------------------------------//
//==--==--==--==--==--==--==--==--==--Abdul Basit:16==--==--==--==--==--==--==--==--==//
//------------------------------------------------------------------------------------//
	


	///////////////////////
	///////// market variables
	/////////////////////////

	var pricechecker = false;		//insure the user has enough money to buy upgrades

	var markethealth=0;			//upgrade for health			
	var marketdamage=0;			//upgrade for damage
	var marketfuel=0;			//upgrade for fuel
	var marketammo=0;			//upgrade for ammo
	var marketpoint=0;			//upgrade for point

	var health1 = false;			//first teir of health						
	var health2 = false;			//second teir of health	
	var health3 = false;			//third teir of health

	var damage1 = false;			//first teir of damage	
	var damage2 = false;			//second teir of damage
	var damage3 = false;			//third teir of damage

	var fuel1 = false;			//first teir of fuel
	var fuel2 = false;			//second teir of fuel
	var fuel3 = false;			//third teir of fuel	

	var ammo1 = false;			//first teir of ammo	
	var ammo2 = false;			//second teir of ammo
	var ammo3 = false;			//third teir of ammo

	var points1 = false;			//first teir of point
	var points2 = false;			//second teir of point	
	var points3 = false;			//third teir of point

	////////////////////////

	var bosslevelcheck = false;		//ensures boss appears every 5 kills
	var bosslevelchecker = 0;		//boss appear every 5 kills
	var healhtstopreg = false;		//regen. player health
	var option = new Array();		//draw images for different images	
	var denymarket = true;			//enables market during gamescreen mode	
	var market=  false;				//to toggle market
	
	var number1;					// to enable sound		
	var countingkills =true;		//allows to count kills
	var countchecker= -1;			// kill counter 
	var killcount = 0;				//kill counter
	var pointscounter = 0;			// to keep score
	var namefind = false;			//to access the user's name
	var name = "Enter name";		//user's name	
	var password = "Enter your own password";	//ask for password	
	var passwordfind = false;		//to access password's name
	var loginclose = false;			// to exit starting screen to go to information screen
	var warningenter = false;		// tell user to pick password and name
	var debugcheck = false;			// to debug something
	var passwordcheck = false;		//to ask for password
	var passwordcheckercontrol = false;	//ensure password is the same
	var newpassword = "Enter password";	// ask for password to play game	
	var amnostop = false;			//to toggle enemy hit
	var amnostop1 = false;			//to toggle enemy hit
	var amnostop2 = false;			//to toggle enemy hit
	var soundarray = new Array();		// background sound 
	var gamesoundarray = new Array();	//game sound

	var easy = true;				//easy diffcuitly
	var moderate = false;			//moderate diffcuitly
	var hard =false;				//hard diffcuitly
	var expert = false;				//expert diffcuitly


	var gameover = false;			// game over screen
	var introscreen =true;			// the intro screen
	var gamescreen = false;			// main game
	var maingamepics = new Array();		// to store all picture on my main game screen
		

	var planestopup = false;		// to stop plane from going past top of canvas
	var planestopdown = false;		// to stop plane from going past bottom of canvas
	/////////////////////
	////Planes animation
	///////////////////

	var planeyup = 0;				// y animation up
	var  planeydown = 0;			// y animation down	
	var  planestorey = 0;			// to store y animation of plane

	/////////////////////
	/////enemy aircrafts
	/////////////////////


	///UFO///
	var ufostore =0;				//hold ufo location
	var ufostarter = 50;			// starting location of ufo
	var ufomove = 0;				// moving ufo

	var ufostore1 =0;				//hold ufo location
	var ufostarter1 = 1100;			// starting location of ufo
	var ufomove1 = 0;				// moving ufo

	var ufochangelocation = false;	//to change the location of the ufo
	var ufomovement = false;		// to move ufo up and down
	
	var ufodestroy = true;			// to reloop ufo
	var ufodestroy1 = false;		//helping in relooping
	var ufostopmove = false;		//also helping in relooping
	
	var explosivedisable = false;	// make explosive image appear		
	
	var ufoleave = false;			//make ufo leave 
	var ufohealthreg = false;		//regen ufo health

	var ufoaimx = 0;				//x of aim 
	var ufoaimy = 0;				// y of aim
	var ufoaimxstore= 0;			//store x of aim
	var ufoaimystore= 0;			//store y of aim
				
	///Blue aircraft///

	var aircraftdestroy = true;		//to reloop aircraft
	var aircraftdestroy1 = false;		//helping in relooping
	var aircraftstopmove = false;		//also helping in relooping
	
	var explosivedisable1 = false;		// make explosive image appear


	var aircraftleave = false;		//make aircraft leave
	var aircrafthealthreg = false;		//regen aircraft health	


	var aircraftstore = 0;			//store y of aircraft
	var aircraftstarter = 300;		//store 
	var aircraftmove = 0;

	var aircraftstore1 = 0;
	var aircraftstarter1 =1150;
	var aircraftmove1 = 0;

	var aircraftlocation = false;
	var aircraftmovement = false;
	
	var aircraftaimxstore = 0;
	var aircraftaimystore = 0;
	var aircraftaimx=0;
	var aircraftaimy = 0;


	//Main Boss spaceship//

	var baddestroy = true;
	var baddestroy1= false;
	var badstopmove = false;

	var explosivedisable2 = false;

	var badleave = false;
	var badhealthreg = false;

	var badstore = 0;
	var badstarter = 150;
	var badmove = 0;

	var badstore1 = 0;
	var badstarter1 = 0;
	var badmove1 = 1200;

	var badlocation = false;
	var badmovement = false;



	var badaimxstore = 0;
	var badaimystore = 0;
	var badaimx=0;
	var badaimy = 0;


	////////////////////////
	// Background animation
	////////////////////

	var backgroundmoveleft = 0;		//move background left	
	var backgroundxstore = 0;		//store x of background
	var backgroundmoveleft1 = 0;		//move background left
	var backgroundxstore1 = 0;		//store x of background	
	
	var startback = 0;				//to respawn background
	var startback1 = 1000;			// to respawn background

	var planetleft = 0;				//move purple planet left	
	var meteroleft = 0;				//move metero left	
	var meterostore=0;				//store metero location
	var meteroleft1 = 0;				//move metero left	
	var meterostore1=0;				//store metero location


	///////////////////////////////////
	/////// Health, fuel, amno, points 
	////////////////////////////////

	var healthstore = 0;
	var amnostore = 0;
	var fuelstore = 0;

	var healthdecrease = 0;
	var amnodecrease = 0;
	var fueldecrease =  0;
	var amnoreg = false;

	var enemystore1 = 0;
	var enemyhealthstarter1 =388;
	var enemyhealthdecrease1 = 0;

	var enemystore2 = 0;
	var enemyhealthstarter2 = 338;
	var enemyhealthdecrease2 = 0;

	var enemystore3 = 0;
	var enemyhealthstarter3 = 388;
	var enemyhealthdecrease3 = 0;

	/////////////////////////////
	/////// Care package
	///////////////////////////////	


	var carepackagestore = 0;		// store package locations
	var carepackagedown = 0;		// decrease package location	
	var carepackagespawn = 0;		// care package spawn randomly
	var carepackagefuel = 0;		//incease fuel via carepackage
	var carepackagetimer = 3200;		//until next care package
	var carepackagetimercontrol = false;
	var carepackagetimerdecreaser =0;
	var carepackagestore1 = 0;
	var carepackagestop = false;

	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES

		

	maingamepics[0]=  new Image();
	maingamepics[0].src="CulminatingFiles/jet.png";		
	maingamepics[1]=  new Image();
	maingamepics[1].src="CulminatingFiles/Space.tga.jpg";	
	maingamepics[2]=  new Image();
	maingamepics[2].src="CulminatingFiles/Space.tga1.jpg";	
	maingamepics[3]=  new Image();
	maingamepics[3].src="CulminatingFiles/PurplePlanet-FT.png";	
	maingamepics[4]=  new Image();
	maingamepics[4].src="CulminatingFiles/Fake-NYC-Meteor-Photo.png";	
	maingamepics[5]=  new Image();
	maingamepics[5].src="CulminatingFiles/Tri-Agent Health Concepts.png";	
	maingamepics[6]=  new Image();
	maingamepics[6].src="CulminatingFiles/stock-photo-futuristic-brushed-aluminum-tablet-device-103959404.png";	
	maingamepics[7]=  new Image();
	maingamepics[7].src="CulminatingFiles/fcp-cod.png";		
	maingamepics[8]=  new Image();
	maingamepics[8].src="CulminatingFiles/MB-EyeOfTheDamned_th copy.png";		
	maingamepics[9]=  new Image();
	maingamepics[9].src="CulminatingFiles/reflex_4_reticle_red_dot_sight.png";	
	maingamepics[10]=  new Image();
	maingamepics[10].src="CulminatingFiles/6a00d8341bf7f753ef0168e6d63bbc970c-500wi.png";	
	maingamepics[11]=  new Image();
	maingamepics[11].src="CulminatingFiles/reflex_4_reticle_red_dot_sight1.png";	
	maingamepics[12]=  new Image();
	maingamepics[12].src="CulminatingFiles/AlienPatrol.png";
	maingamepics[13]=  new Image();
	maingamepics[13].src="CulminatingFiles/jets-aircraft-jootix_191762.png";
	maingamepics[14]=  new Image();
	maingamepics[14].src="CulminatingFiles/fury-side2.png";
	maingamepics[15]=  new Image();
	maingamepics[15].src="CulminatingFiles/Tri-Agent Health Concepts (2).png";
	maingamepics[16]=  new Image();
	maingamepics[16].src="CulminatingFiles/AlienPatrol1.png";
	maingamepics[17]=  new Image();
	maingamepics[17].src="CulminatingFiles/explosion-vector-illustration-23214093.png";
	maingamepics[18]=  new Image();
	maingamepics[18].src="CulminatingFiles/fury-side2.png";
	maingamepics[19]=  new Image();
	maingamepics[19].src="CulminatingFiles/enemyaim.png";
	maingamepics[20]=  new Image();
	maingamepics[20].src="CulminatingFiles/explosion-vector-illustration-23214093.png";
	maingamepics[21]=  new Image();
	maingamepics[21].src="CulminatingFiles/enemyaim.png";
	maingamepics[22]=  new Image();
	maingamepics[22].src="CulminatingFiles/screen.jpg";
	maingamepics[23]=  new Image();
	maingamepics[23].src="CulminatingFiles/userpassword.png";
	maingamepics[24]=  new Image();
	maingamepics[24].src="CulminatingFiles/button1.png";
	maingamepics[25]=  new Image();
	maingamepics[25].src="CulminatingFiles/button2.png";
	maingamepics[26]=  new Image();
	maingamepics[26].src="CulminatingFiles/fury-side3.png";
	maingamepics[27]=  new Image();
	maingamepics[27].src="CulminatingFiles/quitbutton.png";
	maingamepics[28]=  new Image();
	maingamepics[28].src="CulminatingFiles/blue-dog.png";
	maingamepics[29]=  new Image();
	maingamepics[29].src="CulminatingFiles/blue-dog.png";
	maingamepics[30]=  new Image();
	maingamepics[30].src="CulminatingFiles/gameover.jpg";
	maingamepics[31]=  new Image();
	maingamepics[31].src="CulminatingFiles/badguyship.png";
	maingamepics[32]=  new Image();
	maingamepics[32].src="CulminatingFiles/enemyaim1.png";
	maingamepics[33]=  new Image();
	maingamepics[33].src="CulminatingFiles/badguyship1.png";
	maingamepics[34]=  new Image();
	maingamepics[34].src="CulminatingFiles/Capture.png";



	/////////////////////////////////////////////////////


	soundarray[0] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");
	soundarray[1] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");
	soundarray[2] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");
	soundarray[3] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");
	soundarray[4] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");
	soundarray[5] = new Audio("CulminatingFiles/Laser Blasts-SoundBible.com-108608437.wav");


	////////////////////////////////////////////////


	gamesoundarray[0] = new Audio("CulminatingFiles/ClosingCredits.mp3");
	gamesoundarray[1] = new Audio("CulminatingFiles/Fanfare for Space.mp3");
	gamesoundarray[2] = new Audio("CulminatingFiles/Rocket Thrusters-SoundBible.com-1432176431.mp3");
	gamesoundarray[3] = new Audio("CulminatingFiles/Rocket-SoundBible.com-941967813.mp3");
	////////////////////////////////////////////////

	option[0] = new Image();
	option[0].src = "CulminatingFiles/whitecircle.png";

	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 30);
	}

	init();	


	carepackagespawn = (Math.random()*400)+170;
	
	/////////////////////////
	//////////function(s)//
	/////////////////////


function screenloadout(){		// to display main game screen loadout
	ctx.fillStyle ='black';
	ctx.fillRect(0,0,1000,640);

	//ctx.globalAlpha = 0.5;
	ctx.fillStyle='grey';
	ctx.fillRect(0,h-159,w,3);
	ctx.globalAlpha = 1;	
	ctx.drawImage(maingamepics[1],backgroundxstore,0,w,(h-160));	
	ctx.drawImage(maingamepics[2],backgroundxstore1,0,w,(h-160));
	ctx.drawImage(maingamepics[4],meterostore,meterostore1,150,78.375);		
	ctx.drawImage(maingamepics[3],900+planetleft,-280,750,750);	
	ctx.drawImage(maingamepics[5],5,h-150,1214,387);	
	
	
	
		

	ctx.fillStyle='black';			
	ctx.fillRect(healthstore,552,350,25); //health bar decrease 
	ctx.fillRect(amnostore,504,300,20); //amno bar decrease 
	ctx.fillRect(fuelstore,605,300,20); //fuel bar decrease 



	healthstore = 345+healthdecrease;
	amnostore = 317+amnodecrease;
	fuelstore = 317+fueldecrease+carepackagefuel;

	if (healhtstopreg == true) {healthdecrease+=0+markethealth}; 	
	if (healthstore < 340) {healhtstopreg = true}else{healhtstopreg  =false};

	if (easy == true) { fueldecrease-=0.2-marketfuel};
	if (moderate == true) { fueldecrease-=0.3-marketfuel};
	if (hard == true) { fueldecrease-=0.4-marketfuel};
	if (expert == true) { fueldecrease-=0.49-marketfuel};


	if (amnoreg == true) {amnodecrease+=0.3+marketammo};
	if (amnostore < 165) {
			amnostop = true;
			amnostop1 = true;
			amnostop2 = true;
	}else{
		amnostop = false;
		amnostop1 = false;
		amnostop2 = false;
	};
	if (amnostore < 315) {amnoreg = true}else{amnoreg = false};
	
	if(healthstore < 56 ){gameover = true};
	if (fuelstore  < 141) {gameover = true};


	ctx.fillStyle='red';
	ctx.fillText("Fuel:",220, 620);
	ctx.fillText("Health:",190, 569);
	ctx.fillText("Amno:",220, 520);


}	

function plane(){

	ctx.drawImage(maingamepics[10],0,planestorey+16);
	ctx.drawImage(maingamepics[0],100,planestorey ,200,140);
	gamesoundarray[2].play();


}	

function enemyhealth(){

////////////////////////////////////////
	enemystore1 = enemyhealthstarter1+enemyhealthdecrease1;
	enemystore2 = enemyhealthstarter2+enemyhealthdecrease2;
	enemystore3 = enemyhealthstarter3+enemyhealthdecrease3;

		ctx.drawImage(maingamepics[15],635,h-155,1214,387);

		ctx.fillStyle='black';			
	ctx.fillRect(enemystore2,552,320,25); //enemy bar decrease 
	ctx.fillRect(enemystore1,505,300,20); //enemy bar decrease 
	ctx.fillRect(enemystore3,605,300,20); //enemy bar decrease

	

}

function enemyaircraft(){
	

///////////////////
/////Ufo-enemy
/////////////////////

	ufoaimxstore = 1100+ufoaimx;
	ufoaimystore = 0+ufoaimy;

	ufostore = ufostarter+ufomove;
	ufostore1 = ufostarter1+ufomove1;
	ctx.drawImage(maingamepics[12],ufostore1,ufostore,150,92.26);
	
	if(ufoleave == false){
	

		ctx.drawImage(maingamepics[21],	ufoaimxstore,ufoaimystore);

		if (ufoaimxstore < 100) {ufoaimx+=10};
		if (ufoaimxstore > 150) {ufoaimx-=10};

		if (ufoaimystore < planestorey) {ufoaimy+=2};
		if (ufoaimystore > (planestorey-50)) {ufoaimy-=2};

	if (ufoaimxstore >= 100 && ufoaimxstore <= 150 && ufoaimystore+70 >= planestorey && ufoaimystore <= (planestorey+50)) {
	healthdecrease-=0.3;
	};	
		
	if (ufomovement == false) {ufomove1-=10}
	if (ufostore1 > 1099) {ufomovement = false};
	if (ufostore1 < 701) {ufomovement = true};

if (ufomovement == true) {
	if (mx > ufostore1 && mx < (ufostore1+252) && my > ufostore && my < (ufostore+155)) {
		if (ufochangelocation== false) {ufomove+=10};
		if (ufochangelocation== true) {ufomove-=10};	
			if (ufostore > (h-240)) {ufochangelocation = true};
			if (ufostore < 1) {ufochangelocation = false};
	};
}

}

	if(enemystore1 > 560 || ufodestroy == false ){



	if (countingkills == true) {	
			killcount+=1;
			countchecker+=1;
	}	
		if (countchecker < killcount) {countingkills = false};
		ufodestroy = false;	


		explosivedisable = false;
		ufoleave = true;
		ufoaimx+=15;
		amnostop = true;
		if(explosivedisable == false) {ctx.drawImage(maingamepics[17],ufostore1,ufostore-50,150,150)};
		if (ufohealthreg == false) {enemyhealthdecrease1-=10};
		if (enemystore1 < 400) {ufohealthreg = true};

		if(ufostopmove == false) {ufomove1+=10};
		if(ufostore1 > (1500+Math.random()*100)){
			ufostopmove = true;
			ufodestroy1 = true;	
		};
	}

	if (ufodestroy1 == true) {
		ufodestroy = true;
		countingkills = true;
		explosivedisable = true;	
		ufohealthreg = false;
		amnostop = false;
		ufostopmove = false;
		ufoleave=false;
		ufodestroy1 = false;
	};
	

	//////////////
	/////blue aircraft enemy
 	///////////////

 	aircraftaimxstore=1150+aircraftaimx;
 	aircraftaimystore=300+aircraftaimy;

	aircraftstore = aircraftstarter+aircraftmove;
	aircraftstore1 = aircraftstarter1+aircraftmove1;

	ctx.drawImage(maingamepics[18],aircraftstore1 ,aircraftstore,187,76);
if (aircraftleave == false) {
	if (aircraftaimxstore < 100) {aircraftaimx+=10};
	if (aircraftaimxstore > 150) {aircraftaimx-=10};
	if (aircraftaimystore < planestorey) {aircraftaimy+=2};
	if (aircraftaimystore > (planestorey-50)) {aircraftaimy-=2};

	if (aircraftaimxstore >= 100 && aircraftaimxstore <= 150 && aircraftaimystore+70 >= planestorey && aircraftaimystore <= (planestorey+50)) {
		healthdecrease-=0.3;
	};	



	ctx.drawImage(maingamepics[19],	aircraftaimxstore-50,aircraftaimystore);

	if (aircraftmovement == false) {aircraftmove1 -=10};

	if (aircraftstore1 < 701) {aircraftmovement = true};
	if (aircraftstore1 > 1149) {aircraftmovement = false};


	if (aircraftmovement == true) {
		if(mx  > aircraftstore1 && mx < (aircraftstore1+187)   &&  my > aircraftstore  && my <  (aircraftstore+76) ) {
			if (aircraftlocation == false) {aircraftmove-=7};
			if (aircraftlocation == true) {aircraftmove+=7};
			if (aircraftstore > (h-260)) {aircraftlocation = false};
			if (aircraftstore < 1) {aircraftlocation = true};
		};	
	};
};

if (enemystore3 > 560 || aircraftdestroy == false) {



	if (countingkills == true) {	
			killcount+=1;
			countchecker+=1;
	}	
		if (countchecker < killcount) {countingkills = false};


	aircraftdestroy = false;
	explosivedisable1 = false;
	aircraftleave = true;
	aircraftaimx+=15;
	amnostop1 = true;
	if (explosivedisable1 == false) {ctx.drawImage(maingamepics[20],aircraftstore1,aircraftstore-50,150,150)};
	if (aircrafthealthreg == false) {enemyhealthdecrease3-=10};
	if (enemystore3 < 400) {aircrafthealthreg = true};
	if(aircraftstopmove == false) {aircraftmove1+=10};
	if(aircraftstore1 > (1500+Math.random()*100)){
			aircraftstopmove = true;
			aircraftdestroy1 = true;	
		};
};

if (aircraftdestroy1 == true) {
aircraftdestroy = true;
countingkills = true;
explosivedisable1 = true;
aircrafthealthreg = false;
amnostop1 = false;
aircraftstopmove = false;
aircraftleave = false;
aircraftdestroy1 = false;
};


//////////////////////////
////// Main Enemy
/////////////////


badaimxstore = 1200+badaimx;
badaimystore = 150+badaimy;

badstore = badstarter+badmove;
badstore1 = badstarter1+badmove1;

ctx.drawImage(maingamepics[31],badstore1,badstore,400,530);
ctx.drawImage(maingamepics[32],	badaimxstore,badaimystore);



if (killcount > 4+bosslevelchecker) {

if (badleave == false) {
	if (badmovement == false) {badmove1-=6};	

	if (badaimxstore < 100) {badaimx+=12};
	if (badaimxstore > 148) {badaimx-=12};
	if (badaimystore < planestorey) {badaimy+=4};
	if (badaimystore > (planestorey-50)) {badaimy-=4};

	if (badaimxstore >= 100 && badaimxstore <= 150 && badaimystore+70 >= planestorey && badaimystore <= (planestorey+50)) {
		healthdecrease-=1;
	};	


	if (badstore1 < 600 ) {badmovement = true};
	if (badstore1 > 1199) {badmovement = false};

	if (badmovement == true) {
		if (mx > badstore1 && mx < (badstore1+400) && my > badstore && my < (badstore+140)) {
			if (badlocation == false){badmove-=13};
			if (badlocation == true){badmove+=12};
			if (badstore > (h-320)) {badlocation = false};
			if (badstore < -51) {badlocation = true};
		}	
	};
};	

	
	
if (enemystore2 > 620 || baddestroy == false) {
baddestroy = false;
explosivedisable2 = false;
badleave = true;
	badaimx+=19;
amnostop2 = true;
	if (explosivedisable2 == false) {ctx.drawImage(maingamepics[20],badstore1+40,badstore,300,300)};

	if (badhealthreg == false) {enemyhealthdecrease2-=10};
	if (enemystore2 < 355) {badhealthreg = true};
	if (badstopmove== false) {badmove1+=13};
	if (badstore1 > 1220) {
		badstopmove = true;
		baddestroy1 = true;
	};

};


}

if (baddestroy1 == true) {
	baddestroy = true;
	bosslevelcheck = true;
	explosivedisable2 = true;
	badhealthreg = false;
	amnostop2 = false;
	badstopmove = false;
	badleave = false;	
	baddestroy1 = false;
};

if (bosslevelcheck == true) {
bosslevelchecker = bosslevelchecker+5;
bosslevelcheck = false;
};






}

function carepackagedrop(){

carepackagestore = -140+carepackagedown;

carepackagestore1 = carepackagetimer+carepackagetimerdecreaser;

if (carepackagestop == false) {
	carepackagetimerdecreaser-=20;
	if (carepackagestore1 < 1) {
		carepackagedown+=1;
	};
}
ctx.drawImage(maingamepics[7],carepackagespawn,carepackagestore ,800,1132);	

	if (carepackagestop == true) {carepackagetimerdecreaser+=20};
	if (carepackagestore1 > 3199) {carepackagestop = false};

	if (carepackagestore > (h-240)) {
		carepackagedown = 0;
		carepackagespawn = (Math.random()*400)+170;
		carepackagestop = true;	
	};
}



function background(){
	backgroundxstore = startback+backgroundmoveleft;
	backgroundxstore1 = startback1+backgroundmoveleft1;
	meterostore = 410+meteroleft;
	meterostore1 = -110+meteroleft1;	



	backgroundmoveleft-=25;			//move background left
	backgroundmoveleft1-=25;
	planetleft-=0.07;					//moves purple planet left	
	meteroleft-=1;						// move metero across screen
	meteroleft1+=1;						// move metero across screen
	
	if (backgroundxstore < -999) {backgroundmoveleft =0};
	if (backgroundxstore1 < 1) {backgroundmoveleft1 = 0};
	

}

function marketlaunch(){
	ctx.fillStyle = 'red';
	ctx.font="25px Impact";


	ctx.globalAlpha=0.08;
	ctx.fillStyle='black';
	ctx.fillRect(0,0,w,h);
	ctx.globalAlpha=1;
	 

	ctx.globalAlpha=1;
	ctx.fillStyle = 'grey';
	ctx.fillRect(300,100,400,500);
	ctx.fillStyle='black';
	ctx.fillText("Market",458,150);


		ctx.font="16px Impact";
	ctx.fillText("Points:",460, 175);
	ctx.fillText(pointscounter,515, 175);	
	

	ctx.font="12px Impact";

	ctx.fillText("500",490,209);	
	ctx.fillText("1000",540,209);	
	ctx.fillText("2500",590,209);	


	ctx.fillText("Points : ",320,209);
	ctx.fillText("Health regeneration increase : ",320,230);	
	ctx.fillText("Damage Deal to enemy increase :",320,290);	
	ctx.fillText("Fuel less decrease :",320,350);	
	ctx.fillText("Ammo regeneration increase :",320,410);
	ctx.fillText("Point multiplier increase :",320,470);	


		for (var i = 0; i < 3 ; i++) {
			ctx.drawImage(option[0],490+(i*50),218,18,18);	
		};

		for (var i = 0; i < 3 ; i++) {
			ctx.drawImage(option[0],490+(i*50),277,18,18);	
		};

			for (var i = 0; i < 3 ; i++) {
			ctx.drawImage(option[0],490+(i*50),336,18,18);	
		};

			for (var i = 0; i < 3 ; i++) {
			ctx.drawImage(option[0],490+(i*50),395,18,18);	
		};

				for (var i = 0; i < 3 ; i++) {
			ctx.drawImage(option[0],490+(i*50),454,18,18);	
		};

	

if (health1 == true) {ctx.drawImage(maingamepics[28],490,218,18,18)};
if (health2 == true) {ctx.drawImage(maingamepics[28],540,218,18,18)};
if (health3 == true) {ctx.drawImage(maingamepics[28],590,218,18,18)};
if (damage1 == true) {ctx.drawImage(maingamepics[28],490,277,18,18)};
if (damage2 == true) {ctx.drawImage(maingamepics[28],540,277,18,18)};
if (damage3 == true) {ctx.drawImage(maingamepics[28],590,277,18,18)};
if (fuel1 == true) {ctx.drawImage(maingamepics[28],490,336,18,18)};
if (fuel2 == true) {ctx.drawImage(maingamepics[28],540,336,18,18)};
if (fuel3 == true) {ctx.drawImage(maingamepics[28],590,336,18,18)};
if (ammo1 == true) {ctx.drawImage(maingamepics[28],490,395,18,18)};
if (ammo2 == true) {ctx.drawImage(maingamepics[28],540,395,18,18)};
if (ammo3 == true) {ctx.drawImage(maingamepics[28],590,395,18,18)};
if (points1 == true) {ctx.drawImage(maingamepics[28],490,454,18,18)};
if (points2 == true) {ctx.drawImage(maingamepics[28],540,454,18,18)};
if (points3 == true) {ctx.drawImage(maingamepics[28],590,454,18,18)};

	ctx.drawImage(maingamepics[27],393 ,496,2000,1500);
	ctx.drawImage(maingamepics[8],mx-25,my-10,60,79);
}

function intromode(){
		denymarket = true; 
		gamescreen = false
		gameover = false;	
		gamesoundarray[1].play();
	


		if (loginclose == true) {
 		ctx.drawImage(maingamepics[22],0,0,1000,688);
 			ctx.fillStyle='grey';
		ctx.font="16px Impact";
 		ctx.fillText("Username:",500,55);
 		ctx.fillText(name,580,55);
 		ctx.drawImage(maingamepics[24],774,439,628,300);
 		
	if (mx > 774 && mx <920 && my > 439 && my <600  ) {ctx.drawImage(maingamepics[25],774,439,628,300)};
	debugcheck = true;


	if (passwordcheck == true) {
		while(newpassword !== password){newpassword = window.prompt("Enter password")}	
	};

if (newpassword == password) {
	passwordcheck = false;

	 gameover = false;				// game over screen
	
	 gamescreen = true;				// main game
	 introscreen =false;			// the intro screen

};	
	
	ctx.drawImage(maingamepics[34],283,93,maingamepics[34].width/2,maingamepics[34].height/2);
	ctx.drawImage(maingamepics[7],661,329 ,800,1132);	
	ctx.drawImage(maingamepics[31],41,484,200,265);


	ctx.font="12px Impact";

	ctx.fillText("SpaceShip up :  ",65,157);
	ctx.fillText("SpaceShip down :  ",65,175);	
	ctx.fillText("Market Access :  ",65,193);	
	ctx.fillText("How to fire laser :  ",65,211);	

	ctx.fillText("- You obtain points by attacking your enemy ",513,150);	
	ctx.fillText(" with left click. ",513,170);	
	ctx.fillText("- Once you have obtain over 500 points, you ",513,190);	
	ctx.fillText("may press the 'Q' button to access the market ",513,210);
	ctx.fillText("- You may buy an upgrade if you can afford it",513,230);
	ctx.fillText("with your points ",513,250);

	ctx.fillText("- The carepack will drop randomly from top of  ",513,317);	
	ctx.fillText("the screen randomly  ",513,337);
	ctx.fillText("- You may click on the care ",513,357);	
	ctx.fillText("package to gain fuel and health ",513,377);	

	ctx.fillText("- The boss will spawn every five kills ",64,419);
	ctx.fillText(" of normal enemies",64,439);
	ctx.fillText("- Tips : The Boss is very powerful, ",64,459);
	ctx.fillText("Make sure you get ungrades to defeat him",64,479);
	ctx.fillText("defeath him",64,499);
	
	ctx.fillText("Easy",769,140);
	ctx.fillText("Moderate",769,160);	
	ctx.fillText("Hard",769,180);
	ctx.fillText("Expert",769,200);	
	
	for(var i = 0; i < 4; i++){
	ctx.drawImage(option[0],888,128+(i*20),18,18);
	}

	if(easy == true){ctx.drawImage(maingamepics[28],887,130,20,16)}
	if(moderate == true){ctx.drawImage(maingamepics[28],887,150,20,16)}
	if(hard == true){ctx.drawImage(maingamepics[28],887,170,20,16)}
	if(expert == true){ctx.drawImage(maingamepics[28],887,190,20,16)}
	
	ctx.fillText("W",140,157);
	ctx.fillText("D",150,175);
	ctx.fillText("Q",140,193);
	ctx.fillText("Left Click on Enemy",150,211);

	ctx.font="16px Impact";
	ctx.fillText("Controls",120,122);
	ctx.fillText("______",120,122);
	ctx.fillText("How to access and use market",510,122);
	ctx.fillText("______________________",510,122);
	ctx.fillText("Care Package",510,285);
	ctx.fillText("__________",510,285);
	ctx.fillText("Boss ",133,399);
	ctx.fillText("____ ",133,399);
	ctx.fillText("Difficulty ",817,110);
	ctx.fillText("______ ",817,110);
	ctx.drawImage(maingamepics[8],mx-25,my-10,60,79);
	
 	}	

 		if (loginclose == false) {
 		ctx.drawImage(maingamepics[23],0,0,1000,640);
		
		ctx.fillStyle='red';
		ctx.font="16px Impact";
		ctx.fillText(name, 620, 330);
		ctx.fillText(password,620,387);

		ctx.fillText("Remember to known your password, you will use it later",535,415);
		ctx.fillText("Play Game in F11 mode, to obtain full gaming experience",343,616);

		if (warningenter == true) {ctx.fillText("Enter Username and or Password",620,295)};

		if (passwordfind == true) {
		password = window.prompt("Enter your own password");
		passwordfind = false;
		}

		if (namefind == true) {
		name = window.prompt("Enter name");
		namefind = false;
		}

	}

		ctx.drawImage(maingamepics[8],mx-25,my-10,60,79);
}	



	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
	ctx.font="16px Impact";
	soundarray[0].volume='0.5';
	gamesoundarray[1].volume='0.3';
	if (introscreen == true) {intromode()};
	if (gamescreen == true) {
		denymarket = false; 
		introscreen = false;
		gameover = false;	

	///////////////////
	////Plane animation
	////////////////

	planestorey = 100+planeyup+planeydown;  

	if(planestorey  < 10){planestopup = true }else{planestopup = false};
	if(planestorey  > 410){planestopdown = true }else{planestopdown = false};
	



	
	screenloadout();
	background();
	plane();
	carepackagedrop();
	enemyhealth();
	enemyaircraft();
	
	

	ctx.drawImage(maingamepics[6],360,h-174,290,210.83);



	ctx.drawImage(maingamepics[9],mx-50,my-50);	
		if (mx > carepackagespawn && mx < (carepackagespawn+100) && my > carepackagestore && my < (carepackagestore+100)) {
			ctx.drawImage(maingamepics[11],mx-50,my-50);	
		};	
	if (amnostop == false) {		
		if (mx > ufostore1 && mx < (ufostore1+252) && my > ufostore && my < (ufostore+155)) {
			ctx.drawImage(maingamepics[16],ufostore1,ufostore,150,92.26);		
		};	
	}

	if (amnostop1 == false) {	      
	if (mx > aircraftstore1 && mx < (aircraftstore1+187) && my > aircraftstore && my < (aircraftstore+76)) {
				ctx.drawImage(maingamepics[26],aircraftstore1 ,aircraftstore,187,76);
			
					
		};	
}
if (killcount > 4+bosslevelchecker) {
	if (amnostop2 == false) {
		if (mx > badstore1 && mx < (badstore1+400) && my > badstore && my < (badstore+140)) {			
ctx.drawImage(maingamepics[33],badstore1,badstore,400,530);
		}		
	};
}

ctx.fillStyle='red';
ctx.fillText("Points:",500, 25);
ctx.fillText(pointscounter,555, 25);
ctx.fillText("Kill:",435, 25);
ctx.fillText(killcount,465,25);
ctx.font="12px Impact";	
if (pointscounter > 499) {ctx.fillText("Remember to Visit the market by pressing the hey 'Q' to buy new upgrades ",400,50)}



ctx.font="22px Impact";
		ctx.fillText(name,445, 563);	
	};		

	if(market == true){marketlaunch()};
	
	

	if (gameover == true) {
		gamescreen = false;
		gamesoundarray[0].volume='0.7';
		gamesoundarray[0].play();
		denymarket = true; 
		ctx.drawImage(maingamepics[30],0,0,w,h);
		


		ctx.drawImage(maingamepics[27],393 ,496,2000,1500);
		ctx.drawImage(maingamepics[8],mx-25,my-10,60,79);
	};


	ctx.fillStyle='red';
		//ctx.fillText(killcount,400,200);
		//ctx.fillText("x = "+mx,200,400);
		//ctx.fillText("y = "+my,200,450);
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
	

//if (mx > 0 && my > 0) {location.reload()};


if (gamescreen == true) {		
	if (mx > carepackagespawn && mx < (carepackagespawn+100) && my > carepackagestore && my < (carepackagestore+100)) {
carepackagefuel+=70;
carepackagedown = 0;
pointscounter+=10;
healthdecrease+=20;
	carepackagestop = true;
carepackagespawn = (Math.random()*400)+170;
	};	


if (amnostop == false) {	      
	if (mx > ufostore1 && mx < (ufostore1+252) && my > ufostore && my < (ufostore+155)) {
		number1 = Math.floor(Math.random()*6)+1;
			soundarray[0].volume='0.2';
			if (number1 ==1) {soundarray[0].play()};
			if (number1 ==2) {soundarray[1].play()};
			if (number1 ==3) {soundarray[2].play()};
			if (number1 ==4) {soundarray[3].play()};
			if (number1 ==5) {soundarray[4].play()};
			if (number1 ==6) {soundarray[5].play()};

			if (easy == true) {
			enemyhealthdecrease1+=20+marketdamage;
			amnodecrease-=8;
			pointscounter+=100+marketpoint;
		};
		

			if (moderate == true) {
			enemyhealthdecrease1+=15+marketdamage;
			amnodecrease-=15;
			pointscounter+=75+marketpoint;
		};


			if (hard == true) {
			enemyhealthdecrease1+=10+marketdamage;
			amnodecrease-=23;
			pointscounter+=50+marketpoint;
		};


			if (expert == true) {
			enemyhealthdecrease1+=5+marketdamage;
			amnodecrease-=30;
			pointscounter+=25+marketpoint;
		};
			
					
		};	
}
if (amnostop1 == false) {	      
	if (mx > aircraftstore1 && mx < (aircraftstore1+187) && my > aircraftstore && my < (aircraftstore+76)) {
			number1 = Math.floor(Math.random()*6)+1;
				soundarray[0].volume='0.2';
			if (number1 ==1) {soundarray[0].play()};
			if (number1 ==2) {soundarray[1].play()};
			if (number1 ==3) {soundarray[2].play()};
			if (number1 ==4) {soundarray[3].play()};
			if (number1 ==5) {soundarray[4].play()};
			if (number1 ==6) {soundarray[5].play()};
			 

		
			if (easy == true) {
			enemyhealthdecrease3+=20+marketdamage;
			amnodecrease-=8;
			pointscounter+=100+marketpoint;
		};
		

			if (moderate == true) {
			enemyhealthdecrease3+=15+marketdamage;
			amnodecrease-=15;
			pointscounter+=75+marketpoint;
		};


			if (hard == true) {
			enemyhealthdecrease3+=10+marketdamage;
			amnodecrease-=23;
			pointscounter+=50+marketpoint;
		};


			if (expert == true) {
			enemyhealthdecrease3+=5+marketdamage;
			amnodecrease-=30;
			pointscounter+=25+marketpoint;
		};
			
			
					
		};	
}
if (killcount > 4+bosslevelchecker) {
if (amnostop2 == false) {

	if (mx > badstore1 && mx < (badstore1+400) && my > badstore && my < (badstore+140)) {
		number1 = Math.floor(Math.random()*6)+1;
			soundarray[0].volume='0.2';
			if (number1 ==1) {soundarray[0].play()};
			if (number1 ==2) {soundarray[1].play()};
			if (number1 ==3) {soundarray[2].play()};
			if (number1 ==4) {soundarray[3].play()};
			if (number1 ==5) {soundarray[4].play()};
			if (number1 ==6) {soundarray[5].play()};
	}	

	
	if (easy == true) {
	enemyhealthdecrease2+=10+marketdamage;
	amnodecrease-=8;
	pointscounter+=100;
	};	

	if (moderate == true) {
	enemyhealthdecrease2+=8+marketdamage;
	amnodecrease-=16;
	pointscounter+=75;
	};


	if (hard == true) {
	enemyhealthdecrease2+=6+marketdamage;
	amnodecrease-=24;
	pointscounter+=50;
	};

	if (expert == true) {
	enemyhealthdecrease2+=5+marketdamage;
	amnodecrease-=32;
	pointscounter+=25;
	};

};
}



}/////            end of game screen

if (market == true) {
	if (mx > 393 && mx < 2393 && my > 496 && my <  1996) {
		market = false;
		gamescreen = true;
		};
	//////////////////////////////	

if (pointscounter > 499) {
	if (mx  > 490 && mx < 508) {
		if (my > 218 && my < 236) {
			health1 = true;
			markethealth=0.09;
			pointscounter-=500;
		};
	
		if (my > 277 && my < 295) {
			damage1 = true;
			marketdamage=3;
			pointscounter-=500;
		};	

		if (my > 336 && my < 354) {
			fuel1 = true;
			marketfuel=0.05;
			pointscounter-=500;
		};	
		if (my > 395 && my < 413) {
			ammo1 = true;
			marketammo=0.3;
			pointscounter-=500;
		};
		if (my > 454 && my < 472) {
			points1 = true;
			marketpoint=25;
			pointscounter-=500;
		};	
	}	
}
if (pointscounter > 999) {
	if (mx > 540 && mx < 558) {
		if (health1 == true) {
			if (my > 218 && my < 236) {
				health2 = true;
				markethealth=0.5;
				pointscounter-=1000;
			};
		}	
		if (damage1 == true) {
			if (my > 277 && my < 295) {
				damage2 = true;
				marketdamage=6;
				pointscounter-=1000;
			};	
		}	
		if (fuel1 == true) {
			if (my > 336 && my < 354) {
				fuel2 = true;
				marketfuel=0.1;
				pointscounter-=1000;
			};	
		}
		if (ammo1 == true) {	
			if (my > 395 && my < 413) {
				ammo2 = true;
				marketammo=0.6;
				pointscounter-=1000;
			};
		}
		if (points1 == true) {	
			if (my > 454 && my < 472) {
				points2 = true;
				marketpoint=75;
				pointscounter-=1000;
			};	
		};		
	};
};

if (pointscounter > 2499) {
	if (mx > 590 && mx < 608) {
		if (health1 == true && health2 == true) {
			if (my > 218 && my < 236) {
				health3 = true;
				markethealth=0.7;
				pointscounter-=2500;
			};
		}	
		if (damage1 == true && damage2 == true) {
			if (my > 277 && my < 295) {
				damage3 = true;
				marketdamage=6;
				pointscounter-=2500;
			};	
		}	
		if (fuel1 == true && fuel2 == true) {
			if (my > 336 && my < 354) {
				fuel3 = true;
				marketfuel=0.15;
				pointscounter-=2500;
			};	
		}
		if (ammo1 == true && ammo2 ==true) {	
			if (my > 395 && my < 413) {
				ammo3 = true;
				marketammo=0.9;
				pointscounter-=2500;
			};
		}
		if (points1 == true && points2 == true) {	
			if (my > 454 && my < 472) {
				points3 = true;
				marketpoint=100;
				pointscounter-=2500;
			};	
		};		
	};
};

};


if (introscreen == true) {

if (loginclose == false) {	
	if (mx > 560 && mx < 880 && my > 311 && my < 335 ) {namefind = true};
	if (mx > 560 && mx < 880 && my > 370 && my < 394 ) {passwordfind = true};
	if (mx > 867 && mx < 927 && my > 432 && my < 457) {
		if (name!=="Enter name" && password!== "Enter your own password" ) {loginclose = true}
		if (name=="Enter name" || password== "Enter your own password" ) {warningenter = true}else{warningenter = false};
	}
}
if (debugcheck == true) {
if (loginclose == true) {
	if (mx > 774 && mx <920 && my > 439 && my <600  ) {
		newpassword = window.prompt("Enter password");
		passwordcheck  = true;
	};
	
	if (mx > 887 && mx < 907) {

		if (my > 130 && my < 146) {
			easy = true;
			if (moderate == true) {moderate = false};
			if (hard == true) {hard = false};
			if (expert == true) {expert = false};
		};	
		if (my > 150 && my < 166) {
			moderate = true;
			if (easy == true) {easy = false};
			if (hard == true) {hard = false};
			if (expert == true) {expert = false};
		};	
		if (my > 170 && my < 186) {
			hard = true;
				if (easy == true) {easy = false};
			if (moderate == true) {moderate = false};
			if (expert == true) {expert = false};
		};	
		if (my > 190 && my < 206) {
			expert = true;
				if (easy == true) {easy = false};
			if (moderate == true) {moderate = false};
			if (hard == true) {hard = false};	
		};	

	};



};

};	
}
if (gameover == true) {
	if (mx > 400 && mx < 609 && my > 418 && my < 574) {location.reload()};
};


	}, false);

	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51	
	//w 87	
	//d 68
	//e 69
	//(space) 32
	//q 81
	// tab 9
	

	if(planestopup == false){if(key == 87){planeyup-=13}};
	if(planestopdown == false){if(key == 68){planeydown+=13}};
if(denymarket ==false){	
	if(key == 81){
		market = true;
		gamescreen = false;
	};
}

		
	}, false);

})
