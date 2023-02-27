import d3, {select, scaleLinear, axisBottom, axisLeft, line, curveCardinal} from "d3"
import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        InitChart()
    })

    function InitChart() {
        var data = [{
            "sale": "202",
            "year": "2000"
        }, {
            "sale": "215",
            "year": "2002"
        }, {
            "sale": "179",
            "year": "2004"
        }, {
            "sale": "199",
            "year": "2006"
        }, {
            "sale": "134",
            "year": "2008"
        }, {
            "sale": "176",
            "year": "2010"
        }];


        var data2 = [{
            "sale": "152",
            "year": "2000"
        }, {
            "sale": "189",
            "year": "2002"
        }, {
            "sale": "179",
            "year": "2004"
        }, {
            "sale": "199",
            "year": "2006"
        }, {
            "sale": "134",
            "year": "2008"
        }, {
            "sale": "176",
            "year": "2010"
        }];



        var vis = select("#visualisation"),
            WIDTH = 1000,
            HEIGHT = 500,
            MARGINS = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
            },
            
            inner_height = HEIGHT - MARGINS.top - MARGINS.bottom,

            xScale = scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2010]),

            yScale = scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),

            xAxis = axisBottom()
            .scale(xScale),

            yAxis = axisLeft()
            .scale(yScale)


            const xAxisGrid = axisBottom(xScale).tickSize(-inner_height).tickFormat('').ticks(10)

            vis.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                .call(xAxis);

            vis.append("g")
                .attr("class", "x axis-grid")
                .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                .call(xAxisGrid)

            vis.append("svg:g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);

            var lineGen = line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.sale);
                }).curve(curveCardinal)

            vis.append('svg:path')
                .attr('d', lineGen(data))
                .attr('stroke', 'green')
                .attr('stroke-width', 2)
                .attr('fill', 'none');

            vis.append('svg:path')
                .attr('d', lineGen(data2))
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                .attr('fill', 'none');

            



    }
   
    return (
      <div>
          <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet" />
          <link href="http://getbootstrap.com/examples/justified-nav/justified-nav.css" rel="stylesheet" />
         
        <div className="container">
            <div className="jumbotron">

            <svg id="visualisation" width="1000" height="500"></svg>
            </div>
        </div>
      </div>
    )
  }
  
  
  export default Index