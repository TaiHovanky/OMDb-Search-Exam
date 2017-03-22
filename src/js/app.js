import React from 'react';
import ReactDOM from 'react-dom';

//Load bootstrap css
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Hello Movie Madness!!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));