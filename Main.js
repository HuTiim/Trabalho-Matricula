const SENSACHOCRIVELWRITE= require("fs").writeFileSync
const SENSACHOCRIVELREAD= require("fs").readFileSync
const SENSACHOCRIVEL=require ('readline-sync').question;

let impCadastro=require("./CadastroAluno.js").fcadastro
let impMenu=require("./Menu.js").fmenu
let impListar=require("./ListaAlunos.js").fListar
let impLespecifico=require("./ListarEspecífico.js").flesp
let impAtualizar=require("./Atualizar.js").fatualizar
let impExcluir=require("./excluir.js").fexclu


function main() {
   Vmenu=impMenu()     
   if (Vmenu==1) {
   Vcada=impCadastro()
   }   
   if (Vmenu==2) {
   Vlista=impListar() 
   }
   if (Vmenu==3) {
   VLesp=impLespecifico() 
   }
   if (Vmenu==4) {
   VAtu=impAtualizar() 
   }
   if (Vmenu==5) {
   VExc=impExcluir()   
   }
}
main()