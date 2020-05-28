import React, { Component } from 'react'

class Api extends Component{
    state = {
        data : []
    }

    componentWillMount(){

        let url = "http://127.0.0.1:8000/comics/heart-and-brain/";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data : data
            })
        })
    }

    render(){
        let result = this.state.data;
        console.log(result);
        const disp = result["results"]&& result["results"].map(i => {
        return ([<li>{i.comic_title}</li>,
                <img src={i.comic_link} height="200" width="200" alt={i.comic_title}></img>])
        })
        return <ul>{disp}</ul>
    }
}

export default Api
