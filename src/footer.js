import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <a href={this.props.config.siteUrl}>
                            <figure className="image logo">
                                <img src={this.props.config.logoRetina} alt={this.props.config.siteName} title={this.props.config.siteName + " - " + this.props.config.siteDescription} />
                            </figure>
                        </a>
                        <p><strong>Cafe Bambú</strong> IVS, CVR 38594591<br />Griffenfeldsgade 24B, 2200 København N</p>
                        <p><small><span className="icon"><i className="fa fa-code"></i></span> with <span className="icon"><i className="fa fa-heart"></i></span> by <a href="https://www.visualworks.com.br" target="_blank" title="Visual Works - Hosting & Development">visual works</a>!</small></p>
                    </div>
                </div>
            </footer>
        );
    }
}
