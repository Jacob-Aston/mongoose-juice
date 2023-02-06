const connection = require('../config/connection');
const { User,  } = require('../models');
const { getRandomUsername,  } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
//   await Application.deleteMany({});
  await User.deleteMany({});

  const users = [];
//   const applications = getRandomApplications(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = `${username}@gmail.com`;
    const thoughts = [];

    users.push({
      username,
      email,
      thoughts,
    });
  }

  await User.collection.insertMany(users);
//   await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
//   console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
