import { Component } from '@angular/core';
import { UnitsModalService } from 'src/app/Services/units-modal/units-modal.service';

@Component({
  selector: 'app-units-modal',
  templateUrl: './units-modal.component.html',
  styleUrls: ['./units-modal.component.css']
})
export class UnitsModalComponent {
  data: any;

  constructor(private modalService: UnitsModalService) { }

  ngOnInit(): void {
    this.modalService.currentData.subscribe(data => this.data = data);
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
