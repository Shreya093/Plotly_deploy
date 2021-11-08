// console.log(cityGrowths);

// Sort the cities by population growth
var largCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();


// top seven cities by population growth
var topCities = largCities.slice(0,7);


// Create Arrays of top 7 City Names and Growth Figures
var top7Cities = topCities.map(city => city.City);
var top7growth = topCities.map(city => parseInt(city.Increase_from_2016));

// Create a Bar Chart with the Arrays

var trace = {
    x : top7Cities,
    y : top7growth,
    type : "bar"

};

var data = [trace];

var layout = {
    title : "City Growths",
    xaxis : {title : "Cities"},
    yaxis : {title : "Growth"}
};

Plotly.newPlot("bar-plot", data, layout);