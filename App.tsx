
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Percent } from 'lucide-react';
import { FleetSize, TruckType } from './types';
import { TRUCK_TYPES, FLEET_SIZES, MONTHS, DISPATCH_DATA } from './constants';
import { SelectorGroup } from './components/SelectorGroup';
import { StatsChart } from './components/StatsChart';

const App: React.FC = () => {
  const [fleetSize, setFleetSize] = useState<FleetSize>('2-5');
  const [truckType, setTruckType] = useState<TruckType>('Dry Van');
  const [selectedMonth, setSelectedMonth] = useState<string>(MONTHS[2]);

  // Logic for Service Fee Percentage
  const serviceFee = useMemo(() => {
    const isSmallTruck = truckType === 'Box Truck';
    
    if (isSmallTruck) {
      if (fleetSize === '1') return 10;
      if (fleetSize === '2-5') return 8;
      if (fleetSize === '6-20') return 7;
      if (fleetSize === '21-50') return 6;

      return 6; // 21-50, 51-100, 101+
    } else {
      if (fleetSize === '1') return 7;
      if (fleetSize === '2-5') return 5.5;
      if (fleetSize === '6-20') return 4.5;
      if (fleetSize === '21-50') return 4;

      return 4; //  51-100, 101+
    }
  }, [fleetSize, truckType]);

  const currentStats = useMemo(() => {
    return DISPATCH_DATA[truckType][selectedMonth];
  }, [truckType, selectedMonth]);

  const chartData = useMemo(() => {
    return Object.values(DISPATCH_DATA[truckType]);
  }, [truckType]);

  const handlePrevMonth = () => {
    const idx = MONTHS.indexOf(selectedMonth);
    if (idx > 0) setSelectedMonth(MONTHS[idx - 1]);
  };

  const handleNextMonth = () => {
    const idx = MONTHS.indexOf(selectedMonth);
    if (idx < MONTHS.length - 1) setSelectedMonth(MONTHS[idx + 1]);
  };

  const diff = currentStats.ourResult - currentStats.marketAvg;
  const diffPercent = ((diff / currentStats.marketAvg) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Input Controls & Fee Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
            <SelectorGroup
              label="Fleet Size"
              description="Select truck count"
              options={FLEET_SIZES.map(s => ({ label: s, value: s as FleetSize }))}
              currentValue={fleetSize}
              onChange={(val) => setFleetSize(val as FleetSize)}
            />
          </div>

          {/* New Mid-Screen Service Fee Display */}
          <div className="md:col-span-1 bg-[#1A1A1A] text-white p-6 rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Percent className="w-24 h-24 rotate-12" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Service Fee</span>
            <div className="text-6xl font-black text-[#E54D2E] drop-shadow-sm">
              {serviceFee}<span className="text-3xl">%</span>
            </div>
            <p className="text-[10px] mt-2 text-gray-500 uppercase tracking-tighter">
              {truckType === 'Box Truck' || truckType === 'Hotshot' ? 'Small Truck rate' : 'Semi Truck rate'}
            </p>
          </div>

          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
            <SelectorGroup
              label="Truck Type"
              description="Select equipment"
              options={TRUCK_TYPES.map(t => ({ label: t.label, value: t.label, icon: t.icon }))}
              currentValue={truckType}
              onChange={(val) => setTruckType(val as TruckType)}
            />
          </div>
        </div>

        {/* Results Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
            <StatsChart data={chartData} selectedMonth={selectedMonth} />
            <div className="flex justify-center gap-8 mt-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-300 rounded-sm"></span>
                Market Average
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                Our Result
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-gray-900">Analysis</h2>
              <p className="text-sm text-gray-500">Comparing market performance for {truckType} with our optimized dispatch solutions.</p>
            </div>

            <div className="bg-[#1A1A1A] text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#222]">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Stats based on</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handlePrevMonth}
                    disabled={MONTHS.indexOf(selectedMonth) === 0}
                    className="p-1 hover:bg-gray-700 rounded disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold min-w-[120px] text-center">{selectedMonth}</span>
                  <button 
                    onClick={handleNextMonth}
                    disabled={MONTHS.indexOf(selectedMonth) === MONTHS.length - 1}
                    className="p-1 hover:bg-gray-700 rounded disabled:opacity-30 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-400 uppercase">Market RPM</span>
                    <div className="text-4xl font-bold">${currentStats.marketAvg.toFixed(2)}</div>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="text-xs font-medium text-gray-400 uppercase">Our RPM Result</span>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-[#4ADE80]">${currentStats.ourResult.toFixed(2)}</div>
                      <div className="text-sm font-bold text-[#4ADE80] bg-[#4ADE8022] px-2 py-1 rounded">
                        +{diff.toFixed(2)} · {diffPercent}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Estimated Gross per Truck</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Monthly performance projection</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-300">
                    ${currentStats.grossPerTruck.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-700 border border-blue-100 flex items-start gap-3">
              <div className="bg-blue-500 text-white p-1 rounded-full shrink-0">
                <Percent className="w-3 h-3" />
              </div>
              <p>Your service fee is automatically adjusted to <strong>{serviceFee}%</strong> based on your {fleetSize} truck fleet and {truckType} category.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
