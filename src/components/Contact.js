import React from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory;

  return (
    <section>
      <h1>Contact</h1>
      <div>
        {/* <button onClick={() => history.goBack()}>Back</button>
        <button onClick={() => history.goForward()}>Forward</button> */}
      </div>
    </section>
  )
}

export default Contact;