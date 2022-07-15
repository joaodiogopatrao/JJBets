
  
  
  window.onload = function(){
	   

	   
	   
	   //CONFIGURAÇÃO APP
	    PIXI.settings.RESOLUTION = 1.6;
	   PIXI.settings.RENDER_OPTIONS.roundPixels = true;
	   //PIXI.settings.PRECISION_FRAGMENT = 'highp';
	   //PIXI.settings.ROUND_PIXELS = true;
	   
	   //PIXI.settings.ANISOTROPIC_LEVEL = 16;
	   
	   
	    
	   let app = new PIXI.Application({width:600, height: 600, backgroundColor: 0xF3F3F3 || 1});

	   document.getElementById("content").appendChild(app.view);
	   var login = document.getElementById("login");
	   var registo = document.getElementById("registo");
	   var logotest = document.getElementById("testlogo");
	   
	   
	  
	   
	   
	   
	   
	   //CONTAINERS
		const containerGames = new PIXI.Container();
	   	
		const containerHeader = new PIXI.Container();

		
		const containerRoulette = new PIXI.Container();
		
		const containerMaiorMenor = new PIXI.Container();
		
		const containerinfo = new PIXI.Container();

		
		
		
		//ADICIONAR CONTAINERS Á APP
		app.stage.addChild(containerGames);
	    app.stage.addChild(containerHeader);
		app.stage.addChild(containerRoulette);
		app.stage.addChild(containerinfo);
		app.stage.addChild(containerMaiorMenor);
	
		 
		
		//INICIALIZAR E CARREGAR TEXTURAS 	
		const textureRoleta = PIXI.Texture.from('images/gamesimages/roleta.png');
		const textureSports = PIXI.Texture.from('images/gamesimages/bolapng.png');
		const texturebetinfo = PIXI.Texture.from('images/gamesimages/betinfo.png');
		const texturebotaomenu = PIXI.Texture.from('images/gamesimages/botaomenu.png');
		const texturebotaoagain = PIXI.Texture.from('images/gamesimages/botaoagain1.png');
		const textureaddmoney = PIXI.Texture.from('images/amoreimages/addmoney.png');
		const texturesubtractmoney = PIXI.Texture.from('images/amoreimages/subtractmoney.png');
		const textureUpArrow = PIXI.Texture.from('images/gamesimages/uparrowpng.png');
		const textureBigRoleta = PIXI.Texture.from('images/gamesimages/bigroleta.png');
		const textureDownArrow = PIXI.Texture.from('images/gamesimages/downarrowpng.png');
		const textureRouletteArrow = PIXI.Texture.from('images/gamesimages/rouletteseta.png');
		const texturefire = PIXI.Texture.from('images/gamesimages/fire.gif')
		const texturebuttonbase = PIXI.Texture.from('images/gamesimages/buttonbase.png')
		const texturetick =  PIXI.Texture.from('images/gamesimages/tick.png')
		const textureLogo = PIXI.Texture.from('images/interfaceimages/JJBets.png');
		const texturebetbox = PIXI.Texture.from('images/gamesimages/betrectangle.png');
		const texturespinbutton = PIXI.Texture.from('images/gamesimages/spinbutton.png');
		const texturehelpballoonroleta = PIXI.Texture.from('images/gamesimages/helproulette.png');
		const texturehelpballoondesporto = PIXI.Texture.from('images/gamesimages/helpsport.png');
		const texturehelpballoonmaioroumenor = PIXI.Texture.from('images/gamesimages/helparrows.png');
		const texturebackbutton = PIXI.Texture.from('images/interfaceimages/backButton.png');
		const texturereddiamond = PIXI.Texture.from('images/gamesimages/altreddiamond.png');
		const texturegreendiamond = PIXI.Texture.from('images/gamesimages/altgreendiamond.png');
		const textureblackdiamond = PIXI.Texture.from('images/gamesimages/altblackdiamond.png');
		const texturepromoarrow  = PIXI.Texture.from('images/interfaceimages/leftarrow.png');
		const texturetextoroleta = PIXI.Texture.from('images/textimages/textroulett1.png');
		const texturetextodesporto = PIXI.Texture.from('images/textimages/textsport.png');
		const texturetextomaioroumenor = PIXI.Texture.from('images/textimages/textohigherlower.png');
		const textureshape =  PIXI.Texture.from('images/gamesimages/shape.png');
		const texturegreater =  PIXI.Texture.from('images/gamesimages/greater.png');
		const texturestartbtn =  PIXI.Texture.from('images/gamesimages/startbtn.png');
		const texturechoicearrows =  PIXI.Texture.from('images/gamesimages/reload.png');
		
		
		
	    textureUpArrow.baseTexture.mipmap = true;
		textureDownArrow.baseTexture.mipmap = true;
	    textureRoleta.baseTexture.mipmap = true;
		textureRouletteArrow.baseTexture.mipmap = true;
		//texturechoicearrows.baseTexture.mipmap = true;
		textureSports.baseTexture.mipmap = true;
		textureBigRoleta.baseTexture.mipmap = true;
		textureaddmoney.baseTexture.mipmap = true;
		texturetick.baseTexture.mipmap = true;
		texturesubtractmoney.baseTexture.mipmap = true;
		textureLogo.baseTexture.mipmap = true;
		texturebetbox.baseTexture.mipmap = true;
		texturebuttonbase.baseTexture.mipmap = true;
		texturespinbutton.baseTexture.mipmap = true;
		texturereddiamond.baseTexture.mipmap = false;
		textureblackdiamond.baseTexture.mipmap = true;
    	texturegreendiamond.baseTexture.mipmap = true;
		texturestartbtn.baseTexture.mipmap = true;	
		texturetextoroleta.baseTexture.mipmap = true;
		texturetextodesporto.baseTexture.mipmap = true;
		texturetextomaioroumenor.baseTexture.mipmap = true;
		texturehelpballoonroleta.baseTexture.mipmap = true;
		texturehelpballoondesporto.baseTexture.mipmap = true;
		texturehelpballoonmaioroumenor.baseTexture.mipmap = true;
		texturepromoarrow.baseTexture.mipmap = true;
		
		
		
		//ELEMENTOS GRAFICOS
		
		const header = new PIXI.Graphics();
		
		const spinGraphics = new PIXI.Graphics();
		const header1 = new PIXI.Graphics();
		const arrowbackground = new PIXI.Graphics();
		const gamesBackground = new PIXI.Graphics();
	

		
		
		//INICIALIZAÇÃO VARIAVEIS
		
		containerGames.x = 100;
		 let rotationaccel = 0;
		var id= null;
		let textoredscale = 1;
		let textoblackscale = 1;
		let textogreenscale = 1;
		let oddmaiorscale = 0;
		let oddmenorscale = 0;
		let textomaiorscale = 0;
		let textomenorscale = 0;
		let texto2xscale1 = 0;
		let texto2xscale2 = 0;
		let texto37xscale = 0;
		let hoverSize = 0.45;
		let yellowScale1 = 0;
		let yellowScale2 = 0;
		let yellowScale3 = 0;
		let textoscale1 = 0.6;
		let textoscale2 = 0.6;
		let textoscale3 = 0.6;
		let arrowscale = 0;
		let betType = 0;
		let isHoveringSobre = false;
		 
        let hasClickedBet1 = false;
        let hasClickedBet2 = false;
		let isHoveringContexto = false;
		let isHoveringAjuda = false;
		let isHoveringRoleta = false;
		let isHoveringPlus = false;
		let isHoveringSports = false;
		let isHoveringArrow = false;
		let hasClickedRoleta = false;
		let hasClickedMaiorMenor = false;
		let isHoveringSpin = false;
		let isHoveringRed = false;
		let isHoveringBlack = false;
		let isHoveringGreen = false;
		let isHoveringBack = false;
		let hasClickedBack = false;
		let maiorMenorStarted = false;
		let isRed = false;
		let isBlack = false;
		let isGreen = false;
		let rotationSpeed = 0;
		let signscale = 0.04;
		let sportscale = 0.068;
		let sportscaledown = false;
		let containerscale = 1;
		let graphSizeRed = 45;
		let graphSizeBlack = 45;
		let greaterscale = 0;
		let lesserscale = 0;
		let buttonscaleRed = 0.04;
		let buttonscaleBlack = 0.04;
		let helpscale1 = 0;
		let helpscale2 = 0;
		let helpscale3 = 0;
		 let isHoveringPromo = false;
		 let betValue = 0;
		let value = betValue.toString() + "€";
		let buttonscaleGreen = 0.04;
		let fontValue = 30;
		let backscale = 0.08;
		let graphSizeGreen = 45;
		let containerroulettescale = 0;
		let containermaiormenorscale = 0;
		let hasClickedMenu = false;
		let hasClickedAgain = false;
		let maiormenorbet1scale = 0;
		let maiormenorbet2scale = 0;
		let isHoveringBet1 = false;
		let isHoveringBet2 = false;
		
	
		
		
		
		
		//CONFIGURAÇÃO DOS ELEMENTOS GRAFICOS
	 
		header.beginFill(0xB04040);
		header.drawRect(-308,-310, 1230, 50,50);
		header.endFill();
		
		spinGraphics.beginFill(0x000000,0.2);
		spinGraphics.drawRoundedRect(138, 130, 85, 29,40);
		spinGraphics.endFill();
		arrowbackground.beginFill(0xF3F3F3, 1);
		arrowbackground.drawRect(103, -170, 130, 115,40);
		arrowbackground.endFill();
	
		

		//INICIALIZAÇÃO DE SPRITES COM RESPETIVAS TEXTURAS
		const roleta = new PIXI.Sprite(textureRoleta);
		const sports = new PIXI.Sprite(textureSports);
		const bigroleta = new PIXI.Sprite(textureBigRoleta);	
		const upArrow = new PIXI.Sprite(textureUpArrow);
		const downArrow = new PIXI.Sprite(textureDownArrow);
		const rouletteArrow = new PIXI.Sprite(textureRouletteArrow);
		const betbox = new PIXI.Sprite(texturebetbox);
		const betbox1 = new PIXI.Sprite(texturebetbox);
		const spinbutton = new PIXI.Sprite(texturespinbutton);
		const reddiamond = new PIXI.Sprite(texturereddiamond);
		const blackdiamond = new PIXI.Sprite(textureblackdiamond);
		const greendiamond = new PIXI.Sprite(texturegreendiamond);
		const maiormenorbet1 = new PIXI.Sprite(texturereddiamond);
		const maiormenorbet2 = new PIXI.Sprite(texturereddiamond);
		const backbutton = new PIXI.Sprite(texturebackbutton);
		const backbuttonmaiormenor = new PIXI.Sprite(texturebackbutton);
		const textoroleta = new PIXI.Sprite(texturetextoroleta);
		const buttonbase = new PIXI.Sprite(texturebuttonbase);
		const textodesporto = new PIXI.Sprite(texturetextodesporto);
		const textomaioroumenor = new PIXI.Sprite(texturetextomaioroumenor);
		const fire = new PIXI.Sprite(texturefire);
		const addmoney = new PIXI.Sprite(textureaddmoney);
		const addmoney1 = new PIXI.Sprite(textureaddmoney);
		const subtractmoney = new PIXI.Sprite(texturesubtractmoney);
		const subtractmoney1 = new PIXI.Sprite(texturesubtractmoney);
		const rightarrow = new PIXI.Sprite(texturepromoarrow);
		const leftarrow = new PIXI.Sprite(texturepromoarrow);
		const helpballoonroleta = new PIXI.Sprite(texturehelpballoonroleta);
		const helpballoondesporto = new PIXI.Sprite(texturehelpballoondesporto);
		const helpballoonmaioroumenor = new PIXI.Sprite(texturehelpballoonmaioroumenor);
		const betinfo = new PIXI.Sprite(texturebetinfo);
		const botaomenu = new PIXI.Sprite(texturebotaomenu);
		const botaoagain = new PIXI.Sprite(texturebotaoagain);
		const firstshape = new PIXI.Sprite(textureshape);
		const secondshape = new PIXI.Sprite(textureshape);
		const greater = new PIXI.Sprite(texturegreater);
		const lesser = new PIXI.Sprite(texturegreater);
		const startbtn = new PIXI.Sprite(texturestartbtn);
		const choicearrows = new PIXI.Sprite(texturechoicearrows);
		const tick = new PIXI.Sprite(texturetick);
		
		let selectionvalue = 1;
		
		
		//CONFIGURAÇÃO ESTILOS DE LETRA

	 	const style = new PIXI.TextStyle({
		    fontFamily: '\"Trebuchet MS\", Helvetica, sans-serif',
		    fontSize: 13,
		    fontStyle: 'bold',
		   	//fontWeight: 'bold',
		    fill: ['#FDFDFD', '#FDFDFD'],
		});
	 	const style1 = new PIXI.TextStyle({
		    fontFamily: '\"Trebuchet MS\", Helvetica, sans-serif',
		    fontSize: selectionvalue,
		    fontStyle: 'bold',
		   	//fontWeight: 'bold',
		    fill: ['#DECD03', '#CFBF03'],
		});
	 	const style2 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 60,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#0ACD00', '#079200'],
		});
		const style3 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 100,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFFFF', '#BBBBBB'],
		});
		const style4 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 30,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#E8E700', '#B4B300'],
		});
		const style5 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 30,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFFFF', '#E4E4E4'],
		});
		const style6 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 50,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFFFF', '#E4E4E4'],
		});
		const style7 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 50,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFFFF', '#E4E4E4'],
		});
		const style8 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 90,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#000000', '#838383'],
		});

		const style9 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 90,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#000000', '#838383'],
		});
		const style10 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.5,
		   	dropShadowDistance : 1,
		    fontSize: 90,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFFFF', '#CCCCCC'],
		});
		const style11 = new PIXI.TextStyle({
		    fontFamily: '"Bebas Neue", cursive',
		    dropShadow: true,
		   	dropShadowBlur : 6,
		   	dropShadowAlpha : 0.2,
		   	dropShadowDistance : 1,
		    fontSize: 23,
		    fontStyle: '',
		   	//fontWeight: 'bold',
		    fill: ['#FFFB00', '#C1BE01'],
		});
		
		
		
		
	 	let textbetvalue = new PIXI.Text(value,style);
	 	let textbetvalue1 = new PIXI.Text(value,style);
	 	textbetvalue.resolution = 2;
	 	textbetvalue1.resolution = 2;
	 	let selectedbet = new PIXI.Text("",style1);
	 	let textarrowsbet = new PIXI.Text(">>",style8);
	 	let winningTextTitle = new PIXI.Text("GANHOU!", style2);
	 	let textNumber = new PIXI.Text("10", style3);
	 	let insertedValue = new PIXI.Text("2.0€", style6);
	 	let finalValue = new PIXI.Text("0.0€", style7);
	 	let x2red = new PIXI.Text("2X", style4);
	 	let x2black = new PIXI.Text("2X", style4);
	 	let x37green = new PIXI.Text("37X", style4);
	 	let textred = new PIXI.Text("RED", style5);
	 	let textblack = new PIXI.Text("BLACK", style5);
	 	let textgreen = new PIXI.Text("GREEN", style5);
	 	let number1 = new PIXI.Text("?", style10);
	 	let number2 = new PIXI.Text("?", style10);
	 	let numberodd1 = new PIXI.Text("2.38X", style11);
	 	let numberodd2 = new PIXI.Text("2.38X", style11);
	 	textNumber.anchor.set(0.5);
	 	insertedValue.anchor.set(0.5);
	 	insertedValue.x = -87;
	 	insertedValue.y = -17;
	 	finalValue.anchor.set(0.5);
	 	finalValue.x = 65;
	 	finalValue.y = -17;
	 	textarrowsbet.y = -57;
	 	textarrowsbet.x = -44
	 	greater.scale.set(0);
	 	greater.anchor.set(0.5);
	 	greater.x = -8;
	 	greater.y = -97;
	 	greater.interactive = true;
	 	greater.buttonMode = true;
	 	lesser.scale.set(lesserscale);
	 	lesser.anchor.set(0.5);
	 	lesser.x = -10;
	 	lesser.y = -97;
	 	lesser.rotation = 3.14;
	 	lesser.interactive = true;
	 	lesser.buttonMode = true;
	 	textarrowsbet.resolution = 2;
	 	textred.resolution = 2;
	 	textblack.resolution = 2;
	 	textgreen.resolution = 2;
	 	numberodd1.resolution = 2;
	 	numberodd2.resolution = 2;
	 	number1.resolution = 2;
	 	number2.resolution = 2;
	 	x2red.resolution = 2;
	 	x2black.resolution = 2;
	 	x37green.resolution = 2;
		selectedbet.resolution = 2;
	 	winningTextTitle.resolution = 2;
	 	textNumber.resolution = 2;
	 	insertedValue.resolution = 2;
	 	finalValue.resolution = 2;
        //INICIALIZAÇÃO ELEMENTOS DE TEXTO	 	
		 let containerinfoscale = 0;
		 const spinText = new PIXI.Text('SPIN!', style);

		 //CONFIGURAÇÃO DE ELEMENTOS
		let buttonbasescale = 0;
		tick.anchor.set(0.5);
		tick.scale.set(0);
		tick.y= 85;
		tick.x = -4;
		buttonbase.anchor.set(0.5);
		buttonbase.scale.set(0);
		buttonbase.y = 85;
		buttonbase.x = -4;
		buttonbase.interactive= true;
		buttonbase.buttonMode = true;
		numberodd1.anchor.set(0.5);
		numberodd1.x = -65;
		numberodd1.y = 150;
		numberodd2.anchor.set(0.5);
		numberodd2.x = -65;
		numberodd2.y = 150;
		arrowbackground.interactive = true;
		arrowbackground.buttonMode = true;
		textoroleta.anchor.set(0.5);
		textodesporto.anchor.set(0.5);
		textomaioroumenor.anchor.set(0.5);
		textoroleta.scale.set(0.6);
		textoroleta.x = -207;
		textoroleta.y = -15;
		textodesporto.scale.set(0.30);
		textodesporto.x = -21;
		textodesporto.y = -15;
		textomaioroumenor.scale.set(0.3);
		textomaioroumenor.x = 175;
		textomaioroumenor.y = -15;
		startbtn.scale.set(0.2);
		startbtn.anchor.set(0.5);
		startbtn.x = -5;
		startbtn.y = 35;
		startbtn.interactive = true;
		startbtn.buttonMode = true;
		startbtn.tint = 0x3F6DDB;
		textNumber.y = -100;
		textNumber.x = -9;
		number1.x = -185;
		number1.y = -97;
		number1.anchor.set(0.5);
		number2.x = 164;
		number2.y = -97
		number2.anchor.set(0.5);
		betinfo.scale.set(0.35);
		betinfo.anchor.set(0.5);
		betinfo.y = -60;
		addmoney.scale.set(0.025);
		addmoney.anchor.set(0.5);
		addmoney.x = 285;
		addmoney.y = 80;
		addmoney.interactive = true;
		addmoney.buttonMode = true;
		addmoney1.scale.set(0.025);
		addmoney1.anchor.set(0.5);
		addmoney1.x = 90;
		addmoney1.y = 140;
		addmoney1.interactive = true;
		addmoney1.buttonMode = true;
		subtractmoney.scale.set(0.03);
		subtractmoney.anchor.set(0.5);
		subtractmoney.x = 285;
		subtractmoney.y = 100;
		subtractmoney.interactive = true;
		subtractmoney.buttonMode = true;
		subtractmoney1.scale.set(0.03);
		subtractmoney1.anchor.set(0.5);
		subtractmoney1.x = 90;
		subtractmoney1.y = 160;
		subtractmoney1.interactive = true;
		subtractmoney1.buttonMode = true;
		fire.anchor.set(0.5);
		fire.scale.set(0.5);
		fire.x = 0;
		fire.y = 100;
		 backbutton.anchor.set(0.5);
		 backbutton.scale.set(0.08);
		 backbutton.interactive = true;
		 backbutton.buttonMode = true;
		 backbutton.x = 250;
		 backbutton.y = -200
		 backbuttonmaiormenor.anchor.set(0.5);
		 backbuttonmaiormenor.scale.set(0.08);
		 backbuttonmaiormenor.interactive = true;
		 backbuttonmaiormenor.buttonMode = true;
		 backbuttonmaiormenor.x = 250;
		 backbuttonmaiormenor.y = -200
		 leftarrow.anchor.set(0.5);
		 rightarrow.anchor.set(0.5);
		 leftarrow.scale.set(arrowscale);
		 rightarrow.scale.set(arrowscale);
		 rightarrow.x = 210;
		 rightarrow.y = 85;
		 leftarrow.x = 30;
		 leftarrow.y = 85;
		 leftarrow.rotation = 3.15;
		 roleta.anchor.set(0.5);
		 roleta.scale.set(0.11);
		 reddiamond.anchor.set(0.5);
		 reddiamond.scale.set(0.5);
		 reddiamond.x = -230;
		 reddiamond.y = 95;
		 reddiamond.interactive = true;
		 reddiamond.buttonMode = true;
		 blackdiamond.anchor.set(0.5);
		 blackdiamond.scale.set(0.5);
		 blackdiamond.x = -110;
		 winningTextTitle.x = -90;
		 winningTextTitle.y = -215;
		 textred.anchor.set(0.5);
		 textred.x = -228;
		 textred.y = 95;
		 textblack.anchor.set(0.5);
		 textblack.x = -108;
		 textblack.y = 95;
		 textgreen.anchor.set(0.5);
		 textgreen.x = 12;
		 textgreen.y = 95;
		 x2red.anchor.set(0.5);
		 x2red.x = -228;
		 x2red.y = 95;
		 x2red.scale.set(0);
		 x2black.anchor.set(0.5);
		 x2black.x = -108;
		 x2black.y = 95;
		 x2black.scale.set(0);
		 x37green.anchor.set(0.5);
		 x37green.x = 12;
		 x37green.y = 95;
		  x37green.scale.set(0);
		 blackdiamond.y = 95;
		 blackdiamond.interactive = true;
		 blackdiamond.buttonMode = true;
		 greendiamond.anchor.set(0.5);
		 greendiamond.scale.set(0.5);
		 greendiamond.x = 10;
		 greendiamond.y = 95;
		 greendiamond.interactive = true;
		 greendiamond.buttonMode = true;
		 maiormenorbet1.anchor.set(0.5);
		 maiormenorbet1.scale.set(maiormenorbet1scale);
		 maiormenorbet1.x = 72;
		 maiormenorbet1.y = 35;
		 maiormenorbet1.interactive = true;
		 maiormenorbet1.buttonMode = true;
		 maiormenorbet2.anchor.set(0.5);
		 maiormenorbet2.scale.set(maiormenorbet2scale);
		 maiormenorbet2.x = -78;
		 maiormenorbet2.y = 35;
		 maiormenorbet2.interactive = true;
		 maiormenorbet2.buttonMode = true;
		 
		 upArrow.anchor.set(0.5);
		 rouletteArrow.anchor.set(0.5);
		 rouletteArrow.scale.set(0.05);
		
		 betbox.anchor.set(0.5);
		 betbox.scale.set(0.1);
		 betbox.x = 180;
		 betbox.y = 90;
		  betbox1.anchor.set(0.5);
		 betbox1.scale.set(0.1);
		 betbox1.x = -10;
		 betbox1.y = 150;
		 spinText.anchor.set(0.5);
		 spinText.x = 180;
		 spinText.y = 145;
		 rouletteArrow.x = -170;
		 rouletteArrow.y = -112;
		 bigroleta.anchor.set(0.5);
		 bigroleta.scale.set(0.6);
		 bigroleta.x = -10;
		 bigroleta.y = -110;
		 bigroleta.rotation = -1.65;
		 spinbutton.anchor.set(0.5);
		 spinbutton.scale.set(0.04);
		 spinbutton.x = 180;
		 spinbutton.y = 145;
		 spinbutton.interactive = true;
		 spinbutton.buttonMode = true;
		 upArrow.scale.set(1.2);
		 upArrow.x = 135;
		 upArrow.y = -115;
		 upArrow.rotation = 4.7;
		 downArrow.anchor.set(0.5);
		 downArrow.scale.set(1.2);
		 downArrow.rotation = 1.56;
		 downArrow.y = -115;
		 downArrow.x = 194;
		 firstshape.x = -185;
		 firstshape.y= -100;
		 firstshape.scale.set(0.3);
		 firstshape.anchor.set(0.5);
		 secondshape.x = 165;
		 secondshape.y= -100;
		 secondshape.scale.y= 0.3;
		 secondshape.scale.x = -0.3;
		 secondshape.anchor.set(0.5);
		 helpballoonroleta.scale.set(0.35);
		 helpballoonroleta.anchor.set(0.5);
		 helpballoonroleta.x = -20;
		 helpballoonroleta.y = 100;
		 helpballoondesporto.scale.set(0.35);
		 helpballoondesporto.anchor.set(0.5);
		 helpballoondesporto.x = -20;
		 helpballoondesporto.y = 100;
		 helpballoonmaioroumenor.scale.set(0.35);
		 helpballoonmaioroumenor.anchor.set(0.5);
		 helpballoonmaioroumenor.x = -20;
		 helpballoonmaioroumenor.y = 130;
		 textbetvalue.x = 165;
		 textbetvalue.y = 80;
		 textbetvalue1.x = -30;
		 textbetvalue1.y = 141;
		 choicearrows.x = -65;
		 choicearrows.y= 7;
		 choicearrows.scale.set(0);
		 choicearrows.anchor.set(0.5);
		 choicearrows.interactive = true;
		 choicearrows.buttonMode = true;
		 roleta.x = -207;
		 roleta.y = -120;
		 sports.anchor.set(0.5);
		 sports.scale.set(0.68);
		 sports.y = -120;
		 sports.x = -20
		 sports.interactive = true;
		 sports.buttonMode = true;
		 roleta.interactive = true;
		 roleta.buttonMode = true;
		 selectedbet.anchor.set(0.5);
		 selectedbet.x = 124;
		 selectedbet.y = 87;	
		 containerinfo.scale.set(containerinfoscale);
		 botaomenu.resolution = 2;
		 botaomenu.scale.set(0.7);
		 botaomenu.anchor.set(0.5);
		 botaomenu.x = -80;
		 botaomenu.y = 100;
		 botaoagain.resolution = 2;
		 botaoagain.scale.set(0.7);
		 botaoagain.anchor.set(0.5);
		 botaoagain.x = 63;
		 botaoagain.y = 100;
		 botaomenu.interactive = true;
		 botaomenu.buttonMode = true;
		  botaoagain.interactive = true;
		 botaoagain.buttonMode = true;
		 
	     //ADICIONAR ELEMENTOS AOS CONTAINERS 
	    
	     containerGames.addChild(arrowbackground);
		 containerGames.addChild(roleta);
		 
		 containerGames.addChild(sports);
		 containerGames.addChild(textoroleta);
		 containerGames.addChild(textodesporto);
		 containerGames.addChild(textomaioroumenor);
		 //containerGames.addChild(fire);
		 containerGames.addChild(upArrow);
		 containerGames.addChild(downArrow);
		 containerRoulette.addChild(bigroleta);
		 containerRoulette.addChild(rouletteArrow);
		 containerRoulette.addChild(betbox);
		 containerRoulette.addChild(spinbutton);
		 containerRoulette.addChild(spinText);
		 containerRoulette.addChild(reddiamond);
		 containerRoulette.addChild(blackdiamond);
		 containerRoulette.addChild(greendiamond);
		 containerRoulette.addChild(backbutton);
		 containerRoulette.addChild(x2red);
		 containerRoulette.addChild(x2black);
		 containerRoulette.addChild(x37green);
		 containerRoulette.addChild(textred);
		 containerRoulette.addChild(textblack);
		 containerRoulette.addChild(textgreen);
		
		 containerRoulette.addChild(betinfo);
		 containerRoulette.addChild(addmoney);
		 containerRoulette.addChild(subtractmoney);
		 containerRoulette.addChild(textbetvalue);
		 
		  containerMaiorMenor.addChild(firstshape);
		  containerMaiorMenor.addChild(secondshape);
		  containerMaiorMenor.addChild(betbox1);
		  containerMaiorMenor.addChild(addmoney1);
		  containerMaiorMenor.addChild(subtractmoney1);
		  containerMaiorMenor.addChild(textbetvalue1);
		  containerMaiorMenor.addChild(greater);
		  containerMaiorMenor.addChild(lesser);
		  containerMaiorMenor.addChild(number1);
		  containerMaiorMenor.addChild(number2);
		  containerMaiorMenor.addChild(startbtn);
		  containerMaiorMenor.addChild(maiormenorbet1);
		  containerMaiorMenor.addChild(maiormenorbet2);
		  containerMaiorMenor.addChild(numberodd1);
		  containerMaiorMenor.addChild(numberodd2);
		  containerMaiorMenor.addChild(choicearrows);
		  containerMaiorMenor.addChild(backbuttonmaiormenor);
		  containerMaiorMenor.addChild(buttonbase);
		  containerMaiorMenor.addChild(tick);
		  
	
		 
		 
		 containerRoulette.addChild(selectedbet);
		 containerGames.addChild(helpballoonroleta);
		 containerGames.addChild(helpballoondesporto);
		 containerGames.addChild(helpballoonmaioroumenor);
		 containerinfo.addChild(betinfo);
		 containerinfo.addChild(textarrowsbet);
		 containerinfo.addChild(winningTextTitle);
		 containerinfo.addChild(botaomenu);
		 containerinfo.addChild(botaoagain);
		 containerinfo.addChild(textNumber);
		 containerinfo.addChild(insertedValue);
		 //containerinfo.addChild(betArrows);
		 containerinfo.addChild(finalValue);
		 let rotationAccelValue = 0;
		 startbtn.tint = 0xFFFFFF;
	
		 
		 
		
		 containerGames.x = app.screen.width/2;
		 containerGames.y = app.screen.height/2;
		 containerHeader.x = app.screen.height/2;
		 containerHeader.y = app.screen.height/2;
		 containerRoulette.x =app.screen.width/2;
		 containerRoulette.y =app.screen.height/2;
		  containerMaiorMenor.x =app.screen.width/2;
		 containerMaiorMenor.y =app.screen.height/2;
		 containerinfo.x =app.screen.width/2;
		 containerinfo.y =app.screen.height/2;
		 let startRotating = false;
		 
		 var width = 0;
		 //FUNÇOES
		 function onButtonOverRoleta(){
			 isHoveringRoleta = true;
	
		   }
		 function onButtonOutRoleta(){
			 
			 isHoveringRoleta = false;
			
		 }
		 function onButtonOverPlus(){
			 isHoveringPlus = true;
			 
		 }
		 
		 function onButtonOutPlus(){
			 isHoveringPlus = false;
		 }
		 
		 function onButtonOverSports(){
			 isHoveringSports = true;			 
		 }
		 
		 function onButtonOutSports(){
			 isHoveringSports= false;
			
		 }
		 
		 function onButtonOverArrows(){
			 isHoveringArrow = true;
			
		 }
		 
		 function onButtonOutArrows(){
			 isHoveringArrow = false;
		 }
		 
		 
		 var id = null;
		 function onClickRoleta(){
			
			 hasClickedRoleta = true;
			 var separation = document.getElementById("separation");
			 var width = 960;
			 clearInterval(id);
			 id = setInterval(frame,5);
			 function frame(){
				 if(width > 0){
					 width = width -15;
					 separation.style.width = width +'px';
				 }
				 if (width <= 0){
					 separation.style.width = '0px';
					 clearInterval(id);
				 }
			 }
			
		 }
		 function onClickMaiorMenor(){
			
			 hasClickedMaiorMenor = true;
			 var separation = document.getElementById("separation");
			 var width = 960;
			 clearInterval(id);
			 id = setInterval(frame,5);
			 function frame(){
				 if(width > 0){
					 width = width -15;
					 separation.style.width = width +'px';
				 }
				 if (width <= 0){
					 separation.style.width = '0px';
					 clearInterval(id);
				 }
			 }
			
		 }
		 
		 function onButtonOverSpin(){
			containerRoulette.addChild(spinGraphics);
		 }
		 
		 function onButtonOutSpin(){
			 containerRoulette.removeChild(spinGraphics); 
		 }
		 
		 function onButtonOverRed(){
			 isHoveringRed = true;
			
			 
		 }
		 
		 function onButtonOverBlack(){
			 isHoveringBlack = true;
		 }
		 
		 function onButtonOverGreen(){	 
			 isHoveringGreen = true;
		 }
		 function onButtonOutRed(){
			 isHoveringRed = false;
		 }
		 
		 function onButtonOutBlack(){
			 isHoveringBlack = false;
		 }
		 
		 function onButtonOutGreen(){
			 isHoveringGreen = false;			 
		 }
		 
		 function onButtonOverBack(){
			 isHoveringBack = true;
			 
		 }
		 let isHoveringBackMaiorMenor = false;
		 function onButtonOutBackMaiorMenor(){
			 isHoveringBackMaiorMenor = false;
			 
		 }
		  function onButtonOverBackMaiorMenor(){
			 isHoveringBackMaiorMenor = true;
			 
		 }
		 
		 function onButtonOutBack(){
			 isHoveringBack = false;
			 
		 }
		 function onClickLogo(){
		 
		 	betValue = betValue - 0.5;
		 	if(betValue < 0){
		 	betValue = 0;
		 	}
		 }
		 function onClickSpin(){
			 
			 if(startRotating == false && betValue!= 0 && betType != 0){

			 rotationAccel = 0;
			 startRotating = true;
			 isAccel = true;
			 bigroleta.rotation = -1.65
			 $.ajax({
				 method: "GET",
				 url: "/play_roleta",
				 success: function(result){
					 getNumberColor(result)
				 }
			 })
			 
			function getNumberColor(number){
				 
			  $.ajax({
				 method: "GET",
				 url: "/play_roletacolors?value=" + number,
				 success: function(resultcolors){
				
					 
					 
				 }
			 })
			 
			 textNumber.text = number.toString();
			 insertedValue.text = betValue.toString() + "€";
			 if(number == 0){
				 rotationAccelValue = 54.91;
				 if(betType == 3){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*37).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					  style8.fill = ['#FF0000', '#9F0000'];
					  finalValue.text = "0.0€";
				 }
			 } 
			  if(number == 1){
				  rotationAccelValue = 51 ;
				  if(betType == 1){
						 winningTextTitle.text = "GANHOU!"
						 style2.fill = ['#0ACD00', '#079200'];
						 finalValue.text = (betValue*2).toString() + "€";
						 style8.fill = ['#0ACD00', '#079200'];
					 }
					 else{
						 winningTextTitle.text = "PERDEU!"
					 	 style2.fill = ['#FF0000', '#9F0000'];
					 	 style8.fill = ['#FF0000', '#9F0000'];
					 	  finalValue.text = "0.0€";
					 }
				  
				  } 
			  if(number == 2){
				  rotationAccelValue =53.89;
				  if(betType == 2){
						 winningTextTitle.text = "GANHOU!"
						 style2.fill = ['#0ACD00', '#079200'];
						  finalValue.text = (betValue*2).toString() + "€";
						  style8.fill = ['#0ACD00', '#079200'];
					 }
					 else{
						 winningTextTitle.text = "PERDEU!"
						  style2.fill = ['#FF0000', '#9F0000'];
						  style8.fill = ['#FF0000', '#9F0000'];
						  finalValue.text = "0.0€";
					
					 }
				  }
			 if(number == 3){
				 rotationAccelValue = 55.26;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
					
				 }
				 } 
			 if(number == 4){
				 rotationAccelValue = 54.24;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					  style8.fill = ['#FF0000', '#9F0000'];
					  finalValue.text = "0.0€";
					 
				 }
				 }
			 if(number == 5){
				 rotationAccelValue = 51.7;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
					
				 }
				 } 
			 if(number == 6){
				 rotationAccelValue = 53.20;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
				
				 }
				 }
			 if(number == 7){
				 rotationAccelValue = 55.94;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 8){
				 rotationAccelValue = 52.20;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
			 }
			 if(number == 9){
				 rotationAccelValue = 56.63;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
				style8.fill = ['#FF0000', '#9F0000'];
				finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 10){
				 rotationAccelValue = 51.9;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 11){
				 rotationAccelValue = 52.49;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 12){
				 rotationAccelValue = 55.61;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
				style8.fill = ['#FF0000', '#9F0000'];
				finalValue.text = "0.0€";
				 }
				 }
			 if(number == 13){
				 rotationAccelValue = 52.83;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 14){
				 rotationAccelValue = 56.96;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
				style8.fill = ['#FF0000', '#9F0000'];
				finalValue.text = "0.0€";
				 }
				 }
			 if(number == 15){
				 rotationAccelValue = 54.57;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 16){
				 rotationAccelValue = 57.64;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 17){
				 rotationAccelValue = 53.55;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 18){
				 rotationAccelValue = 56.29;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 19){
				 rotationAccelValue = 54.41;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 20){
				 rotationAccelValue = 57.13;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 21){
				 rotationAccelValue = 54.07;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 22){
				 rotationAccelValue = 56.45;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 23){
				 rotationAccelValue = 52.05;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 24){
				 rotationAccelValue = 51.5;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 25){
				 rotationAccelValue = 53.73;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 26){
				 rotationAccelValue = 55.08;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
					style8.fill = ['#FF0000', '#9F0000'];
				 }
				 }
			 if(number == 27){
				 rotationAccelValue =53.03;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 28){
				 rotationAccelValue = 55.77;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					 style8.fill = ['#FF0000', '#9F0000'];
					 finalValue.text = "0.0€";
				 }
				 }
			 if(number == 29){
				 rotationAccelValue = 56.12;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 30){
				 rotationAccelValue = 52.33;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 31){
				 rotationAccelValue = 56.80;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 32){
				 rotationAccelValue = 54.75;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 33){
				 rotationAccelValue = 57.46;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					  style8.fill = ['#FF0000', '#9F0000'];
					  finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 34){
				 rotationAccelValue = 53.38;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 }
			 if(number == 35){
				 rotationAccelValue = 55.43;
				 if(betType == 2){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					  finalValue.text = (betValue*2).toString() + "€";
					  style8.fill = ['#0ACD00', '#079200'];
					  
				 }
				 else{
					 winningTextTitle.text = "PERDEU!"
					  style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 } 
			 if(number == 36){
				 rotationAccelValue = 52.66;
				 if(betType == 1){
					 winningTextTitle.text = "GANHOU!"
					 style2.fill = ['#0ACD00', '#079200'];
					 finalValue.text = (betValue*2).toString() + "€";
					 style8.fill = ['#0ACD00', '#079200'];
				 }
				 else{
					winningTextTitle.text = "PERDEU!"
					 style2.fill = ['#FF0000', '#9F0000'];
					style8.fill = ['#FF0000', '#9F0000'];
					finalValue.text = "0.0€";
				 }
				 
				 }
				   
		
			 gsap.to(bigroleta, {rotation: rotationAccelValue, duration: 11});
			 gsap.to(bigroleta, {duration: 12.5, onComplete: function(){startInfoTransition = true;  }});
		 
			 
			 }
			
			 
			}
			
			
			  //gsap.to(bigroleta, {duration: 12.5, onComplete: function(){startRotating = false; startInfoTransition = true;  }});
		 }
		 function onClickBack(){
			 hasClickedBack = true;
			 var separation = document.getElementById("separation");
			 var width = 0;
			 clearInterval(id);
			 id = setInterval(frame,5);
			 function frame(){
				 if(width < 960){
					 width = width +15;
					 separation.style.width = width +'px';
				 }
				 if (width >= 960){
					 separation.style.width = '960px';
					 clearInterval(id);
				 }
			 }
			 betValue = 0;
			 selectedbet.text = "";
			 betType = 0;
			 selectionvalue = 1;
			 bigroleta.rotation = -1.65;
			 
		 }
		 let hasClickedBackMaiorMenor = false;
		 function onClickBackMaiorMenor(){
			 hasClickedBackMaiorMenor = true;
			 var separation = document.getElementById("separation");
			 var width = 0;
			 clearInterval(id);
			 id = setInterval(frame,5);
			 function frame(){
				 if(width < 960){
					 width = width +30;
					 separation.style.width = width +'px';
				 }
				 if (width >= 768){
					 separation.style.width = '960px';
					 clearInterval(id);
				 }
			 }
			maiormenorStarted = false;
			continueMaiorMenor = false;
			canMakeChoice = false;
			maiormenorbetType = 2;
			startbtn.scale.set(0.2);
			number1.text = "?";
			number2.text = "?";
			numberodd1scale= 0;
			numberodd2scale= 0;
			rotationaccel = 0;
			numberodd1.scale.set(0);
			numberodd2.scale.set(0);
			firstshape.tint = 0xFFFFFF;
			secondshape.tint = 0xFFFFFF;
			greaterscale = 0;
			greater.scale.set(0);
			greater.rotation = 0;
			timedecel = 1;
			choicearrowsscale = 0;
			choicearrows.scale.set(0);
			choicearrows.rotation = 0;
			tickscale = 0;
			tick.scale.set(0);
			buttonbasescale = 0;
			buttonbase.scale.set(0);
			rotationPace = 0;
			
			
			
		
			 
		 }
		 
       
        function onButtonOverPromo(){
       	 isHoveringPromo = true;
       	 
        }
        function onButtonOutPromo(){
       	 isHoveringPromo = false;
        }
        function onClickRedDiamond(){
        	betType = 1;
        	 selectionvalue = 1;
        }
        function onClickBlackDiamond(){
        	betType = 2;
        	 if(selectionvalue != 1){
				 canStartDecreasing = true;
				 selectionvalue = 1;
			 }
        }
        function onClickGreenDiamond(){
        	betType = 3;
        	selectionvalue = 1;
        }
        
        function onClickaddmoney(){
        	betValue = betValue + 0.5;
     
        	
        }
        function onClickaddmoney1(){
        	betValue = betValue + 0.5;
     
        	
        }
        
        function onClicksubtractmoney(){
        	betValue = betValue -0.5;
        	if(betValue < 0){
        		betValue = 0;
        	}
        }
         function onClicksubtractmoney1(){
        	betValue = betValue -0.5;
        	if(betValue < 0){
        		betValue = 0;
        	}
        }
        
        function onButtonOverBotaoMenu(){
        }  
         function onButtonOutBotaoMenu(){
        }  
         function onButtonOverAgain(){
        }  
         function onButtonOutAgain(){
        }     
        
        function onClickBotaoMenu(){
         betValue = 0;
			 selectedbet.text = "";
			 betType = 0;
        bigroleta.rotation = -1.65
        startRotating = false; 
        hasClickedMenu = true;
        var separation = document.getElementById("separation");
			 var width = 0;
			 clearInterval(id);
			 id = setInterval(frame,5);
			 function frame(){
				 if(width < 960){
					 width = width +15;
					 separation.style.width = width +'px';
				 }
				 if (width >= 960){
					 separation.style.width = '960px';
					 clearInterval(id);
				 }
			 }
        }
         let valor1;
         let valor2;
         let valorRecebido1;
         let valorRecebido2;
        function onClickAgain(){
         betValue = 0;
			 selectedbet.text = "";
			 betType = 0;
        bigroleta.rotation = -1.65
        startRotating = false; 
        hasClickedAgain = true;
        }
        function onClickStartGame(){
       
        maiorMenorStarted = true;
        	  $.ajax({
				 method: "GET",
				 url: "/play_maiormenor",
				 success: function(valor1){
					 gameValue1(valor1);
					 
				 }
				 })
				 
				 
        }
        function gameValue1(valor1){
        valorRecebido1 = valor1;
        
        $.ajax({
				 method: "GET",
				 url: "/play_maiormenorodds?oddconverter=" + valorRecebido1,
				 success: function(resultodds){
					 resultOdds(resultodds);
					
					 
				 }
				 })
        }
        
        let oddValues;
        
        function resultOdds(resultodds){
        oddValues = resultodds;
        	numberodd1.text = oddValues[0].toFixed(2)+"X";  
        
        	numberodd2.text = oddValues[1].toFixed(2)+"X";
        
        
        
        }
        let startBtnHover = false;
        function onButtonOverStartBtn(){
        startbtn.tint = 0x3F6DDB;
        startbtn.scale.set(0.22);
        }
        function onButtonOutStartBtn(){
        startbtn.tint = 0xFFFFFF;
          startbtn.scale.set(0.20);
        }
        
        function onButtonOverBet1(){
        isHoveringBet1 = true;
        }
          function onButtonOutBet1(){
        isHoveringBet1 = false;
        }
         function onButtonOverBet2(){
        isHoveringBet2 = true;
        }
          function onButtonOutBet2(){
        isHoveringBet2 = false;
        }
        

        let maiormenorbetType = 2;
        let  continueMaiorMenor = false;
        function onClickBet(){
        
        if(betValue!=0){
        
          $.ajax({
				 method: "GET",
				 url: "/play_maiormenor2",
				 success: function(valor2){
					 gameValue2(valor2);
					 
				 }
				 })
			
			continueMaiorMenor = true;
			canMakeChoice = false;
			}
        }
       
        function gameValue2(valor2){
        valorRecebido2 = valor2;
        
 
        
        }
        let isHoveringChoiceArrows = false;
        function onButtonOverChoiceArrows(){
        isHoveringChoiceArrows = true;
        
        }
         
         function onButtonOutChoiceArrows(){
        isHoveringChoiceArrows = false;
        
        }
        let isHoveringButtonBase = false;
        function onButtonOverButtonBase(){
        isHoveringButtonBase = true;
        
        }
        function onButtonOutButtonBase(){
        isHoveringButtonBase = false;
        
        }
        let hasClickedChoiceArrows = false;
        let rotationPace = 0;
        function onClickChoiceArrows(){
        
        rotationPace += 2.2;
        
        maiormenorbetType += 1;
        
        if(maiormenorbetType > 2){
        maiormenorbetType = 1;
        }
        console.log(maiormenorbetType);
        hasClickedChoiceArrows = true;
        }
        
        let numberodd1scale = 0;
        let numberodd2scale = 1;
        
        numberodd1.scale.set(0);
        numberodd2.scale.set(0);
           
        let startInfoTransition = false;
        let number1value ;
		 
	     //ASSOCIAR INTERAÇOES DOS ELEMENTOS COM AS FUNÇOES
		 sports.on('pointerover', onButtonOverSports).on('pointerout', onButtonOutSports);
		 buttonbase.on('pointerover', onButtonOverButtonBase).on('pointerout', onButtonOutButtonBase);
		
		 roleta.on('pointerover', onButtonOverRoleta).on('pointerout', onButtonOutRoleta);
		 roleta.on('pointerdown', onClickRoleta);
		 arrowbackground.on('pointerover', onButtonOverArrows).on('pointerout', onButtonOutArrows);
		 arrowbackground.on('pointerdown', onClickMaiorMenor);
		 spinbutton.on('pointerover', onButtonOverSpin).on('pointerout', onButtonOutSpin);
		 reddiamond.on('pointerover', onButtonOverRed).on('pointerout', onButtonOutRed);
		 blackdiamond.on('pointerover', onButtonOverBlack).on('pointerout', onButtonOutBlack);
		 greendiamond.on('pointerover', onButtonOverGreen).on('pointerout', onButtonOutGreen);
	
		 buttonbase.on('pointerdown', onClickBet);
		
		 choicearrows.on('pointerover', onButtonOverChoiceArrows).on('pointerout', onButtonOutChoiceArrows);
		 choicearrows.on('pointerdown', onClickChoiceArrows);
		 backbutton.on('pointerover', onButtonOverBack).on('pointerout', onButtonOutBack);
		 backbuttonmaiormenor.on('pointerover', onButtonOverBackMaiorMenor).on('pointerout', onButtonOutBackMaiorMenor);
		 botaomenu.on('pointerover', onButtonOverBotaoMenu).on('pointerout', onButtonOutBotaoMenu);
		 botaoagain.on('pointerover', onButtonOverAgain).on('pointerout', onButtonOutAgain);
		 botaomenu.on('pointerdown', onClickBotaoMenu);
		 botaoagain.on('pointerdown', onClickAgain);
		 backbutton.on('pointerdown', onClickBack);	
		 backbuttonmaiormenor.on('pointerdown', onClickBackMaiorMenor);	
		 spinbutton.on('pointerdown', onClickSpin);
		 reddiamond.on('pointerdown', onClickRedDiamond);
		 blackdiamond.on('pointerdown', onClickBlackDiamond);
		 greendiamond.on('pointerdown', onClickGreenDiamond);
		 addmoney.on('pointerdown', onClickaddmoney);
		 addmoney1.on('pointerdown', onClickaddmoney1);
		 subtractmoney.on('pointerdown', onClicksubtractmoney);
		 subtractmoney1.on('pointerdown', onClicksubtractmoney1);
		 startbtn.on('pointerover', onButtonOverStartBtn).on('pointerout', onButtonOutStartBtn);
		 startbtn.on('pointerdown', onClickStartGame);
		 let canStartIncreasing = false;
		 let canStartDecreasing = false;
		 let canMakeChoice = false;
		 let rotationAccel = 0;
		 let isAccel = false;
		 let isDeccel = false;
		 let timedecel = 1;
		 let changeclocker = 3;
		 let startbtnscale = 0.2;
		 let backscalemaiormenor = 0.1;
		 let choicearrowsscale = 0;
		 let tickscale = 0.05;
		 let gameTransition = false;
		 let transitiontimer = 0;
		if(startRotating === true){
		//					
		
			gsap.to(bigroleta, {rotation: 54.75, duration: 7, onComplete: function(){startRotating = false; }});
		}
	 	 //ANIMAÇAO DOS ELEMENTOS
	 	 app.ticker.add((delta) => {
	 		
	 		
	 		let value = betValue.toString() + "€";
	 		textbetvalue.text = value;
	 		textbetvalue1.text = value;
	 	 
		 roleta.rotation += rotationSpeed *delta;
		 
		 containerGames.scale.set(containerscale);
		 containerinfo.scale.set(containerinfoscale);
		
		 containerRoulette.scale.set(containerroulettescale);
		  containerMaiorMenor.scale.set(containermaiormenorscale);
	
	
	

		if(gameTransition == true){
			transitiontimer += 1 * delta;
			if(transitiontimer >= 30){
				firstshape.tint = 0xFFFE0A;
				canMakeChoice = true;
				gameTransition = false;
				transitiontimer = 0;
			}
		}
		
		if(canMakeChoice == true){
			buttonbase.scale.set(buttonbasescale);
			if(buttonbasescale < 0.08){
				buttonbasescale += 0.01 * delta;
			}
			if(buttonbasescale > 0.08){
				buttonbasescale = 0.08;
			}
			
			
			if(isHoveringButtonBase == true){
			tick.scale.set(tickscale);
			if(tickscale < 0.045){
				tickscale += 0.008 * delta;
			}
			if(tickscale > 0.045){
			tickscale = 0.045;
			}
			}
			
			if(isHoveringButtonBase == false){
			tick.scale.set(tickscale);
			if(tickscale > 0.03){
				tickscale -= 0.008 * delta;
			}
			if(tickscale < 0.03){
			tickscale = 0.03;
			}
			}
		
		
		if(maiormenorbetType == 2){
			numberodd1.scale.set(numberodd1scale);
			numberodd2.scale.set(numberodd2scale);
			if(numberodd1scale > 0){
				numberodd1scale -= 0.1 * delta;
			}
			if(numberodd1scale <=0){
			numberodd1scale = 0;
				if(numberodd2scale < 1){
					numberodd2scale += 0.1 * delta;
				}
				if(numberodd2scale > 1){
					numberodd2scale =1;
				}
			}
		}
		
		if(maiormenorbetType == 1){
			numberodd1.scale.set(numberodd1scale);
			numberodd2.scale.set(numberodd2scale);
			if(numberodd2scale > 0){
				numberodd2scale -= 0.1 * delta;
			}
			if(numberodd2scale <=0){
			numberodd2scale = 0;
				if(numberodd1scale < 1){
					numberodd1scale += 0.1 * delta;
				}
				if(numberodd1scale > 1){
					numberodd1scale =1;
				}
			}
		}
		}
		
		
		
		if(canMakeChoice == true){
		greater.scale.set(greaterscale);
		choicearrows.scale.set(choicearrowsscale);
		if(greaterscale < 0.6){
		greaterscale += 0.035 * delta;
		}
		if(greaterscale > 0.6){
		greaterscale = 0.6;
		}
		
			
				if(hasClickedChoiceArrows == true){
				
				if(choicearrows.rotation < rotationPace){
				rotationaccel += 0.04 * delta;
		    	choicearrows.rotation += rotationaccel ;
		    	}
		    	
		    	if(choicearrows.rotation >= rotationPace){
		    	hasClickedChoiceArrows = false;
		    	rotationaccel = 0;
		    	
		    	
		    	}
		    	}
		    	//if(hasClickedChoiceArrows == false){
		    	//if(choicearrows.rotation > rotationPace - 2.2){
		    		//choicearrows.rotation -= 0.3 * delta;
		    		
		    	//}
		    	
		if(isHoveringChoiceArrows == true){
		    	

		    	if(choicearrowsscale <0.6){
		    		choicearrowsscale += 0.005 * delta;
		    		
		    	}
		    	if(choicearrowsscale > 0.6){
		    		choicearrowsscale = 0.6;
		    	}
		    	
		    	
		    	
		    	
		     }
		    if(isHoveringChoiceArrows == false){
		    	
		 
		    	if(choicearrowsscale > 0.55){
		    		choicearrowsscale -= 0.005 * delta;
		    	}
		    	if(choicearrowsscale < 0.55){
		    		choicearrowsscale = 0.55;
		    	}
		    	
		    }
		    
		    }
		
		
		
		
		 
		 if(maiorMenorStarted == true){
		 startBtnHover = false;
		 startbtn.scale.set(startbtnscale);
		 if(startbtnscale > 0){
		 startbtnscale -=0.05 * delta;
		 }
		 if(startbtnscale <= 0){
		 startbtnscale = 0;
		 }
		 timedecel -= 0.0035 * delta;
		 changeclocker -= 1.5 * delta;
		
		 if(changeclocker <= 0){
		 
		 number1value = Math.floor(Math.random() * 10) + 1;
		 number1.text = number1value.toString();
		 changeclocker = 3;
		 }
		 if(timedecel <= 0){
			maiorMenorStarted = false;
			
			if(number1.text != valorRecebido1.toString()){
				number1.text = valorRecebido1.toString();
			
			}
			timedecel = 0.5;
			changeclocked = 3;
			gameTransition = true;
		 }
		 
		 }
		 if(continueMaiorMenor == true){
		 choicearrows.scale.set(choicearrowsscale);
		 console.log(choicearrowsscale);
				if(choicearrows.x < -15){
				choicearrows.x += 3 * delta;
				choicearrowsscale += 0.01 * delta;
				}
				if(choicearrows.x >= -15){
				choicearrows.x = -15;
				}
			
		 buttonbase.scale.set(buttonbasescale);
		 tick.scale.set(tickscale);
		 numberodd1.scale.set(numberodd1scale);
		 numberodd2.scale.set(numberodd2scale);
		 choicearrows.rotation += 0.2 * delta;
		 console.log("oupa");
		 if(buttonbasescale > 0){
		 buttonbasescale -= 0.005 * delta;
		 }
		 if(buttonbasescale < 0){
		 buttonbasescale = 0;
		 }
		 if(tickscale > 0){
		 
		 tickscale -= 0.005 * delta;
		 }
		 if(tickscale < 0){
		 tickscale = 0;
		 }
		 
		 if(numberodd1scale > 0){
		 
		 numberodd1scale -= 0.1 * delta;
		 }
		 if(numberodd1scale < 0){
		 numberodd1scale = 0;
		 }
		 
		 if(numberodd2scale > 0){
		
		 numberodd2scale -= 0.1 * delta;
		 }
		 if(numberodd1scale < 0){
		 numberodd2scale = 0;
		 }
		  
		 	
		 timedecel -= 0.0025 * delta;
		 changeclocker -= 1.5 * delta;
		
		 if(changeclocker <= 0){
		 
		 number2value = Math.floor(Math.random() * 12);
		 number2.text = number2value.toString();
		 changeclocker = 3;
		 }
		 if(timedecel <= 0){
			continueMaiorMenor = false;
			number2.text = valorRecebido2.toString();
			timedecel = 0.5;
			changeclocked = 3;
			
			if(valorRecebido1 > valorRecebido2 && maiormenorbetType == 1){
			secondshape.tint = 0xFE0000;
			}
			if(valorRecebido1 > valorRecebido2 && maiormenorbetType == 2){
			secondshape.tint = 0xFFFE0A;
			}
			
			if(valorRecebido1 < valorRecebido2 && maiormenorbetType == 1){
			secondshape.tint = 0xFFFE0A;
			}
			if(valorRecebido1 < valorRecebido2 && maiormenorbetType == 2){
			secondshape.tint = 0xFE0000;
			}
		 }
		 
		 }
		 
		 let startIncreasing = false;
		
		 if(maiormenorbetType == 1 && greater.rotation == 0){
		 	greater.scale.set(greaterscale);
		 		greaterscale -= 0.13 * delta;
		 		
		 		if(greaterscale <= 0){
		 		greaterscale = 0;
		 		greater.rotation = 3.14;
		 		startIncreasing = true;
		 		}
		 
		 }
		 
		 if(startIncreasing == true && maiormenorbetType == 1){
		 greaterscale += 0.13 * delta;
		 	if(greaterscale >= 0.6){
		 		greaterscale = 0.6;
		 		
		 		startIncreasing =false;
		 		}
		 
		 }
		 
		  if(maiormenorbetType == 2 && greater.rotation == 3.14){
		 	greater.scale.set(greaterscale);
		 		greaterscale -= 0.13 * delta;
		 		
		 		if(greaterscale <= 0){
		 		greaterscale = 0;
		 		greater.rotation = 0;
		 		startIncreasing = true;
		 		}
		 
		 }
		 
		 if(startIncreasing == true && maiormenorbetType == 2){
		 greaterscale += 0.13 * delta;
		 	if(greaterscale >= 0.6){
		 		greaterscale = 0.6;
		 		
		 		startIncreasing =false;
		 		}
		 
		 }
		 
		 
		 if(greater.rotation > 3.14){
		 greater.rotation = 3.14;
		 }
		  if(greater.rotation < 0){
		 greater.rotation = 0;
		 }
		 
		 
		 /*if(startRotating == true){
			 
			 
			 
			 if(rotationAccel < 0.2 && isAccel == true){
				 rotationAccel += 0.00102 * delta;
			 }
			 
			 if(rotationAccel >= 0.2){
				 isDeccel = true;
				 isAccel = false;
				 
			 }
			  
			 if(isDeccel == true){
				 rotationAccel -= 0.0005 * delta;
			 }
			 if(rotationAccel < 0){
				 rotationAccel = 0;
				 isDeccel = false;
				 startRotating = false;
				 //startInfoTransition = true;
			 }
			 
			 bigroleta.rotation += rotationAccel;
		 }*/
		 
		 if(startInfoTransition == true){
			 if(containerroulettescale > 0){
				 containerroulettescale -= 0.1 * delta;
			 }
			 if(containerroulettescale <= 0){
				 containerroulettescale = 0;
				 if(containerinfoscale < 1){
					 containerinfoscale += 0.1 * delta;
				 }
				 if(containerinfoscale > 1){
					 containerinfoscale = 1;
					 startInfoTransition = false;
				 }
			 }
			 
		 }
		 
		if(betType == 1){
			selectedbet.text = "2X"
			canStartIncreasing = true;
			
			
		}
		
		if(betType == 2){
			selectedbet.text = "2X"
			canStartIncreasing = true;
		}
		if(betType == 3){
			selectedbet.text = "37X"
			canStartIncreasing = true;
		}
		
		if (canStartIncreasing == true ){
			style1.fontSize = selectionvalue;
			selectionvalue += 3 * delta;
			if(selectionvalue > 20){
				selectionvalue = 20;
				canStartIncreasing = false;
			}
		}
		 
		
		
		 if(isHoveringPromo == true){
			 leftarrow.scale.set(arrowscale);
			 rightarrow.scale.set(arrowscale);
			 if(arrowscale <0.035){
				 arrowscale += 0.01* delta;
			 }
			 if(arrowscale >0.035){
				 arrowscale = 0.035;
			 }
		 }
		 if(isHoveringPromo == false){
			 leftarrow.scale.set(arrowscale);
			 rightarrow.scale.set(arrowscale);
			 if(arrowscale > 0){
				 arrowscale -= 0.01* delta;
			 }
			 if(arrowscale < 0){
				 arrowscale = 0;
			 }
		 }
		 
		 if(isHoveringRed == true){
			 reddiamond.scale.set(buttonscaleRed);
			 x2red.scale.set(texto2xscale1);
			 textred.scale.set(textoredscale);
			 
			 if(textoredscale > 0){
			 textoredscale -= 0.15 * delta;
			 }
			 if(textoredscale <= 0){
			 textoredscale = 0;
			 if(texto2xscale1 < 1){
			 texto2xscale1 += 0.15 * delta;
			 }
			 if(texto2xscale1 > 1){
			 texto2xscale1 = 1;
			 }
			 }
			 if(buttonscaleRed < 0.5){
				 buttonscaleRed += 0.005 * delta;
			 }
			 if(buttonscaleRed > 0.5){
				 buttonscaleRed = 0.5;
			 }
			 
			 if(reddiamond.rotation < 3.141592653594){
			 reddiamond.rotation += 0.2 * delta;
			 }
			 if(reddiamond.rotation > 3.141592653594){
				 reddiamond.rotation = 3.141592653594;
			 }
			 
		 }	
		 
		
		 
		 
		 
		 if(isHoveringRed == false){
			 
			 
			 reddiamond.scale.set(buttonscaleRed);
			  x2red.scale.set(texto2xscale1);
			 textred.scale.set(textoredscale);
			 
			 if(texto2xscale1 > 0){
			 texto2xscale1 -= 0.15 * delta;
			 }
			 if(texto2xscale1 <= 0){
			 texto2xscale1 = 0;
			 if(textoredscale < 1){
			 textoredscale += 0.15 * delta;
			 }
			 if(textoredscale > 1){
			 textoredscale = 1;
			 }
			 }
			

			 if(buttonscaleRed > 0.45){
				 buttonscaleRed -= 0.005 * delta;
			 }
			 if(buttonscaleRed < 0.45){
				 buttonscaleRed = 0.45;
			 }
			 
			 if(reddiamond.rotation > 0){
			 reddiamond.rotation -= 0.2 * delta;
			 }
			 if(reddiamond.rotation < 0){
				 reddiamond.rotation = 0;
			 }
			 
			 
		 }
		 if(isHoveringBlack == true){
			 blackdiamond.scale.set(buttonscaleBlack);
			  x2black.scale.set(texto2xscale2);
			 textblack.scale.set(textoblackscale);
			 
			 if(textoblackscale > 0){
			 textoblackscale -= 0.15 * delta;
			 }
			 if(textoblackscale <= 0){
			 textoblackscale = 0;
			 if(texto2xscale2 < 1){
			 texto2xscale2 += 0.15 * delta;
			 }
			 if(texto2xscale2 > 1){
			 texto2xscale2 = 1;
			 }
			 }
             
			 
			 
			 if(buttonscaleBlack < 0.5){
				 buttonscaleBlack += 0.005 * delta;
			 }
			 if(buttonscaleBlack > 0.5){
				 buttonscaleBlack = 0.5;
			 }
			 
			 if(blackdiamond.rotation < 3.141592653594){
				 blackdiamond.rotation += 0.2 * delta;
			 }
			 if(blackdiamond.rotation > 3.141592653594){
				 blackdiamond.rotation = 3.141592653594;
			 }
		 }
		 if(isHoveringBlack == false){
			 blackdiamond.scale.set(buttonscaleBlack);
			 x2black.scale.set(texto2xscale2);
			 textblack.scale.set(textoblackscale);
			 
			 if(texto2xscale2 > 0){
			 texto2xscale2 -= 0.15 * delta;
			 }
			 if(texto2xscale2 <= 0){
			 texto2xscale2 = 0;
			 if(textoblackscale < 1){
			 textoblackscale += 0.15 * delta;
			 }
			 if(textoblackscale > 1){
			 textoblackscale = 1;
			 }
			 }
			 
			 if(buttonscaleBlack > 0.45){
				 buttonscaleBlack -= 0.005 * delta;
			 }
			 if(buttonscaleBlack < 0.45){
				 buttonscaleBlack = 0.45;
			 }
			 
			 if(blackdiamond.rotation > 0){
				 blackdiamond.rotation -= 0.2 * delta;
			 }
			 if(blackdiamond.rotation < 0){
				 blackdiamond.rotation = 0;
			 }
			 
			 
		 }
		 if(isHoveringGreen == true){
			 greendiamond.scale.set(buttonscaleGreen);
			   x37green.scale.set(texto37xscale);
			 textgreen.scale.set(textogreenscale);
			 
			 if(textogreenscale > 0){
			 textogreenscale -= 0.15 * delta;
			 }
			 if(textogreenscale <= 0){
			 textogreenscale = 0;
			 if(texto37xscale < 1){
			 texto37xscale += 0.15 * delta;
			 }
			 if(texto37xscale > 1){
			 texto37xscale = 1;
			 }
			 }
             
        	
			 if(buttonscaleGreen < 0.5){
				 buttonscaleGreen += 0.005 * delta;
			 }
			 if(buttonscaleGreen > 0.5){
				 buttonscaleGreen = 0.5;
			 }
			 
			 if(greendiamond.rotation < 3.141592653594){
				 greendiamond.rotation += 0.2 * delta;
			 }
			 if(greendiamond.rotation > 3.141592653594){
				 greendiamond.rotation = 3.141592653594;
			 }
		 }
		 if(isHoveringGreen == false){
			 
			 greendiamond.scale.set(buttonscaleGreen);
			   x37green.scale.set(texto37xscale);
			 textgreen.scale.set(textogreenscale);
			 
			 if(texto37xscale > 0){
			 texto37xscale -= 0.15 * delta;
			 }
			 if(texto37xscale <= 0){
			 texto37xscale = 0;
			 if(textogreenscale < 1){
			 textogreenscale += 0.15 * delta;
			 }
			 if(textogreenscale > 1){
			 textogreenscale = 1;
			 }
			 }
			 
			 
			 if(buttonscaleGreen > 0.45){
				 buttonscaleGreen -= 0.005 * delta;
			 }
			 if(buttonscaleGreen < 0.45){
				 buttonscaleGreen = 0.45;
			 }
			 
			 if(greendiamond.rotation > 0){
				 greendiamond.rotation -= 0.2 * delta;
			 }
			 if(greendiamond.rotation < 0){
				 greendiamond.rotation = 0;
			 }
			 
			 
		 }
		 
		
		 
		 
		if(isHoveringBack == true){
			backbutton.scale.set(backscale)
			
			if(backscale < 0.1){
				backscale += 0.01 * delta;
			}
			if(backscale > 0.1){
				backscale = 0.1;
			}
			
		}
		if(isHoveringBack == false){
			backbutton.scale.set(backscale)
			if(backscale > 0.08){
				backscale -= 0.01 * delta;
			}
			if(backscale < 0.08){
				backscale = 0.08;
			}
			
		}
		if(isHoveringBackMaiorMenor == true){
			backbuttonmaiormenor.scale.set(backscalemaiormenor)
			
			if(backscalemaiormenor < 0.1){
				backscalemaiormenor += 0.01 * delta;
			}
			if(backscalemaiormenor > 0.1){
				backscalemaiormenor = 0.1;
			}
			
		}
		if(isHoveringBackMaiorMenor == false){
			backbuttonmaiormenor.scale.set(backscalemaiormenor)
			if(backscalemaiormenor > 0.08){
				backscalemaiormenor -= 0.01 * delta;
			}
			if(backscalemaiormenor < 0.08){
				backscalemaiormenor = 0.08;
			}
			
		}
		
		if(hasClickedBack == true){
			if(containerroulettescale > 0){
				containerroulettescale -= 0.1 * delta;
			}
			if(containerroulettescale <= 0){
				containerroulettescale = 0;
				if(containerscale < 1){
					containerscale += 0.1 * delta;
					
				}
				if(containerscale > 1){
					containerscale = 1;
					hasClickedBack = false;
				}
				
			}
		}
		if(hasClickedBackMaiorMenor == true){
			if(containermaiormenorscale > 0){
				containermaiormenorscale -= 0.1 * delta;
			}
			if(containermaiormenorscale <= 0){
				containermaiormenorscale = 0;
				if(containerscale < 1){
					containerscale += 0.1 * delta;
					
				}
				if(containerscale > 1){
					containerscale = 1;
					hasClickedBackMaiorMenor = false;
				}
				
			}
		}
		if(hasClickedMenu == true){
			if(containerinfoscale > 0){
				containerinfoscale -= 0.1 * delta;
			}
			if(containerinfoscale <= 0){
				containerinfoscale = 0;
				if(containerscale < 1){
					containerscale += 0.1 * delta;
					
				}
				if(containerscale > 1){
					containerscale = 1;
					hasClickedMenu = false;
				}
				
			}
		}
		if(hasClickedAgain == true){
			if(containerinfoscale > 0){
				containerinfoscale -= 0.1 * delta;
			}
			if(containerinfoscale <= 0){
				containerinfoscale = 0;
				if(containerroulettescale < 1){
					containerroulettescale += 0.1 * delta;
					
				}
				if(containerroulettescale > 1){
					containerroulettescale = 1;
					hasClickedAgain = false;
				}
				
			}
		}
		
		
		 
		 
		 if(hasClickedRoleta == true){
			 
			if(containerscale > 0){
				containerscale -= 0.1 * delta;
				
			}
			if (containerscale <= 0){
				containerscale = 0;
				if(containerroulettescale < 1){
					containerroulettescale += 0.1 * delta;
				}
				if(containerroulettescale >= 1){
					containerroulettescale = 1;
					hasClickedRoleta = false;
				}
				
				
			}
			 
		 }
		  if(hasClickedMaiorMenor == true){
			 
			if(containerscale > 0){
				containerscale -= 0.1 * delta;
				
			}
			if (containerscale <= 0){
				containerscale = 0;
				if(containermaiormenorscale < 1){
					containermaiormenorscale += 0.1 * delta;
				}
				if(containermaiormenorscale >= 1){
					containermaiormenorscale = 1;
					hasClickedMaiorMenor = false;
				}
				
				
			}
			 
		 }
		 
		
		
		 if(isHoveringPlus == true){
			 if(signscale < 0.05){
				 signscale += 0.008 * delta;
				 
			 }
		 }
		 if(isHoveringPlus == false){
			 if(signscale > 0.04){
				 signscale -= 0.008 * delta;
			 }
		 }
		 
		    if (isHoveringRoleta == true){
		    
		    	 
		    	textoroleta.scale.set(textoscale2);
		    	helpballoonroleta.scale.set(helpscale1);
		    	if(helpscale1 < 0.35){
		    		helpscale1 += 0.045* delta;
		    	}
		    	if(helpscale1 > 0.35){
		    		helpscale1 = 0.35;
		    	}
		    	if(textoscale2 < 0.7){
		    		
		    		textoscale2 += 0.012 * delta;
		    	}
		    	if(textoscale2 > 0.7){
		    		textoscale2 = 0.7;
		    	}
		    	
		    	if(rotationSpeed < 0.4){
		    	rotationSpeed += 0.012 *delta;
		    	}
		    	if(hoverSize <= 0.48){
		    		hoverSize += 0.02 *delta;
		    		}
		    }
		    if(isHoveringRoleta == false){
		    	helpballoonroleta.scale.set(helpscale1);
		    	if(helpscale1 > 0){
		    		helpscale1 -= 0.04 * delta;
		    	}
		    	if(helpscale1 < 0){
		    		helpscale1 = 0;
		    	}
		    	textoroleta.scale.set(textoscale2);
		    	if(textoscale2  > 0.6){
		    		textoscale2 -= 0.012 * delta;
		    	}
		    	if(textoscale2 < 0.6){
		    		textoscale2 = 0.6;
		    	}
		    	
		    	if(rotationSpeed > 0){
			    	rotationSpeed -= 0.008 *delta;
			    	}
		    	if(rotationSpeed <=0){
		    		rotationSpeed = 0;
		    	}
		    	if(hoverSize >=0.4501){
		    		hoverSize -=0.02 *delta;
		    	}
		    }
		   
		    
		    if(isHoveringArrow == true){
		    	helpballoonmaioroumenor.scale.set(helpscale3);
		    	if(helpscale3 < 0.35){
		    		helpscale3 += 0.045 * delta;
		    	}
		    	if(helpscale3 > 0.35){
		    		helpscale3 = 0.35;
		    	}
		    	textomaioroumenor.scale.set(textoscale1);
		    	if(textoscale1 < 0.7){
		    		textoscale1 += 0.012 * delta;
		    	}
		    	if(textoscale1 > 0.7){
		    		textoscale1 = 0.7;
		    	}
		    	
		    	if(upArrow.y > - 130){
		    		
		    		upArrow.y -= 5 * delta;
		    	}
		    	if(upArrow.y < -130){
		    		upArrow.y = -130;
		    	}
		    	if(downArrow.y < - 100){
		    		downArrow.y += 5* delta;
		    	}
		    	if(downArrow.y > -100){
		    		downArrow.y = -100;
		    	}
		    	
		    }
		    if(isHoveringArrow == false){
		    	helpballoonmaioroumenor.scale.set(helpscale3);
		    	
		    	if(helpscale3 > 0){
		    		helpscale3 -= 0.045 * delta;
		    	}
		    	if(helpscale3 < 0){
		    		helpscale3 = 0;
		    	}
		    	textomaioroumenor.scale.set(textoscale1);
		    	if(textoscale1 > 0.6){
		    		textoscale1 -= 0.012 * delta;
		    	}
		    	if(textoscale1 < 0.6){
		    		textoscale1 = 0.6;
		    	}
		    	
		    	if(upArrow.y < -115){
		    		
		    		upArrow.y += 5 * delta;
		    	}
		    	if(upArrow.y > -115){
		    		upArrow.y = -115;
		    	}
		    	if(downArrow.y > -115){
		    		downArrow.y -= 5* delta;
		    	}
		    	if(downArrow.y < -115){
		    		downArrow.y = -115;
		    	}
		    	
		    	
		    	
		    	
		    }
		    if(isHoveringSports == true){
		    	sports.scale.set(sportscale);
		    	
		    	helpballoondesporto.scale.set(helpscale2);
		    	if(helpscale2 < 0.35){
		    		helpscale2 += 0.045*delta;
		    	}
		    	if(helpscale2 > 0.35){
		    		helpscale2 = 0.35;
		    	}
		    	textodesporto.scale.set(textoscale3);
		    	if(textoscale3 < 0.7){
		    		textoscale3 += 0.012 * delta;
		    	}
		    	if(textoscale3 > 0.7){
		    		textoscale3 = 0.7;
		    	}
		    	
		    	
		    	if(sportscale <0.09 && sports.rotation < 2){
		    		sportscale += 0.005 * delta;
		    		sports.rotation += 0.1 * delta;
		    	}
		    	if(sportscale > 0.09){
		    		sportscale = 0.09;
		    	}
		     }
		    if(isHoveringSports == false){
		    	sports.scale.set(sportscale);
		    	helpballoondesporto.scale.set(helpscale2);
		    	if(helpscale2 > 0){
		    		helpscale2 -= 0.045 * delta;
		    	}
		    	if(helpscale2 < 0){
		    		helpscale2 = 0;
		    	}
		    	textodesporto.scale.set(textoscale3);
		    	if(textoscale3 > 0.6){
		    		textoscale3 -= 0.012 * delta;
		    	}
		    	if(textoscale3 < 0.6){
		    		textoscale3 = 0.6;
		    	}
		    	
		    	if(sportscale > 0.068){
		    		sportscale -= 0.005 * delta;
		    	}
		    	if(sportscale < 0.068){
		    		sportscale = 0.068;
		    	}
		    	
		    if(sports.rotation > 0){
		    	sports.rotation -= 0.1 *delta;
		    	if(sports.rotation < 0) {
		    		sports.rotation = 0;
		    	}
		    	
		    }
		    
		    }
		    	
		    
		    
		    
		});
	 
 }