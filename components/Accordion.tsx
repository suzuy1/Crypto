
import React, { useState, useRef, useEffect } from 'react';
import type { AccordionItem as AccordionItemType } from '../types';
import { THEME } from '../constants';
import { PlusIcon } from './Icons';

interface AccordionProps {
  items: AccordionItemType[];
}

const AccordionItem: React.FC<{
  item: AccordionItemType;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: THEME.border, backgroundColor: THEME.bg.secondary }}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 md:p-6 text-left transition-colors duration-300 hover:bg-white/5"
        aria-expanded={isOpen}
      >
        <h4 className="font-semibold text-lg md:text-xl pr-4" style={{ color: THEME.text.primary }}>
          {item.title}
        </h4>
        <PlusIcon className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} style={{ color: THEME.accent }} />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="p-4 md:p-6 pt-0 text-base leading-relaxed" style={{ color: THEME.text.secondary }}>
          {item.content}
        </div>
      </div>
    </div>
  );
};


const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
