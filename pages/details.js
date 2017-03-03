import React from "react"
import Layout from "../components/layout"
import "isomorphic-fetch"

export default class Details extends React.Component {
    static async getInitialProps ({ query }) {
        const res = await fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${query.id}?locale=frFR`, {
            headers: {
                "X-Mashape-Key": "DHjpkilde9mshW0xc4oDeBjfSedwp1E0BJWjsnZdBTsYzWKbi8"
            }
        })
        const json = await res.json()
        return {
            card: json
        }
    }

    render () {
        return (
            <Layout>
                <main className="details">
                    <div className="details-table">
                        <table>
                            <tbody>
                            <tr>
                                <td><strong>Nom</strong></td>
                                <td>{this.props.card[0].name}</td>
                            </tr>
                            <tr>
                                <td><strong>Coût en mana</strong></td>
                                <td>{this.props.card[0].cost}</td>
                            </tr>
                            <tr>
                                <td><strong>Attaque</strong></td>
                                <td>{this.props.card[0].attack}</td>
                            </tr>
                            <tr>
                                <td><strong>Vie</strong></td>
                                <td>{this.props.card[0].health}</td>
                            </tr>
                            <tr>
                                <td><strong>Race</strong></td>
                                <td>{this.props.card[0].race}</td>
                            </tr>
                            <tr>
                                <td><strong>Description</strong></td>
                                <td>{this.props.card[0].text}</td>
                            </tr>
                            <tr>
                                <td><strong>Texte d'ambiance</strong></td>
                                <td>{this.props.card[0].flavor}</td>
                            </tr>
                            <tr>
                                <td><strong>Rareté</strong></td>
                                <td>{this.props.card[0].rarity}</td>
                            </tr>
                            <tr>
                                <td><strong>Classe</strong></td>
                                <td>{this.props.card[0].playerClass}</td>
                            </tr>
                            <tr>
                                <td><strong>Type</strong></td>
                                <td>{this.props.card[0].type}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="details-img">
                        <img src={this.props.card[0].img}/>
                    </div>
                </main>
            </Layout>
        )
    }
}