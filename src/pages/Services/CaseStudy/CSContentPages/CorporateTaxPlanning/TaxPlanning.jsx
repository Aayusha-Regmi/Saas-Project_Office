import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectContent from './TertiaryComponents/ProjectContent';
import ProjectTips from './TertiaryComponents/ProjectTips';
import OverviewSection from './TertiaryComponents/OverviewSection';

const MainContent = () => {
    return(
        <div>
  <div className="md:col-span-2">
            {/* Featured Image */}
            <img 
              src="/images/img_image_39.png" alt="Corporate Tax Planning Case Study" className="w-full h-auto rounded-lg mb-10"
            />
            
            {/* Project Content */}
            <ProjectContent />
            
            {/* Project Tips */}
            <ProjectTips />
            
            {/* Overview & Challenges */}
            <OverviewSection />
          </div>
        </div>
    );
}
export default MainContent;