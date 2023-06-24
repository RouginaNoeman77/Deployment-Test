export class ReservationAddDto{
    constructor(
        public requestDate:Date=new Date(Date.now()),
        public dateFrom:Date=new Date(),
        public dateTo:Date=new Date(),
		public propertyId:number=0,
		public userId:string="",
        public adminId:string="d812374c-a106-481d-9206-9150e3822fdd",
        public reservationState:string="Pending"
    ){}
}