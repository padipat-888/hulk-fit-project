import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  let { state } = useLocation();

  return (
    <div>
      <div>This is SingUp Page</div>
      <div>{ state.user + state.pass }</div>
    </div>
  );
};

export default SignUp;
