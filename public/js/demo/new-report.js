var formElements = document.getElementsByClassName("report-form");
var reportDropdown = document.getElementById("dropdownMenuLink");

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

enableInputs = function (myargs) {
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        // if(arguments.includes(element.id)){
        if (myargs.includes(element.id)) {
            element.removeAttribute('disabled');
        } else {
            element.setAttribute('disabled', true);
        }

    }
}

function ReportType(id, inputs) {
    this.id = id;
    this.element = document.getElementById(id);
    this.text = this.element.innerText;
    this.inputs = inputs;

    let text = this.text;

    this.element.addEventListener('click', function () {
        reportDropdown.innerText = text;
        enableInputs(inputs);
    }, false);

}

clearInputFields = function (){
    enableInputs(reportAll.inputs);
    reportDropdown.innerText = reportAll.text;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        element.value = null;
    }
}

function setText(elementID, newString) {
    let formElement = document.getElementById(elementID);
    formElement.value = newString;
}


let showSampleReport = function () {
        reportDropdown.innerText = reportSLA.text;
        enableInputs(reportSLA.inputs);
        setText(formElementIds.manager, "Micheal Scott");
        setText(formElementIds.location, "Scranton");
        setText(formElementIds.district, "Lackawanna");
        setText(formElementIds.region, "Northeast");
        setText(formElementIds.division, "II");
        setText(formElementIds.start, "1977-05-05");
        setText(formElementIds.end, "1983-05-25");
};


let reportAll = new ReportType("new-report-dropdown-all", Object.values(formElementIds));
let reportOps = new ReportType("new-report-dropdown-ops", reportInputs.ops);
let reportSLA = new ReportType("new-report-dropdown-sla", reportInputs.sla);
let reportRental = new ReportType("new-report-dropdown-rental", reportInputs.rental);
let reportGap = new ReportType("new-report-dropdown-gap", reportInputs.gap);
let reportRouteVariance = new ReportType("new-report-dropdown-variance", reportInputs.variance);
let reportRoutePerformance = new ReportType("new-report-dropdown-performance", reportInputs.performance);
let reportVolume = new ReportType("new-report-dropdown-volume", reportInputs.volume);
let reportProductivity = new ReportType("new-report-dropdown-productivty", reportInputs.productivity);
let reportService = new ReportType("new-report-dropdown-service", reportInputs.service);
let reportStaffing = new ReportType("new-report-dropdown-staffing", reportInputs.staffing);
let reportEmployee = new ReportType("new-report-dropdown-employee", reportInputs.employee);
let reportStops = new ReportType("new-report-dropdown-stops", reportInputs.stops);


// let sampleSLA = ExampleReport();

var recipientToggleYes = document.getElementById("input-radio-has-recipient");
var recipientToggleNo = document.getElementById("input-radio-no-recipient");
var recipientInput = document.getElementById("inputRecipient");


recipientToggleYes.addEventListener("click", function () {
    recipientInput.removeAttribute('disabled');
}, false);

recipientToggleNo.addEventListener("click", function () {
    recipientInput.setAttribute('disabled', true);
}, false);

var reports = document.getElementsByClassName("previous-report");
var selectedReport = document.getElementById("new-report-selected");
var selectedReportText = document.getElementById("new-report-selected-text");
var importButton = document.getElementById("new-report-import");
var cancelButton = document.getElementById("new-report-cancel");

var cancelImport = function () {
    for (let i = 0; i < reports.length; i++) {
        const element = reports[i];
        element.removeAttribute('hidden');

        selectedReport.setAttribute('hidden', true);

        importButton.setAttribute('disabled', true);
        cancelButton.setAttribute('disabled', true);
        clearInputFields();
    }
}

for (let i = 0; i < reports.length; i++) {
    const element = reports[i];

    element.addEventListener('click', function () {
        cancelImport();
        selectedReportText.innerText = element.innerText;

        element.setAttribute('hidden', true);

        selectedReport.removeAttribute('hidden');

        importButton.removeAttribute('disabled');
        cancelButton.removeAttribute('disabled');
    }, false);

}

selectedReport.addEventListener('click', function () {
    cancelImport();
}, false);


importButton.addEventListener('click', function () {
    showSampleReport();
}, false);

cancelButton.addEventListener('click', function () {
    cancelImport();
}, false);

let previousReportSidebar = document.getElementById("previous-reports-sidebar");

function findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

    let el = document.createElement('div');
    document.body.appendChild(el);

    let curEnv = envs.shift();

    for (let env of envs.reverse()) {
        el.classList.add(`d-${env}-none`);

        if (window.getComputedStyle(el).display === 'none') {
            curEnv = env;
            break;
        }
    }

    document.body.removeChild(el);
    return curEnv;
}

function removeSidebarForMobile(){
    let env = findBootstrapEnvironment();
    if(env == 'xs' || env == 'sm') previousReportSidebar.setAttribute('hidden', true);
    else previousReportSidebar.removeAttribute('hidden');
}

removeSidebarForMobile();

window.addEventListener('resize', function(){
    removeSidebarForMobile();
}, false);