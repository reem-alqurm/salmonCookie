'use strict';

let hours = ['  ','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let allstors=[
    ["Seattle", 23, 65, 6.3],
    ["Tokyo",   3,  24, 1.2],
    ["Dubai",   11, 38, 3.7],
    ["Paris",   20, 38, 2.3],
    ["Lima", 2, 16  ,4.6]
    ];
let totalCookis=0;
let divEl = document.getElementById('salmonCookie');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);
function Store(storeName,min,max,avg){
    this.Name=storeName;
    this.min =min ;
    this.max =max ;
    this.avg =avg ;
    this.cutomercount=[];
    this.cookiesNum=[];
    this.cookiesPerHour=[];
    this.sumCookis=0;
    this.callculatcust();
    this.calcookie();
    this.fillData();
    this.getAll()
    this.render();
}
    Store.prototype.callculatcust = function(){

        for(let i =0;i<hours.length;i++){
            this.cutomercount.push(randomNum(this.min,this.max));
        }
    }
    Store.prototype.calcookie = function(){
        for(let j =0;j<hours.length;j++){
            let t = Math.floor(((this.cutomercount[j])*(this.avg)));
            this.cookiesNum.push(t)   
            this.sumCookis=this.sumCookis+t;
        }
        console.log(this);
    }
    Store.prototype.fillData =function(){ 
        for(let x =0;x<hours.length;x++){
            this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
            }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            }
    Store.prototype.getAll =function(){
        this.fillData();
        return this.cookiesPerHour;
    }
    Store.prototype.render =function(){
        totalCookis=totalCookis+this.sumCookis;
        let trEl=document.createElement('tr');
        tableEl.appendChild(trEl);
        let thE2=document.createElement('th');
        thE2.textContent=this.Name;
        trEl.appendChild(thE2);
        for(let i =1 ;i <hours.length;i++){
            let thE2=document.createElement('th');
            thE2.textContent=this.cookiesNum[i];
            trEl.appendChild(thE2);}
            let thE3=document.createElement('th');
            thE3.textContent=this.sumCookis;
            trEl.appendChild(thE3);
    }
     function randomNum(min , max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
    function header(){
        let trEl=document.createElement('tr');
        tableEl.appendChild(trEl);
            for(let i =0 ;i <hours.length;i++){
            let thEl=document.createElement('th');
            thEl.textContent=hours[i];
            trEl.appendChild(thEl);
        }
        let thEl=document.createElement('th');
        thEl.textContent="Total";
        trEl.appendChild(thEl);
        }
        function footer(){
            let trEl=document.createElement('tr');
            tableEl.appendChild(trEl);
            let thE2=document.createElement('th');
            thE2.textContent="Totals";
            trEl.appendChild(thE2);
            for(let i =0 ;i <hours.length-1;i++){
                let thE2=document.createElement('th');
            trEl.appendChild(thE2);
        }
        let thE4=document.createElement('th');
        thE4.textContent=totalCookis;
        trEl.appendChild(thE4);
        }
        header();
        for(let e =0 ;e<allstors.length;e++){
        let sh =new  Store(allstors[e][0], allstors[e][1] ,allstors[e][2] ,allstors[e][3]);
        }
        footer();

