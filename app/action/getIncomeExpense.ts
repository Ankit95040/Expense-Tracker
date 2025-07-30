'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getincomeExpense(): Promise<{
  Income?: number;
  Expense?: number;
  error?: string;
}> {
  const { userId } =await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });

    const Income = transactions.reduce((sum, transaction) => {
        return transaction.amount > 0 ? sum + transaction.amount : sum;
      }, 0);
    
      const Expense = transactions.reduce((sum, transaction) => {
        return transaction.amount < 0 ? sum + transaction.amount : sum;
      }, 0);
      

    return { Income, Expense:Math.abs(Expense) }; // Ensure Expense is positive
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getincomeExpense;