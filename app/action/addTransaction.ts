'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
//This revalidate path is used to revalidate the path after adding a transaction 
import { revalidatePath } from "next/cache";
interface TransactionData {
    text:String;
    amount:Number;
}
interface TransactionResult {
    data?: TransactionData;
    error?: string;
}
async function addTransaction(formData: FormData): Promise<TransactionResult> {
    try {
        const text = formData.get('text')?.toString();
        const amount = parseFloat(formData.get('amount')?.toString() || '0');

        if (!text || isNaN(amount)) {
            return { error: 'Invalid input' };
        }
      const { userId } = await auth();
      console.log(userId);

        if (!userId) {
            return { error: 'User not authenticated' };
        }

        const transactionData:TransactionData =  await db.transaction.create({
            data: {
                text,
                amount,
                userId, // Associate transaction with the authenticated user
            },
        })
        revalidatePath('/'); // Revalidate the root path to update the UI with the new transaction

        return { data: transactionData };
    } catch (error) {
        return { error: 'Failed to add transaction' };
    }
}
export default addTransaction;