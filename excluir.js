const read =  require("fs").readFileSync
const write =  require("fs").writeFileSync
const input=require('readline-sync').question;
id = 0

function excluir(){
    id = parseInt(input("informe o id :"))
    conteudo = read("BancoDeDados.csv", {encoding: "utf-8"})
    lista = conteudo.split("\n")
    for (let i = 2; i<lista.length; i++){
        linha=lista[i].split(";")
        if (id==linha[0]){
           lista.splice(i,1)
          let excluido=(lista.join("\n"))
          write("BancoDeDados.csv",excluido.toString(), {flag: "w"});
        }
        if(id!=linha[0]){
            input("Aluno nao encontrado")
            break
        }
    }
}
excluir()