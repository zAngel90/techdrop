import Link from 'next/link'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'

export default function GetStartedPage() {
  return (
    <main className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="badge">🚀 COMIENZA GRATIS</span>
          <h2>Crea tu cuenta</h2>
          <p className="subtitle">Únete a miles de emprendedores exitosos</p>
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
            <span>O regístrate con email</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Nombre</label>
              <input 
                type="text" 
                id="firstName" 
                placeholder="John"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input 
                type="text" 
                id="lastName" 
                placeholder="Doe"
                className="form-input"
              />
            </div>
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
              placeholder="Mínimo 8 caracteres"
              className="form-input"
            />
          </div>

          <div className="form-terms">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-custom"></span>
              Acepto los <Link href="/terms">Términos de Servicio</Link> y la{' '}
              <Link href="/privacy">Política de Privacidad</Link>
            </label>
          </div>

          <button type="submit" className="auth-button">
            Crear Cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
        </p>
      </div>
    </main>
  )
} 