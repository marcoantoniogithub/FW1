//Creditos: http://plnkr.co/edit/kjEMr49wI0YFMQsf0iuC?p=preview
//OBS: Foi adicionado o parametro "idCampo" e "velocidade" as funcoes left(right, up e down)ArrowPressed()
//Exemplo: leftArrowPressed("nave", 5)  // movimento lento
//Exemplo: leftArrowPressed("nave", 25)  // movimento medio
//Exemplo: leftArrowPressed("nave", 45)  // movimento rapido
personagem = localStorage.getItem('personagem');
var direcao = "direita";
var g_incrementoVelocidade = 0;

function leftArrowPressed(idCampo, velocidade) {
    var element = document.getElementById(idCampo);
    element.style.left = parseInt(element.style.left) - (velocidade + g_incrementoVelocidade) + 'px';
    if (parseInt(element.style.left) < 0) element.style.left = "0px";
    
    if (direcao == "esquerda") {
        if(personagem == 'personagem1'){
            document.getElementById("mario").src = "marioLeft.gif";
            direcao = "direita";
            g_incrementoVelocidade = 0;
        }else {
            document.getElementById("mario").src = "luigiEsquerda_final.gif";
            direcao = "direita";
            g_incrementoVelocidade = 0;
        }
    }
    else if (g_incrementoVelocidade < 5) g_incrementoVelocidade += 0.1;
    }

    function rightArrowPressed(idCampo, velocidade) {
    var element = document.getElementById(idCampo);
      
    element.style.left = parseInt(element.style.left) + (velocidade + g_incrementoVelocidade) + 'px';
    if (parseInt(element.style.left) > (window.innerWidth-element.clientWidth)) element.style.left = (window.innerWidth-element.clientWidth-1)+"px";

    if (direcao == "direita") {
        if(personagem == 'personagem1'){
            document.getElementById("mario").src = "marioRight.gif";
            direcao = "esquerda";
            g_incrementoVelocidade = 0;
        }else {
            document.getElementById("mario").src = "luigiDireita_final.gif";
            direcao = "esquerda";
            g_incrementoVelocidade = 0;
        }
        
    }    
    else if (g_incrementoVelocidade < 5) g_incrementoVelocidade += 0.1;
    }

    function upArrowPressed(idCampo, velocidade) {
    var element = document.getElementById(idCampo);
    element.style.top = parseInt(element.style.top) - velocidade + 'px';
    }

    function downArrowPressed(idCampo, velocidade) {
    var element = document.getElementById(idCampo);
    element.style.top = parseInt(element.style.top) + velocidade + 'px';
    }

    function moveSelection(evt, idCampo, velocidade) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed(idCampo, velocidade);
            
            break;
            case 39:
            rightArrowPressed(idCampo, velocidade);
            
            break;
            case 38:
            //upArrowPressed(idCampo, velocidade);
            break;
            case 40:
            //downArrowPressed(idCampo, velocidade);
            break;
            }
        };

function habilitaMovimentoTeclado(idObjeto, veloc)
{
  window.addEventListener('keydown', function(e){moveSelection(e, idObjeto, veloc);}, false);

}
