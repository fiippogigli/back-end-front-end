//file json
var serverData = [];


var nextID = 10006;


//crea tabella
function tabellaCodice() {
  
  var pagina = $("input#pagina").val()

  $.get("http://localhost/progetto1/backend/employees.php?page="+pagina, function (msg) {
    //console.log(msg["_embedded"]["employees"]);
    serverData = msg;
    var righe = "";
    $.each(serverData, function (key, value) {
    righe = righe + "<tr>";
    righe = righe + "<th>" + value.id + "</th>";
    righe = righe + "<td class ='nome'>" + value.first_name + "</td>";
    righe = righe + "<td class ='cognome'>" + value.last_name + "</td>";
    righe = righe + "<td class ='genere'>" + value.gender + "</td>";
    righe = righe + "<td>" + "<input type='button' class='btn btn-outline-warning' value='MODIFICA' onclick='modifica(" + value.id + ")' data-bs-toggle='modal' data-bs-target='#exampleModal1' data-bs-whatever='@mdo' 'id='" + nextID + "'>";
    righe = righe + "<br> <br>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina(" + value.id + ")' id='" + value.id + "'>";
    righe = righe + "</tr>";
    });
  $("#tbody").html(righe);
  });
}

$(document).ready(function () {

    tabellaCodice();

});

function elimina(id) {
  $.ajax({
      url:"http://localhost/progetto1/backend/employees.php?id="+id,
      type: "DELETE",
      success: tabellaCodice()
  })
}



function modifica(id){
  console.log(id)

  var riga = $("#" + id).closest("tr");
  var nome = riga.find(".nome").text();
  console.log(nome);
  var cognome = riga.find(".cognome").text();
  console.log(cognome);
  var genere = riga.find(".genere").text();
  console.log(genere);

  $("input#name1").val(nome);
  $("input#lastname1").val(cognome);
  $("input#gender1").val(genere);

  $("input#daModificare").val(id);
}

function effettuaModifica(){
  var nome = $("input#name1").val();
  var cognome = $("input#lastname1").val();
  var genere = $("input#gender1").val();
  var id = $("input#daModificare").val();
  
  console.log(genere);
  console.log(nome);
  console.log(cognome);
  $.ajax({
    type: "PUT",
    url: "http://localhost/progetto1/backend/employees.php?id="+id,
    contentType: "application/json",
    data: JSON.stringify({ "first_name": nome, "gender": "M", "id": id,"last_name": cognome}),
    success: function(){
      
      tabellaCodice();
    }
  })
}


function aggiungiDipendente(){
  var nome = $("input#name").val();
  var cognome = $("input#lastname").val();
  var genere = $("input#gender").val();
  
  console.log(genere);
  console.log(nome);
  console.log(cognome);
  $.ajax({
    type: "POST",
    url: "http://localhost/progetto1/backend/employees.php",
    contentType: "application/json",
    data: JSON.stringify({ "first_name": nome, "gender": "M","last_name": cognome}),
    success: function(){
                  
                  tabellaCodice();
    }
  })
}

function vaiAllaPagina(){
    tabellaCodice();
}
