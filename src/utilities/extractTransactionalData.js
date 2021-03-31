/**
 *
 * @param {object} account - nested object containing information on account including provider, balance, and transactions
 * @returns {array} if they exist, an array of no more than transaction objects ordered from smallest to largest
 */

export function extractTransactionalData(account) {
  const result = account.transactions
    .filter((transaction) => transaction.amount.value < 0)
    .sort((a, b) => b.amount.value - a.amount.value)
    .slice(0, 10);
  return result;
}
