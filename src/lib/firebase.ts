import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyBIBrTC0a-Qx1NqBKpxQvQAfRF3A7X0lxc',
  authDomain: 'tech-net-bfc5a.firebaseapp.com',
  projectId: 'tech-net-bfc5a',
  storageBucket: 'tech-net-bfc5a.appspot.com',
  messagingSenderId: '438946724092',
  appId: '1:438946724092:web:6e7a577819a576563d7f79',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
