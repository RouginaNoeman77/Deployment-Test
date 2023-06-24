import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDetailsService } from '../Services/property-details.service';
import { Subscription } from 'rxjs';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import {NgbModal, NgbModalConfig, NgbRatingConfig, NgbRatingModule, NgbDatepickerModule, ModalDismissReasons, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import { JsonPipe } from '@angular/common';
import { ReservationAddDto } from 'src/_Models/ReservationAddDto';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
  providers:[NgbRatingConfig],
  styles:[
    `
			.custom-day {
				text-align: center;
				padding: 0.185rem 0.25rem;
				display: inline-block;
				height: 2rem;
				width: 2rem;
			}
			.custom-day.focused {
				background-color: #e6e6e6;
			}
			.custom-day.range,
			.custom-day:hover {
				background-color: rgb(2, 117, 216);
				color: white;
			}
			.custom-day.faded {
				background-color: rgba(2, 117, 216, 0.5);
			}
		`,
  ],
})
export class PropertyDetailsComponent implements OnInit , OnDestroy{
  //Modal
  closeResult ='';
  //Date
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;
  fdate:Date=new Date();
  tdate:Date=new Date();
  daysDiff:number=0;
  ReservationFromDate:string="";
  ReservationToDate:string="";
  //Reservation
  newReservation:ReservationAddDto=new ReservationAddDto();
  //UserId
  userId:string="";
  constructor(public propertyServ:PropertyDetailsService , private ac:ActivatedRoute, config:NgbRatingConfig,
    private modalService: NgbModal, Modalconfig: NgbModalConfig ,private router:Router){
    //Rating
    config.max=5;
    config.readonly=true;
    Modalconfig.backdrop = 'static';
    Modalconfig.keyboard = false;
  }
  sub:Subscription|null=null;
  property:PropertyReadDto|any={};
  content:any;
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    this.sub=this.ac.params.subscribe(data=>{
      this.propertyServ.getPropertyById(data["id"]).subscribe((r)=>
      {
        this.property=r;
        for(let i=0; i<this.property.reviews.length;i++){
          this.propertyServ.getUserInfo(this.property.reviews[i].userId).subscribe((d)=>{
            this.property.reviews[i].userFullName = d.firstName +" "+ d.lastName;
            this.property.reviews[i].userImgUrl = d.profileImage;
            this.property.reviews[i].userName = d.firstName;
          })
        }
      });
    })
    this.getUserId();
  }
  //Modal----------------------------
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  //Date-------------
  onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
    //console.log(`From Date: ${this.fromDate.year} - ${this.fromDate.month} - ${this.fromDate.day} && To Date: ${this.toDate!.year} - ${this.toDate!.month} - ${this.toDate!.day} `)
    this.calculateNights()

	}
	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}
	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}
	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
  calculateNights(){
    this.fdate = new Date (this.fromDate!.year,this.fromDate!.month-1,this.fromDate!.day);
    this.ReservationFromDate = this.fdate.toLocaleDateString();
    this.tdate = new Date (this.toDate!.year,this.toDate!.month-1,this.toDate!.day);
    this.ReservationToDate =  this.tdate.toLocaleDateString();
    const timeDiff = this.tdate.getTime() - this.fdate.getTime();
    this.daysDiff = Math.ceil(timeDiff / (1000*3600*24));
    console.log (this.daysDiff);
  }
  addReservation(){
    const t = localStorage.getItem("Token");
    if(t != null){
      const tokenData = atob(t.split('.')[1]);
      const tokenObject = JSON.parse(tokenData);
      const userId = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      this.newReservation.userId=userId;
      console.log(userId);
      // const role = tokenObject["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      // console.log(role);
    }
    this.newReservation.propertyId=this.property.id;
    this.newReservation.reservationState="Pending"
    this.propertyServ.addReservation(this.newReservation).subscribe(a=>{
      console.log(a);

      //navigation property
      this.router.navigateByUrl("profile");
    })
  }
  getUserId(){
    const t = localStorage.getItem("token");
    if(t != null){
      const tokenData = atob(t.split('.')[1]);
      const tokenObject = JSON.parse(tokenData);
      this.userId = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log(this.userId);
    }
  }

  
  
}