import type { Slide } from '../types/slides';

export const sampleSlides: Slide[] = [
  {
    id: '1',
    type: 'title',
    title: 'Tech Jam Presentation',
    subtitle: 'Building Modern React Applications with TypeScript'
  },
  {
    id: '2',
    type: 'bullets',
    title: 'Key Features',
    bullets: [
      'Full-screen presentation mode (press F)',
      'Smooth slide transitions',
      'Syntax highlighted code snippets',
      'Keyboard navigation (← →)',
      'Responsive design'
    ]
  },
  {
    id: '3',
    type: 'code',
    title: 'React Hook Example',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUser = (userId: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};`
  },
  {
    id: '4',
    type: 'bullets',
    title: 'Navigation Controls',
    bullets: [
      'Use ← → arrow keys to navigate',
      'Press spacebar to go to next slide',
      'Press F to toggle fullscreen',
      'Press Escape to exit fullscreen',
      'Click buttons for mouse navigation'
    ]
  },
  {
    id: '5',
    type: 'code',
    title: 'CSS Custom Properties',
    language: 'css',
    code: `:root {
  /* Base color palette */
  --color-slate-900: #0f172a;
  --color-slate-800: #1e293b;
  --color-slate-50: #f8fafc;

  /* Semantic colors */
  --color-background: var(--color-slate-900);
  --color-surface: var(--color-slate-800);
  --color-text-primary: var(--color-slate-50);
  --color-accent: var(--color-blue-500);
}

.slide {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
}`
  }
];