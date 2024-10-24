import { useState } from 'react'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"
interface ErrorResponse {
  message: string;
}

interface LoginFormProps {
  onSubmit: (data: { username: string, password: string }) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ username, password })
    try {
      // Call the onSubmit function and handle login
      await onSubmit({ username, password })
      setErrorMessage('') // Clear any previous error message
    } catch (error) {
      // Set the error message from the backend response
      if (error instanceof Error) {
        const axiosError = error as { response?: { data: ErrorResponse } };
        setErrorMessage(axiosError.response.data.message || 'Invalid credentials');
      } else {
        setErrorMessage('An unexpected error occurred');
      }
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">Username</Label>
          <Input id="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">Password</Label>
          <Input id="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" />
        </div>
      </div>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <DialogFooter>
        <Button type="submit">Log In</Button>
      </DialogFooter>
    </form>
  )
}

export default LoginForm
