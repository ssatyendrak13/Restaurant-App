import ErroHandler from '../Errors/error.js';
import {Reservation} from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErroHandler("Please fill full reservation form", 400));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, date, time});
        res.status(200).
        json({
            success : true,
            message : "Reservation sent successfully!"
        });
    } catch (error) {
        if(error.name === "ValidationError"){
            const validationError = Object.values(error.errors).map(
                (err)=> err.message
            );
            return next(new ErroHandler(validationError.join(" , "), 400));
        }
        return next(error);
    }
}; 