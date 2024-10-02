// src/components/AuthModal/AuthModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

interface AuthModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onLogin: (data: { username: string, password: string }) => void
  onSignup: (data: { fullName: string, username: string, password: string }) => void
}

const AuthModal = ({ isOpen, onOpenChange, onLogin, onSignup }: AuthModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Account</DialogTitle>
        <DialogDescription>
          Log in to your account or create a new one.
        </DialogDescription>
      </DialogHeader>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm onSubmit={onLogin} />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm onSubmit={onSignup} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
)

export default AuthModal
