import * as mongoose from 'mongoose';

export const DormSchema = new mongoose.Schema({
  name: { type: String },
  code: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // contact: contactSchema,
  address: {
    address: { type: String },
    coordinate: {
      type: String,
      enum: ['Point'],
    },
  },
  // utility: [utilSchema],
  type: { type: String },
  description: { type: String },
  // room: [RoomSchema],
  allowedSex: { type: String },
  avgStar: { type: Number },
  license: { type: [String] },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
  approved: { type: String, enum: ['approved', 'disapproved', 'pending'] },
  approvedOn: { type: Date },
});

var contactSchema = new mongoose.Schema({
  telephone: { type: String },
  email: { type: String },
  lineID: { type: String },
  website: { type: String },
});

var utilSchema = new mongoose.Schema({
  type: { type: String },
  distance: { type: Number },
  description: { type: String },
});

var RoomSchema = new mongoose.Schema({
  name: { type: String },
  capacity: { type: Number },
  image: { type: [String] },
  bathroom: { type: Number },
  aircond: { type: Number },
  kitchen: { type: Number },
  bedroom: { type: Number },
  description: { type: String },
  price: {
    amount: { type: Number },
    pricePer: { type: Number },
  },
  allowedSex: { type: String, enum: ['any', 'male', 'female'] },
});

// export interface DormQuery extends mongoose.Document {
//   name: string;
//   address: {
//     address: string;
//     coordinate: { type: 'Point'; coordinates: [Number, Number] };
//   };
//   utility: Array<UtilityInterfacce>;
//   room: Array<RoomInterface>;
//   allowedSex: Sex;
//   avgStar: number;
//   license: Array<string>;
//   createdOn: Date;
//   modifiedOn: Date;
//   approved: approval;
//   approvedOn: Date;
// }

// export interface UtilityInterfacce {
//   type: string;
//   distance: number;
//   description: string;
// }

// export interface RoomInterface {
//   name: string;
//   capacity: number;
//   image: Array<string>;
//   bathroom: number;
//   aircond: number;
//   kitchen: number;
//   bedroom: number;
//   description: string;
//   price: {
//     amount: number;
//     pricePer: number;
//   };
//   allowedSex: Sex;
// }
// enum Sex {
//   'male',
//   'female',
//   'any',
// }
// enum approval {
//   'approved',
//   'disapproved',
//   'pending',
// }
export interface Dorm extends mongoose.Document {
  name: string;
}
export interface DormAdd extends mongoose.Document {
  name: string;
}