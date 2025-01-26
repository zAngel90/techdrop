import Link from 'next/link'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'

export default function LoginPage() {
  return (
    <main className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Bienvenido de nuevo</h2>
          <p className="subtitle">Accede a tu cuenta de TechDrop</p>
        </div>

        <form className="auth-form">
          <div className="social-buttons">
            <button type="button" className="social-button google">
              <GoogleIcon />
              <span>Google</span>
            </button>
            <button type="button" className="social-button github">
              <GithubIcon />
              <span>GitHub</span>
            </button>
          </div>

          <div className="auth-divider">
            <span>O continúa con email</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="tu@email.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-custom"></span>
              Recordarme
            </label>
            <Link href="/forgot-password" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button type="submit" className="auth-button">
            Iniciar Sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta? <Link href="/get-started">Regístrate gratis</Link>
        </p>
      </div>
    </main>
  )
} 