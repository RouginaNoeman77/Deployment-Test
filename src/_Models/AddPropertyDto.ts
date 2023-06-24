import { AddImageDto } from "./AddImageDto";

export class AddPropertyDto {
  constructor(
    public Title: string = '',
    public Description: string = '',
    public Address: string = '',
    public Type: string = '',
    public Region: string = '',
    public Area: string = '',
    public Category: string = 'Vacation Rental',
    public PricePerNight: number = 80,
    public Capacity: number = 1,
    public NumberOfRooms: number = 1,
    public NumberOfBathrooms: number = 1,
    public NumberOfFloors: number = 1,
    public DateOfAddingProperty: Date = new Date(),
    public State: string = 'Pending',
    public OwnerId: string = '',
    public AdminId: string='f40bca14-8d06-428b-9bb3-04e2e0b780fc',
    public prop_Images:string[]=[]
  ) {}
}
