var reportAll = document.getElementById("new-report-dropdown-all");
var reportOps = document.getElementById("new-report-dropdown-ops");
var reportSLA = document.getElementById("new-report-dropdown-sla");
var reportRental = document.getElementById("new-report-dropdown-rental");
var reportGap = document.getElementById("new-report-dropdown-gap");
var reportRouteVariance = document.getElementById("new-report-dropdown-variance");
var reportRoutePerformance = document.getElementById("new-report-dropdown-performance");
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

enableInputs = function(myargs){
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        
        // element.setAttribute('disabled', true);

        // if(arguments.includes(element.id)){
        if(myargs.includes(element.id)){
            element.removeAttribute('disabled');
        } else {
            element.setAttribute('disabled', true);
        }

    }
}

reportAll.addEventListener("click", function(){
    reportDropdown.innerText = reportAll.innerText;
    disableInputs([]);
}, false);

reportSLA.addEventListener("click", function(){
    reportDropdown.innerText = reportSLA.innerText;
    disableInputs([formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);

reportOps.addEventListener("click", function(){
    reportDropdown.innerText = reportOps.innerText;
    disableInputs([formElementIds.manager, formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);

reportRental.addEventListener("click", function(){
    reportDropdown.innerText = reportRental.innerText;
    disableInputs([formElementIds.location, formElementIds.manager, formElementIds.route, formElementIds.service, formElementIds.country, formElementIds.city, formElementIds.state, formElementIds.zip]);
}, false);

reportGap.addEventListener("click", function(){
    reportDropdown.innerText = reportGap.innerText;
    enableInputs([formElementIds.location]);
}, false);

reportRouteVariance.addEventListener("click", function(){
    reportDropdown.innerText = reportRouteVariance.innerText;
    enableInputs([formElementIds.location, formElementIds.start, formElementIds.end, formElementIds.route]);
}, false);

reportRoutePerformance.addEventListener("click", function(){
    reportDropdown.innerText = reportRoutePerformance.innerText;
    enableInputs([formElementIds.location, formElementIds.start, formElementIds.end, formElementIds.route]);
}, false);

reportVolume.addEventListener("click", function(){
    reportDropdown.innerText = reportVolume.innerText;
    enableInputs([formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.location, formElementIds.route]);
}, false);

reportProductivity.addEventListener("click", function(){
    reportDropdown.innerText = reportProductivity.innerText;
    disableInputs([formElementIds.route, formElementIds.service]);
}, false);

reportService.addEventListener("click", function(){
    reportDropdown.innerText = reportService.innerText;
    enableInputs([formElementIds.route, formElementIds.service]);
}, false);

reportStaffing.addEventListener("click", function(){
    reportDropdown.innerText = reportStaffing.innerText;
    enableInputs([formElementIds.location, formElementIds.manager]);
}, false);

reportEmployee.addEventListener("click", function(){
    reportDropdown.innerText = reportEmployee.innerText;
    enableInputs([formElementIds.location, formElementIds.manager]);
}, false);

reportStops.addEventListener("click", function(){
    reportDropdown.innerText = reportStops.innerText;
    enableInputs([formElementIds.location, formElementIds.manager, formElementIds.route]);
}, false);



// formElementIds.manager, formElementIds.service, formElementIds.country, formElementIds.city