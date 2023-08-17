const SENSACHOCRIVELWRITE= require("fs").writeFileSync
const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;

function excluir(){
    let Id = parseInt(SENSACHOCRIVEL("informe o id :"))
    let conteudo=SENSACHOCRIVELREAD("BancoDeDados.csv", {encoding: "utf-8"})
    q=conteudo.split("\n")
    controle=1
    for (let i = 2; i<q.length; i++){
        let p=q[i].split(";")
        if (Id==p[0]){
        controle=0    
        q.splice(i,1)
        let excluido=(q.join("\n"))
        SENSACHOCRIVELWRITE("BancoDeDados.csv",excluido.toString(), {flag: "w"});
        }
        if(controle==1){
            console.log("Aluno nao encontrado")
            break
        }
    }
}
exports.fexclu=excluir