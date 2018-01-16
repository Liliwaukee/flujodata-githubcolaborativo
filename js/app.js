var students = [];
var addButton = document.getElementById('agregar');
var showButton = document.getElementById('mostrar');
var searchButton = document.getElementById('buscar');
var result = document.getElementById("contenedor-estudiantes");

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    listShow(students)
    return students;
}



function studentAdd(student) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nameStudent = prompt("Ingresa el nombre de la estudiante");
    var scoreHSE = prompt("Ingresa los puntos HSE de la estudiante");
    var scoreTech = prompt("Ingresa los puntos Técnicos de la estudiante");

    var newStudent = {
      studentName: nameStudent,
      studentScoreHSE: scoreHSE,
      studentScoreTech: scoreTech
    }

    students.push(newStudent);
    /*newStudent retorna el último estudiante*/
    return newStudent;

}

addButton.addEventListener("click", studentAdd);

function show(students) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var result = "";
    result += "<div class='row'>";
    result += "<div class='col m12'>";
    result += "<div class='card blue-grey darken-1'>";
    result += "<div class='card-content white-text'>";
    result += "<p><strong>Nombre:</strong> " + students["studentName"] + "</p>";
    result += "<p><strong>Puntos Técnicos:</strong> " + students["studentScoreHSE"] + "</p>";
    result += "<p><strong>Puntos HSE:</strong> " + students["studentScoreTech"] + "</p>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    return result;

}



function listShow(array) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes
   var studentsList
   for(var i in array) {
        studentsList += show(array[i]);
    }
  return studentsList;
}




function search(studentName) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    studentName = prompt("Escribe el nombre de la estudiante que quieres encontrar");
    for(var student in students){
      if(studentName == students[student].studentName) {
         var searchStudent = students[student];
         console.log(searchStudent);
         return searchStudent;
      }
    }
}

searchButton.addEventListener("click", search);

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
