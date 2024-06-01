import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})


export class EmailsComponent implements AfterViewInit{

  constructor(private router:Router) { }

  previous() {
    this.router.navigate(['./user-dashboard']);

  }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#example').DataTable({
        dom: '<"dt-buttons"Bf><"clear">lirtp',
        paging: true,
        autoWidth: true,
        buttons: [
          'colvis',
          'copyHtml5',
          'csvHtml5',
          'excelHtml5',
          'pdfHtml5',
          'print'
        ]
      });
    });
  }
}
