function Quickfire(num){
	var newNum = 0;
	if(typeof num === 'number'){
	for(var i =1; i<= num; i++){
	    newNum += Math.sqrt(i);
	}
	}else{
		throw new Error('Error.  Input must be a number');
	}
	return newNum;

}


