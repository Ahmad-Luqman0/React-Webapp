import React from 'react';
import type { ContentItem } from '../types';
import { MoreIcon } from './Icons';

interface ContentCardProps {
  item: ContentItem;
  onSelect: () => void;
  isSelected?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, onSelect, isSelected }) => {
  // Helper to safely render HTML content
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <div
      onClick={onSelect}
      className={`w-[300px] flex-shrink-0 bg-white rounded-lg shadow-sm cursor-pointer border transition-all duration-150 ${
        isSelected ? 'border-orange-500 ring-1 ring-orange-100' : 'border-gray-200'
      }`}
    >
      <div className="p-3">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs text-gray-800 font-medium leading-tight pr-2" title={item.title}>
            {item.title}
          </p>
          <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <MoreIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* Video Thumbnail */}
        <div className="aspect-video bg-gray-200 rounded-md mb-3">
            <img src={item.videoThumb} alt="Video thumbnail" className="w-full h-full object-cover rounded-md" />
        </div>
        
        {/* Frames */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
            {item.frames.map((frame, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded">
                    <img src={frame} alt={`frame ${index + 1}`} className="w-full h-full object-cover rounded" />
                </div>
            ))}
        </div>
        
        {/* Text Content */}
        <div className="space-y-3 text-xs text-gray-600">
          {item.asr && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Speech-to-text</h4>
              <p className="leading-relaxed" dangerouslySetInnerHTML={createMarkup(item.asr)} />
            </div>
          )}
          {item.ocr && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Text from image</h4>
              <p className="leading-relaxed" dangerouslySetInnerHTML={createMarkup(item.ocr)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
