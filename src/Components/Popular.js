import React, { useState } from 'react';
import './Popular.css';

const Popular = () => {
    // State to track which section is open
    const [openSection, setOpenSection] = useState(null);
    
    const toggleCuisine = (index) => {
        setOpenSection(openSection === index ? null : index); // Toggle the section
    };

    return (
        <div className="popular-container">
            <h2 className="popular-title">Explore options near me</h2>
            {[
                { title: 'Popular Cuisines Near Me', options: ['Cuisine 1', 'Cuisine 2', 'Cuisine 3', 'Cuisine 4'] },
                { title: 'Popular Restaurant Types Near Me', options: ['Type 1', 'Type 2', 'Type 3', 'Type 4'] },
                { title: 'Top Restaurant Chains', options: ['Chain 1', 'Chain 2', 'Chain 3', 'Chain 4'] },
                { title: 'Cities We Deliver To', options: ['City 1', 'City 2', 'City 3', 'City 4'] },
            ].map((section, index) => (
                <div className="section" key={index}>
                    <h3 className="section-title" onClick={() => toggleCuisine(index)}>
                        {section.title}
                        <span>{openSection === index ? " ▲" : " ▼"}</span>
                    </h3>
                    {openSection === index && (
                        <div className="options-grid">
                            {section.options.map((option, optionIndex) => (
                                <span key={optionIndex}>{option}</span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Popular;
