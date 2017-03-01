import React from "react"
import Layout from "../components/layout"
import "isomorphic-fetch"

export default class Cards extends React.Component {
    static async getInitialProps () {
        const res = await fetch("https://omgvamp-hearthstone-v1.p.mashape.com/cards?attack=8&locale=frFR", {
            headers: {
                "X-Mashape-Key": "DHjpkilde9mshW0xc4oDeBjfSedwp1E0BJWjsnZdBTsYzWKbi8"
            }
        })
        const json = await res.json()
        for (let i in json) {
            console.log(typeof i)
        }
        return {
            cards: json
        }
    }

    render () {
        return (
            <Layout title="Hearthstone-cards">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Set</th>
                                <th>Nom</th>
                                <th>Rareté</th>
                                <th>Mana</th>
                                <th>Attaque</th>
                                <th>Santé</th>
                                <th>Classe</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </Layout>
        )
    }
}