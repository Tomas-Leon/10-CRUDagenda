import Contacto from "./classContacto.js";

//declaro variables globales

const modalContacto = new bootstrap.Modal(
  document.getElementById("contactModal")
);
const btnAgregar = document.querySelector(".btn-primary");
const formulario = document.getElementById("contactForm");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const apodo = document.querySelector("#apodo");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const imagen = document.querySelector("#urlImagen");
const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];

//funciones

function abrirModalContacto() {
  modalContacto.show();
}

function crearContacto(e) {
  e.preventDefault();
  //validar los datos del formulario
  //crear el objeto
  const nuevoContacto = new Contacto(
    nombre.value,
    apellido.value,
    email.value,
    telefono.value,
    apodo.value,
    direccion.value,
    imagen.value
  );
  //guardar el contacto en la lista
  listaContactos.push(nuevoContacto)
  console.log(nuevoContacto)
  guardarEnLocalStorage();
  limpiarContacto();
}

function limpiarContacto (){
  formulario.reset();
}

function guardarEnLocalStorage (){
  localStorage.setItem('agendaKey', JSON.stringify(listaContactos))
}

function cargarDatosTabla (){
  if (limpiarContacto.length !== 0){
    //dibijar una fila por cada elemento del array
    listaContactos.map((contacto, indice)=> dibujarFila(contacto, indice + 1))
  }
}

function dibujarFila (contacto, fila){
  console.log(contacto);
  //dibujar el tr
  //traigo la tabla
  const tbody = document.querySelector('tbody');
  tbody.innerHTML += `
  <tr>
              <th scope="row">${fila}</th>
              <td>${contacto.nombre}</td>
              <td>${contacto.apellido}</td>
              <td>${contacto.email}</td>
              <td>${contacto.telefono}</td>
              <td>
                <button class="btn btn-warning">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-danger">
                  <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-info"><i class="bi bi-eye"></i></button>
              </td>
            </tr>`
}
//el resto de la logica del proyecto

btnAgregar.addEventListener("click", abrirModalContacto);
formulario.addEventListener("submit", crearContacto);
cargarDatosTabla();
