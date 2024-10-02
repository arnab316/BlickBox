import { useState } from 'react'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"

interface LoginFormProps {
  onSubmit: (data: { username: string, password: string }) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">Username</Label>
          <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Log In</Button>
      </DialogFooter>
    </form>
  )
}

export default LoginForm
