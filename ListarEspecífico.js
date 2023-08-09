const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;

function Lesp(){
    Id=parseInt(SENSACHOCRIVEL("informe o Id:"))
    let Aesp=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
    s=Aesp.split("\n")
    controle=1
    for (let i = 2; i<s.length; i++){
        z=s[i].split(";")
        if (Id==z[0]) {
            controle=0
            Pr=`Id:${z[0]}`
            Se=`Nome:${z[1]}`
            Te=`Matricula:${z[2]}`    
            Qu=`Idade:${z[3]}`    
            Qui=`Nota:${z[4]}`    
            let Especifico=(Pr+"\n"+Se+"\n"+Te+"\n"+Qu+"\n"+Qui+"\n")
            console.log(Especifico)

    }
    }
    if (controle==1) {
        console.log("Aluno não Encontrado")
    }
        


}
Lesp()