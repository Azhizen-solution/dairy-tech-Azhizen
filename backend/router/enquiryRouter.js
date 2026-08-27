
// // // import express from 'express';
// // // import db from '../firebaseAdmin.js';
// // // import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// // // const router = express.Router();

// // // // 1. ROUTE FOR ENQUIRY COLLECTION
// // // router.post('/submit-enquiry', async (req, res) => {
// // //   try {
// // //     const data = req.body;

// // //     // Save to Firebase
// // //     const docRef = await db.collection('enquiries').add({
// // //       ...data,
// // //       source: 'EnquiryForm',
// // //       createdAt: new Date().toISOString()
// // //     });

// // //     // Send Slack notification
// // //     const slackMessage = formatEnquiryMessage(data);
// // //     await sendSlackMessage(slackMessage);

// // //     res.status(201).json({ success: true, message: "Enquiry saved!", id: docRef.id });
// // //   } catch (error) {
// // //     console.error('Error in submit-enquiry:', error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // });

// // // // 2. ROUTE FOR CONTACT COLLECTION
// // // router.post('/submit-contact', async (req, res) => {
// // //   try {
// // //     const { firstName, lastName, email, message } = req.body;

// // //     const contactData = {
// // //       fullName: `${firstName} ${lastName}`,
// // //       email,
// // //       message,
// // //       source: 'ContactPage',
// // //       createdAt: new Date().toISOString()
// // //     };

// // //     // Save to Firebase
// // //     const docRef = await db.collection('contacts').add(contactData);

// // //     // Send Slack notification
// // //     const slackMessage = formatContactMessage(contactData);
// // //     await sendSlackMessage(slackMessage);

// // //     res.status(201).json({ success: true, message: "Contact saved!", id: docRef.id });
// // //   } catch (error) {
// // //     console.error('Error in submit-contact:', error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // });

// // // export default router;


// // import express from 'express';
// // import { db, collection, addDoc, serverTimestamp } from '../firebaseAdmin.js';
// // import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// // const router = express.Router();

// // // 1. Enquiry Page Route -> Sends to Enquiries channel
// // router.post('/submit-enquiry', async (req, res) => {
// //   try {
// //     const enquiryData = req.body;

// //     const docRef = await addDoc(collection(db, 'enquiries'), {
// //       ...enquiryData,
// //       createdAt: serverTimestamp(),
// //     });

// //     const slackPayload = formatEnquiryMessage(enquiryData);
// //     await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);

// //     return res.status(200).json({
// //       success: true,
// //       message: 'Enquiry submitted successfully!',
// //       id: docRef.id,
// //     });
// //   } catch (error) {
// //     console.error('Error saving enquiry:', error);
// //     return res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // 2. Contact Page Route -> Sends to Contacts channel
// // router.post('/submit-contact', async (req, res) => {
// //   try {
// //     const contactData = req.body;

// //     const docRef = await addDoc(collection(db, 'contacts'), {
// //       ...contactData,
// //       createdAt: serverTimestamp(),
// //     });

// //     const slackPayload = formatContactMessage(contactData);
// //     await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);

// //     return res.status(200).json({
// //       success: true,
// //       message: 'Contact message submitted successfully!',
// //       id: docRef.id,
// //     });
// //   } catch (error) {
// //     console.error('Error saving contact:', error);
// //     return res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // export default router;

// // import express from 'express';
// // import { db, collection, addDoc } from '../firebaseAdmin.js';
// // import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// // const router = express.Router();

// // // Helper to strip out any keys that have undefined values
// // const sanitizeData = (data) => {
// //   const clean = {};
// //   for (const [key, value] of Object.entries(data)) {
// //     if (value !== undefined) {
// //       clean[key] = value;
// //     }
// //   }
// //   return clean;
// // };

// // // 1. Enquiry Page Route -> Sends to Enquiries channel
// // router.post('/submit-enquiry', async (req, res) => {
// //   try {
// //     const rawData = req.body || {};
// //     const enquiryData = sanitizeData(rawData);

