import { createElement, use, useEffect, useState } from 'react';
import Weather from '../../components/weather-component/weather';
import CurrentTime from '../../components/current-time-component/currenttime';


function TopBar(userEmailComponent){
    const [userArray, setUserArray] = useState([]);

    async function getTodaysClasses (userEmail) {
      let { data: Users, error } = await supabase
        .from('Users')
        .select("*")
        .like('user_email', userEmail)
      setUserArray(Users);
    }

    getTodaysClasses(userEmailComponent);
  
    return (
      <>
      <div>
        {
            userArray.map(theUser => {
              return(
                <h1>Hi, {theUser.user_first_name}</h1>
              );
            })
          }
          <h2>Welcome to your MSU Dashboard.</h2>
      </div>
      <Weather />
      <CurrentTime />
      </>
    );
  }

  export default TopBar;