import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName : {
        type : String, 
        required : true,
        minLength : [3, "First name must container atleat 3 character"],
        maxLength : [30, "First name cannot exceeds 30 characters!"]
    },
    lastName : {
        type : String, 
        required : true,
        minLength : [3, "Last name must container atleat 3 character"],
        maxLength : [30, "Last name cannot exceeds 30 characters!"]
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Provide valid Email"],
    },
    phone : {
        type : String, 
        required : true,
        minLength : [10, "Phone number must contain only 10 digits!"],
        maxLength : [10, "Phone number must contain only 10 digits!"]
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);