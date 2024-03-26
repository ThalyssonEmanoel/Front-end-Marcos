 #Esse bloco é para referenciar os comandos usados no geral

 #Comandos do teclado no vscode:
 - Shift+alt+down or up = Linha atual é duplicada para cima ou para baixo;
 - Alt+down or up = Linha atual é movimentada para cima ou para baixo;
 - Cntrl+[ = Substitui o tab;
 - Alt+Click = Inseri o curso em qualquer parte do código/documento;  
 
 #Comandos de CSS:
 - :root{--cor-linear:umaCorQualquer}--> Esse comando é par criar variáveis;

 - linear-gradient(to  right, var(--cor-linear))--> Esse é para conseguir fazer uma cor linear;

 - transform: translate(-50%, -50%)--> Serve para colocar um objeto em determinada coordenada;

 - .menu ul li:hover {}--> Defini uma classe específica para poder editar, o houver é quando o mouse passa por cima de
 objeto;
 
 - .menu ul li:last-child {}--> Indica que o último objetop daquela "classe" terá um ação/modificação;

 -justify-content: space-between(pode ter outros valores, como o around e o evenlyn)--> Coloca os elementos grudados no elemento pai, ou seja, caso haja 2 quadrados na linha horizontal, um irá para a direita e outro para a esquerda, caso haja 3, um ficará no meio, todos terão espaçamento iguais.

 #Comandos de Html:
 - <nav><ul><li>conteúdo</li><ul></nav>--> Normalmente usado para colocar palavras no cabeçalho;
 -<p>nfjahfj<span>aknfsnfk</span>asdnkand</p>--> O Span serve para por alguma função no meio da frase, por exemplo: mudr a cor, fonte e/ou por um link;
 -.exemplo*3--> Cria divs com o mesmo nome de classe na quantidade definida;


Testando para ver se a branch developer está funcionando certinho




css parte 5:
.rodape {
    background-color: var(--cor-azulEscuro);
    padding: 60px 0;
    font-family: var(--JoseFinsFonte);
    margin-left: -150px;
    margin-top: 100px;
}

.container3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}


.titulo {
    color: var(--azulAcabado);
    font-size: 20px;
    margin-bottom: 10px;
}

.contato-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.contato-item img {
    width: 25px;
    margin-right: 10px;
}

.textroda {
    color: var(--cor-branco);
    font-size: 16px;
}

.redes-sociais {
    margin-top: 20px; 
}

.Desenvolvidopo{
    color: var(--azulAcabado);
    font-size: 20px;
    margin-bottom: 10px;
    transform: translate(30%);
}
.logo{ 
    transform: translate(55%);
}
.ifro{
    transform: translate(150%);
}

.Vilhena{
    transform: translate(-70%,150%);
}

html parte 5:

<footer class="rodape">
        <div class="container3">
            <div class="contatos">
                <h3 class="titulo">Contato</h3>
                <div class="contato-item">
                    <img src="assets/images/Locate.png" alt="Locate">
                    <p class="textroda">Av. Tancredo Neves - n° 3845</p>
                </div>
                <div class="contato-item">
                    <img src="assets/images/Telefone.png" alt="Telefone">
                    <p class="textroda">(69) 3321-1777</p>
                </div>
                <div class="contato-item">
                    <img src="assets/images/Email.png" alt="Email" style="width: 40px; margin-right: 30px;margin-left: -10px;" >
                    <p class="textroda">fundacaoculturaldevilhena@gmail.com</p>
                </div>
                <div class="redes-sociais">
                    <h3 class="titulo">Nossas redes sociais</h3>
                    <img src="assets/images/Faebook.png" alt="Ícone do Facebook" >
                    <img src="assets/images/Instagram.png" alt="Ícone do instagram" style="width: 34px; margin-left: 5px;">
                </div>
            </div>
            <div class="Desenvolvido">
                <h3 class="Desenvolvidopo">Desenvolvido por</h3>
                <img src="assets/images/Fslab.png" alt="Logo da Fslab" class="logo">
                <img src="assets/images/IFROLOGO.png" alt="Logo do Ifro" class="ifro">
                <img src="assets/images/Vilhena.png" alt="Prefeitura de Vilhena" class="Vilhena">
            </div>
        </div>
    </footer> 