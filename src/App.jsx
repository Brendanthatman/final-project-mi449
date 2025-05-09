import { createElement, use, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Weather from './components/weather-component/weather';
import CurrentTime from './components/current-time-component/currenttime';
import ClassSchedule from './components/class-schedule/classschedule';
import TopBar from './layout/topbar/topbar';
import QuickLinks from './components/quicklinks/quicklinks';
import RelatedEvents from './components/related-events/relatedevents';
import './App.css';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import SideBar from './layout/sidebar/sidebar';
import TodoList from './components/TodoList/TodoList';

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
      async function getUserInfoLoggedIn () {
        const { data: { user } } = await supabase.auth.getUser();
        setUsersemail(user.email);
      }

      getUserInfoLoggedIn();

      return (
          <>
          <div className='container'>
            <TopBar userEmailComponent={usersemail}/>
            <div className='flex flex-nowrap items-start gap-x-17'>
              <TodoList />
              <ClassSchedule userEmail={usersemail}/>
            </div>
            <div className='flex flex-nowrap items-start gap-x-8'>
              <RelatedEvents />
              <QuickLinks /> 
            </div>
            <SideBar />
          </div>
            
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
