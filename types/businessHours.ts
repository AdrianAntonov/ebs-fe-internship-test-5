import {TStringOrNull} from "../types/quantityAdmPrt"

export interface IBusinessHours {
  isActive: boolean;
  timeFrom: TStringOrNull,
  timeTill: TStringOrNull,
  title: string;
  value: string;
}

export interface IWorkingHours {
  data: IBusinessHours[];
}
