const header = document.querySelector('header')

header.innerHTML = `
<div class="divInteracao">
            <div class="logo">
                <img src="assets/logo.png" alt="logo">
            </div>
            <div class="links">
                <nav>
                    <ul>
                        <li><a href="index.html">INÍCIO</a></li>
                        <li><a href="Paginas/">TECNOLOGIAS</a></li>
                        <li><a href="Paginas/">PROJETOS</a></li>
                        <li><a href="Paginas/">AÇÕES</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="botoesMenu">
            <button>Login</button>
            <button>Cadastrar-se</button>
        </div>
`

const footer = document.querySelector('footer')

footer.innerHTML = `
     <div class="textoContainer">
            <div class="textoEInfos">
                <img src="assets/logo.png" alt="logo">
                <p>Tecnologia livre, feita para durar. Desenvolvido por uma comunidade global focada em reduzir o lixo
                    eletrônico através de sistemas eficientes e sustentáveis.</p>
            </div>
            <div class="linksContainer">
                <h6>Redes Sociais</h6>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
                <a href="#">Whatsapp</a>
            </div>
            <div class="linksContainer">
                <h6>Links</h6>
                <a href="index.html">Início</a>
                <a href="Paginas/">Tecnologias</a>
                <a href="Paginas/">Propjetos</a>
                <a href="Paginas/">Ações</a>
            </div>
        </div>
        <div class="copyrightContainer">
            <p>2026&copy Tech Sustentavel</p>
        </div>
`