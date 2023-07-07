const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID='220860437723-og8ah5rjgn6j7tp22h3vbmjegcjv80gv.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFkZWRlZWUyZDE4NjliNjU3ZmE5MzAzMDAwODJmZTI2YjNkOTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODg3MTcyNDQsImF1ZCI6IjIyMDg2MDQzNzcyMy1vZzhhaDVyamduNmo3dHAyMmgzdmJtamVnY2p2ODBndi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNTcyNzM3MDg5OTY2MDIxMTk3NSIsImVtYWlsIjoiYnJvYWRjYXN0aW5ncGVvcGxlc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjIwODYwNDM3NzIzLW9nOGFoNXJqZ242ajd0cDIyaDN2Ym1qZWdjanY4MGd2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkJyb2FkY2F0aW5nIHBlb3BsZXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZWFaTmVBWnY3ODRIdnhsbFhPb29FUkd1UnZkZWFXTlFyYkxKWklDU0k9czk2LWMiLCJnaXZlbl9uYW1lIjoiQnJvYWRjYXRpbmciLCJmYW1pbHlfbmFtZSI6InBlb3BsZXMiLCJpYXQiOjE2ODg3MTc1NDQsImV4cCI6MTY4ODcyMTE0NCwianRpIjoiZTM4MzQzYzJhMmZkYTVhOTViZGEwMDE4NDgxNWYzNGI5NWQxMmUxYiJ9.HOmHd3DPjiqQqC2DHw0-OyacByY2cSNS8JMPjo8n5sYRXdgCgpgHXcTrL6YEVw5GPW1IeoClH0q43IUGsoi2pZUdZQWYdCOq5yo6NSnDOWbXxITY25_WzOmiV8LSAkCUZponcLxCxom5IX0ztrxtoJ1rHe57LpSjd6TcgGZKE2UJ55LB7Y8d8WD2vNd9e97z6BEFGXwYUJpEqeqEO3M-xDeJyNFT-LTgwnwkmh3lqLOTpmDViaRTbnwEgIoOt-repMWLjFLKjLPlGmSOaszmQQ_k1XH9Qz2ProdC4vN0qUmb6sTSwh1slP4R8J8rgd4K85WTsyaM9b84A8sYbOmJdA',
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  console.log(payload)
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch((ds)=>{console.error("error",ds)});