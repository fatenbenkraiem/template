import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-adminreserve',
  templateUrl: './adminreserve.component.html',
  styleUrls: ['./adminreserve.component.css']
})
export class AdminreserveComponent implements OnInit {


  host: string = "http://127.0.0.1:8000";
  addFormVisible: boolean = false;
  editFormVisible: boolean = false;
  base64Data: any;
  
  retrieveResonse: any;
  reservations: Reservation[] = [];
  
  reservation: Reservation = new Reservation();
  totalReservations!: number;


  constructor(
    //private toastr: ToastrService,
    private reservationService: ReservationService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.getReservations();
  }


  getReservations() {
    this.reservation = new Reservation();
    this.reservationService.getReservations().subscribe(data => {
      if (data != null) {
        this.reservations = data;
        this.totalReservations = data.length;
      } else {
        this.totalReservations = 0;
        this.reservations = []
      }
    })
  }

  createReservation() {
    const formData = new FormData();
    formData.append('reservation', JSON.stringify(this.reservation))
    this.reservationService.createReservation(this.reservation).subscribe(response => {
      if (response != null) {
       // this.toastr.success("Réservation ajoutée avec succès")
        this.hideAddForm()
      }
      this.getReservations();
      this.redirectToList();
    })

  }

  editReservation(Reservation:Reservation) {
    var id= Object.values(Reservation)[0];
    this.reservationService.findReservationById(id).subscribe(data => {
      this.reservation = data;
      console.log(data)
      this.showEditForm(); 
    });
  }
  updateReservation(){
    this.reservationService.updateReservations(this.reservation,this.reservation.id).subscribe(data=>{
      console.log(data)
     // this.toastr.success("Actualité publié avec succès!")
      this.getReservations()
      this.redirectToList()
    }, error=>{
      //this.toastr.error("Erreur, Serveur ne répond pas!")
    });
  }

 
  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(response => {
      if (response != null) {
       // this.toastr.success(" Réservation supprimée avec succès");
        this.getReservations();
      }
    })
  }

  showAddForm() {
    this.addFormVisible = true;
  }
  hideAddForm() {
    this.addFormVisible = false;
  }

  showEditForm() {
    this.editFormVisible = true;
  }
  hideEditForm() {
    this.editFormVisible = false;
  }

  redirectToList() {
    this.router.navigate(['/admin/reserve'])
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
