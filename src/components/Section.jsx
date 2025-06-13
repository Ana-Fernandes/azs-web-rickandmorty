import React from 'react';
import Card from './EpisodeCard';

const Section = ({ title, items }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="card-row">
        {items.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
