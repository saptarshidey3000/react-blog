const conf = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL) ,
    appwritePROJECTID : String(import.meta.env.VITE_PROJECT_ID) ,
    appwriteDATABASEKEY : String(import.meta.env.VITE_DATABASE_KEY) ,
    appwriteBUCKETKEY: String(import.meta.env.VITE_BUCKET_KEY) ,
    appwriteCOLLECTIONID : String(import.meta.env.VITE_COLLECTION_ID) ,
}

export default conf