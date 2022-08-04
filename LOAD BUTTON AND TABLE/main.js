// var entry = document.getElementById('entry');
// entry.addEventListener("click", validate());
// var row =1;
// var display = document.getElementById("display");
// var cell1=newRow.insertCell(0);
// var cell2 =newRow.insertCell(1);
//  cell1.innerHTML =display;
//  row++;
  var  app =document.getElementById('PM10')
  var  app2 =document.getElementById('PM2_5')






function pm10(){
    fetch('data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
      console.log(data);
      c={...data.PM10};

      
        
        var output= document.getElementById('insert_tr');
        output.innerHTML+=`<tr>
        <th>S.No</th>
        <th>DATA</th>
      
      </tr>`
        Object.keys(c).forEach(function(key, index) {
            output.innerHTML+=`
          
          </tr>
            <tr>
            <td>${index}</td><br>
            <td>${c[key]}</td>
          </tr>`


        }
        )

      
    });
}
function pm2_5(){
    fetch('data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        d={...data.PM2_5};

        var output= document.getElementById('insert_tr2');
           output.innerHTML=`<tr>
           <th>S.No</th>
           <th>DATA</th>
           </tr>`

          
        Object.keys(d).forEach(function(key, index) {
            output.innerHTML+=`
            
    
            </tr>
            <tr>
            <td>${index}</td>
            <td>${d[key]}</td>
          </tr>`
          
    

        }
        )
    });
}
function C02(){
    fetch('data.json')
    .then(function(resp){
        return resp.json();
    })  
    .then(function(data){
        c={...data.C02};

        var output= document.getElementById('insert_tr3');
        output.innerHTML+=`<tr>
        <th>S.No</th>
        <th>DATA</th>
      
      </tr>`


        Object.keys(c).forEach(function(key, index) {
            output.innerHTML+=`
          
            </tr>
            <tr>
            <td>${index}</td>
            <td>${c[key]}</td>
          </tr>`


        }
        );
    });
}
function AQI(){
    fetch('data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        c={...data.AQI};

        var output= document.getElementById('insert_tr4');
        output.innerHTML+=`<tr>
        <th>S.No</th>
        <th>DATA</th>
      
      </tr>`
  
      Object.keys(c).forEach(function(key, index) {
        output.innerHTML+=`
      
      </tr>
        <tr>
        <td>${index}</td>
        <td>${c[key]}</td>
      </tr>`


        })
    });
}
function VOC(){
    fetch('data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        c={...data.VOC};

        var output= document.getElementById('insert_tr5');
        output.innerHTML+=`<tr>
        <th>S.No</th>
        <th>DATA</th>
      
      </tr>`

        Object.keys(c).forEach(function(key, index) {
        
            output.innerHTML+=`
         
            </tr>
            <tr>
            <td>${index}</td>
            <td>${c[key]}</td><br>
          </tr>`

                     }
        )
    });
}

 function validate() {


    var valid =false;
    if(document.getElementById('pm10').checked){    

    pm10();

    }
  
     if(document.getElementById('pm2_5').checked){
        pm2_5();


    }
    if(document.getElementById('c02').checked){
        C02();


    }
    if(document.getElementById('aqi').checked){
        AQI();


    }
    if(document.getElementById('voc').checked){
        VOC();


    }

 }






