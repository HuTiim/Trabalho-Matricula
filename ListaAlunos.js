const SENSACHOCRIVELREAD= require("fs").readFileSync


        function Listar() {
            let Alunos=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
            s=Alunos.split("\n")
            for (let i = 2; i<s.length; i++){
            let z=s[i].split(";")
            Pr=`Id:${z[0]}`
            Se=`Nome:${z[1]}`
            Te=`Matricula:${z[2]}`    
            Qu=`Idade:${z[3]}`    
            Qui=`Nota:${z[4]}`    
            console.log(Pr+"\n"+Se+"\n"+Te+"\n"+Qu+"\n"+Qui+"\n") 
            }
            }


exports.fListar=Listar