import React, {Component} from 'react';
import HeaderNavIcon from 'header-nav-icon';
import HeaderNavList from 'header-nav-list';

export default class Header extends Component {
    constructor(props){
        super(props);
        let config = this.props.config;
        // let i = 0;
        // this.state = {
        //     bannersDesktop: {backgroundImage: 'url(' + this.props.config.bannersDesktop[i].img + ')'},
        //     bannersMobile: {backgroundImage: 'url(' + this.props.config.bannersMobile[i].img + ')'}
        // };
        // setInterval(() => {
        //     this.setState(previousBanner => {
        //         return {
        //             bannersDesktop: {backgroundImage: 'url(' + this.props.config.bannersDesktop[i].img + ')'},
        //             bannersMobile: {backgroundImage: 'url(' + this.props.config.bannersMobile[i].img + ')'}
        //         };
        //     })
        //     i++;
        //     if(i === this.props.config.bannersDesktop.length){
        //         i = 0;
        //     }
        // }, 6500);
    }
    render(){
        let config = this.props.config;

        let nav = [];
        config.navigation.forEach(function(element, index){
            let navItem = <HeaderNavList item={element.item} url={element.url} childs={element.childs} />;
            nav.push(navItem);
        });

        let icons = [];
        config.social.forEach(function(element, index){
            let icon = <HeaderNavIcon url={element.url} icon={element.icon} />
            icons.push(icon);
        });

        // let bannersDesktop = this.state.bannersDesktop;
        // let bannersMobile = this.state.bannersMobile;

        return (
            <div>
                <section className="hero hero-desktop is-fullheight is-hidden-touch">
                    <div className="hero-head">
                        <header className="navbar is-transparent is-primary">
                            <div className="container">
                                <div className="navbar-start">
                                    {nav}
                                </div>
                                <div className="navbar-end">
                                    {icons}
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="hero-body hero-home">
                        <a href={this.props.config.siteUrl}>
                            <figure className="image logo">
                                <img src={this.props.config.logoRetina} alt={this.props.config.siteName} title={this.props.config.siteName + " - " + this.props.config.siteDescription} />
                            </figure>
                        </a>
                    </div>
                </section>
                <section className="hero hero-mobile is-fullheight is-primary is-hidden-desktop"></section>
            </div>
        );
    }
}
