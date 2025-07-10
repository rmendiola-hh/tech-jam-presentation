import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeSlide as CodeSlideType } from '../types/slides';

interface CodeSlideProps {
  slide: CodeSlideType;
}

export const CodeSlide: React.FC<CodeSlideProps> = ({ slide }) => {
  return (
    <div className="slide-content code-slide">
      <h2 className="slide-title">{slide.title}</h2>
      <div className="code-container">
        <SyntaxHighlighter
          language={slide.language || 'javascript'}
          style={oneDark}
          showLineNumbers
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '1.125rem',
            lineHeight: '1.6',
          }}
        >
          {slide.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};