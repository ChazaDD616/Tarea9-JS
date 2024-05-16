class CAutores {
    constructor(nombre, apellido, nacionalidad, mejorObra, anioPublicacion, edadPublicacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.mejorObra = mejorObra;
        this.anioPublicacion = anioPublicacion;
        this.edadPublicacion = edadPublicacion;
    }
}

const vectorAutores = [
    new CAutores("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new CAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1966, 56),
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38),
    new CAutores("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29),
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)
];

function listarAutores(filtro) {
    document.write("<table border = 2> <tr>");
    document.write("<th colspan = 6> Todos los autores </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Apellido </th>");
    document.write("<th> Nacionalidad </th>");
    document.write("<th> Mejor Obra </th>");
    document.write("<th> Año de Publicacion </th>");
    document.write("<th> Edad en Publicacion </th> </tr>");
    for (const autor of vectorAutores) {
        if (filtro(autor)) {
            document.write("<tr>");
            document.write("<td>" + autor.nombre + "</td>");
            document.write("<td>" + autor.apellido + "</td>");
            document.write("<td>" + autor.nacionalidad + "</td>");
            document.write("<td>" + autor.mejorObra + "</td>");
            document.write("<td>" + autor.anioPublicacion + "</td>");
            document.write("<td>" + autor.edadPublicacion + "</td>");
            document.write("</tr>");
        }
    }
    document.write("</table>");
}

function listarAutoresArgentinos() {
    document.write("<p>Autores Argentinos:</p>");
    for (const autor of vectorAutores) {
        if (autor.nacionalidad === "Argentino") {
            document.write(autor.nombre + " " + autor.apellido + " " + "<br>");
        }
    }
}


function listarSegunAnio() {
    document.write("<p>Autores que publicaron libros entre 1960 y 1980:</p>");
    const anioInicial = 1960;
    const anioFinal = 1980;
    for (const autor of vectorAutores) {
        if (autor.anioPublicacion >= anioInicial && autor.anioPublicacion <= anioFinal) {
            document.write(autor.nombre + " " + autor.apellido + " " + "<br>");
        }
    }
}

function promedioEdad() {
    let totalEdad = 0;
    for (const autor of vectorAutores) {
        totalEdad += autor.edadPublicacion;
    }
    const promedio = totalEdad / vectorAutores.length;
    document.write("<p>Edad promedio: " + promedio + "</p>");
}

listarAutores(() => true);
listarAutoresArgentinos();
listarSegunAnio();
promedioEdad();
