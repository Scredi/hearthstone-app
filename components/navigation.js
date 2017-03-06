import React from "react"
import Link from "next/link"
import AppBar from "material-ui/AppBar"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"

export default class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {open: false}
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    render () {
        const title = <Link href="/"><a  style={{ color: "#fff", textDecoration: "none" }}>Hearthstone App</a></Link>
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar title={title} style={{ color: "#fff" }} onLeftIconButtonTouchTap={this.handleToggle}/>
                    <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                        <Link prefetch href="/">
                            <MenuItem style={{ textAlign: "center" }} onTouchTap={this.handleClose}>Accueil</MenuItem>
                        </Link>
                        <Link prefetch href="/cards">
                            <MenuItem style={{ textAlign: "center" }} onTouchTap={this.handleClose}>Cartes</MenuItem>
                        </Link>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}