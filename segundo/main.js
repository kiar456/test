let personas = [];

function escribir(personas) {
    const divPersonas = document.getElementById('personas');
        limpiar();

    for (let i = 0; i < personas.length; i++) {
        const personaHTML = `<div class="Persona">
        <span onclick="eliminar(${i})" class="EliminarPersona">x</span>
        <span>${personas[i].documento}</span>
        <span>${personas[i].apellidos}, ${personas[i].nombres}</span>
        <span>${personas[i].localidad}, ${personas[i].fecNac}</span>
    </div>`

        divPersonas.innerHTML += personaHTML;
    }
}
function eliminar(index){
    personas.splice(index, 1);
    escribir(personas);
}

function limpiar(){
    const divPersonas = document.getElementById('personas');
    divPersonas.innerHTML = "";
}
function eliminarTodos(){
    personas = [];
    limpiar();

}

function alerta() {
    const documento = document.getElementById('documento').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const fecNac = document.getElementById('fecNac').value;
    const localidad = document.getElementById('localidad').value;

    const persona = {
        documento,
        apellidos,
        nombres,
        localidad,
        fecNac
    }

    personas.push(persona);
    escribir(personas);
}