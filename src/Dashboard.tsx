import { useEffect, useState } from "react";
import { useAsyncValue } from "react-router-dom";
import Companies from "./components/Companies";



function Dashboard () {

  return (
    <div data-theme="nord" className="App">
      <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col rounded-xl bg-accent shadow-md">
          <h1 className="text-5xl bold">
            Welcome to the Dashboard
          </h1>
          <Companies />
      </div>
      </div>
    </div>
  )
}


export default Dashboard;