const SENSACHOCRIVEL=require ('readline-sync').question;
let i=1


function Cadastrar() {
    while(true){
        Nome=SENSACHOCRIVEL("Nome:")
        Matricula=SENSACHOCRIVEL("Matricula:")
        parseInt(Idade=SENSACHOCRIVEL("Idade:"))
        parseInt(Nota=SENSACHOCRIVEL("Nota:"))
console.log(`${i};${Nome};${Matricula};${Idade};${Nota}`)    
i++
   n=parseInt(SENSACHOCRIVEL("1 p/ Novo Cadastro 2 p/parar:"))
   if (n!=1) {
        break        
    }    
    }
}
Cadastrar()