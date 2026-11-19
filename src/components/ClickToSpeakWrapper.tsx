import React from 'react';
import { speakText } from '../engines/speechEngine';
import { UserSettings } from '../types';

interface ClickToSpeakWrapperProps {
  text: string;
  settings?: Partial<UserSettings>;
  className?: string;
  children?: React.ReactNode;
}

export const ClickToSpeakWrapper: React.FC<ClickToSpeakWrapperProps> = ({
  text,
  settings,
  className = '',
  children
}) => {
  // Speaks an individual clicked word
  const handleWordClick = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    // Clean word of surrounding punctuation for crisp pronunciation
    const cleanWord = word.replace(/^[^\w]+|[^\w]+$/g, '');
    if (cleanWord) {
      speakText(cleanWord, settings);
    }
  };

  // Speaks the entire sentence/paragraph when empty background is clicked
  const handleContainerClick = (e: React.MouseEvent) => {
    // Only if not directly clicked on a word span
    speakText(text, settings);
  };

  if (children) {
    return (
      <div 
        onClick={handleContainerClick} 
        className={`cursor-pointer hover:bg-zinc-800/20 rounded p-1 transition-colors ${className}`}
        title="Click empty area to speak sentence; click individual word to speak word."
      >
        {children}
      </div>
    );
  }

  // Break text into individual clickable word tokens
  const words = text.split(/(\s+)/);

  return (
    <span 
      onClick={handleContainerClick}
      className={`inline-block cursor-pointer hover:bg-zinc-800/15 rounded p-0.5 transition-colors ${className}`}
      title="Click line to speak all; click any word to pronounce it."
    >
      {words.map((chunk, idx) => {
        if (/^\s+$/.test(chunk)) {
          return <span key={idx}>{chunk}</span>;
        }
        return (
          <span
            key={idx}
            onClick={(e) => handleWordClick(e, chunk)}
            className="hover:underline hover:text-amber-200 transition-colors inline-block"
          >
            {chunk}
          </span>
        );
      })}
    </span>
  );
};
