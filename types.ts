
export type FleetSize = '1' | '2-5' | '6-20' | '21-50' | '51-100' | '101+';

export type TruckType = 'Dry Van' | 'Reefer' | 'FL/St-Deck' | 'Power Unit' | 'Box Truck' | 'Hotshot';

export interface MonthlyStats {
  month: string;
  marketAvg: number;
  ourResult: number;
  grossPerTruck: number;
}

export interface DispatchData {
  [key: string]: { // truck type
    [key: string]: MonthlyStats; // month name
  };
}
