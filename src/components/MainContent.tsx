import React, { useState, useEffect } from 'react';
import { COUNTRIES, SUB_TABS_BY_COUNTRY, CONTENT_BY_COUNTRY } from '../constants';
import ContentCard from './ContentCard';

const MainContent: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState('Brazil');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);

  const currentSubTabs = SUB_TABS_BY_COUNTRY[activeCountry] || [];
  const currentContentItems = CONTENT_BY_COUNTRY[activeCountry] || [];
  
  const [subTabContentMap, setSubTabContentMap] = useState<Record<string, any[]>>({});

  // Effect to reset the active sub-tab when the country changes
  useEffect(() => {
    const newSubTabs = SUB_TABS_BY_COUNTRY[activeCountry] || [];
    setActiveSubTab(newSubTabs.length > 0 ? newSubTabs[0].name : '');

    // Effect to reset selected card when country changes
    const newContent = CONTENT_BY_COUNTRY[activeCountry] || [];
    if (newContent.length > 0) {
      setSelectedCardIds([newContent[0].id]);
    } else {
      setSelectedCardIds([]);
    }
  }, [activeCountry]);

  // Generate a random number of cards for each subtab when the active country changes
  useEffect(() => {
    const map: Record<string, any[]> = {};
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    currentSubTabs.forEach((tab, tabIndex) => {
      const count = randomInt(3, 9);
      const items: any[] = [];
      for (let i = 0; i < count; i++) {
        if (currentContentItems.length > 0) {
          const src = currentContentItems[Math.floor(Math.random() * currentContentItems.length)];
          // clone and make id unique per generated card
          items.push({ ...src, id: Number(String(src.id) + String(tabIndex) + String(i)) });
        } else {
          // fallback placeholder item
          items.push({
            id: Date.now() + tabIndex * 100 + i,
            title: `${tab.name} - placeholder ${i + 1}`,
            videoThumb: 'https://via.placeholder.com/480x270?text=No+Content',
            frames: [
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
            ],
            asr: '',
            ocr: '',
          });
        }
      }
      map[tab.name] = items;
    });

    setSubTabContentMap(map);
    // reset selection when country changes
    setSelectedCardIds([]);
  }, [activeCountry]);

  const handleCardSelect = (id: number) => {
    setSelectedCardIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(cardId => cardId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <div className="p-4 space-y-4">
      {/* Country Tabs */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b pb-2">
        {COUNTRIES.map(country => (
          <button
            key={country.name}
            onClick={() => setActiveCountry(country.name)}
            className={`px-3 py-1 text-sm rounded-md ${
              activeCountry === country.name 
                ? 'bg-orange-100 text-orange-700 font-semibold' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {country.name} ({country.count})
          </button>
        ))}
      </div>
      
      {/* Sub Tabs */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {currentSubTabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveSubTab(tab.name)}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeSubTab === tab.name 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>

      {/* Filter Inputs */}
      <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-4">
        <div className="flex items-center gap-2">
            <label htmlFor="unitId" className="text-gray-600">Unit ID:</label>
            <input type="text" id="unitId" placeholder="Please enter" className="border rounded px-2 py-1 text-sm w-32 focus:outline-none focus:ring-1 focus:ring-orange-500"/>
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="creativeId" className="text-gray-600">Creative ID:</label>
            <input type="text" id="creativeId" placeholder="Please enter" className="border rounded px-2 py-1 text-sm w-32 focus:outline-none focus:ring-1 focus:ring-orange-500"/>
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="accountId" className="text-gray-600">Account ID:</label>
            <input type="text" id="accountId" placeholder="Please enter" className="border rounded px-2 py-1 text-sm w-32 focus:outline-none focus:ring-1 focus:ring-orange-500"/>
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="photoId" className="text-gray-600">Photo ID:</label>
            <input type="text" id="photoId" placeholder="Please enter" className="border rounded px-2 py-1 text-sm w-32 focus:outline-none focus:ring-1 focus:ring-orange-500"/>
        </div>
        <button className="bg-orange-600 text-white px-6 py-1 rounded-md text-sm hover:bg-orange-700">Inquire</button>
      </div>
      
      {/* For each SubTab, render a horizontal strip of randomly generated cards */}
      <div className="space-y-6">
        {currentSubTabs.length > 0 ? (
          currentSubTabs.map(tab => (
            <div key={tab.name} className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">{tab.name} <span className="text-gray-500">({tab.count})</span></h3>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {(subTabContentMap[tab.name] || []).map(item => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    isSelected={selectedCardIds.includes(item.id)}
                    onSelect={() => handleCardSelect(item.id)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex items-center justify-center text-center py-10 bg-white rounded-md border border-gray-200">
            <p className="text-gray-500">No sub-queues available for this country.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;