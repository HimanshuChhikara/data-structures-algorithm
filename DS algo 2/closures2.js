function calculator(){
    var a,b;
    this.addition = function(a,b){
        return a+b;
    }
    this.subtraction = function(a,b){
        return a - b;
    }
}

var answer = new calculator();
var ad = answer.addition(10,12);
var sub = answer.subtraction(12,10)
console.log(ad)
console.log(sub);


var dt =  new Date('2015-03-04T00:00:00.000Z');
console.log("UTC HOURS ====" +" "+dt.getDate())
var d=new Date();
var month=new Array(12);
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";
console.log("The Current Date is " + d.getDate() + " " + month[d.getMonth()]+ " " + d.getFullYear());


// var uct = dt.toISOString();
var dateString = dt.toString('d-M-yyyy');
    console.log("Date is ==="+dt);
    console.log("Type of"+ " " + typeof dt);
    // console.log("UCT Date ====" + uct);
    console.log("String Date=====" + dateString);

const event = new Date('Mon Dec 14 2020 00:20:34 GMT');
console.log(event.toString());




function formatDate(date){
    var dt = new Date(date),
    month = '' + (dt.getMonth() + 1),
    day = '' + (dt.getDay()),
    year = dt.getFullYear();

    if(month.length < 2){
        month = '0' + month;
    }
    if(day.length < 2){
        day = '0' + day;
    }

    return [year,month,day].join('-');
}

var dat = formatDate('14 December 2020');
console.log( "Format Date is ===" + " " + dat);