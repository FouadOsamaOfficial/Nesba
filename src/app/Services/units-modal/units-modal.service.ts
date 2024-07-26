import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsModalService {

  private modalData = new BehaviorSubject<any>(null);
  currentData = this.modalData.asObservable();

  constructor() { }

  openModal(data: any) {
    this.modalData.next(data);
  }

  closeModal() {
    this.modalData.next(null);
  }
}
