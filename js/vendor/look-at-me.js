+function () {
    // Elementos
    var addButton = document.getElementById('agregar');
    var showButton = document.getElementById('mostrar');
    var searchButton = document.getElementById('buscar');
    var topTechButton = document.getElementById('top-tecnico');
    var topHseButton = document.getElementById('top-hse');
    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students);
    };



    // Manejadores de eventos


}();
