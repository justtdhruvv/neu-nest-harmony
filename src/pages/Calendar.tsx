import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarEvent {
  date: number;
  events: {
    type: 'task' | 'mood' | 'journal';
    title: string;
  }[];
}

const calendarEvents: CalendarEvent[] = [
  { date: 1, events: [{ type: 'task', title: 'Team Meeting' }, { type: 'mood', title: 'Happy' }] },
  { date: 5, events: [{ type: 'journal', title: 'Evening Reflection' }] },
  { date: 8, events: [{ type: 'task', title: 'Project Deadline' }] },
  { date: 12, events: [{ type: 'mood', title: 'Anxious' }] },
  { date: 15, events: [{ type: 'task', title: 'Review Reports' }, { type: 'mood', title: 'Content' }] },
  { date: 19, events: [{ type: 'journal', title: 'Weekly Review' }] },
  { date: 22, events: [{ type: 'task', title: 'Presentation' }] },
  { date: 26, events: [{ type: 'task', title: 'Planning Session' }] },
  { date: 29, events: [{ type: 'journal', title: 'Monthly Goals' }] },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(currentYear, currentMonth + (direction === 'next' ? 1 : -1), 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getEventsForDate = (date: number) => {
    return calendarEvents.find(event => event.date === date)?.events || [];
  };

  const getEventIndicator = (type: string) => {
    switch (type) {
      case 'task': return 'T';
      case 'mood': return 'M';
      case 'journal': return 'J';
      default: return '';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'task': return 'bg-primary text-primary-foreground';
      case 'mood': return 'bg-accent-pink text-white';
      case 'journal': return 'bg-accent-purple text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const isToday = (date: number) => {
    return today.getDate() === date && 
           today.getMonth() === currentMonth && 
           today.getFullYear() === currentYear;
  };

  // Generate calendar grid
  const calendarDays = [];
  
  // Previous month's trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      events: []
    });
  }
  
  // Current month's days
  for (let date = 1; date <= daysInMonth; date++) {
    calendarDays.push({
      date,
      isCurrentMonth: true,
      events: getEventsForDate(date)
    });
  }
  
  // Next month's leading days
  const remainingCells = 42 - calendarDays.length;
  for (let date = 1; date <= remainingCells; date++) {
    calendarDays.push({
      date,
      isCurrentMonth: false,
      events: []
    });
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-3xl font-bold text-foreground">
                {months[currentMonth]} {currentYear}
              </h1>
              <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={goToToday}>
              Today
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 bg-surface">
              {weekdays.map((day) => (
                <div key={day} className="p-4 text-center font-medium text-muted-foreground border-r border-border last:border-r-0">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    h-24 border-r border-b border-border last:border-r-0 p-2
                    ${day.isCurrentMonth ? 'bg-card' : 'bg-muted/30'}
                    ${isToday(day.date) && day.isCurrentMonth ? 'bg-primary/10' : ''}
                    hover:bg-accent/50 cursor-pointer transition-colors
                  `}
                >
                  <div className={`
                    text-sm font-medium mb-1
                    ${day.isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}
                    ${isToday(day.date) && day.isCurrentMonth ? 'text-primary font-bold' : ''}
                  `}>
                    {day.date}
                  </div>
                  
                  {/* Event Indicators */}
                  <div className="space-y-1">
                    {day.events.slice(0, 2).map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`
                          text-xs px-1 py-0.5 rounded text-center font-medium
                          ${getEventColor(event.type)}
                        `}
                        title={event.title}
                      >
                        {getEventIndicator(event.type)}
                      </div>
                    ))}
                    {day.events.length > 2 && (
                      <div className="text-xs text-muted-foreground text-center">
                        +{day.events.length - 2}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-sm text-muted-foreground">T = Task</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-accent-pink rounded"></div>
              <span className="text-sm text-muted-foreground">M = Mood Log</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-accent-purple rounded"></div>
              <span className="text-sm text-muted-foreground">J = Journal Entry</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}