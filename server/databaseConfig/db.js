import mongoose from 'mongoose';

const startDatabase = async () => {
    try{
        await mongoose.connect("mongodb+srv://admin:mongodbaccess22@cluster0.s7pwrdc.mongodb.net/paytm-clone")
        console.log("Database Connected Successfully");
    }catch(e){
        console.log("Database Connection Failed");
    }
}

export default startDatabase;
