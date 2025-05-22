import React from 'react';
import { Link } from 'react-router-dom';
import { BOOK_CONTENT } from '@/constants';

const HomeView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{BOOK_CONTENT.title}</h1>
      <p className="text-xl mb-8">{BOOK_CONTENT.subtitle}</p>
      
      <div className="space-y-8">
        {BOOK_CONTENT.parts.map((part) => (
          <div key={part.id} className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl font-semibold mb-4">{part.title}</h2>
            <div className="space-y-2">
              {part.chapters.map((chapter) => (
                <div key={chapter.id}>
                  <Link 
                    to={`/part/${part.id}/chapter/${chapter.id}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {chapter.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;