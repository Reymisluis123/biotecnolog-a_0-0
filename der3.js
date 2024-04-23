document.addEventListener("DOMContentLoaded", function() {
    // Funciones de la biotecnología
    var funciones = [
        "Producción de medicamentos y vacunas",
        "Mejora de cultivos agrícolas",
        "Bioremediación",
        "Producción de alimentos",
        "Terapia génica",
        "Desarrollo de biocombustibles",
        "Biotecnología ambiental",
        "Ingeniería de tejidos",
        "Diseño de organismos sintéticos",
        "Bioinformática",
        "Cultivo de células madre",
        "Nanobiotecnología"
    ];

    // Obtener la lista de funciones
    var listaFunciones = document.getElementById("listaFunciones");

    // Limpiar la lista de funciones por si hay contenido previo
    listaFunciones.innerHTML = "";

    // Agregar cada función a la lista
    funciones.forEach(function(funcion) {
        var listItem = document.createElement("li");
        listItem.textContent = funcion;
        listaFunciones.appendChild(listItem);
		

    });
});
