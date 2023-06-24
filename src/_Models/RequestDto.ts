export class request{
    constructor(public id:number=0,
                public requestDate:Date,
                public dateFrom:Date,
                public dateTo:Date,
                public stateFromOwner:string="",
                public stateFromAdmin:number=0,
                public reservationState:string="",
                public propertyId:number=0,
                public adminId:string="",
                public userId:string="",
                ) {}
}