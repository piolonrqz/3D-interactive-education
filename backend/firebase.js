const admin = require('firebase-admin');
const serviceAccount = require('./seagle-auth-firebase-adminsdk-fbsvc-9423aedac7.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;