import React, {Component} from 'react';
import Tab from 'tab';

export default class Content extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){}
    render(){
        return (
            <div>
                <section id="content-about-us" className="section">
                    <div className="container">
                        <div className="columns content">
                            <div className="column is-hidden-desktop">
                                <a href={this.props.config.siteUrl}>
                                    <figure className="image">
                                        <img src={this.props.config.logoRetina} alt={this.props.config.siteName} title={this.props.config.siteName + " - " + this.props.config.siteDescription} />
                                    </figure>
                                </a>
                            </div>
                            <div className="column is-4">
                                <figure className="image about-us">
                                    <img src="/img/photo-about.jpg" alt="Bárbara, Christopher, Daniel and Karina" title="Bárbara, Christopher, Daniel and Karina" />
                                </figure>
                            </div>
                            <div className="column">
                                <h2 className="title">About us</h2>
                                <p>We are four friends that decided to open a coffee place where all lifestyles are welcome - There is always a choice for each of you. We don't serve fast food, we serve FRESH food as fast as we can. Our vision is simple: in our café, we are happy! We serve from our hearts as owners. We respect ALL customers philosophies and ideologies. We do teamwork, because we are friends. We have fun and enjoy our passion, because this is our second HOME! Come and enjoy our amazing gourmet style with the most delicious flavors and the special touch of Brazil, Chile and Denmark together in our kitchen. Cheers!</p>
                                <p>Daniel, Karina, Bárbara, Christopher.</p>
                            </div>
                            <div className="column is-3 about-us-logo is-hidden-touch">
                                <a href={this.props.config.siteUrl}>
                                    <figure className="image">
                                        <img src={this.props.config.logoRetina} alt={this.props.config.siteName} title={this.props.config.siteName + " - " + this.props.config.siteDescription} />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero is-info is-inverted">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="subtitle slogan"><span className="icon"><i className="fa fa-leaf"></i></span> We don't serve fast food. We serve fresh food as fast as we can. <span className="icon"><i className="fa fa-bolt"></i></span></h2>
                        </div>
                    </div>
                </section>
                <section className="section is-hidden-desktop">
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a href="http://www.cafebambu.dk/assets/menu-dansk.pdf" target="_blank" className="button primary">
                                    Menu Dansk
                                </a>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <a href="http://www.cafebambu.dk/assets/menu-english.pdf" target="_blank" className="button primary">
                                    Menu English
                                </a>
                            </div>
                        </div>
                    </nav>
                </section>
                <section id="content-contact" className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="fb-page" data-href="https://www.facebook.com/bambucph" data-tabs="timeline, events, messages" data-small-header="false" data-adapt-container-width="true" data-width="500" data-hide-cover="false" data-show-facepile="true" data-height="500">
                                    <blockquote cite="https://www.facebook.com/bambucph" className="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/bambucph">Café Bambú</a>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="column">
                                <div className="content">
                                    <h3 className="title has-text-primary">
                                        <span className="icon">
                                            <i className="fa fa-clock-o"></i>
                                        </span>
                                        &nbsp;We are open
                                    </h3>
                                    <p>Tuesday to Saturday, from 11h to 22h (but the kitchen closes at 21h).<br />Sunday from 11h to 20h.</p>
                                    <h3 className="title has-text-primary">
                                        <span className="icon">
                                            <i className="fa fa-bicycle"></i>
                                        </span>
                                        &nbsp;Café Bambú Takeaway!
                                    </h3>
                                    <p>Call and order your takeaway directly in Café Bambú on telephone 35 30 06 06.<br />
                                    Café Bambú, Griffenfeldsgade 24B, 2200 København N.</p>
                                    <h3 className="title has-text-primary">
                                        <span className="icon">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                        &nbsp;Keep in touch
                                    </h3>
                                    <p>If you liked us, tell your friends... If you didn't, tell us!<br />E-mail: <a href="mailto:contact@cafebambu.dk" target="_blank">contact@cafebambu.dk</a><br />Phone 35 30 06 06<br />Or via Facebook Messenger.</p>
                                    <p>Instagram <a href="https://wwww.instagram.com/bambucph" target="_blank">@bambucph</a> | Facebook <a href="https://wwww.facebook.com/bambucph" target="_blank">/bambucph</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section partners">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-three-fifths is-offset-one-fifth">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="columns">
                                            <div className="column is-narrow">
                                                <figure className="image is-128x128">
                                                    <img src="/img/supplier-logo-dansk-vegetarisk.png" alt="Dansk Vegetarisk Forening" title="Dansk Vegetarisk Forening" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                            <h3 className="title">Dansk Vegetarisk Forening</h3>
                                                <p>We have a collaboration with Dansk Vegetarisk Forening. All members get 10% discount off the entire bill.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section suppliers">
                    <div className="container content">
                        <h3 className="title"><span className="icon"><i className="fa fa-truck"></i></span> Our suppliers</h3>
                        <h4 className="subtitle">We have a wide selection of suppliers where we source our fresh and organic products from:</h4>
                        <div className="columns is-gapless is-multiline">
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-charitea.png" alt="With every purchase of ChariTea and Lemonaid you support projects making social change in developing countries." title="With every purchase of ChariTea and Lemonaid you support projects making social change in developing countries." />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-lemonaid.png" alt="LemonAid make soft drinks how they should be. With only the best organic ingredients and Fairtrade-certified." title="LemonAid make soft drinks how they should be. With only the best organic ingredients and Fairtrade-certified." />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-kontra.png" alt="Kontra Coffee is a Danish coffee roastery supplying us with the best organic quality coffee beans." title="Kontra Coffee is a Danish coffee roastery supplying us with the best organic quality coffee beans." />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-greengros.png" alt="Greens provides us with a wide range of organic foods." title="Greens provides us with a wide range of organic foods."/>
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-kjaer-sommerfeldt.png" alt="Kjær Sommerfeldt supplies us with a wide range of all organic wines." title="Kjær Sommerfeldt supplies us with a wide range of all organic wines." />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-craft-soda.png" alt="Craft Soda is a local Danish brewery making delicious and organic soda beverages. Made with lots of love and fresh fruits and herbs." title="Craft Soda is a local Danish brewery making delicious and organic soda beverages. Made with lots of love and fresh fruits and herbs." />
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img src="/img/supplier-logo-norrebro.png" alt="Nørrebro Bryghus is a local brewery where we buy our organic beer from." title="Nørrebro Bryghus is a local brewery where we buy our organic beer from." />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="content-find-us" className="hero">
                    <div className="hero-body hero-map is-marginless is-paddingless">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8996.201739624505!2d12.5541789!3d55.6881109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdea8e0e64154ebdc!2zQ2Fmw6kgQmFtYsO6!5e0!3m2!1sen!2sus!4v1503245804531" className="is-marginless is-paddingless" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </section>
            </div>
        );
    }
}
