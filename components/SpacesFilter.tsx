'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Space, LocationTag, locationLabels } from '@/types';
import { SpaceCard } from '@/components';
import { useMemo } from 'react';

interface SpacesFilterProps {
  spaces: Space[];
}

const allLocations: LocationTag[] = [
  'bur-dubai',
  'deira',
  'sheikh-zayed-road',
  'business-bay',
  'port-saeed',
  'oud-metha',
  'the-greens',
];

export default function SpacesFilter({ spaces }: SpacesFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const locationFilter = searchParams.get('location') as LocationTag | null;

  const filteredSpaces = useMemo(() => {
    if (!locationFilter) return spaces;
    return spaces.filter((space) => space.locationTag === locationFilter);
  }, [spaces, locationFilter]);

  const handleLocationChange = (location: string) => {
    if (location === 'all') {
      router.push('/spaces');
    } else {
      router.push(`/spaces?location=${location}`);
    }
  };

  const handleClearFilter = () => {
    router.push('/spaces');
  };

  return (
    <>
      {/* Filters Bar */}
      <section className="bg-white border-b border-navy-100 sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-navy-600">
                Showing{' '}
                <span className="font-semibold text-navy-900">
                  {filteredSpaces.length}
                </span>{' '}
                {filteredSpaces.length === 1 ? 'space' : 'spaces'}
                {locationFilter && (
                  <span className="ml-2">
                    in{' '}
                    <span className="font-semibold text-gold-600">
                      {locationLabels[locationFilter]}
                    </span>
                  </span>
                )}
              </div>
              {locationFilter && (
                <button
                  onClick={handleClearFilter}
                  className="text-sm text-navy-500 hover:text-gold-600 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear filter
                </button>
              )}
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-navy-600">Location:</label>
              <select
                value={locationFilter || 'all'}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-navy-200 bg-white text-navy-700 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none"
              >
                <option value="all">All Locations</option>
                {allLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {locationLabels[loc]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-custom">
          {filteredSpaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpaces.map((space) => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-navy-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                No spaces found in this location
              </h3>
              <p className="text-navy-600 mb-4">
                Try selecting a different location or view all our spaces.
              </p>
              <button
                onClick={handleClearFilter}
                className="btn-primary"
              >
                View All Spaces
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
