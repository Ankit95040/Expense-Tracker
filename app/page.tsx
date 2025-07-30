import React from 'react'
import Header from '@/components/Header'
import Guest from '@/components/Guest'
import AddTransaction from '@/components/AddTransaction'
import { currentUser } from '@clerk/nextjs/server'
import Balance from '@/components/Balance'
import IncomeExpense from '@/components/IncomeExpense'
import TransactionList from '@/components/TransactionList'
async function page() {
  const user = await currentUser();
  if(!user) {
    return (
      <div>
        <Guest/>
      </div>
    )
  }
  return (
    <div>
    
      <h1 className=''>Welcome {user.firstName}</h1>
      <Balance/>
      <IncomeExpense/>
      <AddTransaction/>
      <TransactionList/>
      
    </div>
  )
}

export default page
