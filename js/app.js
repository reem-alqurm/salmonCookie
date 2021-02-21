'use strict';
             
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container = document.getElementById('container');
let megaTotal =0;
let table = document.createElement('table');
container.appendChild(table);
let arrOfObjects = [];



function Location(locationName,min,max,avg){
   this.locationName = locationName;
   this.min = min;
   this.max = max;
   this.avg = avg;
   this.randomCustomers = [];
   this.numOfCookiesSoldPerHour = [];
   this.total = 0;
   arrOfObjects.push(this)


}
Location.prototype.randomCustomerPerHour = function(){
        for(let i = 0 ; i < hours.length ; i++){
            this.randomCustomers.push(randomGenrator(this.min,this.max));
        }
}
Location.prototype.cookiesSoldPerHour = function(){
        for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avg));
        this.total += this.numOfCookiesSoldPerHour[i];
        
}}
Location.prototype.render = function(){

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let locationTitle = document.createElement('td');
    tr.appendChild(locationTitle);
    locationTitle.textContent = this.locationName;

    let td;
    for(let  i = 0; i < this.numOfCookiesSoldPerHour.length; i++){
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.numOfCookiesSoldPerHour[i];
    }
    let dailyTotal = document.createElement('td');
    tr.appendChild(dailyTotal);
    dailyTotal.textContent = this.total
}

let seattle = new Location('Seattle',23,65,6.3);
let tokyo = new Location('Tokyo',3,24,1.2);
let dubai = new Location('Dubai',11,38,3.7);
let paris = new Location('Paris',20,48,2.3);
let lima = new Location('Lima',2,16,4.6);




headerRow()

for(let i = 0 ; i <arrOfObjects.length; i ++){
    arrOfObjects[i].randomCustomerPerHour();
    arrOfObjects[i].cookiesSoldPerHour();
    arrOfObjects[i].render();
    
}
footerRow();





function headerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    
    let emptyCell = document.createElement('th');
    tr.appendChild(emptyCell);
    
    let th;
    for(let i = 0 ; i < hours.length; i++){
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[i];

    }
    let dailyTotalCell = document.createElement('th');
    tr.appendChild(dailyTotalCell);
    dailyTotalCell.textContent = 'Daily Location Total';
    
}

function footerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let thTotal = document.createElement('th');
    tr.appendChild(thTotal)
    thTotal.textContent = 'Totals';
    let th;
    let sum;
    let totalOfTotals = 0;
    for(let i = 0 ; i < hours.length; i++){
        sum = 0;
        for(let j = 0; j < arrOfObjects.length; j++){
            sum = sum + arrOfObjects[j].numOfCookiesSoldPerHour[i];
        
        }
                      
        
        th = document.createElement('td');
        tr.appendChild(th);
        th.textContent = sum;
        megaTotal = megaTotal + sum;
    }
        totalOfTotals = totalOfTotals + megaTotal;
    let totalOfTotalss = document.createElement('th');
    tr.appendChild(totalOfTotalss);
    totalOfTotalss.textContent = totalOfTotals;
}

function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  /////////////////////////
  const form = document.getElementById('NewStore');

  form.addEventListener('submit', storCreator)


  function storCreator(event) {
  event.preventDefault();
  
  const storName = event.target.nameField.value;

  let min = event.target.minField.value;
  min = parseInt(min);
  let max = event.target.maxField.value;
  max = parseInt(max);
  let avg = event.target.avgField.value;
  avg = parseFloat(avg);
  
  

let newStoree = new Location (storName, min, max, avg);
table.deleteRow(table.rows.length -1);
newStoree.randomCustomerPerHour();
newStoree.cookiesSoldPerHour();
megaTotal=0;
newStoree.render();
footerRow();
}