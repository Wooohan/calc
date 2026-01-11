
import React from 'react';

interface SelectorGroupProps<T> {
  label: string;
  options: { label: string; value: T; icon?: React.ReactNode }[];
  currentValue: T;
  onChange: (value: T) => void;
  description?: string;
}

export const SelectorGroup = <T extends string>({
  label,
  options,
  currentValue,
  onChange,
  description,
}: SelectorGroupProps<T>) => {
  return (
    <div className="flex-1">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">{label}</h3>
      {description && <p className="text-xs text-gray-400 mb-4">{description}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              flex items-center gap-2 px-4 py-2 border rounded transition-all duration-200 text-sm font-medium
              ${currentValue === option.value
                ? 'bg-[#E54D2E] border-[#E54D2E] text-white shadow-md transform scale-105'
                : 'bg-white border-gray-200 text-gray-600 hover:border-[#E54D2E] hover:text-[#E54D2E]'
              }
            `}
          >
            {option.icon}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
