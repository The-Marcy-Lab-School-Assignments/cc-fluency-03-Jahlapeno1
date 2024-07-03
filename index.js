/*

1. forEach

2. forEach

3. forEach

4. filter

5. forEach

6. sort


*/


const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]


// 1.

const logAllNames = (users) => {
  users.forEach(user => console.log(user.name));
}

// logAllNames(users)

// 2.

const getAllTags = (users) => {
  users.forEach(({name, username})=> console.log(`Hi my name is ${name} and my tag is ${username}!`))
}

// getAllTags(users)

// 3.

const sumAllFollowers = (users) => {
  // const sum = 0
  // users.forEach(user => sum += user.followers)
  // return sum

  return users.reduce((total, {followers}) => total + followers, 0)
}

// console.log(sumAllFollowers(users))

// 4. 

const searchUsername = (username) => {
  return users.filter(user => user.username === username)[0]
}

// console.log(searchUsername('@passaic_papi'))

// 5. 

const longWinded = (users) => {
  let output = ''
  users.forEach(user => {
    console.log(user.bio)
  })
  // return users.filter(user => user.bio === output)
}

longWinded(users)

// 6. 

const follower = (users) => {

}