import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState(location.state?.email || '')
  const [resetToken, setResetToken] = useState(location.state?.resetToken || '')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function resetPassword(event) {
    event.preventDefault()
    setMessage('')
    setError('')

    try {
      const response = await fetch('http://localhost:3000/reset-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, resetToken, newPassword})
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.msg || 'Unable to reset password')
      }

      setMessage(data.msg)
      setNewPassword('')
      setTimeout(() => navigate('/login'), 1000)
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="reset-password-title">
        <p className="eyebrow">Account recovery</p>
        <h1 id="reset-password-title">Reset password</h1>
        <p className="intro">Use the reset token to choose a new password.</p>
        <form className="auth-form" onSubmit={resetPassword}>
          <label className="form-field">
            <span>Email address</span>
            <input type="email" value={email} placeholder="you@example.com" onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <label className="form-field">
            <span>Reset token</span>
            <input value={resetToken} placeholder="Paste your reset token" onChange={(event) => setResetToken(event.target.value)} required />
          </label>
          <label className="form-field">
            <span>New password</span>
            <input type="password" value={newPassword} placeholder="At least 6 characters" onChange={(event) => setNewPassword(event.target.value)} minLength={6} required />
          </label>
          <button type="submit">Reset password <span>→</span></button>
        </form>
        {message && <p className="form-note">{message}</p>}
        {error && <p className="form-note" role="alert">{error}</p>}
        <p className="form-note"><Link to="/login">Back to login</Link></p>
      </section>
    </main>
  )
}

export default ResetPassword