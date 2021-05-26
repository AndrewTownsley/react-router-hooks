import React from 'react';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  console.log(history);

  return (
    <section>
      <h1>Home</h1>
      <div>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={() => history.push("/contact")}>Contact us</button>
      </div>
    </section>
    ) 
}

export default Home;