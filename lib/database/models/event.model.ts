import { Schema,model,models,Document, ObjectId } from "mongoose";


export interface IEvent extends Document {
    _id:string;
    title: string;
    description?: string;
    location: string;
    createdAt?: Date;
    startDateTime?: Date;
    endDateTime?: Date;
    imageUrl: string;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?: {_id:string,name:string};
    organizer?: {_id:string,firstname:string,lastname:string};
}


const EventSchema = new Schema({
    title:{type:String,requierd:true},
    description:{type:String},
    location:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    startDateTime:{type:Date,default:Date.now},
    endDateTime:{type:Date,default:Date.now},
    imageUrl:{type:String,required:true},
    price:{type:String},
    isFree:{type:Boolean,default:false},
    url:{type:String},
    category: {type:Schema.Types.ObjectId,ref:'Category'},
    organizer: {type:Schema.Types.ObjectId,ref:'User'},
})

const Event = models.Event || model("Event",EventSchema)

export default Event; 