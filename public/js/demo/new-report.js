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

var reportInputs = {
    sla: [formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.location, formElementIds.manager, formElementIds.start, formElementIds.end],
    ops: [formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.location, formElementIds.start, formElementIds.end],
    rental: [formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.start, formElementIds.end],
    gap: [formElementIds.location],
    variance: [formElementIds.location, formElementIds.start, formElementIds.end, formElementIds.route],
    performance: [formElementIds.location, formElementIds.start, formElementIds.end, formElementIds.route],
    volume: [formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.location, formElementIds.route],
    productivity: [formElementIds.division, formElementIds.region, formElementIds.district, formElementIds.location, formElementIds.manager, formElementIds.start, formElementIds.end, formElementIds.city, formElementIds.state, formElementIds.zip],
    service: [formElementIds.route, formElementIds.service],
    staffing: [formElementIds.location, formElementIds.manager],
    employee: [formElementIds.location, formElementIds.manager],
    stops: [formElementIds.location, formElementIds.manager, formElementIds.route]
}


function ReportType(id, inputs){
    this.id = id;
    this.element = document.getElementById(id);
    this.text = this.element.innerText;
    this.inputs = inputs;
}

let reportAll = new ReportType("new-report-dropdown-ops", reportInputs.sla);
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


var recipientToggleYes = document.getElementById("input-radio-has-recipient");
var recipientToggleNo = document.getElementById("input-radio-no-recipient");
var recipientInput = document.getElementById("inputRecipient");

disableInputs = function(myargs){
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

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
        
        // if(arguments.includes(element.id)){
        if(myargs.includes(element.id)){
            element.removeAttribute('disabled');
        } else {
            element.setAttribute('disabled', true);
        }

    }
}

// reportAll.element.addEventListener("click", function(){
//     reportDropdown.innerText = reportAll.innerText;
//     disableInputs([]);
// }, false);

reportSLA.addEventListener("click", function(){
    reportDropdown.innerText = reportSLA.innerText;
    enableInputs(reportInputs.sla);
}, false);

reportOps.addEventListener("click", function(){
    reportDropdown.innerText = reportOps.innerText;
    enableInputs(reportInputs.ops);
}, false);

reportRental.addEventListener("click", function(){
    reportDropdown.innerText = reportRental.innerText;
    enableInputs(reportInputs.rental);
}, false);

reportGap.addEventListener("click", function(){
    reportDropdown.innerText = reportGap.innerText;
    enableInputs(reportInputs.gap);
}, false);

reportRouteVariance.addEventListener("click", function(){
    reportDropdown.innerText = reportRouteVariance.innerText;
    enableInputs(reportInputs.variance);
}, false);

reportRoutePerformance.addEventListener("click", function(){
    reportDropdown.innerText = reportRoutePerformance.innerText;
    enableInputs(reportInputs.performance);
}, false);

reportVolume.addEventListener("click", function(){
    reportDropdown.innerText = reportVolume.innerText;
    enableInputs(reportInputs.volume);
}, false);

reportProductivity.addEventListener("click", function(){
    reportDropdown.innerText = reportProductivity.innerText;
    enableInputs(reportInputs.productivity);
}, false);

reportService.addEventListener("click", function(){
    reportDropdown.innerText = reportService.innerText;
    enableInputs(reportInputs.service);
}, false);

reportStaffing.addEventListener("click", function(){
    reportDropdown.innerText = reportStaffing.innerText;
    enableInputs(reportInputs.staffing);
}, false);

reportEmployee.addEventListener("click", function(){
    reportDropdown.innerText = reportEmployee.innerText;
    enableInputs(reportInputs.employee);
}, false);

reportStops.addEventListener("click", function(){
    reportDropdown.innerText = reportStops.innerText;
    enableInputs(reportInputs.stops);
}, false);

recipientToggleYes.addEventListener("click", function(){
    recipientInput.removeAttribute('disabled');
}, false); 

recipientToggleNo.addEventListener("click", function(){
    recipientInput.setAttribute('disabled', true);
}, false); 

var reports = document.getElementsByClassName("previous-report");
var selectedReport = document.getElementById("new-report-selected");
var selectedReportText = document.getElementById("new-report-selected-text");
var importButton = document.getElementById("new-report-import");
var cancelButton = document.getElementById("new-report-cancel");

var cancelImport = function(){
    for (let i = 0; i < reports.length; i++) {
        const element = reports[i];
        element.removeAttribute('hidden');
        
        selectedReport.setAttribute('hidden',true);
        
        importButton.setAttribute('disabled',true);
        cancelButton.setAttribute('disabled',true);
    }
}

for (let i = 0; i < reports.length; i++) {
    const element = reports[i];
    
    element.addEventListener('click', function(){
        cancelImport();
        selectedReportText.innerText = element.innerText;

        element.setAttribute('hidden', true);

        selectedReport.removeAttribute('hidden');

        importButton.removeAttribute('disabled');
        cancelButton.removeAttribute('disabled');
    }, false);

}

importButton.addEventListener('click', function(){
    // sampleSLA();
}, false);

cancelButton.addEventListener('click', function(){
    cancelImport();
}, false);

function setText(elementID, newString){
    let formElement = document.getElementById(elementID);
    formElement.value = newString;
}

var sample = formElementIds;
sample.manager

sampleSLA = function(type, manager, location, district, region, division, start, end, route, service, city, state, zip, recipient){
    enableInputs(type);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);
    if (manager) setText(formElementIds.manager, manager);

    setText(formElementIds.location, "Scranton");
    setText(formElementIds.district, "Lackawanna");
    setText(formElementIds.region, "Northeast");
    setText(formElementIds.division, "II");
    setText(formElementIds.start, "1977-05-05");
    setText(formElementIds.end, "1983-05-25");
}



function NewReport(type, manager, location, district, region, division, start, end, route, service, city, state, zip, recipient){
    this.type = type
}