import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrolldownService {
  scrollEvent = new EventEmitter<void>();
  constructor() { }
}
