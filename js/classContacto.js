export default class Contacto {
    #id;
    #nombre;
    #apellido;
    #email;
    #telefono;
    #apodo;
    #direccion;
    #imagen;
    constructor(nombre, apellido, email, telefono, apodo, direccion, imagen) {
        this.#id = crypto.randomUUID();
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#telefono = telefono;
        this.#apodo = apodo;
        this.#direccion = direccion;
        this.#imagen = imagen;
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get apellido() {
        return this.#apellido;
    }

    set apellido(nuevoApellido) {
        this.#apellido = nuevoApellido;
    }

    get email() {
        return this.#email;
    }

    set email(nuevoEmail) {
        this.#email = nuevoEmail;
    }

    get telefono() {
        return this.#telefono;
    }

    set telefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono;
    }

    get apodo() {
        return this.#apodo;
    }

    set apodo(nuevoApodo) {
        this.#apodo = nuevoApodo;
    }

    get direccion() {
        return this.#direccion;
    }

    set direccion(nuevaDireccion) {
        this.#direccion = nuevaDireccion;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(nuevaImagen) {
        this.#imagen = nuevaImagen;
    }

    //metodo paraque funcione JSON.stringify

    toJSON(){
        return {
            id: this.id,
            nombre: this.nombre,
            apellido: this.apellido,
            direccion: this.direccion,
            telefono: this.telefono,
            email: this.email,
            apodo: this.apodo,
            imagen: this.imagen,
        }
    }
}
