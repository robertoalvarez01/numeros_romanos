let num_user = prompt("ingrese un numero");

let recorrer = num_user.split("");

let almacenar = [];

recorrer.forEach(num => {
    almacenar.push(parseInt(num));
});

let temp_length = almacenar.length;

let nums_separados = [];

f = 0;
for (h = temp_length ; h > 0 ; h --){
    // if(h == temp_length){
    //     nums_separados.push(almacenar[(h-1)]);
    //     f++;
    // }else{
    //     nums_separados.push(almacenar[(h-1)] * (f * 10));
    //     f *= 10;
    // }
    nums_separados.push(almacenar[(h-1)]);
}

console.log(nums_separados);

decena = new Object;

decena.uno = "I";
decena.cinco = "V"
decena.diez = "X"

centena = new Object;

centena.uno = "X";
centena.cinco = "L"
centena.diez = "C"

mil = new Object;

mil.uno = "C";
mil.cinco = "D"
mil.diez = "M"

let final = "";

for(i = 0; i < temp_length ; i++){  
    switch (i) {
        case 0:
            x = decena;
            break;
    
        case 1:
            x = centena;
            break;
        
        case 2:
            x = mil;
            break;

        default:
            break;
    }

    function agregar(){
        let numero = "";
        while(nums_separados[i] > 0){
            switch (nums_separados[i]) {
                case 9:
                    numero += x.uno + x.diez;
                    nums_separados[i] -= nums_separados[i];
                    break;
                case 5:
                    numero += x.cinco;
                    nums_separados[i] -= nums_separados[i];
                    break;
                case 4:
                    numero += x.uno + x.cinco;
                    nums_separados[i] -= nums_separados[i];
                    break;
                default:
                    if (nums_separados[i] > 5) {
                        numero += x.cinco;
                        for(j = nums_separados[i] - 5; j > 0 ; j --){
                            numero += x.uno;
                        }
                        nums_separados[i] -= nums_separados[i];    
                    }else if(nums_separados[i] < 4){
                        for(j = nums_separados[i] ; j > 0 ; j --){
                            numero += x.uno;
                        }
                        nums_separados[i] -= nums_separados[i];
                    }
                    break;
            }
            // if (nums_separados[i] == 9){
            //     numero += x.uno + x.diez;
            //     nums_separados[i] -= 9;
            // }    
        }
        return numero;
    }

    final = agregar() + final;

}


console.log(almacenar);

console.log(nums_separados);

console.log(final);