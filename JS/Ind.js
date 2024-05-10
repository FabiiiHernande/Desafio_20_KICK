function calcular_Media(){

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    

    let media = parseFloat((nota1 + nota2 + nota3)/3);

    
    
    let div = document.getElementById("resp");

    let text = "";

    if(media >= 6){
        text = "Aluno Aprovado! Média = " +media;

        }else{
        
            text = "Aluno Reprovado! Média = " +media;
        
        }

           

    div.innerHTML = text;
        
}