'use strict';
var fs       = require('fs');
var data=fs.readFileSync('input.txt', 'utf8');
var input=JSON.parse(data);

console.log("init");

var sum = 0;
var histo=[];
var repe=0;
var found=false;
while(!found){
	input.forEach(function(e){
		//console.log(" -> " + e);
		sum+=e;
		if(histo.includes(sum)&&!found){
			found=true;
			repe=sum;
		}
		histo.push(sum);
		//console.log("        " + sum + " - [" + histo + "]");
	});
}
console.log("resultat final: " + sum);
console.log("repe: " + repe); 
console.log("fi");