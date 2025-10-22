import { ThemeProvider } from "@/lib/theme-provider"
import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/ui/theme-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="absolute right-4 top-4 z-10">
          <ThemeToggle />
        </div>
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-5xl">
            <LoginForm />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App