import React from "react"
import MuiAppBar from "material-ui/AppBar"
import Link from "next/link"

export default () => {
    const title = <Link href="/"><a  style={{ color: "#fff", textDecoration: "none" }}>Hearthstone App</a></Link>
    return <MuiAppBar title={title} style={{ color: "#fff" }}/>
}