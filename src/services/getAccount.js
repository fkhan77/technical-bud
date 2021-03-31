/**
 *
 * @returns a promise that resolves to give a JSON object of account data including provider, balance, and transactions
 */

export async function getAccount() {
  return fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05").then((data) =>
    data.json()
  );
}
