import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ModelOptions, MongooseFilterQuery, Query } from "mongoose";
import { ReviewBodyDto } from "../review.dto";
import { Review, ReviewPrimitive } from "../review.model";


@Injectable()
export class ReviewRepository {
    constructor (
        @InjectModel('Review') private readonly reviewModel: Model<Review>
        ) {}

    async create(reviewBody: ReviewBodyDto, options?:ModelOptions, fn?: any): Promise<Review | undefined> {
        const dto: ReviewPrimitive = {...reviewBody, createdOn: new Date().toString()};
        const document = new this.reviewModel(dto);
        const result = await document.save(options, fn);
        return result;
    }

    async find(query: any, projection?: any, callback?: any): Promise<Review[] | undefined> {
        const result = await this.reviewModel.find(query, projection, callback);
        return result;
    }

    async findWithPagination(query: any, stop: number, projection?: any,  callback?:any): Promise<Review[] | undefined> {
        const result = await this.reviewModel.find(query, projection, callback).limit(stop);
        return result;
    }

    async findOneAndUpdate(query: any, data: any, options?: any, callback?: any) {
        try {
            const result = await this.reviewModel.findOneAndUpdate(query, data, options, callback);
            return result;
        } catch (err) {
            throw new Error('Update Failure');
        }
    }

    async deleteOne(query: any, options?:ModelOptions, callback?: any): Promise<any> {
        const result = await this.reviewModel.deleteOne(query, options, callback);
        return result;
    }

}