// //     // Save to Firestore using an ISO Date string instead of serverTimestamp()
// //     const docRef = await addDoc(collection(db, 'enquiries'), {
// //       ...enquiryData,
// //       createdAt: new Date().toISOString(),
// //     });

// //     // Send Slack alert
// //     const slackPayload = formatEnquiryMessage(enquiryData);
// //     await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);

// //     return res.status(200).json({
// //       success: true,
// //       message: 'Enquiry submitted successfully!',
// //       id: docRef.id,
// //     });
// //   } catch (error) {
// //     console.error('Error saving enquiry:', error);
// //     return res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // 2. Contact Page Route -> Sends to Contacts channel
// // router.post('/submit-contact', async (req, res) => {
// //   try {
// //     const rawData = req.body || {};
// //     const contactData = sanitizeData(rawData);

// //     // Save to Firestore using an ISO Date string instead of serverTimestamp()
// //     const docRef = await addDoc(collection(db, 'contacts'), {
// //       ...contactData,
// //       createdAt: new Date().toISOString(),
// //     });

// //     // Send Slack alert
// //     const slackPayload = formatContactMessage(contactData);
// //     await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);

// //     return res.status(200).json({
// //       success: true,
// //       message: 'Contact message submitted successfully!',
// //       id: docRef.id,
// //     });
// //   } catch (error) {
// //     console.error('Error saving contact:', error);
// //     return res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // export default router;



// import express from 'express';
// import { db, collection, addDoc } from '../firebaseAdmin.js';
// import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// const router = express.Router();

// // Helper to deeply sanitize data and remove all undefined values
// const sanitizeDeep = (data) => {
//   return JSON.parse(JSON.stringify(data, (key, value) => (value === undefined ? null : value)));
// };

// // 1. Enquiry Page Route -> Sends to Enquiries channel
// router.post('/submit-enquiry', async (req, res) => {
//   console.log('==> Received enquiry request:', req.body);

//   try {
//     const rawData = req.body || {};
//     const sanitizedData = sanitizeDeep(rawData);

//     const enquiryData = {
//       name: String(sanitizedData.name || '').trim(),
//       phone1: String(sanitizedData.phone1 || '').trim(),
//       phone2: String(sanitizedData.phone2 || '').trim(),
//       location: String(sanitizedData.location || '').trim(),
//       state: String(sanitizedData.state || '').trim(),
//       city: String(sanitizedData.city || '').trim(),
//       pincode: String(sanitizedData.pincode || '').trim(),
//       message: String(sanitizedData.message || '').trim(),
//       totalPrice: String(sanitizedData.totalPrice || '₹0'),
//       selectedProducts: Array.isArray(sanitizedData.selectedProducts)
//         ? sanitizedData.selectedProducts.map((p) => ({
//             id: String(p?.id || ''),
//             name: String(p?.name || p?.title || ''),
//             type: String(p?.type || 'product'),
//             category: String(p?.category || ''),
//             price: String(p?.price || '0'),
//             description: String(p?.description || ''),
//           }))
//         : [],
//       createdAt: new Date().toISOString(),
//     };

//     // Save to Firestore with a 10s timeout guard
//     const writePromise = addDoc(collection(db, 'enquiries'), enquiryData);
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error('Firestore write timed out after 10 seconds')), 10000)
//     );
//     const docRef = await Promise.race([writePromise, timeoutPromise]);
//     console.log('==> Saved to Firestore with ID:', docRef.id);

//     // Send Slack alert safely (non-blocking)
//     if (process.env.SLACK_ENQUIRY_WEBHOOK_URL) {
//       try {
//         const slackPayload = formatEnquiryMessage(enquiryData);
//         await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);
//       } catch (slackErr) {
//         console.error('Slack alert error (non-fatal):', slackErr.message);
//       }
//     }

//     return res.status(200).json({
//       success: true,
//       message: 'Enquiry submitted successfully!',
//       id: docRef.id,
//     });
//   } catch (error) {
//     console.error('Error saving enquiry:', error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// });

// // 2. Contact Page Route -> Sends to Contacts channel
// router.post('/submit-contact', async (req, res) => {
//   console.log('==> Received contact request:', req.body);

