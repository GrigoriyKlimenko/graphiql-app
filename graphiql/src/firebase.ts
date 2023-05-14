import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyBDMgYqSlzE22YYL4y4wvaqaIxVzScHNzo',
  authDomain: 'auth-graphiql-development.firebaseapp.com',
  projectId: 'auth-graphiql-development',
  storageBucket: 'auth-graphiql-development.appspot.com',
  messagingSenderId: '721372012149',
  appId: '1:721372012149:web:b3a1b4eb9a6254d09ca23c',
});

const auth = getAuth(app);
export default app;
export { auth };
