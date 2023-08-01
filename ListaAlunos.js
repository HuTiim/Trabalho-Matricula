const SENSACHOCRIVELREAD= require("fs").readFileSync
let Alunos=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
console.log(Alunos)