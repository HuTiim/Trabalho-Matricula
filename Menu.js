const SENSACHOCRIVEL=require ('readline-sync').question;

function menu() {
    console.log("1 -Cadastrar Aluno-")
    console.log("2-Listar Todos os Alunos-")
    console.log("3-Listar Aluno em Especifico-")
    console.log("4-Atualizar Aluno-")
    console.log("5-Excluir Aluno-")
    console.log("6-Media-")
    console.log("0-Sair")

let n=(parseInt(SENSACHOCRIVEL("Digitie o que deseja:")))    

    if (n==1) {
        return n
    }
      else if(n==2){
        return n
      }
      else if(n==3){
        return n
      }
      else if(n==4){
        return n
      }
      else if(n==5){
        return n
      }
      else if(n==6){
        return n
      }
      else if(n==0){
      }
      else{
        console.log("1 -Cadastrar Aluno-")
        console.log("2-Listar Todos os Alunos-")
        console.log("3-Listar Aluno em Especifico-")
        console.log("4-Atualizar Aluno-")
        console.log("5-Excluir Aluno-")
        console.log("6-Media-")
        console.log("0-Sair")
      }       
}
menu()
