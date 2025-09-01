import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const emotions = [
  { emoji: '😊', name: 'Happy', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-12' },
  { emoji: '😄', name: 'Excited', position: 'top-1/4 right-1/4 translate-x-4 -translate-y-4' },
  { emoji: '😤', name: 'Angry', position: 'top-1/2 right-0 translate-x-8 -translate-y-1/2' },
  { emoji: '😢', name: 'Sad', position: 'bottom-1/4 right-1/4 translate-x-4 translate-y-4' },
  { emoji: '😴', name: 'Tired', position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-8' },
  { emoji: '😰', name: 'Anxious', position: 'bottom-1/4 left-1/4 -translate-x-4 translate-y-4' },
  { emoji: '😌', name: 'Calm', position: 'top-1/2 left-0 -translate-x-8 -translate-y-1/2' },
  { emoji: '😠', name: 'Frustrated', position: 'top-1/4 left-1/4 -translate-x-4 -translate-y-4' },
];

const weeklyMoods = [
  { day: 'Mon', mood: '😊' },
  { day: 'Tue', mood: '😐' },
  { day: 'Wed', mood: '😔' },
  { day: 'Thu', mood: '😊' },
  { day: 'Fri', mood: '😴' },
  { day: 'Sat', mood: '😊' },
  { day: 'Sun', mood: '?' },
];

export default function Mood() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(3);
  const [notes, setNotes] = useState("");

  const handleEmotionSelect = (emotion: typeof emotions[0]) => {
    setSelectedEmotion(emotion.name);
  };

  const handleLogMood = () => {
    // Log mood logic here
    console.log({ emotion: selectedEmotion, intensity, notes });
    setSelectedEmotion(null);
    setIntensity(3);
    setNotes("");
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <h1 className="text-3xl font-bold text-foreground">Mood Tracker</h1>
          
          {/* Mood Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">How are you feeling today?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Emotion Wheel */}
              <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
                {/* Center neutral emotion */}
                <button
                  onClick={() => setSelectedEmotion('Neutral')}
                  className={`absolute text-5xl p-4 rounded-full transition-all duration-200 ${
                    selectedEmotion === 'Neutral' 
                      ? 'bg-primary scale-110 shadow-lg' 
                      : 'hover:bg-accent hover:scale-105'
                  }`}
                >
                  😐
                </button>
                
                {/* Surrounding emotions */}
                {emotions.map((emotion, index) => (
                  <button
                    key={index}
                    onClick={() => handleEmotionSelect(emotion)}
                    className={`absolute text-4xl p-3 rounded-full transition-all duration-200 ${emotion.position} ${
                      selectedEmotion === emotion.name 
                        ? 'bg-primary scale-110 shadow-lg' 
                        : 'hover:bg-accent hover:scale-105'
                    }`}
                  >
                    {emotion.emoji}
                  </button>
                ))}
              </div>

              {/* Selected Emotion Display */}
              {selectedEmotion && (
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground">
                    Selected: {selectedEmotion}
                  </p>
                </div>
              )}

              {/* Intensity Slider */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-foreground">
                  Intensity: {intensity}/5
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setIntensity(level)}
                      className={`w-8 h-8 rounded transition-colors ${
                        level <= intensity 
                          ? 'bg-primary' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Notes (optional):
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any additional context about your mood..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Log Button */}
              <Button 
                onClick={handleLogMood}
                className="w-full"
                disabled={!selectedEmotion}
              >
                Log Mood
              </Button>
            </CardContent>
          </Card>

          {/* Mood History */}
          <Card>
            <CardHeader>
              <CardTitle>Mood History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">This Week:</h3>
                <div className="grid grid-cols-7 gap-4 text-center">
                  {weeklyMoods.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{item.day}</p>
                      <div className="text-3xl">{item.mood}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    View Detailed Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}