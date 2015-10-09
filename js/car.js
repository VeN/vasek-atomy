var Auto = {};


Auto.start = function() {
	Alternator.start();
	Motor.start();
	Chladic.start();
};

Auto.stop = function() {
	Chladic.start();
	Motor.start();
	Alternator.start();
};

Auto.zatrub = function() {
	Klakson.trub(1000);
};

Auto.jakouMasBarvu = function() {
	return "Mam tuto barvu " + Auto.barva;
}

Auto.barva = "cervena";
Auto.pocetKol = 4;

console.log(Auto.jakouMasBarvu());
console.log(Auto.barva);

