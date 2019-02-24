import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

function Home() {
  console.log(useState);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Helmet title="Home" />
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  );
}

export default connect(state => ({
  online: state.online
}))(Home);
