class Alumno {
    protected Nombre: string
    protected Apellido: string
    protected DNI: number
    public PromedioFinal: number
    constructor(Nombre: string, Apellido: string, DNI: number, PromedioFinal: number[]) {
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.DNI = DNI
        this.PromedioFinal = this.calcularPromedio(PromedioFinal)
    }
    calcularPromedio(PromedioFinal: number[]): number {
        if (PromedioFinal.length == 0) {
            return 0;
        }

        let suma = PromedioFinal.reduce((acumulador, numero) => acumulador + numero, 0);
        let promedio = suma / PromedioFinal.length;

        return promedio;
    }

}


let Alumno1 = new Alumno("Pedro", "Sánchez", 36543234, [4, 7, 7, 5, 8, 9, 6])
let Alumno2 = new Alumno("Ezequiel", "Morales", 27865342, [7, 8, 7, 6, 8, 9, 10])
let Alumno3 = new Alumno("Anabella", "Maria Jose", 35987209, [7, 7, 7, 9, 8, 9, 9])
let Alumno4 = new Alumno("Josefina", "Lopez", 43578923, [10, 9, 9, 7, 7, 10, 8])
console.log(Alumno1)
console.log(Alumno2)
console.log(Alumno3)
console.log(Alumno4)

let listaDeAlumnos: Alumno[] = [Alumno1, Alumno2, Alumno3, Alumno4];

let sumaPromedios = 0;
for (let i = 0; i < listaDeAlumnos.length; i++) {
    sumaPromedios += listaDeAlumnos[i].PromedioFinal;
}

let promedioTotal = sumaPromedios / listaDeAlumnos.length;

console.log("El promedio total de los alumnos es:", promedioTotal)
