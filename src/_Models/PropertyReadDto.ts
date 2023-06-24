import { ImagesReadto } from "./ImagesReadDto";

export class PropertyReadDto {
    constructor(
    public id:number=0,
    public title:string="",
    public description:string="",
    public address:string="",
    public type:string="",
    public region:string="",
    public area:string="",
    public category:string="",
    public pricePerNight:number=0,
    public capacity:number=0,
    public numberOfRooms:number=0,
    public numberOfBathrooms:number=0,
    public numberOfFloors:number=0,
    public dateOfAddingProperty:Date,
    public averageRating:number=0,
    public ownerId:string="",
    public adminId:string="",
    public prop_Images:ImagesReadto[]=[]){}
}

