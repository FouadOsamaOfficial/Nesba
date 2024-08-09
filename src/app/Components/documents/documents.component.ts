import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/Services/Documents/documents.service';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: { id: string, name: string, size: string, date: Date, type?: string, preview?: string }[] = [];
  isDragOver = false;
  uploadError = false;
  showModal = false;
  selectedDocument: { id: string, name: string, size: string, date: Date, type?: string, preview?: string } | null = null;

  constructor(private router: Router, private documentsService: DocumentsService) {}

  ngOnInit(): void {
    this.documents = this.documentsService.getFiles();
  }

  uploadFiles() {
    if (this.documents.length === 0) {
      this.uploadError = true;
    } else {
      console.log('Files to upload:', this.documents);
      this.clearUploadError();
    }
  }


  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        const date = new Date();
        const lastId = this.documents.length ? parseInt(this.documents[this.documents.length - 1].id, 10) : 0; // Convert last ID to number
        const id = (lastId + 1).toString(); // Generate new ID and convert to string
  
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const fileType = file.type.split('/')[0];
          let preview = '';
  
          if (fileType === 'image') {
            preview = (e.target as FileReader).result as string;
          } else if (file.type === 'application/pdf') {
            preview = 'assets/pdf-icon.png';
          } else if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            preview = 'assets/excel-icon.png';
          }
  
          this.documentsService.addFile({
            id: id,
            name: file.name,
            size: `${(file.size / 1024).toFixed(2)} KB`,
            date: date,
            type: fileType,
            preview: preview
          });
          this.documents = this.documentsService.getFiles();
        };
  
        if (file.type.startsWith('image/')) {
          reader.readAsDataURL(file);
        } else {
          reader.readAsArrayBuffer(file);
        }
      });
    } else {
      this.uploadError = true;
    }
  }
  
  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      const date = new Date();
      const lastId = this.documents.length ? parseInt(this.documents[this.documents.length - 1].id, 10) : 0; // Convert last ID to number
      const id = (lastId + 1).toString(); // Generate new ID and convert to string
  
      reader.onload = async (e: ProgressEvent<FileReader>) => {
        const fileType = file.type.split('/')[0];
        let preview = '';
  
        if (fileType === 'image') {
          preview = (e.target as FileReader).result as string;
        } else if (file.type === 'application/pdf') {
          const pdfData = new Uint8Array((e.target as FileReader).result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 0.5 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
  
          await page.render({
            canvasContext: context!,
            viewport: viewport
          }).promise;
  
          preview = canvas.toDataURL();
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          preview = 'assets/excel-icon.png';
        }
  
        this.documentsService.addFile({
          id: id,
          name: file.name,
          size: `${(file.size / 1024).toFixed(2)} KB`,
          date: date,
          type: fileType,
          preview: preview
        });
        this.documents = this.documentsService.getFiles();
      };
  
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    } else {
      this.uploadError = true;
    }
  }
  

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  deleteDocument(id: string) {
    this.documentsService.removeFile(id);
    this.documents = this.documentsService.getFiles();
  }

  clearUploadError() {
    this.uploadError = false;
  }

  removeExtension(fileName: string): string {
    return fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
  }
  openDocument(id: string) {
    this.selectedDocument = this.documents.find(doc => doc.id === id) || null;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedDocument = null;
  }
  previous() {
    this.router.navigate(['./user-dashboard']);
  }
}
