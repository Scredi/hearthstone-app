import React from "react"
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import injectTapEventPlugin from "react-tap-event-plugin"
import Menu from "./menu"
import AppBar from "./appBar"

try {
    injectTapEventPlugin()
}
catch(e) {

}

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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

                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                        <header>
                            <AppBar/>
                        </header>
                        <div style={{ display: "flex", flex: "1", backgroundColor: "#edecec" }}>
                            <div style={{ flex: "1" }}>
                                { this.props.children }
                            </div>
                            <Menu/>
                        </div>
                    </div>
                </MuiThemeProvider>

            </div>
        )
    }
}