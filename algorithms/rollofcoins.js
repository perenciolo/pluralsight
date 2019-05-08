/**
 * ROLLS OF COINS CHALLENGE
 * 
 * ============================================================================
 * The challenge
 *
 * At the end of her shift, Amina’s tip jar is full of coins. She needs a   
 * little help in counting and stocking her hard earned loot. She wants to
 * organize her coins in rolls so it is easy to bring back to the bank.
 * 
 * Write a program that will help her quickly find out how many rolls she has 
 * for each coin denomination and the remainder on each.
 * 
 * Below is a table of how many coins should be in each roll per denomination:
 * 
 *  +---------------+-----------------+--------+  
 *  | Coins         | Coins Per Roll  | Value  |
 *  +---------------+-----------------+--------+  
 *  | Penny => 1    | 50              | $0.50  |
 *  +---------------+-----------------+--------+ 
 *  | Nickel => 5   | 40              | $2.00  |
 *  +---------------+-----------------+--------+  
 *  | Dime => 10    | 50              | $5.00  |
 *  +---------------+-----------------+--------+  
 *  | Quarter => 25 | 40              | $10.00 |
 *  +---------------+-----------------+--------+  
 * 
 * Your program will accept an unsorted array of coins. You can assume that 
 * each coin will be either 1, 5, 10 or 25. It should print a message like 
 * the one below:
 * 
 * 1. Pennies: 10 rolls — 39 left
 * 2. Nickels: 25 rolls — 0 left
 * 3. Dimes: 12 rolls — 49 left
 * 4. Quarter: 2 rolls — 20 left
 * 
 * Ref.: https://blog.usejournal.com/28-relevant-javascript-interview-questions-part-1-of-7-ff376be12a99
 * 
 * ============================================================================
 * 
 * @param coins type array
 */

function howManyRolls(coins) {
  if (!coins || !coins.length) {
    return false;
  }

  const constraints = {
    'penny': {
      value: 1,
      perRoll: 50,
      returnType: 'Pennies'
    },
    'nickel': {
      value: 5,
      perRoll: 40,
      returnType: 'Nickels'
    },
    'dime': {
      value: 10,
      perRoll: 50,
      returnType: 'Dimes'
    },
    'quarter': {
      value: 25,
      perRoll: 40,
      returnType: 'Quarter'
    },
  };

  const callers = {
    penny: coins.filter((el) => el === constraints.penny.value),
    nickel: coins.filter((el) => el === constraints.nickel.value),
    dime: coins.filter((el) => el === constraints.dime.value),
    quarter: coins.filter((el) => el === constraints.quarter.value),
  }

  function mountRolls(coins, type) {
    if (!coins || !coins.length) {
      return false;
    }

    let coinsMod = coins.length % constraints[type].perRoll;
    let coinsRoll = (coins.length - coinsMod) / constraints[type].perRoll;

    return (`${constraints[type].returnType} ${coinsRoll} rolls — ${coinsMod} left`);
  }

  const types = Object.keys(constraints);
  types.forEach(el => {
    console.log(callers[el]);
    console.log(mountRolls(callers[el], el));
  })
}

const coins = [1, 10, 25, 5, 10, 1, 10, 25, 5, 10, 1, 10, 25, 10, 25, 5, 10, 25, 10, 1, 10, 25, 10, 25, 5, 25, 5, 10, 1, 10, 25, 5, 10, 1, 10, 25, 5, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 5, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10, 1, 5, 10, 10, 10, 5, 10, 25, 25, 1, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 25, 25, 25, 10]
howManyRolls(coins);
