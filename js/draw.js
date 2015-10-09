var Draw = {};

Draw.all = function(){
	var html = "<table>";

	for (var i = 0 ; i < Board.lenght ; i++) {
		html += "<tr>";
		for (var j = 0; j < Board[i].lenght ; j++) {
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




	return result;
};