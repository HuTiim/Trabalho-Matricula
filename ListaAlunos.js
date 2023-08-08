const SENSACHOCRIVELREAD= require("fs").readFileSync


        function Listar() {
            let Alunos=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
res=Alunos.split("\n")
res=res.slice(2)
Div=res
Div=Div.split(";")
console.log(Div)


        }

Listar()