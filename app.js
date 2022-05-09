let minhalista = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Aguardando vagas para postagem",
    id: "1"
  }
  
  ]
 
let minhalista2 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "2"
  }
  
  
  ]
 
 
 let minhalista3 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "3"
  }
  
  ]
 
 let minhalista4 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "4"
  }
  
  ]
 
 let minhalista5 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "5"
  }
  
  ]

 let minhalista6 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "6"
  }
  
  ]

let minhalista7 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "7"
  }
  
  ]

let minhalista8 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "8"
  }
  
  ]


let minhalista9 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "9"
  }
  
  ]

let minhalista10 = [
  {
    vaga: "Nenhuma Vaga Postada",
    cidade: "Ficticio",
    data:"--/--/----",
    descricao:"Nenhuma Vaga Postada",
    id: "10"
  }
  
  ]
 
 function date() {
var html = "";
html+="<div class='date'>"+minhalista[0].data+"</div>";

 document.getElementById('date').innerHTML = html;
 }
 
 function date2() {
var html = "";
html+="<div class='date'>"+minhalista2[0].data+"</div>";

 document.getElementById('date2').innerHTML = html;
 }
 
 function date3() {
var html = "";
html+="<div class='date'>"+minhalista3[0].data+"</div>";

 document.getElementById('date3').innerHTML = html;
 }
 
function date4() {
var html = "";
html+="<div class='date'>"+minhalista4[0].data+"</div>";

 document.getElementById('date4').innerHTML = html;
 }

function date5() {
var html = "";
html+="<div class='date'>"+minhalista5[0].data+"</div>";

 document.getElementById('date5').innerHTML = html;
 }

function date6() {
var html = "";
html+="<div class='date'>"+minhalista6[0].data+"</div>";

 document.getElementById('date6').innerHTML = html;
 }

function date7() {
var html = "";
html+="<div class='date'>"+minhalista7[0].data+"</div>";

 document.getElementById('date7').innerHTML = html;
 }

function date8() {
var html = "";
html+="<div class='date'>"+minhalista8[0].data+"</div>";

 document.getElementById('date8').innerHTML = html;
 }

function date9() {
var html = "";
html+="<div class='date'>"+minhalista9[0].data+"</div>";

 document.getElementById('date9').innerHTML = html;
 }

function date10() {
var html = "";
html+="<div class='date'>"+minhalista10[0].data+"</div>";

 document.getElementById('date10').innerHTML = html;
 }

  function funCall() {
  
  var html = "";
    for (let i = 0; i < minhalista.length; i++) {
    
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista[i].id+"' class='botao'>"+minhalista[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha').innerHTML = html;
    
  }

  
  }
  
function funCall2() {
  
  var html = "";
    for (let i = 0; i < minhalista2.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista2[i].id+"' class='botao'>"+minhalista2[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista2[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha2').innerHTML = html;
    
  }
  
}
  function funCall3() {
  
  var html = "";
    for (let i = 0; i < minhalista3.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista3[i].id+"' class='botao'>"+minhalista3[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista3[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha3').innerHTML = html;
    
  }
  
  
  }
  
function funCall4() {
  
  var html = "";
    for (let i = 0; i < minhalista4.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista4[i].id+"' class='botao'>"+minhalista4[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista4[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha4').innerHTML = html;
    
  }
  
  
  }

function funCall5() {
  
  var html = "";
    for (let i = 0; i < minhalista5.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista5[i].id+"' class='botao'>"+minhalista5[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista5[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha5').innerHTML = html;
    
  }
  
  
  }

function funCall6() {
  
  var html = "";
    for (let i = 0; i < minhalista6.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista6[i].id+"' class='botao'>"+minhalista6[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista6[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha6').innerHTML = html;
    
  }
  
  
  }

function funCall7() {
  
  var html = "";
    for (let i = 0; i < minhalista7.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista7[i].id+"' class='botao'>"+minhalista7[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista7[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha7').innerHTML = html;
    
  }
  
  
  }

function funCall8() {
  
  var html = "";
    for (let i = 0; i < minhalista8.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista8[i].id+"' class='botao'>"+minhalista8[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista8[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha8').innerHTML = html;
    
  }
  
  
  }

function funCall9() {
  
  var html = "";
    for (let i = 0; i < minhalista9.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista9[i].id+"' class='botao'>"+minhalista9[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista9[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha9').innerHTML = html;
    
  }
  
  
  }

function funCall10() {
  
  var html = "";
    for (let i = 0; i < minhalista10.length; i++) {
    
      html+= "<div class='cvagas'>";
      html+= "<div class='vaga'><a href='vaga.html?id="+minhalista10[i].id+"' class='botao'>"+minhalista10[i].vaga+"</a></div>";
      html+= "<h5 class='cidade'>"+minhalista10[i].cidade+"</h5>";
      html+= "<div class='divisor'></div>";
      html+= "</div>";
    
     
      
   console.log(html);

   document.getElementById('vaguinha10').innerHTML = html;
    
  }
  
  
  }

  function description() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista.length; i++) {
  
  console.log(minhalista[i].id)
  
   if (ide == minhalista[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
  
  }

  function description2() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista2.length; i++) {
  
  console.log(minhalista2[i].id)
  
   if (ide == minhalista2[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista2[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
  
  }

  
  function description3() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista3.length; i++) {
  
  console.log(minhalista3[i].id)
  
   if (ide == minhalista3[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista3[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
  
  }

function description4() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista4.length; i++) {
  
  console.log(minhalista4[i].id)
  
   if (ide == minhalista4[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista4[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description5() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista5.length; i++) {
  
  console.log(minhalista5[i].id)
  
   if (ide == minhalista5[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista5[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description6() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista6.length; i++) {
  
  console.log(minhalista6[i].id)
  
   if (ide == minhalista6[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista6[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description7() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista7.length; i++) {
  
  console.log(minhalista7[i].id)
  
   if (ide == minhalista7[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista7[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description8() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista8.length; i++) {
  
  console.log(minhalista8[i].id)
  
   if (ide == minhalista8[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista8[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description9() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista9.length; i++) {
  
  console.log(minhalista9[i].id)
  
   if (ide == minhalista9[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista9[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

function description10() {
    
    var params = (new URL(document.location)).searchParams;
    
    var ide = params.get("id");
    
    console.log(ide);
    
  var html1 = "";
  
  for (let i = 0; i < minhalista10.length; i++) {
  
  console.log(minhalista10[i].id)
  
   if (ide == minhalista10[i].id) {
    html1+= "<div class='descriptioncss'>"+minhalista10[i].descricao+"</div>";
    
   document.getElementById('description1').innerHTML = html1;
   }
  
  console.log(html1)
  }
}

let dropdown = document.getElementById('dropdown_');

let dropdownsub = document.getElementById('dropdownn');

var momento = 1;

 function dropdowni(){
   


if (momento == 2){
  document.getElementById('dropdownn').style.display = "none";
  momento = 1;
}else{
  document.getElementById('dropdownn').style.display = "block";
  momento = 2;
}

}
