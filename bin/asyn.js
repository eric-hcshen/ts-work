const isMomHappy = true

const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
      type: 's8'
    }
    resolve(phone)
  } else {
    const reason = new Error('Mom is not happy')
    reject(reason)
  }
})
var showOff = function (phone) {
    return new Promise(function (resolve, reject) {
      var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone' + phone.type
      setTimeout(() => {
        resolve(message)
      }, 3000);
    })
  }
/*
async function showOff(phone) {
  return Promise((resolve, reject) => {
    const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone ' + phone.type
    return resolve(message)
  })
}*/

async function askMom () {
  try {
    console.log('check point 1')
    let phone = await willIGetNewPhone
    console.log('check point 2')
    let message = await showOff(phone)
    console.log(message);
    console.log('check point 5')
  } catch (error) {
    console.log(error.message)
  }
  console.log('check point 3');
}

askMom();
/*
(async () => {
  await askMom()
})()*/
console.log('check pint 4')
/*
console.log('------------------------------------')

var askMom = function () {
    console.log('check point 1A')
  
    willIGetNewPhone
      .then(showOff)
      .then(function (fulfilled) {
        console.log(fulfilled)
        console.log('check point 2A');
      })
      .catch(function (error) {
        console.log('error1')
        console.log(error.message)
      }).finally(x => console.log('finally'))
    
    console.log('after asking Mom2')
  }
  askMom()
  console.log('Xxxxx')
  */
  