import { useState } from 'react'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"


interface SignupFormProps {
  onSubmit: (data: { fullName: string, username: string, password: string }) => void
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ fullName, username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fullName" className="text-right">Full Name</Label>
          <Input id="fullName" value={fullName} onChange={(e:any) => setFullName(e.target.value)} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">Username</Label>
          <Input id="username" value={username} onChange={(e:any) => setUsername(e.target.value)} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e:any) => setPassword(e.target.value)} className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Sign Up</Button>
      </DialogFooter>
    </form>
  )
}

export default SignupForm
