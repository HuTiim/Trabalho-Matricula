
const impCadastro=require("./CadastroAluno.js").fcadastro
const impMenu=require("./Menu.js").fmenu
const impListar=require("./ListaAlunos.js").fListar
const impLespecifico=require("./ListarEspecífico.js").flesp
const impAtualizar=require("./Atualizar.js").fatualizar
const impExcluir=require("./excluir.js").fexclu
const impMedia=require("./CalcularMedia.js").fmed


      function main() {
         while (true) {
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
            if (Vmenu==6) {
               VCmed=impMedia()   
            }
            if (Vmenu==0) {
               break
            }
         }
         }
      main()