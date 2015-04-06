var data=[4,6,1,8,5,12];

svg=d3.select("body").append("svg").attr({
	width: window.innerWidth,
	height:window.innerHeight
});


var heightScale=d3.scale.linear()
				.domain([d3.min(data),d3.max(data)])
				.range([1,window.innerHeight-40])

var colorScale=d3.scale.linear()
				.domain([d3.min(data),d3.max(data)])
				.range(["red","green"])

svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr({
		x:function(d,i){return i*101;},
		y:100,
		width:100,
		height:heightScale,
		fill:colorScale
	});