import React, { useState } from 'react';
import style from './Hero.module.css';

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [buttonStyle, setButtonStyle] = useState('');
  const [buttonText, setButtonText] = useState('Preview Button');
  const [buttonColor, setButtonColor] = useState('#d9a72c');
  const [buttonSize, setButtonSize] = useState('');
  const [finalStyle, setFinalStyle] = useState({});

  const handleSave = () => {
    setFinalStyle({
      style: buttonStyle,
      text: buttonText,
      color: buttonColor,
      size: buttonSize,
    });
    setShowModal(false);
  };

  const handleEdit = () => {
    // Pre-fill modal fields with existing values
    setButtonStyle(finalStyle.style || '');
    setButtonText(finalStyle.text || 'Preview Button');
    setButtonColor(finalStyle.color || '#d9a72c');
    setButtonSize(finalStyle.size || '');
    setShowModal(true);
  };

  const getClassName = () => {
    let className = style.custom_button;
    if (finalStyle.style === 'border') className += ` ${style.border}`;
    else if (finalStyle.style === 'dotted') className += ` ${style.dotted}`;
    else className += ` ${style.fill}`;

    if (finalStyle.size === 'small') className += ` ${style.small}`;
    else if (finalStyle.size === 'medium') className += ` ${style.medium}`;
    else if (finalStyle.size === 'large') className += ` ${style.large}`;

    return className;
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.parent_hero}>
          <div className={style.hero_parent_container}>
            <div className={style.vertical_line}></div>
            <div className={`${style.hero_content}`}>
              <h3>OUR SERVICES</h3>
              <h1>Introducing Our Best Services</h1>

              <button className={style.add_btn} onClick={() => {
                setButtonStyle('');
                setButtonText('Preview Button');
                setButtonColor('#d9a72c');
                setButtonSize('');
                setShowModal(true);
              }}>
                Add Button
              </button>

              {finalStyle.text && (
                <>
                  <button
                    className={getClassName()}
                    style={{
                      backgroundColor: finalStyle.style === 'fill' ? finalStyle.color : 'transparent',
                      color: finalStyle.color,
                      borderColor: finalStyle.color
                    }}
                  >
                    {finalStyle.text}
                  </button>
                  <button className={style.edit_btn} onClick={handleEdit}>Edit</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={style.modal_overlay}>
          <div className={style.modal}>
            <h2>Customize Button</h2>

            <label>Button Style</label>
            <select value={buttonStyle} onChange={(e) => setButtonStyle(e.target.value)}>
              <option value="">Select</option>
              <option value="fill">Fill</option>
              <option value="border">Border</option>
              <option value="dotted">Dotted</option>
            </select>

            <label>Button Text</label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Enter Button Text"
            />

            <label>Button Color</label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
            />

            <label>Button Size</label>
            <select value={buttonSize} onChange={(e) => setButtonSize(e.target.value)}>
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <div className={style.modal_actions}>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
