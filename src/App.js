import React, {Component} from 'react';
import PiggyBank from './PiggyBank';

class App extends Component {



  render() {  
    return (
      <PiggyBank title="Saving pig" amount="9" depositAmount={4}/>
    ); 
  }
}

export default App;
