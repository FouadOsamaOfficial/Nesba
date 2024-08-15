import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MohProgram {
  bayout: string;
  selfConstruction: boolean;
  mohLand: string;
}
@Injectable({
  providedIn: 'root'
})
export class MOHProgramService {

  private data: MohProgram[] = [
    { bayout: '5000', selfConstruction: true, mohLand: '3000' },
    { bayout: '7000', selfConstruction: false, mohLand: '4000' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
    { bayout: '6000', selfConstruction: true, mohLand: '3500' },
  ];
  constructor() { }

  // Method to get the list of MohProgram data
  getMohPrograms(): MohProgram[] {
    return this.data;
  }

  // Method to update a specific MohProgram entry
  updateMohProgram(index: number, newData: MohProgram): void {
    if (index >= 0 && index < this.data.length) {
      this.data[index] = newData;
    }
  }

  // Method to add a new MohProgram entry
  addMohProgram(newData: MohProgram): void {
    this.data.push(newData);
  }

  // Method to remove a specific MohProgram entry
  removeMohProgram(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}
