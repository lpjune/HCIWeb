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
    start: "inputStartDate",
    end: "inputEndDate",
    route: "inputRoute",
    service: "inputService",
    city: "inputCity",
    state: "inputState",
    zip: "inputZip"
};



reportOps.addEventListener("click", function () {
    reportDropdown.innerText = reportOps.innerText;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        
        if(element.id == formElementIds.manager || element.id == formElementIds.service || element.id == formElementIds.country || element.id == formElementIds.city){
            element.setAttribute('disabled', true);
        } else {
            element.removeAttribute('disabled');
        }

    }

}, false);




