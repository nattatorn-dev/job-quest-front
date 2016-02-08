import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <li className= {this.props.name} data-name= {this.props.dataName}>
              {
                React.Children.map(this.props.children, function (child) {
                    return <div>{child}</div>;
                })
              }
            </li>
        );
    }
}

List.displayName = 'List';

List.propTypes = {
    children: React.PropTypes.object,
    dataName: React.PropTypes.string,
    description: React.PropTypes.string,
    hrefUrl: React.PropTypes.string,
    name: React.PropTypes.string
};
