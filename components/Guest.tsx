import React from 'react'
import { SignInButton } from '@clerk/nextjs'
function Guest() {
  return (
   <div className="guest">
    <h1> Welcome to Expense Tracker</h1>
    <p> Please sign in to manage your accounts</p>
    <SignInButton/>
   </div>
  )
}

export default Guest
