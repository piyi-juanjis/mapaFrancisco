var map = L.map('map').setView([36.7201600, -4.4203400], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([36.7201600, -4.4203400]).addTo(map);

var popup = L.popup()
    .setLatLng([36.7201600, -4.4203400])
    .setContent("Ubicación")
    .openOn(map);


fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json?classId=a44f2eea-e51b-4a7a-a11a-eefc73428d1a&assignmentId=b6d46e1e-b651-43e1-b861-1d6ba465dd82&submissionId=bedefd2e-cc36-04ed-4cc4-9ef6cdb02bec')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
     // mostrar los datos JSON (formateado con tabulaciones)
     var element=document.createElement("pre");
     element.innerHTML=JSON.stringify(myJson,null," ");
     document.body.appendChild(element);
     
     //crear un formato basado en los datos
     for(field in myJson.message){
       var element=document.createElement("b");
       element.innerHTML=field;
       document.body.appendChild(element);
       var items=document.createElement("p");
       items.innerHTML=myJson.message[field].join(",");
       document.body.appendChild(items);
     }
   });

