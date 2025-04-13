import { createElement, use, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import Weather from '../../components/weather-component/weather';
import CurrentTime from '../../components/current-time-component/currenttime';


function TopBar({ userEmailComponent }){
    const [userArray, setUserArray] = useState([]);

    async function getUserInfo () {
      let { data: UsersData, error } = await supabase
        .from('UsersData')
        .select("*")
        .like('user_email', userEmailComponent)
      setUserArray(UsersData);
    }
    
    getUserInfo();
  
    return (
      <>
      <div>
        {
          userArray.map(theUser => {
            return(
              <h2>Hi, {theUser.user_first_name}</h2>
            );
          })
          }
          <h1>Welcome to your MSU Dashboard.</h1>
      </div>
      <Weather />
      <CurrentTime />
      </>
    );
  }

  export default TopBar;