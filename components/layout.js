import Link from "next/link"
import Head from "next/head"

export default ({ children, title = "Hearthstone-app" }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>

        <header>
            <nav>
                <Link href="/"><a>Accueil</a></Link>
                <Link prefetch href="/cards"><a>Cartes</a></Link>
            </nav>
        </header>

        { children }

        <footer>
            Fait avec passion, par Petronio Maxime 2017.
        </footer>
    </div>
)