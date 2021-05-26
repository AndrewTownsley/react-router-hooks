import React from 'react';
import { useParams} from 'react-router-dom';

const User = () => {
  const params = useParams;
  console.log(params);

  return (
    <section>
      {/* <h1 className={location.pathname == "/about" ? "active" : null}>About</h1> */}
      <h1>{params.name}</h1>
    </section>
  )
}

export default User;