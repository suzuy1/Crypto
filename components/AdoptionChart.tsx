
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { THEME, ADOPTION_CHART_DATA } from '../constants';

const ChartSkeleton: React.FC = () => (
    <div className="w-full h-full rounded-lg animate-pulse" style={{ backgroundColor: THEME.bg.accent }}></div>
);

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 rounded-lg shadow-lg border" style={{backgroundColor: 'rgba(17, 34, 64, 0.95)', borderColor: THEME.accent}}>
          <p className="label font-semibold" style={{color: THEME.text.primary}}>{`${label}`}</p>
          <p className="intro" style={{color: THEME.text.secondary}}>{`Pemilik: ${payload[0].value} Juta`}</p>
        </div>
      );
    }
  
    return null;
  };

const AdoptionChart: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-80 md:h-96 p-4 rounded-lg border" style={{ backgroundColor: THEME.bg.secondary, borderColor: THEME.border }}>
      {isLoading ? (
        <ChartSkeleton />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ADOPTION_CHART_DATA.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={THEME.border} />
            <XAxis dataKey="name" tick={{ fill: THEME.text.secondary }} tickLine={{ stroke: THEME.text.secondary }} />
            <YAxis tick={{ fill: THEME.text.secondary }} tickLine={{ stroke: THEME.text.secondary }} label={{ value: 'Jumlah (Juta)', angle: -90, position: 'insideLeft', fill: THEME.text.secondary, dy: 40 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(100, 255, 218, 0.1)' }}/>
            <Bar dataKey="value" name="Jumlah Pemilik Aset Kripto Global" radius={[4, 4, 0, 0]}>
                {ADOPTION_CHART_DATA.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={THEME.accent} opacity={0.8} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AdoptionChart;
