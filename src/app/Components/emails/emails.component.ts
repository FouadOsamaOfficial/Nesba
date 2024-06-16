import { AfterViewInit, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var $: any;
interface MusicItem {
  url: string;
  title: string;
}

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})


export class EmailsComponent implements  OnInit{

  constructor(private router:Router , private sanitizer: DomSanitizer) { }

  musicList: MusicItem[] = [
    { url: 'https://youtu.be/GbgIcKCM8J8?si=jBKN1r_wcwV30X9c', title: 'tlpany' },
    { url: 'YOUTUBE_VIDEO_ID_2', title: 'Music Title 2' },
    { url: 'YOUTUBE_VIDEO_ID_3', title: 'Music Title 3' },
    { url: 'YOUTUBE_VIDEO_ID_4', title: 'Music Title 4' },
    { url: 'YOUTUBE_VIDEO_ID_5', title: 'Music Title 5' },
    { url: 'YOUTUBE_VIDEO_ID_6', title: 'Music Title 6' },
    { url: 'YOUTUBE_VIDEO_ID_7', title: 'Music Title 7' },
    { url: 'YOUTUBE_VIDEO_ID_8', title: 'Music Title 8' },
    { url: 'YOUTUBE_VIDEO_ID_9', title: 'Music Title 9' },
    { url: 'YOUTUBE_VIDEO_ID_10', title: 'Music Title 10' },
    { url: 'YOUTUBE_VIDEO_ID_11', title: 'Music Title 11' },
    { url: 'YOUTUBE_VIDEO_ID_12', title: 'Music Title 12' },
    { url: 'YOUTUBE_VIDEO_ID_13', title: 'Music Title 13' },
    { url: 'YOUTUBE_VIDEO_ID_14', title: 'Music Title 14' },
    { url: 'YOUTUBE_VIDEO_ID_15', title: 'Music Title 15' },
    { url: 'YOUTUBE_VIDEO_ID_16', title: 'Music Title 16' },
    { url: 'YOUTUBE_VIDEO_ID_17', title: 'Music Title 17' },
    { url: 'YOUTUBE_VIDEO_ID_18', title: 'Music Title 18' },
    { url: 'YOUTUBE_VIDEO_ID_19', title: 'Music Title 19' },
    { url: 'YOUTUBE_VIDEO_ID_20', title: 'Music Title 20' },
    { url: 'YOUTUBE_VIDEO_ID_21', title: 'Music Title 21' },
    { url: 'YOUTUBE_VIDEO_ID_22', title: 'Music Title 22' },
    { url: 'YOUTUBE_VIDEO_ID_23', title: 'Music Title 23' },
    { url: 'YOUTUBE_VIDEO_ID_24', title: 'Music Title 24' },
    { url: 'YOUTUBE_VIDEO_ID_25', title: 'Music Title 25' },
    { url: 'YOUTUBE_VIDEO_ID_26', title: 'Music Title 26' },
    // Add more music items here...
  ];
  filteredMusicList: MusicItem[] = [];
  paginatedMusicList: MusicItem[] = [];
  showOptions = [5, 10, 15, 20];
  showCount = 5;
  currentPage = 1;
  totalPages = 1;
  showVideo = false;
  currentVideoUrl: SafeResourceUrl = '';
  pages: number[] = [];

  ngOnInit() {
    this.filteredMusicList = [...this.musicList];
    this.updatePagination();
  }

  changeShowCount(event: any) {
    this.showCount = event.target.value;
    this.updatePagination();
  }

  filterMusic(event: any) {
    const value = event.target.value.toLowerCase();
    this.filteredMusicList = this.musicList.filter(item => item.title.toLowerCase().includes(value));
    this.updatePagination();
  }

  updatePagination() {
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredMusicList.length / this.showCount);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.paginatedMusicList = this.filteredMusicList.slice(0, this.showCount);
  }

  goToPage(page: number) {
    this.currentPage = page;
    const start = (this.currentPage - 1) * this.showCount;
    const end = this.currentPage * this.showCount;
    this.paginatedMusicList = this.filteredMusicList.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  playVideo(url: string) {
    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
    this.showVideo = true;
  }

  deleteMail(url: string) {
    this.musicList = this.musicList.filter(item => item.url !== url);
    this.filteredMusicList = this.filteredMusicList.filter(item => item.url !== url);
    this.updatePagination();
  }

  replayMail(url: string) {
    this.playVideo(url);
  }

  closeVideo() {
    this.showVideo = false;
    this.currentVideoUrl = '';
  }

  getThumbnailUrl(videoId: string): string {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }

  previous() {
    this.router.navigate(['./user-dashboard']);
  }
}