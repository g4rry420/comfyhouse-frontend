import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
    
const config = {
    apiKey: "AIzaSyBvHUYc3PolApTZ_OvPs-v6FYJ_EFwZZKw",
    authDomain: "comfyhouse-bf9cc.firebaseapp.com",
    databaseURL: "https://comfyhouse-bf9cc.firebaseio.com",
    projectId: "comfyhouse-bf9cc",
    storageBucket: "comfyhouse-bf9cc.appspot.com",
    messagingSenderId: "703182675122",
    appId: "1:703182675122:web:aa175e11515860e7927dab",
    measurementId: "G-5MCXRV1R0Y"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log("Error while Creating User", error.message);
        }
    }
    return userRef;
}

const comparisonCheck = (firestoreCartItems, array2) => {
    for (let index = 0; index < firestoreCartItems.length; index++) {
        return firestoreCartItems[index].id === array2[index].id
    }
}

export const createCartDocuments = async (userStatus, frontEndCartItems) => {
    if(!userStatus) return;
    if(!frontEndCartItems) return;

    const cartRef = firestore.doc(`cart/${userStatus.uid}`);
    const snapShot = await cartRef.get();
    // console.log(snapShot.data())
    // if(snapShot.data()){
    // const item = comparisonCheck(Object.keys(snapShot.data()).map(key => snapShot.data()[key]), frontEndCartItems)  
    // console.log(item)  
    //     let firestoreCartItems = Object.keys(snapShot.data()).map(key => snapShot.data()[key].id);
    // }
    // let fronEndCartItems = [...additionalData].map(ite => ite);
    // console.log(fronEndCartItems)
    // firestoreCartItems.length !== frontEndCartItems.length &&  

    if((!snapShot.exists && !snapShot.data())
                || 
        (Object.keys(snapShot.data()).map(key => snapShot.data()[key].id).length !== frontEndCartItems.length)) {
        try {
            await cartRef.set({
                ...frontEndCartItems
            })
        } catch (error) {
            console.log("Error while Creating Cart", error.message);
        }
    }

    return cartRef;
}

export const addShopProuctsAndItems = async (shopProductsKey, objectsToAdd) => {
    const collectionRef = firestore.collection(shopProductsKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertShopProductsSnapshotToMap = (shopProducts) => {
    const transformedProducts = shopProducts.docs.map(doc => {
    const { bigImageUrl, smallImageUrl,mainImage, items, title,routeName } = doc.data();
        return{
            id: doc.id,
            bigImageUrl,
            smallImageUrl,
            mainImage,
            items,
            title,
            routeName
        } 
    })

    return transformedProducts.reduce((accumulator, shopProducts) => {
        accumulator[shopProducts.title.trim().toLowerCase()] = shopProducts;
        return accumulator;
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;