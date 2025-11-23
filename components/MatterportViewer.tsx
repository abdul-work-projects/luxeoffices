'use client';

import { useState } from 'react';

interface MatterportViewerProps {
  matterportId: string;
  spaceName: string;
}

export default function MatterportViewer({ matterportId, spaceName }: MatterportViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTour, setShowTour] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-6 border-b border-navy-100">
          <h3 className="text-xl font-bold text-navy-950 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Virtual 3D Tour
          </h3>
          <p className="text-navy-600 text-sm mt-1">
            Explore {spaceName} in immersive 3D
          </p>
        </div>

        <div className="relative aspect-[16/9] bg-navy-100">
          {!showTour ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setShowTour(true)}
            >
              <div className="bg-gradient-luxury p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-12 h-12 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-navy-700 font-medium">Click to Start Virtual Tour</span>
              <span className="text-navy-500 text-sm mt-1">Experience the space in 3D</span>
            </div>
          ) : (
            <>
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy-100">
                  <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gold-500 border-t-transparent mb-4" />
                    <span className="text-navy-600">Loading 3D Tour...</span>
                  </div>
                </div>
              )}
              <iframe
                src={`https://my.matterport.com/show/?m=${matterportId}&play=1`}
                className="w-full h-full"
                allow="fullscreen; vr"
                allowFullScreen
                onLoad={() => setIsLoaded(true)}
                title={`${spaceName} 3D Virtual Tour`}
              />
            </>
          )}
        </div>

        <div className="p-4 bg-navy-50 flex items-center justify-between">
          <div className="flex items-center text-navy-600 text-sm">
            <svg
              className="w-5 h-5 mr-2 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Use mouse to navigate, scroll to zoom
          </div>
          {showTour && (
            <button
              onClick={() => {
                const iframe = document.querySelector('iframe');
                if (iframe) {
                  iframe.requestFullscreen?.();
                }
              }}
              className="text-gold-600 hover:text-gold-700 font-medium text-sm flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              Fullscreen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
