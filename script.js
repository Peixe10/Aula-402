var botao = document.querySelector("#button");
// var vnome = document.querySelector("#nomeID");
// var vsobrenome = document.querySelector("#sobreID");
// var vemail = document.querySelector("#emailID");


botao.addEventListener("click", verificar);

function verificar(){
     
     var valor = false;

     verificarcampos(valor);

     if (valor=true){
          verificaEmail()
     }
     
     verificaSenha();
}
     
     function verificarcampos(){
          
          let nomechk = document.querySelector("#nomeID").value;
          let sobrenchk = document.querySelector("#sobreID").value;
          let emailchk = document.querySelector("#emailID").value;
          
          if((nomechk=="")&&(sobrenchk=="")&&(emailchk=="")){
               alert("Preencha todos os dados");
          }
          else if((sobrenchk=="")&&(emailchk=="")){
               alert("Preencha o sobrenome e o email");
          }
          else if((sobrenchk=="")&&(nomechk=="")){
               alert("Preencha o nome e o sobrenome");
          }
          else if(sobrenchk==""){
               alert("Preencha o sobrenome");
          }
          else if((nomechk=="")&&(emailchk=="")){
               alert("Preencha o nome e o e-mail");
          }
          else if(nomechk==""){
               alert("Preencha o nome")
          }
          else if(emailchk==""){ 
               alert("Preencha o e-mail")}
               else{
                    valor = true;
               }
          }
          
          function verificaEmail (){
               
               let emailchk2 = document.querySelector("#emailID").value;

               // let posponto = ((emailchk2.split("@"))[1].split("."))[1].length;
               
               if (emailchk2.indexOf("@")==-1){
                    alert("E-mail inválido (@)");
               }
               else if(emailchk2.split("@").length != 2){
                    alert("Digite um @ no e-mail");
               }

               // if(posponto<=3){
               //      alert("Seu email deve ser gmail.com");
               // }
               
               //FALTA CONTROLAR O PONTO
               
               // console.log(emailchk2.charAt(2))
          }
          
          function verificaSenha(){
               
               let senhachk = document.querySelector("#senhaID").value;

               if (senhachk.length<=6){
                    alert("Sua senha deve ter pelo menor 6 caracteres")
               }               
          }