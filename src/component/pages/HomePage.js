import React from 'react';
import {Link} from 'react-router-dom';

const App = () => (
      <div>
          <h1>HomePage1</h1>
          <p><Link to="/login">Login</Link></p>
      </div>
    );

export default App;
