'use client';

import { useState } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Generate some random "booked" dates for demo purposes
const generateBookedDates = (year: number, month: number): number[] => {
  const booked: number[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Randomly mark some days as booked
  for (let i = 0; i < 5; i++) {
    booked.push(Math.floor(Math.random() * daysInMonth) + 1);
  }
  return booked;
};

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const bookedDates = generateBookedDates(currentYear, currentMonth);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isBooked = (day: number) => {
    return bookedDates.includes(day);
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Availability
        </h3>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-navy-50 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-lg font-semibold text-navy-900">
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-navy-50 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-navy-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const past = isPast(day);
          const booked = isBooked(day) && !past;
          const todayDate = isToday(day);
          const selected = isSelected(day);

          return (
            <button
              key={day}
              onClick={() => {
                if (!past && !booked) {
                  setSelectedDate(new Date(currentYear, currentMonth, day));
                }
              }}
              disabled={past || booked}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-all
                ${past ? 'text-navy-300 cursor-not-allowed' : ''}
                ${booked ? 'bg-red-100 text-red-400 cursor-not-allowed' : ''}
                ${!past && !booked ? 'hover:bg-gold-50 text-navy-700' : ''}
                ${todayDate && !selected ? 'ring-2 ring-gold-500' : ''}
                ${selected ? 'bg-gold-500 text-white hover:bg-gold-600' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-navy-100">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-gold-500 mr-2" />
            <span className="text-navy-600">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-red-100 mr-2" />
            <span className="text-navy-600">Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded ring-2 ring-gold-500 mr-2" />
            <span className="text-navy-600">Today</span>
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="mt-4 p-4 bg-gold-50 rounded-lg">
          <p className="text-navy-700 text-sm">
            <span className="font-medium">Selected:</span>{' '}
            {selectedDate.toLocaleDateString('en-AE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="text-navy-500 text-xs mt-1">
            Contact us to confirm availability and book this date.
          </p>
        </div>
      )}
    </div>
  );
}
