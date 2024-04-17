

const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((a, users) => a + users.balance, 0)


