import React from 'react';
import getUserBalance from '@/app/action/getUserBalance';
import styles from './Balance.module.css';
import { addCommas } from '@/lib/utils';
async function Balance() {
  const { balance } = await getUserBalance();

  return (
    <div className={styles.balanceCard}>
      <h4 className={styles.heading}>Current Balance</h4>
      <p className={styles.amount}>${addCommas(balance ?? 0)}</p>
    </div>
  );
}

export default Balance;
