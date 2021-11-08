const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// details only from the Vandenberg Air Force Base

d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// retrieve the full_name of the Vandenberg Air Force Base

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// access the latitude of the Vandenberg Airforce Base

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// SkillDrill 12.3.1
// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.

d3.json(url).then(function(data){
    lat = data.location.map(val => val.latitude);
    console.log(lat);
});


    