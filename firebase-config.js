const firebaseConfig = {
    apiKey: "AIzaSyAzN3Lu18BELypoUwOpOLDfE3McmjBtdQ8",
    authDomain: "alexdev-messenger.firebaseapp.com",
    projectId: "alexdev-messenger",
    storageBucket: "alexdev-messenger.firebasestorage.app",
    messagingSenderId: "52044505007",
    appId: "1:52044505007:web:a5c9a8b6d1c20fa6bdd95a"
};

const IMGBB_API_KEY = "97efd7fd35da4b245039a37e6296ece4";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

db.settings({
    timestampsInSnapshots: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

db.enablePersistence({
    synchronizeTabs: true
}).catch((err) => {
    if (err.code == 'failed-precondition') {
        console.log('Persistence failed: Multiple tabs open');
    } else if (err.code == 'unimplemented') {
        console.log('Persistence not supported');
    }
});

provider.setCustomParameters({
    prompt: 'select_account'
});

console.log('✅ Firebase initialized successfully!');
console.log('📁 Project:', firebaseConfig.projectId);
