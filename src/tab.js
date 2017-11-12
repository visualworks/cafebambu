import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TabPanel from 'tab-panel';

export default class Tab extends Component {
    constructor(props){
        super(props);
        let config = props.config;
        let menuCategories = [];
        let activeMenuItems = [];
        let activeCategory = 'Vegetarian Specialities';
        config.content.menu.forEach((element, index) => {
            if(menuCategories.indexOf(element.category) === -1){
                menuCategories.push(element.category);
            }
            if(element.category === activeCategory){
                activeMenuItems.push(element);
            }
        });
        this.state = {
            activeTab: 0,
            activeCategory: activeCategory,
            activeMenuItems: activeMenuItems,
            menuCategories: menuCategories,
            contentMenu: config.content.menu
        };
    }
    switchTab(activeCategory){
        if(!activeCategory){
            activeCategory = this.state.activeCategory;
        }
        activeCategory = activeCategory.element.toString();

        let activeMenuItems = [];
        this.state.contentMenu.forEach((element) => {
            if(element.category == activeCategory){
                activeMenuItems.push(element);
            }
        });
        this.setState({activeMenuItems: activeMenuItems});
        this.setState({activeCategory: activeCategory});
        // let activeTab = ReactDOM.findDOMNode('Tab').getElementsByClassName('is-active');
    }
    render(){
        let categories = this.state.menuCategories;
        let tabItem = [];
        categories.forEach((element, index) => {
            tabItem.push(<li>
                <a href="javascript:void(null);" onClick={(e) => this.switchTab({element})} className={(this.state.activeCategory == element) ? 'is-active' : ''}>
                    {element}
                </a>
            </li>);
        });
        return (
            <section className="content-menu section hidden">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 content">
                            <aside className="menu">
                                <h3 className="title">Menu</h3>
                                <div className="content">
                                    <ul className="menu-list">
                                        {tabItem}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <TabPanel menu={this.state.activeMenuItems} />
                    </div>
                </div>
            </section>
        );
    }
}
