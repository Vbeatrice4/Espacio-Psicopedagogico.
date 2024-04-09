

// Iniciar sesion en la plataforma

let usuarioAutorizado = "Espacio Psicopedagogico";
let passwordAutorizado = "Espaciopsicope2024";

let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
let passwordIngresado = prompt("Ingrese su contraseña:");

if (usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
    alert("Los datos son correctos, puede ingresar");
} else {
    alert("Los datos son incorrectos");
}


// Función para agendar una nueva sesion
function agendarSesion() {
  const paciente = prompt("Ingrese el nombre del paciente: ");
  const fecha = prompt("Ingrese la fecha de la sesion: ");
  const hora = prompt("Ingrese la hora de la sesion: ");
  
  // Verificar si el paciente ingresó cancelar en alguno de los campos
  if (paciente === null || fecha === null || hora === null) {
    return; 
  }

  if (paciente() === "" || fecha() === "" || hora() === "") {
    alert("Por favor complete todos espacios en blanco.");
    return;
  }

  // Agregar la sesion al array de citas
  sesiones.push({ paciente, fecha, hora });
  alert("Cita agendada correctamente. Gracias, " + paciente + "!");
}

function detalleDeLoTrabajado(){
  const dia = prompt("Describa los materiales utilizados en la sesion: ");
  const fecha = prompt("Describa los objetivos trabajados en la sesion: ");
  const predisposicion = prompt("Describa la predisposicion del niño al momento de trabajar: ");
  const extra = prompt("Describa algun detalle extra ");
  
}


function mostrarHistorial() {
let mostrarhistorial = "Juan Bautista";
let historialdelpaciente = prompt("Detalla el nombre del paciente que deseas conocer: ");

if (mostrarhistorial == historialdelpaciente) {
    alert("Edad: 9 años. Fecha de nacimiento: 2 de abril de 2015. Diagnostico: Sindrome de Asperger");
} 

}