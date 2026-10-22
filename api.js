import { initializeApp } from "@firebase/app";
// Importing from /lite can reduce the bundle size, by not bring a bunch of realtime features, but just providing
// CRUD opoerations reducing the time it takes to load the app
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a reference to the vans collection
// First parameter is the database, second is the collection name
const vansCollectionRef = collection(db, "vans");

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    
    // console.log(snapshot.data())
    console.log({
        ...snapshot.data(),
        id: snapshot.id
    })
    
    // If we dont do it this way, the object will not have the "id" property
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getHostVans() {
    // "query" receives the collection reference and a query, this query receives
    // the property we want to filter by and the value we want to filter by
    // In our case we still hardcoding "hostId" as we did using MirageJS
    const q = query(vansCollectionRef, where("hostId", "==", 123))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

// Function to get all vans from the database with MirageJS
// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// Function to get all host vans from the database with MirageJS
// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}