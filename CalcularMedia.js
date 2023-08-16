const SENSACHOCRIVELWRITE= require("fs").writeFileSync
const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;

function media(){
    let Ate=SENSACHOCRIVELREAD("BancoDeDados.csv",{encoding: "utf-8"})
    l = Ate.split("\n")
    let soma = 0
        for(i = 2; i < l.length; i++){
           z=l[i].split(";")
           soma = soma + parseFloat(z[4]) 
    }

    let resultado = parseFloat(soma / (l.length - 2))
    console.log(resultado)
    return resultado
}

exports.fmed=media