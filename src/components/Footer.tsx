
import React, { useState } from 'react';
import { ZoomInIcon, ExpandIcon } from './Icons';

type Action = 'allow' | 'reject' | null;

const Footer: React.FC = () => {
    const [selectedAction, setSelectedAction] = useState<Action>(null);
    
    return (
    <footer className="bg-white border-t border-gray-200 shadow-up-sm p-3 flex items-center justify-between z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
            
             <div className="flex items-center gap-2 text-gray-700 text-sm">
                
            </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        
        
      </div>
    </footer>
  );
};

export default Footer;
