import { Component } from '@angular/core';
import { Trip } from '../models/trip.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-trip-manager',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './trip-manager.component.html',
  styleUrl: './trip-manager.component.scss'
})
export class TripManagerComponent {
  newTrip: Trip = { startPoint: '', endPoint: '' };
  newStart: any;
  newEnd: any;
  
constructor() {}

  ngOnInit() { }

  trips: Trip[] = [];

  addTrip() {
    if (this.newTrip.startPoint && this.newTrip.endPoint) {
      this.trips.push({ ...this.newTrip });
      this.newTrip = { startPoint: '', endPoint: '' };
    }
  }

  getColor(index: number): string {
    const colors = ['#4caf50', '#ff9800', '#00bcd4', '#e91e63', '#9c27b0'];
    return colors[index % colors.length];
  }
  
  getShortCode(name: string): string {
    return name?.length > 3 ? name.substring(0, 3).toUpperCase() : name?.toUpperCase() || '';
  }
  
  isContinuedTrip(current: any, next: any): boolean {
    return current.endPoint === next.startPoint;
  }
  
  isSameTrip(current: any, next: any): boolean {
    return current.startPoint === next.startPoint && current.endPoint === next.endPoint;
  }
  
}
