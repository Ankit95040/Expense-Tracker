import React from 'react'
import getincomeExpense from '@/app/action/getIncomeExpense';
import { addCommas } from '@/lib/utils';

async function IncomeExpense() {
    const {Income,Expense}=await getincomeExpense();
  return (
  <div className="inc-exp-container">
    <div className="">
        <h4>Income</h4>
        <p className="money plus">{addCommas(Number(Income))}</p>
    </div>
    <div className="">
        <h4>Expense</h4>
        <p className="money minus">{addCommas(Number(Expense))}</p>
        </div>
  </div>
  )
}

export default IncomeExpense
