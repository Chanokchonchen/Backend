import * as mongoose from 'mongoose';


export const PendingActionSchema = new mongoose.Schema({
  type: { type: String },
  request: { type: String },
  target: {},
  newdata: {},
  createdOn: { type: Date },
  createdBy: { type: String },
  status: { type: String },
});

export interface PendingAction extends mongoose.Document {
  type: string;
  request: string;
  target: any;
  newdata: any;
  createdOn: Date;
  createdBy: string;
  status: string;
}
