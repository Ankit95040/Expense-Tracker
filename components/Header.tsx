import React from 'react';
import { SignedIn,SignedOut,UserButton,SignInButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/CheckUser';
async function Header() {
  const user=await checkUser();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Header;
