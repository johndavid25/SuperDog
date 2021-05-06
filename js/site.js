var events = [{
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 240000,
        date: "06/01/2017",
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 250000,
        date: "06/01/2018",
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 257000,
        date: "06/01/2019",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 130000,
        date: "06/01/2017",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 140000,
        date: "06/01/2018",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 150000,
        date: "06/01/2019",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 40000,
        date: "06/01/2017",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 45000,
        date: "06/01/2018",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 50000,
        date: "06/01/2019",
    },
];

//the default display is all events
var filteredEvents = events;

//build a dropdown of specific cities 
function buildDropDown() {
    let eventDD = document.getElementById("eventDropDown");
    eventDD.innerHTML = "";

    let template = document.getElementById("cityDD-template");

    //Store Events in local storage
    
    //Get the distinct list
    let distinctEvents = [...new Set(events.map((event) => event.city))];

    let ddItemNode = document.importNode(template.content, true);
    let ddItem = ddItemNode.querySelector("a");

    ddItem.setAttribute("data-string", "All");
    ddItem.textContent = "All";
    eventDD.appendChild(ddItem);

    for (let index = 0; index < distinctEvents.length; index++) {      
        
        ddItemNode = document.importNode(template.content, true);
        ddItem = ddItemNode.querySelector("a");
        ddItem.setAttribute("data-string", distinctEvents[index]);
        ddItem.textContent = distinctEvents[index];
        eventDD.appendChild(ddItem);
    }
}

function getEvents(element) {
    let city = element.getAttribute("data-string"); 
    document.getElementById("statsHeader").innerHTML = `Stats For ${city} Events`

    if(city != "All"){ 
        filteredEvents = events.filter(function(item) {
            if (item.city == city) {
                return item;
            }
        })
    }
}