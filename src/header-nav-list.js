import React, {Component} from 'react';

export default class HeaderNavList extends Component {
    constructor(props){
        super(props);
    }
    navItem(props){
        if(props.childs.length > 0){
            return <a href={props.url} className="navbar-link" target={props.target ? props.target : "_self"}>{props.item}</a>;
        } else {
            return <a href={props.url} className="navbar-item" target={props.target ? props.target : "_self"}>{props.item}</a>;
        }
    }
    navDropdown(props){
        const self = this;
        let navItem = self.navItem(props);
        let navSub = [];
        props.childs.forEach((element, index) => navSub.push(self.navItem(element)));

        return <div className="navbar-item has-dropdown is-hoverable">
                    {navItem}
                    <div className="navbar-dropdown">
                    {navSub}
                    </div>
                </div>;
    }
    render(){
        let navItem;
        if(this.props.childs.length == 0){
            navItem = this.navItem(this.props);
        } else {
            navItem = this.navDropdown(this.props);
        }
        return navItem;
    }
}
