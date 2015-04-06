var dataset=[8,48,14,31,23];

svg=d3.select("body").append("svg").attr({
	width: window.innerWidth,
	height:window.innerHeight
});

svg.selectAll("rect")
	.data(d3.range(6))
	.enter()
	.append("rect")
	.attr({
		x:function(d,i){return i*101;},
		y:100,
		width:100,
		height:100,
		fill:function(d,i){
			if(i%2==0){
				return "orange";
			}
			else{
				return "green";
			}
		}
	});