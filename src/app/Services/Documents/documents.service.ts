import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor() {
    // Initialize with dummy data including date and preview
    this.files = [
      {id: 1, name: 'Document1.pdf', size: '1.2 MB', date: new Date('2024-01-01'), type: 'image', preview: 'assets/images/apply-one.png' },
      { id: 2,name: 'Image2.png', size: '500 KB', date: new Date('2024-02-01'), type: 'image', preview: 'assets/images/doc-two.png' }, 
      {id: 3, name: 'Presentation.pptx', size: '2.3 MB', date: new Date('2024-03-01'), type: 'image', preview: 'assets/images/doc-three.webp' },
      {id: 4,name: 'Presentation.jpg', size: '3.3 MB', date: new Date('2023-03-01'), type: 'image', preview: 'assets/images/doc-four.png' }
    ];
  }


  private files: { id:number,name: string, size: string, date: Date, type?: string, preview?: string }[] = [];

  getFiles(): { id:number,name: string, size: string, date: Date, type?: string, preview?: string }[] {
    return this.files;
  }

  addFile(file: {id:number, name: string, size: string, date: Date, type?: string, preview?: string }) {
    this.files.push(file);
  }

  removeFile(id: number) {
    this.files.splice(id);
  }
}
