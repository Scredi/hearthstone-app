import Link from "next/link"
import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = "Hearthstone-app" }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" type="text/css" href="/static/styles.css"/>
        </Head>

        <header>
            <nav>
                <Link href="/"><a>Accueil</a></Link>
                <Link prefetch href="/cards"><a>Cartes</a></Link>
            </nav>
        </header>

        { children }

    </div>
)