import React from 'react';
import InspirationItem from './inspiration-item';

const WEBROOT = 'https://www.takemetour.com/';

export default class Inspiration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="section new-feature-expert inspiration-home" id="see-inspirations">
            <div className="inner">
              <h1>See Inspirations</h1>
              <p className="description" >
                Looking for things to do in Bangkok? Something new, something different? Here are our best picks of local 1-day trips in/from Bangkok,
                categorized in various aspects, just for you to check out.
              </p>
              <InspirationItem/>
              <div className="local-wrapper">
                <a className="btn text-bold" href={WEBROOT + 'inspiration'}>
                  <span className="icon inspiration-home"></span>
                  <span className="txt">All Inspirations</span>
                </a>
              </div>
            </div>
          </div>
        );
    }
}

Inspiration.displayName = 'Inspiration';
