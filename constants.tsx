
import React from 'react';
import { Truck, Snowflake, Layers, Tractor, Package, Zap } from 'lucide-react';
import { DispatchData, TruckType } from './types';

export const TRUCK_TYPES: { label: TruckType; icon: React.ReactNode }[] = [
  { label: 'Dry Van', icon: <Truck className="w-5 h-5" /> },
  { label: 'Reefer', icon: <Snowflake className="w-5 h-5" /> },
  { label: 'FL/St-Deck', icon: <Layers className="w-5 h-5" /> },
  { label: 'Power Unit', icon: <Tractor className="w-5 h-5" /> },
  { label: 'Box Truck', icon: <Package className="w-5 h-5" /> },
  { label: 'Hotshot', icon: <Zap className="w-5 h-5" /> },
];

export const FLEET_SIZES = ['1', '2-5', '6-20', '21-50', '51-100', '101+'];

export const MONTHS = ['September 2023', 'October 2023', 'November 2023', 'December 2023'];

export const DISPATCH_DATA: DispatchData = {
  'Dry Van': {
    'September 2023': { month: 'Sep 2023', marketAvg: 1.85, ourResult: 2.10, grossPerTruck: 28500 },
    'October 2023': { month: 'Oct 2023', marketAvg: 1.90, ourResult: 2.15, grossPerTruck: 29200 },
    'November 2023': { month: 'Nov 2023', marketAvg: 2.00, ourResult: 2.25, grossPerTruck: 31121 },
    'December 2023': { month: 'Dec 2023', marketAvg: 2.15, ourResult: 2.40, grossPerTruck: 33500 },
  },
  'Reefer': {
    'September 2023': { month: 'Sep 2023', marketAvg: 2.10, ourResult: 2.45, grossPerTruck: 32000 },
    'October 2023': { month: 'Oct 2023', marketAvg: 2.20, ourResult: 2.55, grossPerTruck: 34000 },
    'November 2023': { month: 'Nov 2023', marketAvg: 2.35, ourResult: 2.75, grossPerTruck: 36500 },
    'December 2023': { month: 'Dec 2023', marketAvg: 2.50, ourResult: 2.90, grossPerTruck: 38000 },
  },
  'FL/St-Deck': {
    'September 2023': { month: 'Sep 2023', marketAvg: 2.30, ourResult: 2.60, grossPerTruck: 35000 },
    'October 2023': { month: 'Oct 2023', marketAvg: 2.40, ourResult: 2.70, grossPerTruck: 36500 },
    'November 2023': { month: 'Nov 2023', marketAvg: 2.45, ourResult: 2.80, grossPerTruck: 37200 },
    'December 2023': { month: 'Dec 2023', marketAvg: 2.40, ourResult: 2.75, grossPerTruck: 36000 },
  },
  'Power Unit': {
    'September 2023': { month: 'Sep 2023', marketAvg: 1.70, ourResult: 1.95, grossPerTruck: 24000 },
    'October 2023': { month: 'Oct 2023', marketAvg: 1.75, ourResult: 2.05, grossPerTruck: 25500 },
    'November 2023': { month: 'Nov 2023', marketAvg: 1.85, ourResult: 2.15, grossPerTruck: 27000 },
    'December 2023': { month: 'Dec 2023', marketAvg: 1.90, ourResult: 2.25, grossPerTruck: 28500 },
  },
  'Box Truck': {
    'September 2023': { month: 'Sep 2023', marketAvg: 1.40, ourResult: 1.65, grossPerTruck: 18000 },
    'October 2023': { month: 'Oct 2023', marketAvg: 1.45, ourResult: 1.70, grossPerTruck: 19000 },
    'November 2023': { month: 'Nov 2023', marketAvg: 1.55, ourResult: 1.85, grossPerTruck: 21000 },
    'December 2023': { month: 'Dec 2023', marketAvg: 1.70, ourResult: 2.00, grossPerTruck: 23000 },
  },
  'Hotshot': {
    'September 2023': { month: 'Sep 2023', marketAvg: 1.90, ourResult: 2.20, grossPerTruck: 24000 },
    'October 2023': { month: 'Oct 2023', marketAvg: 1.95, ourResult: 2.30, grossPerTruck: 25500 },
    'November 2023': { month: 'Nov 2023', marketAvg: 2.10, ourResult: 2.50, grossPerTruck: 28000 },
    'December 2023': { month: 'Dec 2023', marketAvg: 2.25, ourResult: 2.70, grossPerTruck: 31000 },
  },
};
