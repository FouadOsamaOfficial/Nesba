import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements AfterViewInit {
  constructor(private router:Router) { }

  previous() {
    this.router.navigate(['./user-dashboard']);

  }
  ngAfterViewInit(): void {
    const isAdvancedUpload = (() => {
      const div = document.createElement('div');
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    })();

    const draggableFileArea = document.querySelector(".drag-file-area") as HTMLElement;
    const browseFileText = document.querySelector(".browse-files") as HTMLElement;
    const uploadIcon = document.querySelector(".upload-icon") as HTMLElement;
    const dragDropText = document.querySelector(".dynamic-message") as HTMLElement;
    const fileInput = document.querySelector(".default-file-input") as HTMLInputElement;
    const cannotUploadMessage = document.querySelector(".cannot-upload-message") as HTMLElement;
    const cancelAlertButton = document.querySelector(".cancel-alert-button") as HTMLElement;
    const uploadedFile = document.querySelector(".file-block") as HTMLElement;
    const fileName = document.querySelector(".file-name") as HTMLElement;
    const fileSize = document.querySelector(".file-size") as HTMLElement;
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    const removeFileButton = document.querySelector(".remove-file-icon") as HTMLElement;
    const uploadButton = document.querySelector(".upload-button") as HTMLElement;
    let fileFlag = 0;

    fileInput.addEventListener("click", () => {
      fileInput.value = '';
      console.log(fileInput.value);
    });

    fileInput.addEventListener("change", e => {
      console.log(" > " + fileInput.value)
      uploadIcon.innerHTML = 'check_circle';
      dragDropText.innerHTML = 'File Dropped Successfully!';
      document.querySelector(".label")!.innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
      uploadButton.innerHTML = `Upload`;
      fileName.innerHTML = fileInput.files![0].name;
      fileSize.innerHTML = (fileInput.files![0].size / 1024).toFixed(1) + " KB";
      uploadedFile.style.cssText = "display: flex;";
      progressBar.style.width = '0';
      fileFlag = 0;
    });

    uploadButton.addEventListener("click", () => {
      const isFileUploaded = fileInput.value;
      if (isFileUploaded != '') {
        if (fileFlag == 0) {
          fileFlag = 1;
          let width = 0;
          const id = setInterval(frame, 50);
          function frame() {
            if (width >= 390) {
              clearInterval(id);
              uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
            } else {
              width += 5;
              progressBar.style.width = width + "px";
            }
          }
        }
      } else {
        cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
      }
    });

    cancelAlertButton.addEventListener("click", () => {
      cannotUploadMessage.style.cssText = "display: none;";
    });

    if (isAdvancedUpload) {
      ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(evt =>
        draggableFileArea.addEventListener(evt, e => {
          e.preventDefault();
          e.stopPropagation();
        })
      );

      ["dragover", "dragenter"].forEach(evt => {
        draggableFileArea.addEventListener(evt, e => {
          e.preventDefault();
          e.stopPropagation();
          uploadIcon.innerHTML = 'file_download';
          dragDropText.innerHTML = 'Drop your file here!';
        });
      });

      draggableFileArea.addEventListener("drop", e => {
        uploadIcon.innerHTML = 'check_circle';
        dragDropText.innerHTML = 'File Dropped Successfully!';
        document.querySelector(".label")!.innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
        uploadButton.innerHTML = `Upload`;

        const files = e.dataTransfer!.files;
        fileInput.files = files;
        // console.log(files[0].name + " " + files[0].size);
        // console.log(document.querySelector(".default-file-input")!.value);
        fileName.innerHTML = files[0].name;
        fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
        uploadedFile.style.cssText = "display: flex;";
        progressBar.style.width = '0';
        fileFlag = 0;
      });
    }

    removeFileButton.addEventListener("click", () => {
      uploadedFile.style.cssText = "display: none;";
      fileInput.value = '';
      uploadIcon.innerHTML = 'file_upload';
      dragDropText.innerHTML = 'Drag & drop any file here';
      document.querySelector(".label")!.innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
      uploadButton.innerHTML = `Upload`;
    });
  }
}

