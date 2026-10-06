const header = document.querySelector('header')

header.innerHTML = `
<div class="divInteracao">
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
            </div>
            <div class="links">
                <nav>
                    <ul>
                        <li><a href="../index.html">INÍCIO</a></li>
                        <li><a href="tecnologias.html">TECNOLOGIAS</a></li>
                        <li><a href="projetos.html">PROJETOS</a></li>
                        <li><a href="">AÇÕES</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="botoesMenu">
            <button>Login</button>
            <button>Cadastrar-se</button>
        </div>
`