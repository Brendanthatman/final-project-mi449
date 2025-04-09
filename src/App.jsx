import { createElement, use, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Weather from './components/weather-component/weather';
import CurrentTime from './components/current-time-component/currenttime';
import ClassSchedule from './components/class-schedule/classschedule';
import TopBar from './layout/topbar/topbar';
import './App.css';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

function Login () {
    const [session, setSession] = useState(null);
    const [usersemail, setUsersemail] = useState("");

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
      let email = "";

      async function getUserInfoLoggedIn () {
        const { data: { user } } = await supabase.auth.getUser();
        setUsersemail(user.email);
        //return user;
      }

      getUserInfoLoggedIn();

      //getUserInfoLoggedIn().then((theuser) => {
      //  email = theuser.email;
      //});

      return (
          <>
            <TopBar userEmailComponent={usersemail}/>
            <ClassSchedule />
          </>);
    }
  }

function App() {

  return (
    <>
      <Login />
    </>
  )
}

export default App
