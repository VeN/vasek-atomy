var Draw = {
	CELL: 60,
	LINE: 2,
	ATOM: 7,
	_context: null
};

Draw.init = function(){
	var canvas = document.createElement("canvas");

	this.CELL += this.LINE;

	var size = Game.SIZE * this.CELL + this.LINE;
	canvas.width = size;
	canvas.height = size;

	this._context = canvas.getContext("2d")
	this._context.lineWidth = this.LINE;

	document.body.appendChild(canvas);

	this.all();
};

Draw.all = function(){
	var html = "<table>";

	for (var i = 0 ; i < Board.length ; i++) {
		html += "<tr>";
		for (var j = 0; j < Board[i].length ; j++) {
			console.log('writing TD');
			html += "<td>";
			html += Draw.atoms(Board[j][i]);
			html += "</td>";
		};
		html += "</tr>";
	}
	html += "</table>";

	document.body.innerHTML = html;

};

Draw.atoms = function(count){
	var result = "";

	for (var i = 0; i < count; i++) {
		result += "O";
	};

	return result;
};

Draw.getPosition = function (node){
	if (node.nodeName!= "TD") {return null;}

	var x = 0;
	while (node.previousSibling){
		x++;
		node = node.previousSibling;
	}

	var row = node.parentNode;
	var y = 0;
	while (row.previousSibling){
		y++;
		row = row.previousSibling;
	}

	return [x , y];
};