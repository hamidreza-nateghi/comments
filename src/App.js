import React, { Component } from 'react';
import Comment from './Comment';

class App extends Component {
  render() {
    return (
      <div className='ui comments'>
        <Comment author='Matt' image={process.env.PUBLIC_URL + '/images/matt.jpg'} timeStamp='Today at 5:42PM'>How artistic!</Comment>
        <Comment author='Elliot Fu' image={process.env.PUBLIC_URL + '/images/elliot.jpg'} timeStamp='Yesterday at 12:30AM'>This has been very useful for my research. Thanks as well!</Comment>
        <Comment author='Joe Henderson' image={process.env.PUBLIC_URL + '/images/joe.jpg'} timeStamp='5 days ago'>Dude, this is awesome. Thanks so much.</Comment>
      </div>
    );
  }
}

export default App;
