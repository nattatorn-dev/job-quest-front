import React from 'react';
import MobileMenu from './controls/moblie-menu';
import List from './controls/list';
import DrowdownList from './controls/dropdownlist';

const WEBROOT = 'https://www.takemetour.com/';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectValue: 'Where to go?'
        };

        this.handleClick = () => {
            this.setState({
                open: !this.state.open
            });
        };

        this.handleChange = (event) => {
            this.setState({
                selectValue: event.target.value
            });
        };
    }

    render() {
        let classOpen = this.state.open ?  'open' : '';
        let mobileMenuClass = 'mobile-menu ' + classOpen;
        let classHrefHowWork = WEBROOT + 'help/how-it-works';
        let classHrefExpert = WEBROOT + 'local-expert-benefits';

        return (
            <nav className="normal">
              <div className="in inner" >
                 <a className="images-logo" href="/" >
                      <img className="logo" src="../assets/images/logo.png" />
                 </a>
                 <button className={mobileMenuClass} onClick={this.handleClick}>
                   <img src="../assets/images/mobile-menu.png" />
                 </button>
                 <div className="sliding-menu">
                  <ul className="sliding-menu-ul">
                      <List dataName="signup" name="border">
                          <a>Sign up</a>
                      </List>
                      <List>
                          <a className="old">Log in</a>
                      </List>
                      <List name="tablet-hide">
                          <a className="old" href={classHrefHowWork}>How it works</a>
                      </List>
                      <List>
                          <a className="fill old" href={classHrefExpert}>List your trip</a>
                      </List>
                  </ul>
                </div>
                <div className="dropdown select-inside">
                  <select onChange={this.handleChange}>
                    <option value="">{this.state.selectValue}</option>
                      <DrowdownList />
                  </select>
                  <span></span>
                  <span>{this.state.selectValue}</span>
                  <div className="dropdown-arrow"></div>
                </div>
              </div>
              <MobileMenu actionName={classOpen}/>
            </nav>
        );
    }
}

Navigation.displayName = 'Navigation';
