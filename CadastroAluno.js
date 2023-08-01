const SENSACHOCRIVELWRITE= require("fs").writeFileSync
const SENSACHOCRIVELREAD= require("fs").readFileSync

const SENSACHOCRIVEL=require ('readline-sync').question;
let i=1


function Cadastrar() {
    while(Cadastrar){
        Nome=SENSACHOCRIVEL("Nome:")
        Matricula=SENSACHOCRIVEL("Matricula:")
        parseInt(Idade=SENSACHOCRIVEL("Idade:"))
        parseInt(Nota=SENSACHOCRIVEL("Nota:"))
let registro=(`${i};${Nome};${Matricula};${Idade};${Nota}`)    
let texto=registro+"\n"
SENSACHOCRIVELWRITE("BancoDeDados.csv",texto.toString(),{flag:"a"})
i++
   n=parseInt(SENSACHOCRIVEL("1 p/ Novo Cadastro 2 p/parar:"))
   if (n!=1) {
        break        
    }    
    }
}
Cadastrar()