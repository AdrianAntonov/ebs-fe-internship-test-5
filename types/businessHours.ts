export interface IBusinessHours {
  isActive: boolean;
  timeFrom: string | null;
  timeTill: string | null;
  title: string;
  value: string;
}

export interface workingHours {
  data: IBusinessHours[];
}
