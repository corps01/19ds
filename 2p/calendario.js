class Calendar {
    
    isLeapYear(y) {
        return (y % 4 == 0 && y % 100 != 0 || y % 400 == 0);
    }


    todayPlus(d, n) {
        let mod=0;
        //encontrar dia 
        switch (d) {
            case "lunes":
                n += 1;
                break;
            case "martes":
                n += 2;
                break;
            case "miercoles":
                n += 3;
                break;
            case "jueves":
                n += 4;
                break;
            case "viernes":
                n += 5;
                break;
            case "sabado":
                n += 6;
                break;
            case "domingo":
                n = n;
                break;
            default:
                "escribe dia valido, con el formato correcto 'dia'";
                break;
        }

        //mod con 7 
        switch (n % 7) {
            case 0:
                n = 7;
                console.log("domingo");
                break;
            case 1:
                n = 1;
                console.log("lunes");
                break
            case 2:
                n = 2;
                console.log("martes");
                break
            case 3:
                n = 3;
                console.log("miercoles");
                break;
            case 4:
                n = 4;
                console.log("jueves");
                break;
            case 5:
                n = 5;
                console.log("viernes");
                break;
            case 6:
                n = 6;
                console.log("sabado");
                break;
        }
    }


    firstDayYear(y) {
        let dia;
        dia = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100) + Math.floor((y - 1) / 400)) % 7;
        switch (dia) {
            case 0:
                return "domingo";
                break;
            case 1:
                return "lunes";
                break;
            case 2:
                return "martes";
                break;
            case 3:
                return "miercoles";
                break;
            case 4:
                return "jueves";
                break;
            case 5:
                return "viernes";
                break;
            case 6:
                return "sabado";
                break;
            default:
                return"error";
                break;
        }
        
    }
}


let test = new Calendar();
console.log(test.isLeapYear(2020)); 
console.log(test.isLeapYear(2019)); 

console.log(test.firstDayYear(2014));


console.log(test.todayPlus("jueves",6))