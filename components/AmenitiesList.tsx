interface AmenitiesListProps {
  amenities: string[];
}

const amenityIcons: Record<string, string> = {
  'wifi': 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
  '24/7': 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  'parking': 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
  'view': 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  'conference': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  'kitchen': 'M3 3h18v18H3V3z M12 8v8 M8 12h8',
  'security': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'default': 'M5 13l4 4L19 7',
};

function getAmenityIcon(amenity: string): string {
  const lowerAmenity = amenity.toLowerCase();
  if (lowerAmenity.includes('wifi') || lowerAmenity.includes('internet')) return amenityIcons['wifi'];
  if (lowerAmenity.includes('24/7') || lowerAmenity.includes('access') || lowerAmenity.includes('hour')) return amenityIcons['24/7'];
  if (lowerAmenity.includes('parking') || lowerAmenity.includes('valet')) return amenityIcons['parking'];
  if (lowerAmenity.includes('view') || lowerAmenity.includes('panoramic')) return amenityIcons['view'];
  if (lowerAmenity.includes('conference') || lowerAmenity.includes('meeting') || lowerAmenity.includes('reception')) return amenityIcons['conference'];
  if (lowerAmenity.includes('kitchen') || lowerAmenity.includes('coffee') || lowerAmenity.includes('café') || lowerAmenity.includes('catering')) return amenityIcons['kitchen'];
  if (lowerAmenity.includes('security') || lowerAmenity.includes('secure') || lowerAmenity.includes('concierge')) return amenityIcons['security'];
  return amenityIcons['default'];
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      <h3 className="text-xl font-bold text-navy-950 mb-6 flex items-center">
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        Amenities & Features
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-navy-50 rounded-lg hover:bg-gold-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm group-hover:bg-gold-500 transition-colors">
              <svg
                className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={getAmenityIcon(amenity)}
                />
              </svg>
            </div>
            <span className="text-navy-700 font-medium">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
