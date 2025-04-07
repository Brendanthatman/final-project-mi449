import { createElement, use, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Weather from './components/weather-component/weather';
import CurrentTime from './components/current-time-component/currenttime';
import ClassSchedule from './components/class-schedule/classschedule';
import './App.css';

function App() {

  return (
    <>
      <TopBar />
      <ClassSchedule />
    </>
  )
}

export default App
