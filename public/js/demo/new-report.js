var reportOps = document.getElementById("new-report-dropdown-ops");
var reportSLA = document.getElementById("new-report-dropdown-sla");
var reportRental = document.getElementById("new-report-dropdown-rental");
var reportGap = document.getElementById("new-report-dropdown-gap");
var reportRoute = document.getElementById("new-report-dropdown-route");
var reportVolume = document.getElementById("new-report-dropdown-volume");
var reportProductivity = document.getElementById("new-report-dropdown-productivty");
var reportService = document.getElementById("new-report-dropdown-service");
var reportStaffing = document.getElementById("new-report-dropdown-staffing");
var reportEmployee = document.getElementById("new-report-dropdown-employee");
var reportStops = document.getElementById("new-report-dropdown-stops");

var reportDropdown = document.getElementById("dropdownMenuLink");

var formElements = document.getElementsByClassName("report-form");

var formElementIds = {
    manager: "inputManager",
    division: "inputDivision",
    region: "inputRegion",
    district: "inputDistrict",
    location: "inputLocation",
    start: "inputStartDate",
    end: "inputEndDate",
    route: "inputRoute",
    service: "inputService",
    city: "inputCity",
    country: "inputCountry",
    state: "inputState",
    zip: "inputZip"
};

disableInputs = function(myargs){
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        
        // element.setAttribute('disabled', true);

        // if(arguments.includes(element.id)){
        if(myargs.includes(element.id)){
            element.setAttribute('disabled', true);
        } else {
            element.removeAttribute('disabled');
        }

    }
}

reportSLA.addEventListener("click", function(){
    disableInputs([formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);

reportOps.addEventListener("click", function(){
    disableInputs([formElementIds.manager, formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);

reportRental.addEventListener("click", function(){
    disableInputs([formElementIds.location, formElementIds.manager, formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);



// formElementIds.manager, formElementIds.service, formElementIds.country, formElementIds.city