import React from 'react';
import $ from 'jquery';

const URL_CLF = 'https://d2ad32w75yf016.cloudfront.net/inspiration/original/';
const WEBROOT = 'https://www.takemetour.com/inspiration/';
const API_HOME = 'https://www.takemetour.com/api/home';

export default class InspirationItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          inspirationRow: [{columns: []}]
        };
    }

    componentDidMount() {
        this.serverRequest = $.get(API_HOME, function (result) {
          let data = result;

          this.setState({
              inspirationRow: data.inspiration_layouts
          });
      }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        const rows = this.state.inspirationRow;
        let colindex = 0;
        let rowindex = 0;

        return (
          <div>
              {
                  rows.map(function (row) {
                      rowindex += 1;
                      let cols = row.columns.map(function (column) {
                          colindex += 1;
                          let divBg = {
                              backgroundImage: 'url(' + URL_CLF + column.inspiration_id.thumbnail_media_id.file_name + ')'
                          };
                          let divHref = WEBROOT + column.inspiration_id.slug;
                          let divClassBox = 'see-ins-box-' + column.size;

                          return (
                            <a className={divClassBox} href={divHref} key={colindex}>
                                <div className="shadow"></div>
                                <div className="image" style={divBg}></div>
                                <h2 className="text-bold">{column.inspiration_id.name}</h2>
                            </a>
                          );
                      });

                      return (
                          <div className="max-width-inner" key={rowindex}>
                              {cols}
                          </div>
                      );
                  })
              }
          </div>
        );
    }
}

InspirationItem.displayName = 'InspirationItem';
