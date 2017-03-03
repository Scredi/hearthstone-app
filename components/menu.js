import React from "react"
import Paper from "material-ui/Paper"
import { List } from "material-ui/List"
import Link from "next/link"

const style = {
    flex: "0 0 15em",
    order: -1,
    display: "flex",
    flexDirection: "column"
}

export default () => {
    return (
        <Paper style={style}>
            <List>
                <Link href="/"><a style={{ color: "#fff", textDecoration: "none", margin: "20px" }}>Accueil</a></Link>
                <Link href="/cards"><a style={{ color: "#fff", textDecoration: "none", margin: "20px" }}>Cartes</a></Link>
            </List>
        </Paper>
    )
}