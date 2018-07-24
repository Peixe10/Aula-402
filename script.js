var botao = document.querySelector("#button");
// var vnome = document.querySelector("#nomeID");
// var vsobrenome = document.querySelector("#sobreID");
// var vemail = document.querySelector("#emailID");


botao.addEventListener("click", verificar);

function verificar(){

     var valor = false;
     verificarcampos(valor);
     if (valor=true){
     verificaEmail()}
;
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
     
     if (emailchk2.indexOf("@")==-1){
          alert("E-mail inválido (@)");
     }
     else if(emailchk2.split("@").length != 2){
          alert("Digite um @");
     }

     // console.log(emailchk2.charAt(2))
}