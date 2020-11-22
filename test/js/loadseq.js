//jload

//no promises for backward compatibility

console.log("loadseq ---- loading main script...");


const loadseq = function(JSsarray) {
	
	script = document.createElement('script');
	script.src = JSsarray.shift();
	
	if (typeof JSsarray !== 'undefined' && JSsarray.length > 0) {
		
		script.addEventListener('load', function() {

			loadseq(JSsarray);
		
		});
 
	}
	else{
		
		script.addEventListener('load', function() {

			console.log("loadseq ---- DONE");
		
		});		
		
		
	}
 
	document.head.appendChild(script);
 
    };
	
console.log("loadseq ---- ready to work");
	

        

        

        