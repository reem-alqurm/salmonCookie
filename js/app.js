'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function random (max,min)
  {
  return Math.floor(((Math.random() * (max - min)) + min));
  }
let seatel = {
    storeName : 'Seatel',
    customercount : [],
    cookiescount : [],
    totalcok :0,
    min : 23,
    max : 65,
    avg : 6.3,

    calculatCut : function (  max,min  )
    {
        for (let i = 0; i < hours.length ; i++)
        {
            this.customercount.push(random(max,min))
            

        }
        return this;
    },

    calculatCookies : function()
    {
        for (let j = 0; j < hours.length ; j++)
        {


            this.cookiescount.push(Math.floor((this.customercount[j])*this.avg))
            this.totalcok=this.totalcok + Math.floor((this.customercount[j])*this.avg);

        }        return this;

    },
  

    render : function(){
        let divEl = document.getElementById('CookieStore');

         let header1 = document.createElement('name');
        divEl.appendChild(header1);
        header1.textContent = this.storeName;
        

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        for(let x =0 ;x <hours.length;x++){

            let liEl=document.createElement('li');
            liEl.textContent= hours[x]+" : " +this.cookiescount[x];
           ulEl.appendChild(liEl);
         }    
          
    let liEl=document.createElement('li');
    liEl.textContent="Total : "+this.totalcok;
    ulEl.appendChild(liEl); 
    
   
                 }
}

seatel.calculatCut(seatel.max,seatel.min);
seatel.calculatCookies();
seatel.render();
///////////////////////////////////////////////////////////////
let Tokyo = {
    storeName : 'Tokyo',
    customercount : [],
    cookiescount : [],
    totalcok :0,
    min : 3,
    max : 24,
    avg : 1.2,

    calculatCut : function (  max,min  )
    {
        for (let i = 0; i < hours.length ; i++)
        {
            this.customercount.push(random(max,min))
            

        }
        return this;
    },

    calculatCookies : function()
    {
        for (let j = 0; j < hours.length ; j++)
        {


            this.cookiescount.push(Math.floor((this.customercount[j])*this.avg))
            this.totalcok=this.totalcok + Math.floor((this.customercount[j])*this.avg);

        }        return this;

    },
  

    render : function(){
        let divEl = document.getElementById('CookieStore');

         let header1 = document.createElement('name');
        divEl.appendChild(header1);
        header1.textContent = this.storeName;
        

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        for(let x =0 ;x <hours.length;x++){

            let liEl=document.createElement('li');
            liEl.textContent= hours[x]+" : " +this.cookiescount[x];
           ulEl.appendChild(liEl);
         }    
          
    let liEl=document.createElement('li');
    liEl.textContent="Total : "+this.totalcok;
    ulEl.appendChild(liEl); 
    
   
                 }
}

Tokyo.calculatCut(Tokyo.max,Tokyo.min);
Tokyo.calculatCookies();
Tokyo.render();

////////////////////////////////

let Dubai = {
    storeName : 'Dubai',
    customercount : [],
    cookiescount : [],
    totalcok :0,
    min : 11,
    max : 38,
    avg : 3.7,

    calculatCut : function (  max,min  )
    {
        for (let i = 0; i < hours.length ; i++)
        {
            this.customercount.push(random(max,min))
            

        }
        return this;
    },

    calculatCookies : function()
    {
        for (let j = 0; j < hours.length ; j++)
        {


            this.cookiescount.push(Math.floor((this.customercount[j])*this.avg))
            this.totalcok=this.totalcok + Math.floor((this.customercount[j])*this.avg);

        }        return this;

    },
  

    render : function(){
        let divEl = document.getElementById('CookieStore');

         let header1 = document.createElement('name');
        divEl.appendChild(header1);
        header1.textContent = this.storeName;
        

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        for(let x =0 ;x <hours.length;x++){

            let liEl=document.createElement('li');
            liEl.textContent= hours[x]+" : " +this.cookiescount[x];
           ulEl.appendChild(liEl);
         }    
          
    let liEl=document.createElement('li');
    liEl.textContent="Total : "+this.totalcok;
    ulEl.appendChild(liEl); 
    
   
                 }
}

Dubai.calculatCut(Dubai.max,Dubai.min);
Dubai.calculatCookies();
Dubai.render();

//////////////////////////////////

let Paris = {
    storeName : 'Paris',
    customercount : [],
    cookiescount : [],
    totalcok :0,
    min : 20,
    max : 38,
    avg : 2.3,

    calculatCut : function (  max,min  )
    {
        for (let i = 0; i < hours.length ; i++)
        {
            this.customercount.push(random(max,min))
            

        }
        return this;
    },

    calculatCookies : function()
    {
        for (let j = 0; j < hours.length ; j++)
        {


            this.cookiescount.push(Math.floor((this.customercount[j])*this.avg))
            this.totalcok=this.totalcok + Math.floor((this.customercount[j])*this.avg);

        }        return this;

    },
  

    render : function(){
        let divEl = document.getElementById('CookieStore');

         let header1 = document.createElement('name');
        divEl.appendChild(header1);
        header1.textContent = this.storeName;
        

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        for(let x =0 ;x <hours.length;x++){

            let liEl=document.createElement('li');
            liEl.textContent= hours[x]+" : " +this.cookiescount[x];
           ulEl.appendChild(liEl);
         }    
          
    let liEl=document.createElement('li');
    liEl.textContent="Total : "+this.totalcok;
    ulEl.appendChild(liEl); 
    
   
                 }
}

Paris.calculatCut(Paris.max,Paris.min);
Paris.calculatCookies();
Paris.render();

///////////////////////////////////
let Lima = {
    storeName : 'Lima',
    customercount : [],
    cookiescount : [],
    totalcok :0,
    min : 2,
    max : 16,
    avg : 4.6,

    calculatCut : function (  max,min  )
    {
        for (let i = 0; i < hours.length ; i++)
        {
            this.customercount.push(random(max,min))
            

        }
        return this;
    },

    calculatCookies : function()
    {
        for (let j = 0; j < hours.length ; j++)
        {


            this.cookiescount.push(Math.floor((this.customercount[j])*this.avg))
            this.totalcok=this.totalcok + Math.floor((this.customercount[j])*this.avg);

        }        return this;

    },
  

    render : function(){
        let divEl = document.getElementById('CookieStore');

         let header1 = document.createElement('name');
        divEl.appendChild(header1);
        header1.textContent = this.storeName;
        

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        for(let x =0 ;x <hours.length;x++){

            let liEl=document.createElement('li');
            liEl.textContent= hours[x]+" : " +this.cookiescount[x];
           ulEl.appendChild(liEl);
         }    
          
    let liEl=document.createElement('li');
    liEl.textContent="Total : "+this.totalcok;
    ulEl.appendChild(liEl); 
    
   
                 }
}

Lima.calculatCut(Lima.max,Lima.min);
Lima.calculatCookies();
Lima.render();

