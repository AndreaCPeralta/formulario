const Doctor = document.getElementById("Nombred");
const Paciente = document.getElementById("Nombrep");
const Apellidod = document.getElementById("Apellidod");
const Apellidop = document.getElementById("Apellidop");
const Cedula = document.getElementById("Cedulad");
const CC = document.getElementById("Cedulap");
const Especialidadd = document.getElementById("datosd");
const Especialidadp = document.getElementById("datosp");
const Consultorio = document.getElementById("Consultorio");
const Correo = document.getElementById("Correo");
const Edad = document.getElementById("Edad");
const Telefono = document.getElementById("Telefono");
const listInputs = document.querySelectorAll(".Form-input")


  if (Doctor.value.length < 1 || Doctor.value.trim() == "") {
    Error("Nombred", "Nombred no valido*");
    condicion = false;
  }
  if (Paciente.value.length < 1 || Paciente.value.trim() == "") {
    Error("Nombrep", "Nombrep no valido*");
    condicion = false;
  }
  if (Apellidod.value.length < 1 || Apellidod.value.trim() == "") {
    Error("Apellidod", "Apellidod no valido*");
    condicion = false;
  }
  if (Apellidop.value.length < 1 || Apellidop.value.trim() == "") {
    Error("Apellidop", "Apellidop no valido*");
    condicion = false;
  }
  if (Cedula.value.length < 1 || Cedula.value.trim() == "") {
    Error("Cedulad", "Cedulad no valido*");
    condicion = false;
  }
  if (CC.value.length < 1 || CC.value.trim() == "") {
    Error("Cedulap", "Cedulap no valido*");
    condicion = false;
  }
  if (Especialidadd.value.length < 1 || Especialidadd.value.trim() == "") {
    Error("Especialidad", "Especialidad no valido*");
    condicion = false;
  }
  if (Especialidadp.value.length < 1 || Especialidadp.value.trim() == "") {
    Error("Especialidad", "Especialidad no valido*");
    condicion = false;
  }
  if (Consultorio.value.length < 1 || Consultorio.value.trim() == "") {
    Error("Consultorio", "Consultorio no valido*");
    condicion = false;
  }
  if (Correo.value.length < 1 || Correo.value.trim() == "") {
    Error("Correo", "Correo no valido*");
    condicion = false;
  }
  if (Edad.value != Edad.value) {
    Error("Edad", "Edad error*");
    condicion = false;
  }
  if (Telefono.value.length < 1 || Telefono.value.trim() == "") {
    Error("Telefono", "Telefono no valido*");
    condicion = false;
  }
  function capture (){
  var Nombred=document.getElementById(Nombred).value;
  var Apellidod=document.getElementById(Apellidod).value;
  var Cedulad=document.getElementById(Cedulad).value;
  var Nombrep=document.getElementById(Nombrep).value;
  var Apellidop=document.getElementById(Apellidop).value;
  var Cedulap=document.getElementById(Cedulap).value;
  var Especialidadd=document.getElementById(Especialidadd).value;
  var Especialidadp=document.getElementById(Especialidadp).value;
  var Consultorio=document.getElementById(Consultorio).value;
  var Correo=document.getElementById(Correo).value;
  var Telefono=document.getElementById(Telefono).value;
  console.log({Nombred, Apellidod, Cedulad, Nombrep, Apellidop, Cedulap, Especialidadd, Especialidadp, Consultorio, Correo, Telefono})
  }
  function obtenerdatos() {
    var Nombred=document.getElementById(Nombred).value;
    var Apellidod=document.getElementById(Apellidod).value;
    var Cedulad=document.getElementById(Cedulad).value;
    var Nombrep=document.getElementById(Nombrep).value;
    var Apellidop=document.getElementById(Apellidop).value;
    var Cedulap=document.getElementById(Cedulap).value;
    var Especialidadd=document.getElementById(Especialidadd).value;
    var Especialidadp=document.getElementById(Especialidadp).value;
    var Consultorio=document.getElementById(Consultorio).value;
    var Correo=document.getElementById(Correo).value;
    var Telefono=document.getElementById(Telefono).value;
  }
  document.querySelector('form')
  .addEventListener('submit'), e 
    e.preventDefault()
    const data = Object.fromEntries
    new FormData(e.target)
    alert(JSON.stringify(data)) 
    var form = document.forms['form'];
form.onsubmit = function(e){
  e.preventDefault();
  var select = document.form.datosd.value;
  console.log(select);
  document.getElementById('print').innerHTML=select.toUpperCase();
}
var form = document.getElementById("Nombred");
form.onclick = function(e){
  e.preventDefault();
var name = document.getElementById("Apellidod").value;
  console.log(name);
document.getElementById('print').innerHTML=name.toUpperCase();
}

$contenido = file_get_contents('path/to/comments.json');
$contenido_arr = json_decode($contenido, true);
  
  

  