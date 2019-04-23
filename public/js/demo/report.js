
allArray = [];
managerArray = [];
seniorManagerArray = [];

class Report {

    constructor(title, detail, date, category) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.category = category;
        
        allArray.push(this);
        if(this.category == 'Manager') {
            managerArray.push(this);
        }
        else if(this.category = 'Senior Manager') {
            seniorManagerArray.push(this);
        }
    }
    
}


function genCard(title, detail, date, category) {
    var card_html = `<div class="col-xl-3 col-sm-6 mb-3">
    <div class="card text-white bg-card o-hidden h-100">
    <div class="card-body">
        <div class="card-body-icon">
        <i class="fas fa-fw fa-comments"></i>
        </div>
        <div class="mr-5">${title}</div>
        <span class = "small">${report.date} - </span>
        <span class = "small">${report.category}</span>
    </div>
    <a class="card-footer text-white clearfix small z-1" href="#">
        <span class="float-left">${detail}</span>
        <span class="float-right">
        <i class="fas fa-angle-right"></i>
        </span>
    </a>
    </div>
    </div><br>`;
    return card_html;
}

function createCards() {
    Report1 = new Report("Title 1", "Detail 1", "Date 1", "Manager");
    Report2 = new Report("Title 2", "Detail 2", "Date 2", "Manager");
    Report3 = new Report("Title 3", "Detail 3", "Date 3", "Senior Manager");
    console.log(allArray);
    console.log(managerArray);
    console.log(seniorManagerArray);
};






