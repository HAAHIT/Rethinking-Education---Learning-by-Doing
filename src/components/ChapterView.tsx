import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BOOK_CONTENT } from '@/constants';

const ChapterView: React.FC = () => {
  const { partId, chapterId } = useParams<{ partId: string; chapterId: string }>();
  
  const part = BOOK_CONTENT.parts.find(p => p.id === partId);
  const chapter = part?.chapters.find(c => c.id === chapterId);

  if (!part || !chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Table of Contents
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">{chapter.title}</h1>
      
      <div className="prose prose-lg">
        {chapter.content.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={index} className="mb-4">{item.text}</p>;
            case 'quote':
              return (
                <blockquote key={index} className="border-l-4 border-amber-500 pl-4 italic my-4">
                  {item.text}
                </blockquote>
              );
            case 'highlight':
              return (
                <div key={index} className="bg-amber-100 p-4 rounded-lg my-4">
                  {item.text}
                </div>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc pl-5 my-4">
                  {item.items?.map((listItem, i) => (
                    <li key={i} className="mb-2">{listItem}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}

        {chapter.invitations && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Learning Invitations</h2>
            <div className="space-y-6">
              {chapter.invitations.map((invitation) => (
                <div key={invitation.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{invitation.name}</h3>
                  <p className="mb-4">{invitation.description}</p>
                  
                  <div className="space-y-2">
                    <p><strong>Learning Focus:</strong></p>
                    <ul className="list-disc pl-5">
                      {invitation.learningFocus.map((focus, index) => (
                        <li key={index}>{focus}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p><strong>Materials Needed:</strong></p>
                    <ul className="list-disc pl-5">
                      {invitation.materialsNeeded.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {invitation.safetyNotes && (
                    <div className="mt-4 bg-amber-50 p-4 rounded">
                      <p><strong>Safety Notes:</strong> {invitation.safetyNotes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterView;