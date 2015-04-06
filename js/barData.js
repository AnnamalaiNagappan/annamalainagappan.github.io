var dataset=[8,48,14,31,23];

svg=d3.select("body").append("svg").attr({
	width: window.innerWidth,
	height:window.innerHeight
});

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr({
		 x:function(d,i){ return i*101;},
		 y:function(d,i){ return 400-(d*i);},
		 width:100,
		 height:function(d){ return d*5;},
		 fill:"orange"
});





