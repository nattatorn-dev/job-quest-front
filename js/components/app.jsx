import React from 'react';
import Navigation from './navigation';
import Inspiration from './inspiration';
import Footer from './footer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header />
                <Navigation/>
                  <Inspiration/>
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';
