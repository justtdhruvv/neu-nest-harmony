import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Mic, Save, Sparkles } from "lucide-react";

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
  aiSummary?: string[];
  sentiment?: {
    score: number;
    emoji: string;
    label: string;
  };
}

const sampleEntries: JournalEntry[] = [
  {
    id: 1,
    title: "Evening Reflection",
    content: "Today was challenging but rewarding. I managed to complete the presentation despite feeling overwhelmed. The team meeting went well and I received positive feedback...",
    date: "Aug 28, 2024",
    aiSummary: [
      "Faced work stress but overcame challenges",
      "Found solace in evening walk",
      "Overall positive outlook despite difficulties"
    ],
    sentiment: {
      score: 0.7,
      emoji: "😊",
      label: "Positive"
    }
  },
  {
    id: 2,
    title: "Morning Thoughts",
    content: "Woke up feeling refreshed today. The meditation session really helped clear my mind. Looking forward to the day ahead and excited about the new project...",
    date: "Aug 27, 2024",
    aiSummary: [
      "Started day with positive mindset",
      "Meditation practice showing benefits",
      "Enthusiasm for upcoming projects"
    ],
    sentiment: {
      score: 0.8,
      emoji: "😄",
      label: "Very Positive"
    }
  }
];

export default function Journal() {
  const [currentEntry, setCurrentEntry] = useState("");
  const [entries] = useState<JournalEntry[]>(sampleEntries);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  const handleSaveDraft = () => {
    console.log("Saving draft:", currentEntry);
  };

  const handleGenerateAISummary = async () => {
    setIsGeneratingAI(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGeneratingAI(false);
    }, 2000);
  };

  const wordCount = currentEntry.split(' ').filter(word => word.length > 0).length;

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Journal</h1>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Entry
              </Button>
              <Button variant="outline" size="sm">
                <Mic className="w-4 h-4 mr-2" />
                Voice Input
              </Button>
            </div>
          </div>

          {/* Journal Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Entry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Rich Text Editor Toolbar */}
              <div className="flex items-center space-x-2 p-2 border border-border rounded-lg bg-surface">
                <Button variant="ghost" size="sm" className="font-bold">
                  B
                </Button>
                <Button variant="ghost" size="sm" className="italic">
                  I
                </Button>
                <Button variant="ghost" size="sm" className="underline">
                  U
                </Button>
                <div className="w-px h-6 bg-border" />
                <Button variant="ghost" size="sm">
                  🔗
                </Button>
                <Button variant="ghost" size="sm">
                  😊
                </Button>
              </div>

              {/* Text Area */}
              <Textarea
                value={currentEntry}
                onChange={(e) => setCurrentEntry(e.target.value)}
                placeholder="Today I'm feeling... What's on your mind?"
                className="min-h-[300px] text-base leading-relaxed"
              />

              {/* Word Count */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{wordCount} words</span>
                <span>Auto-saved 30 seconds ago</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button variant="outline" onClick={handleSaveDraft}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button 
                  onClick={handleGenerateAISummary}
                  disabled={isGeneratingAI || currentEntry.length < 50}
                  className="bg-gradient-subtle"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {isGeneratingAI ? "Generating..." : "Generate AI Summary"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Entries */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Recent Entries</h2>
            
            {entries.map((entry) => (
              <Card key={entry.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{entry.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed line-clamp-3">
                    {entry.content}
                  </p>
                  
                  {/* AI Summary */}
                  {entry.aiSummary && (
                    <div className="bg-gradient-subtle p-4 rounded-lg border border-accent/20">
                      <h4 className="font-medium text-accent-purple mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" />
                        AI Summary:
                      </h4>
                      <ul className="space-y-1">
                        {entry.aiSummary.map((point, index) => (
                          <li key={index} className="text-sm text-foreground">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sentiment */}
                  {entry.sentiment && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Sentiment:</span>
                      <Badge variant="secondary" className="flex items-center space-x-1">
                        <span>{entry.sentiment.emoji}</span>
                        <span>{entry.sentiment.label}</span>
                        <span className="text-xs">({entry.sentiment.score})</span>
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}