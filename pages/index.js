import React from "react"
import Layout from "../components/layout"

export default class Home extends React.Component {
    render () {
        return (
            <Layout title="Hearthstone app">
                <main className="main">
                    <p>
                        Bienvenu sur l'application hearthstone !
                    </p>
                </main>
            </Layout>
        )
    }
}