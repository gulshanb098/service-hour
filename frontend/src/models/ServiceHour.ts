export interface ServiceHour {
  id: number;
  date: string | null;
  day: string | null;
  openingTime: string;
  closingTime: string;
  shortMessage: string;
  hourType: string;
}
