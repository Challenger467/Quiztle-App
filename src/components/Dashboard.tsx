// Dashboard.tsx
import { Card, CardContent } from "./ui/card"
// import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"
import { CalendarDays, Trophy, ListTodo, Flame } from "lucide-react"

const Dashboard = () => {
  const stats = {
    totalQuizzes: localStorage.getItem("quizzesTaken") ,
    totalGrades: localStorage.getItem("totalGrades"),
    newPercentage: localStorage.getItem("lastQuizPercentage"),
    lastQuiz: localStorage.getItem("lastQuizDate"),
    highestGrade : localStorage.getItem("highestGrade"),
  }

  return (
    <div className="pt-30 dark bg-neutral-950 text-foreground py-6 px-50 min-h-screen">
    <div className="absolute z-[0] w-[40%] h-[35%]
    top-0 pink__gradient"/>
      <h1 className="text-2xl font-bold mb-4">Quiz Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-muted border-3 border-purple-600 text-foreground">
          <CardContent className="p-4 flex items-center gap-4">
            <ListTodo className="text-primary w-8 h-8" />
            <div>
              <h2 className="text-sm text-muted-foreground">Quizzes Taken</h2>
              <p className="text-xl font-semibold">{stats.totalQuizzes || "0"}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted border-3 border-purple-600 text-foreground">
          <CardContent className="p-4 flex items-center gap-4">
            <Flame className="text-primary w-8 h-8" />
            <div>
              <h2 className="text-sm text-muted-foreground">Total Grades</h2>
              <p className="text-xl font-semibold">{stats.totalGrades || "0"}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted border-3 border-purple-600 text-foreground">
          <CardContent className="p-4 flex items-center gap-4">
            <Trophy className="text-primary w-8 h-8" />
            <div>
              <h2 className="text-sm text-muted-foreground">Highest Grade</h2>
              <p className="text-xl font-semibold">{stats.highestGrade || "0"}%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted border-3 border-purple-600 text-foreground">
          <CardContent className="p-4 flex items-center gap-4">
            <CalendarDays className="text-primary w-8 h-8" />
            <div>
              <h2 className="text-sm text-muted-foreground">Last Quiz</h2>
              <p className="text-xl font-semibold">{stats.lastQuiz || "no quizzes attempted yet"}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-border" />

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <div className="text-muted-foreground text-sm">
          You completed a quiz with a score of <span className="text-green-400 font-bold">{stats.newPercentage}%</span> on <span className="text-foreground">{stats.lastQuiz}</span>.
        </div>
      </div>
    </div>
  )
}


export default Dashboard