//   try {
//     const rawData = req.body || {};
//     const sanitizedData = sanitizeDeep(rawData);

//     const contactData = {
//       name: String(sanitizedData.name || '').trim(),
//       email: String(sanitizedData.email || '').trim(),
//       phone: String(sanitizedData.phone || '').trim(),
//       subject: String(sanitizedData.subject || '').trim(),
//       message: String(sanitizedData.message || '').trim(),
//       createdAt: new Date().toISOString(),
//     };

//     // Save to Firestore with a 10s timeout guard
//     const writePromise = addDoc(collection(db, 'contacts'), contactData);
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error('Firestore write timed out after 10 seconds')), 10000)
//     );
//     const docRef = await Promise.race([writePromise, timeoutPromise]);
//     console.log('==> Saved to Firestore with ID:', docRef.id);

//     // Send Slack alert safely (non-blocking)
//     if (process.env.SLACK_CONTACT_WEBHOOK_URL) {
//       try {
//         const slackPayload = formatContactMessage(contactData);
//         await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);
//       } catch (slackErr) {
//         console.error('Slack alert error (non-fatal):', slackErr.message);
//       }
//     }

//     return res.status(200).json({
//       success: true,
//       message: 'Contact message submitted successfully!',
//       id: docRef.id,
//     });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// });

// export default router;



import express from 'express';
import { addDocument } from '../firebaseAdmin.js';
import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

const router = express.Router();

// 1. Enquiry Submission
router.post('/submit-enquiry', async (req, res) => {
  console.log('==> Received enquiry submission payload');

  try {
    const raw = req.body || {};

    const enquiryData = {
      name: String(raw.name || '').trim(),
      phone1: String(raw.phone1 || '').trim(),
      phone2: String(raw.phone2 || '').trim(),
      location: String(raw.location || '').trim(),
      state: String(raw.state || '').trim(),
      city: String(raw.city || '').trim(),
      pincode: String(raw.pincode || '').trim(),
      message: String(raw.message || '').trim(),
      totalPrice: String(raw.totalPrice || '₹0'),
      selectedProducts: Array.isArray(raw.selectedProducts)
        ? raw.selectedProducts.map((p) => ({
            id: String(p?.id || ''),
            name: String(p?.name || p?.title || ''),
            type: String(p?.type || 'product'),
            category: String(p?.category || ''),
            price: String(p?.price || '0'),
            description: String(p?.description || ''),
          }))
        : [],
      createdAt: new Date().toISOString(),
    };

    // 1. Direct HTTP write to Firestore REST
    const docRef = await addDocument('enquiries', enquiryData);
    console.log('==> Successfully written to Firestore. Doc ID:', docRef.id);

    // 2. Safe Slack Notification dispatch
    if (process.env.SLACK_ENQUIRY_WEBHOOK_URL) {
      const slackPayload = formatEnquiryMessage(enquiryData);
      await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      id: docRef.id,
    });
  } catch (error) {
    console.error('Submission failed:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Contact Submission
router.post('/submit-contact', async (req, res) => {
  console.log('==> Received contact submission payload');

  try {
    const raw = req.body || {};

    const contactData = {
      name: String(raw.name || '').trim(),
      email: String(raw.email || '').trim(),
      phone: String(raw.phone || '').trim(),
      subject: String(raw.subject || '').trim(),
      message: String(raw.message || '').trim(),
      createdAt: new Date().toISOString(),
    };

    // 1. Direct HTTP write to Firestore REST
    const docRef = await addDocument('contacts', contactData);
    console.log('==> Successfully written to Contacts. Doc ID:', docRef.id);

    // 2. Safe Slack Notification dispatch
    if (process.env.SLACK_CONTACT_WEBHOOK_URL) {
      const slackPayload = formatContactMessage(contactData);
      await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);
    }

    return res.status(200).json({
      success: true,
      message: 'Contact message submitted successfully!',
      id: docRef.id,
    });
  } catch (error) {
    console.error('Contact submission failed:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;