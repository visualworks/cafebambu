import React, {Component} from "react";
import Header from "header";
import Content from "content";
import Footer from "footer";

export default class Layout extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="layout">
                <Header config={this.props.config} />
                <Content config={this.props.config} />
                <Footer config={this.props.config} />
            </div>
        );
    }
}
