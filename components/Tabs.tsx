
import React, { useState } from 'react';
import type { TabItem as TabItemType } from '../types';
import { THEME } from '../constants';

interface TabsProps {
  items: TabItemType[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>(items[0]?.id);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6 justify-center" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            id={`tab-${item.id}`}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tab-content-${item.id}`}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A192F] focus:ring-[#64FFDA] ${
              activeTab === item.id
                ? 'bg-accent text-primary-bg shadow-lg shadow-accent/30 transform -translate-y-1'
                : 'bg-accent-bg text-secondary hover:bg-white/10 hover:text-primary'
            }`}
            style={{ 
                '--tw-bg-accent': THEME.accent,
                '--tw-text-primary-bg': THEME.bg.primary,
                '--tw-bg-accent-bg': THEME.bg.accent,
                '--tw-text-secondary': THEME.text.secondary,
                '--tw-text-primary': THEME.text.primary,
             } as React.CSSProperties}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="min-h-[120px] md:min-h-[150px]">
        {items.map((item) => (
          <div
            key={item.id}
            id={`tab-content-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            className={`transition-opacity duration-500 ${activeTab === item.id ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            {activeTab === item.id && (
                <p className="text-base leading-relaxed" style={{ color: THEME.text.secondary }}>
                {item.content}
                </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
