import React, {Component} from 'react';

export default class TabPanel extends Component {
    constructor(props){
        super(props);
        this.state = {menu: props.menu};
    }
    componentWillReceiveProps(nextProps){
        this.setState({menu: nextProps.menu});
    }
    render(){
        let structure = [];
        let categoryItems = [];
        this.state.menu.forEach((element) => {
            let itemStructure = <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={window.location.origin + '/img/' + element.photo} alt={element.item} title={element.item + ' - ' + element.description} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <h3 className="title">
                            {element.item}
                        </h3>
                        <p>
                            {element.description}
                        </p>
                        <p>{element.price}</p>
                    </div>
                </div>
            </article>;
            categoryItems.push(itemStructure);
        });
        let struc = <div className="hidden">{categoryItems}</div>;
        structure.push(struc);

        return (
            <div className="column content-menu-panel is-offset-1">{structure}</div>
        );
    }
}
