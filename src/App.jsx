import { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting/greeting.jsx';

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 bg-pink-300">
      <div className="w-full max-w-screen-md">
        <Greeting />
      </div>
    </main>
  );
}

export default App;
