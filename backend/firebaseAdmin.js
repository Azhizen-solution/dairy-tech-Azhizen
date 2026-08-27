// // // import admin from 'firebase-admin';
// // // import { readFileSync } from 'fs';
// // // import { fileURLToPath } from 'url';
// // // import { dirname, join } from 'path';

// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = dirname(__filename);

// // // // Read the service account key file
// // // const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
// // // const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

// // // // Initialize Firebase Admin
// // // if (!admin.apps.length) {
// // //   admin.initializeApp({
// // //     credential: admin.credential.cert(serviceAccount)
// // //   });
// // // }

// // // const db = admin.firestore();
// // // export default db;

// // import { initializeApp } from "firebase/app";
// // import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// // // Your friend's Firebase Web Configuration
// // const firebaseConfig = {
// //   apiKey: process.env.FIREBASE_API_KEY,
// //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.FIREBASE_APP_ID,
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// // export { db, app, collection, addDoc, serverTimestamp };
// // export default db;



// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// // Initialize once to prevent duplicate app errors
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);

// export { db, app, collection, addDoc, serverTimestamp };
// export default db;

import dotenv from 'dotenv';
dotenv.config();

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const API_KEY = process.env.FIREBASE_API_KEY;

// Converts normal JS data to Firestore REST format
const toFirestoreValue = (val) => {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return {
      arrayValue: {
        values: val.map(toFirestoreValue),
      },
    };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        fields[k] = toFirestoreValue(v);
      }
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
};

/**
 * Saves document to Firestore using standard HTTP fetch
 * (Zero gRPC dependencies, stops the GrpcConnection error permanently)
 */
export const addDocument = async (collectionName, data) => {
  if (!PROJECT_ID) {
    throw new Error('FIREBASE_PROJECT_ID is missing in Render environment variables');
  }

  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}${
    API_KEY ? `?key=${API_KEY}` : ''
  }`;

  const fields = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      fields[key] = toFirestoreValue(value);
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
    signal: AbortSignal.timeout(8000), // 8s timeout
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData?.error?.message || `Firestore HTTP error ${response.status}`);
  }

  const docId = resData.name ? resData.name.split('/').pop() : 'created';
  return { id: docId };
};

export default { addDocument };