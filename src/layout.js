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
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <figure className="image logo">
                            <img src={this.props.config.logoRetina} alt={this.props.config.siteName} title={this.props.config.siteName + " - " + this.props.config.siteDescription} />
                        </figure>
                    </div>
                </div>
            </section>
        );
    }
}
