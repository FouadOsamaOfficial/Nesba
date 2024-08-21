import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MohProgram {
  bayout: string;
  selfConstruction: boolean;
  mohLand: string;
  imageUrl: string[];
}
@Injectable({
  providedIn: 'root'
})
export class MOHProgramService {

  private data: MohProgram[] = [
    {
      bayout: '5000', selfConstruction: true, mohLand: '3000', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']
    },
    {
      bayout: '7000', selfConstruction: false, mohLand: '4000', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg ','assets/images/villa4.jpeg ']
    },
    {
      bayout: '6000', selfConstruction: true, mohLand: '3500', imageUrl: ['assets/images/villa1.webp', 'assets/images/villa2.jpeg', 'assets/images/villa3.jpeg' ,'assets/images/villa4.jpeg ']
    }


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
