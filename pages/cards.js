import React from "react"
import Layout from "../components/layout"
import Link from "next/link"
import LazyLoad from "react-lazyload"
import "isomorphic-fetch"

export default class Cards extends React.Component {
    static async getInitialProps () {
        const res = await fetch("https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=frFR", {
            headers: {
                "X-Mashape-Key": "DHjpkilde9mshW0xc4oDeBjfSedwp1E0BJWjsnZdBTsYzWKbi8"
            }
        })
        const json = await res.json()
        return {
            cards: json
        }
    }

    render () {
        let prop = this.props.cards

        const cards = []

        for (let i in prop) {
            let arr = prop[i]
            for (let index = 0; index < arr.length; index++) {
                cards.push(arr[index])
            }
        }

        return (
            <Layout title="Hearthstone cards">
                <main className="card-grid">
                    {cards.map((card, i) => {
                        return (
                            card.img ?
                                <LazyLoad height={275} offset={100} once key={i}>
                                    <div className="card">
                                        <Link href={`details?id=${card.cardId}`}>
                                            <img src={card.img ? card.img : ""}/>
                                        </Link>
                                    </div>
                                </LazyLoad> : ""
                        );
                    })}
                </main>
            </Layout>
        )
    }
}