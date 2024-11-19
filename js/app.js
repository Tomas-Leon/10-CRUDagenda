import Contacto from "./classContacto.js";

//declaro variables globales
const nuevoContacto = new Contacto(
  "juan",
  "perez",
  "juanperez@mail.com",
  "2281567890",
  "juancho",
  "tucuman",
  "https://campus.rollingcodeschool.com/course/view.php?id=230"
);

const modalContacto = new bootstrap.Modal(document.getElementById('contactModal'))
const btnAgregar = document.querySelector('.btn-primary')


//funciones

function abrirModalContacto(){
    modalContacto.show()
}

//el resto de la logica del proyecto

btnAgregar.addEventListener('click', abrirModalContacto)