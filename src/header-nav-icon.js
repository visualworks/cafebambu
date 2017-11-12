import React, {Component} from 'react';

export default class HeaderNavIcon extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <a href={this.props.url} target="_blank" className="navbar-item">
                    <span className="is-big icon">
                    <i className={'fa ' + this.props.icon}></i>
                    </span>
                </a>;
    }
}
