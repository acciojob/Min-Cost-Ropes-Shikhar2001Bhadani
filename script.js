function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
	var newarr = arr.sort((a,b)=>a-b);
	while(newarr.length>1){
		let first = newarr.shift();
		let second =  newarr.shift();
		let sum = first+second;
		cost += sum;
		newarr.push(sum);
		newarr.sort((a,b)=>a-b);
	}
	return cost;
  
}

module.exports=mincost;
