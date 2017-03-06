import Navigation from "./navigation"
import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"
import React from "react"
import injectTapEventPlugin from "react-tap-event-plugin"

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

if (typeof window !== 'undefined') {
    injectTapEventPlugin();
}

export default class Layout extends React.Component {
    static async getInitialProps ({ children, title }) {
        return {
            children: children,
            title: title
        }
    }

    render () {
        return (
            <div>
                <Head>
                    <title>{ this.props.title }</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                    <link rel="stylesheet" type="text/css" href="/static/styles.css"/>
                </Head>

                    <Navigation/>
                    <div>
                        { this.props.children }
                    </div>
            </div>
        )
    }
}