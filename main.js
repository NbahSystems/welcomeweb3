// main.js

const serverUrl = "https://qk501xnbk66m.usemoralis.com:2053/server";
const appId = "4Mc0KBl8ljMUxvCauD6MKvgrSNBV2cK1kBtFT1mD";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Gracias por confiar en Hackster Webmaster" })
      console.log(user)
      console.log(user.get('ethAddress'))
      window.open('./logueado.html', '_self')
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;