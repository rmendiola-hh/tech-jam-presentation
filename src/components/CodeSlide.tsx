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
            fontSize: '0.5625em', /* 1.125rem relative to 2rem base = 0.5625em */
            lineHeight: '1.6',
            backgroundColor: '#000000', /* Pure black for maximum contrast */
            border: '1px solid var(--color-border)',
            flex: 1,
            height: '100%',
          }}
          codeTagProps={{
            style: {
              color: '#ffffff', /* Bright white text for maximum contrast */
              backgroundColor: 'transparent'
            }
          }}
        >
          {slide.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};