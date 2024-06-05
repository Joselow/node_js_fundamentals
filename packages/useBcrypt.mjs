import bcrypt from 'bcrypt'

const PASSWORD = 'OWO'

async function hashPassword (password) {
  const hashed = await bcrypt.hash(password, 2)
  // console.log(hashed);
  return hashed
}
function isHisHash (password, hashed) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed, (err, same) => {
      if (err) {
        reject(err);
      } else {
        resolve(same);
      }
    });
  });
}

async function run (legal = true) {
  const passwordHashed = await hashPassword(PASSWORD)
  const isTheSame = await isHisHash(legal ? PASSWORD : 'PASSWORD', passwordHashed)
  console.log(`${PASSWORD} - ${passwordHashed} - ${isTheSame}`);
  console.log('The password - passwordHashed - the hash is fo this password? ');
}

run()

export {
  hashPassword,
  isHisHash
}