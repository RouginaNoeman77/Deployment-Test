export class UserReadDto {
    constructor(
        public userId: string,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public dateOfBirth: Date,
        public owner: number,
        public entryDate: Date,
        public hiringDate: Date,
        public totalMoneySpent: number,
        public profileImage: string,
        public acountState: Number
    ){}
}