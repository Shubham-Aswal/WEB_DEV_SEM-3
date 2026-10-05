import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [resetToken, setResetToken] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function requestReset(event) {
    event.preventDefault()
    setMessage('')
    setError('')

    try {
      const response = await fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.msg || 'Unable to generate reset token')
      }

      setResetToken(data.resetToken || '')
      setMessage(data.msg)
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="forgot-password-title">
        <p className="eyebrow">Account recovery</p>
        <h1 id="forgot-password-title">Forgot password?</h1>
        <p className="intro">Enter your email to generate a password reset token.</p>
        <form className="auth-form" onSubmit={requestReset}>
          <label className="form-field">
            <span>Email address</span>
            <input type="email" value={email} placeholder="you@example.com" onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <button type="submit">Generate reset token <span>→</span></button>
        </form>
        {message && <p className="form-note">{message}</p>}
        {resetToken && (
          <div className="form-note">
            <p>Demo reset token: {resetToken}</p>
            <button type="button" onClick={() => navigate('/reset-password', {state: {email, resetToken}})}>Continue to reset password <span>→</span></button>
          </div>
        )}
        {error && <p className="form-note" role="alert">{error}</p>}
        <p className="form-note"><Link to="/login">Back to login</Link></p>
      </section>
    </main>
  )
}

export default ForgotPassword