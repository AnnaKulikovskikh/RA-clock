import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props)
        this.zone = 3
        this.state = {
            //time: new Date().toLocaleTimeString()
            time: (new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000*this.zone))).toLocaleTimeString()
        }
    }

    componentDidMount() {
        // const d = new Date()
        // const utc = d.getTime() - (d.getTimezoneOffset() * 60000)
        // const nd = new Date(utc + (3600000*0)) //  где 0 - timeZone
        // nd.toLocaleString()

        this.timerId = setInterval(() => {
            this.setState(preState => ({ time: (new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000*this.zone))).toLocaleTimeString() }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    
    render() {
        //console.log(new Date().getTimezoneOffset()/60)
        return(
            <div className="clock">{this.state.time}</div>
        )
    }
}

export default Clock