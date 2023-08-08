const SENSACHOCRIVELWRITE= require("fs").writeFileSync
const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;

function Cadastrar() {
    while(true){
        let I=1
        Nome=SENSACHOCRIVEL("Nome:")
        Matricula=SENSACHOCRIVEL("Matricula:")
        parseInt(Idade=SENSACHOCRIVEL("Idade:"))
        parseInt(Nota=SENSACHOCRIVEL("Nota:"))
        
        let imp=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})

        res=imp.split("\n")
        const arr =res
        let ultimo = arr[arr. length - 1]
        ultimo=ultimo.split(";")
        
        i=parseInt(ultimo[0])
        if (res==res[2]) {
            I=1
        }
        if (res>res[2]) {
            I=i+1
        }
        
        let registro=([`${I};${Nome};${Matricula};${Idade};${Nota}`])    
        let texto="\n"+registro

        SENSACHOCRIVELWRITE("BancoDeDados.csv",texto.toString(),{flag:"a"})

        n=parseInt(SENSACHOCRIVEL("1 p/ Novo Cadastro 2 p/parar:"))
        
        if (n!=1) {
            break
        }
        I++
    }
}
Cadastrar()
