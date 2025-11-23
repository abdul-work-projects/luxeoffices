'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Space } from '@/types';
import MatterportModal from './MatterportModal';

interface SpaceCardProps {
  space: Space;
}

export default function SpaceCard({ space }: SpaceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Link href={`/spaces/${space.id}`} className="group">
        <article className="card-luxury h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={space.images[0]}
              alt={space.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {space.featured && (
                <div className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              {space.matterportId && (
                <div className="bg-navy-900 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  3D Tour
                </div>
              )}
            </div>

            {/* Price Tag */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span className="text-navy-950 font-bold">
                AED {space.pricePerYear.toLocaleString()}
              </span>
              <span className="text-navy-600 text-sm">/year</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
              {space.name}
            </h3>

            {/* Location */}
            <div className="flex items-center text-navy-600 mb-3">
              <svg
                className="w-4 h-4 mr-1.5 text-gold-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">{space.location}</span>
            </div>

            <p className="text-navy-600 text-sm mb-4 flex-grow line-clamp-2">
              {space.shortDescription}
            </p>

            {/* Amenities Preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {space.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {space.amenities.length > 3 && (
                <span className="text-xs bg-gold-50 text-gold-700 px-2 py-1 rounded-full">
                  +{space.amenities.length - 3} more
                </span>
              )}
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gold-600 font-medium text-sm group-hover:text-gold-700 transition-colors">
                <span>View Details</span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              {space.matterportId && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-1 text-xs bg-navy-900 text-white px-3 py-1.5 rounded-full hover:bg-navy-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Take 3D Tour
                </button>
              )}
            </div>
          </div>
        </article>
      </Link>

      {/* Matterport Modal */}
      {space.matterportId && (
        <MatterportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          matterportId={space.matterportId}
          spaceName={space.name}
        />
      )}
    </>
  );
}
