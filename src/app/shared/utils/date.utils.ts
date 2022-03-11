import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtil {

  getFormatedDateString(date: Date): string {
    const year: number = date.getFullYear();
    const month: string = ("0" + (date.getMonth() + 1)).slice(-2);
    const day: string = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  setCurrentHourToDate(date: Date): Date {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    date.setHours(hour);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }
}
