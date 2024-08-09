import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  // Initialize with dummy data including date and preview
  private files: { id: string, name: string, size: string, date: Date, type?: string, preview?: string }[] = [
    { id: '1', name: 'Document1.pdf', size: '1.2 MB', date: new Date('2024-01-01'), type: 'image', preview: 'assets/images/apply-one.png' },
    { id: '2', name: 'Image2.png', size: '500 KB', date: new Date('2024-02-01'), type: 'image', preview: 'assets/images/doc-two.png' },
    { id: '3', name: 'Presentation.pptx', size: '2.3 MB', date: new Date('2024-03-01'), type: 'image', preview: 'assets/images/doc-three.webp' },
    { id: '4', name: 'Presentation.jpg', size: '3.3 MB', date: new Date('2023-03-01'), type: 'image', preview: 'assets/images/doc-four.png' }
  ];

  constructor() {
    // Initialization is done directly in the field declaration
  }

  getFiles(): { id: string, name: string, size: string, date: Date, type?: string, preview?: string }[] {
    return this.files;
  }

  addFile(file: { id: string, name: string, size: string, date: Date, type?: string, preview?: string }) {
    this.files.push(file);
  }

  removeFile(id: string) {
    const index = this.files.findIndex(file => file.id === id);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }
}
