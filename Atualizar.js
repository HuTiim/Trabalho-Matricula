const { join } = require("path");

const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;
const SENSACHOCRIVELWRITE= require("fs").writeFileSync


            function Atualizar() {
            let Id=parseInt(SENSACHOCRIVEL("informe o Id:"))
            let Atu=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
            s=Atu.split("\n")
            controle=1
            for(let i=2;i<s.length;i++){
                z=s[i].split(";")
                if (Id==z[0]) {
                    controle=0
                    let I=Id
                    Nome=SENSACHOCRIVEL("Nome:")
                    Matricula=SENSACHOCRIVEL("Matricula:")   
                    Idade=SENSACHOCRIVEL("Idade:")    
                    Nota=SENSACHOCRIVEL("Nota:")   
                    z[0]=I
                    z[1]=Nome
                    z[2]=Matricula
                    z[3]=Idade
                    z[4]=Nota
                    let registro=`${z[0]};${z[1]};${z[2]};${z[3]};${z[4]}`                        
                    s[i]=registro
                    let Atualizado=(s.join('\n'));
                    SENSACHOCRIVELWRITE("BancoDeDados.csv",Atualizado.toString(),{flag:"w"})


                }
                }
}
exports.fatualizar=Atualizar