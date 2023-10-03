import "./Header.css"

export default function Header() {
    return <header className="header">
        <a href="/">
            <img src="https://oceanbrasil.com/assets/logo.svg" alt="Logo da Ocean" />
        </a>

        <nav>
            <a href="/">Home</a>

            <a href="/criar-personagem">Criar personagem</a>
        </nav>
    </header>
}