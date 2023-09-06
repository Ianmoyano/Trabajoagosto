var Alumno = /** @class */ (function () {
    function Alumno(Nombre, Apellido, DNI, PromedioFinal) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.DNI = DNI;
        this.PromedioFinal = this.calcularPromedio(PromedioFinal);
    }
    Alumno.prototype.calcularPromedio = function (PromedioFinal) {
        if (PromedioFinal.length == 0) {
            return 0;
        }
        var suma = PromedioFinal.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
        var promedio = suma / PromedioFinal.length;
        return promedio;
    };
    return Alumno;
}());
var Alumno1 = new Alumno("Pedro", "Sánchez", 36543234, [4, 7, 7, 5, 8, 9, 6]);
var Alumno2 = new Alumno("Ezequiel", "Morales", 27865342, [7, 8, 7, 6, 8, 9, 10]);
var Alumno3 = new Alumno("Anabella", "Maria Jose", 35987209, [7, 7, 7, 9, 8, 9, 9]);
var Alumno4 = new Alumno("Josefina", "Lopez", 43578923, [10, 9, 9, 7, 7, 10, 8]);
console.log(Alumno1);
console.log(Alumno2);
console.log(Alumno3);
console.log(Alumno4);
var listaDeAlumnos = [Alumno1, Alumno2, Alumno3, Alumno4];
var sumaPromedios = 0;
for (var i = 0; i < listaDeAlumnos.length; i++) {
    sumaPromedios += listaDeAlumnos[i].PromedioFinal;
}
var promedioTotal = sumaPromedios / listaDeAlumnos.length;
console.log("El promedio total de los alumnos es:", promedioTotal);
