import { useState } from 'react';

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <label
            htmlFor="location1"
            className="accordion-label"
            onClick={() => handleToggle(1)}
          >
            <span className="accordion-title">Item 1</span>
            <span className="accordion-icon">
              {activeIndex === 1 ? '-' : '+'}
            </span>
          </label>
          <input type="radio" name="location" id="location1" />
          {activeIndex === 1 && (
            <div className="accordion-content">
              <div>Content 1</div>
              <div>Content 2</div>
              <div>Content 3</div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <label
            htmlFor="location2"
            className="accordion-label"
            onClick={() => handleToggle(2)}
          >
            <span className="accordion-title">Item 2</span>
            <span className="accordion-icon">
              {activeIndex === 2 ? '-' : '+'}
            </span>
          </label>
          <input type="radio" name="location" id="location2" />
          {activeIndex === 2 && (
            <div className="accordion-content">
              <div>Content 1</div>
              <div>Content 2</div>
              <div>Content 3</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
