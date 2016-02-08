import React from 'react';

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        let classMobileBg = 'mb-bg ' + this.props.actionName;
        let classMobileMenuDetail = 'mobile-menu-detail ' + this.props.actionName;

        return (
            <div className={classMobileBg}>
              <ul className={classMobileMenuDetail}>
                <li><a><span className="icon sign-up"></span><span>Signup</span></a></li>
                <li><a><span className="icon log-in"></span><span>Login</span></a></li>
                <li><a className="" href="/help/how-it-works"><span className="icon how-w"></span><span>How it works</span></a></li>
                <li><a><span className="icon your-trip"></span><span>List your trip</span></a></li>
              </ul>
            </div>
        );
    }
}

MobileMenu.displayName = 'MobileMenu';

MobileMenu.propTypes = {
    actionName: React.PropTypes.string
};
