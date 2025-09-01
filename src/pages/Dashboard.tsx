import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Heart, BookOpen, TrendingUp } from "lucide-react";

const moods = ['😊', '😐', '😔', '😴', '😤'];

export default function Dashboard() {
  const stats = [
    { title: "Tasks Completed", value: "8", icon: CheckSquare, change: "+2 from yesterday" },
    { title: "Mood Streak", value: "5 days", icon: Heart, change: "Feeling great!" },
    { title: "Journal Entries", value: "12", icon: BookOpen, change: "This week" },
    { title: "Wellness Score", value: "85%", icon: TrendingUp, change: "+5% this week" },
  ];

  const todayTasks = [
    { id: 1, title: "Finish project presentation", completed: false, priority: "high" },
    { id: 2, title: "Review quarterly reports", completed: true, priority: "medium" },
    { id: 3, title: "Team meeting at 3 PM", completed: false, priority: "high" },
    { id: 4, title: "Update task management system", completed: false, priority: "low" },
  ];

  const recentEntries = [
    "Today was challenging but rewarding...",
    "Feeling grateful for small victories...",
    "Learned something new about mindfulness...",
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          {/* Welcome Card */}
          <Card className="bg-gradient-primary text-white border-none">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-2">Good morning, John! 🌅</h1>
              <p className="text-white/90">Ready to make today amazing? You have 3 tasks pending and your mood streak is going strong.</p>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-xs text-accent-green">{stat.change}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Today's Tasks
                  <Button variant="outline" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {todayTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <div className="flex-1">
                      <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.title}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-error' :
                      task.priority === 'medium' ? 'bg-warning' : 'bg-accent-green'
                    }`} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mood Check */}
            <Card>
              <CardHeader>
                <CardTitle>Mood Check</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">How are you feeling today?</p>
                <div className="flex space-x-2 justify-center">
                  {moods.map((mood, index) => (
                    <button
                      key={index}
                      className="text-3xl p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                <Button className="w-full">Log Mood</Button>
                <p className="text-xs text-muted-foreground text-center">
                  Last logged: Yesterday, 8:30 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Journal Entries */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Journal Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentEntries.map((entry, index) => (
                  <div key={index} className="p-3 bg-accent/50 rounded-lg">
                    <p className="text-sm text-foreground">• {entry}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}