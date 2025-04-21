import { createElement, use, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import "./topbar.css";
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
      <div className='flex flex-nowrap items-center justify-between'>
        <div className='text-left'>
          {
            userArray.map(theUser => {
              return(
                <h2 className="userText" key={theUser.id}>Hi, {theUser.user_first_name}</h2>
              );
            })
            }
            <div className='text-xl' style={{color: 'var(--text-color)'}}>Welcome to your MSU Dashboard</div>
        </div>
        <div className='flex flex-nowrap items-center justify-between'>
          <Weather />
          <CurrentTime />
        </div>
      </div>

      </>
    );
  }

  export default TopBar;