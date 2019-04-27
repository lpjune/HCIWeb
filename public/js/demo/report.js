

allArray = [];
managerArray = [];
seniorManagerArray = [];


// module.exports = 
class Report {

    constructor(title, detail, date, category, id) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.category = category;
        this.id = id

        allArray.push(this);
        if (this.category == 'Manager') {
            managerArray.push(this);
        }
        else if (this.category = 'Senior Manager') {
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
        <span class = "small">${date} - </span>
        <span class = "small">${category}</span>
    </div>
    <a class="card-footer text-white clearfix small z-1" href="tables.ejs">
        <span class="float-left">${detail}</span>
        <span class="float-right">
        <i class="fas fa-arrow-right"></i>
        </span>
    </a>
    </div>
    </div><br>`;
    return card_html;
}

function createCards() {
    Report1 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 1);
    Report2 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 2);
    Report3 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 3);
    Report4 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 4);
    Report5 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 5);
    Report6 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 6);
    Report7 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 7);
    Report8 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Manager", 8);
    Report9 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 9);
    Report10 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 10);
    Report11 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 11);
    Report12 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 12);
    Report13 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 13);
    Report14 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 14);
    Report15 = new Report("SLA Performance", "Lorem ipsum dolor sit amet", "2/24/19", "Senior Manager", 15);
    // console.log(allArray);
    // console.log(managerArray);
    // console.log(seniorManagerArray);
};

createCards();








