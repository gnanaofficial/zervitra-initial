import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Eye, EyeOff, ArrowRight, Globe2, Code2, Mail, Lock, User, Building2, CheckCircle } from 'lucide-react';

const AuthShell = ({ children }) => (
  <div className="min-h-screen bg-surface-950 flex">
    {/* Left branding panel */}
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-surface-900 via-surface-950 to-brand-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative z-10 flex flex-col justify-between p-12 w-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white">Static Global</span>
        </Link>
        <div className="space-y-8 max-w-md">
          <h1 className="text-4xl font-display font-bold text-white leading-tight">
            AI-powered recruitment,<br />
            <span className="text-gradient">built for the future.</span>
          </h1>
          <p className="text-surface-400 text-lg leading-relaxed">
            Join hundreds of companies using Claude-powered screening to hire smarter, faster, and fairer.
          </p>
          <div className="space-y-4">
            {[
              'Evidence-based AI screening',
              'Transparent candidate evaluation',
              'Enterprise-grade security'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="text-surface-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-surface-600 text-sm">
          © 2024 Static Global. Powered by Anthropic Claude.
        </p>
      </div>
    </div>

    {/* Right form panel */}
    <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {children}
      </motion.div>
    </div>
  </div>
);

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthShell>
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center gap-2.5 mb-8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-lg text-surface-900">Static Global</span>
      </div>

      <h2 className="text-2xl font-display font-bold text-surface-950 mb-2">Welcome back</h2>
      <p className="text-surface-500 mb-8">Sign in to your account to continue</p>

      {/* Social login */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="btn-outline gap-2 text-sm">
          <Globe2 className="w-4 h-4" /> Google
        </button>
        <button className="btn-outline gap-2 text-sm">
          <Code2 className="w-4 h-4" /> GitHub
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-surface-200" />
        <span className="text-xs text-surface-400 font-medium">or continue with email</span>
        <div className="flex-1 h-px bg-surface-200" />
      </div>

      <form onSubmit={e => e.preventDefault()} className="space-y-4">
        <div>
          <label className="label">Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
            <input
              type="email"
              className="input pl-10"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-surface-700">Password</label>
            <Link to="/forgot-password" className="text-xs text-brand-600 hover:text-brand-700 font-medium">Forgot password?</Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="input pl-10 pr-10"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="w-4 h-4 rounded border-surface-300 text-brand-500 focus:ring-brand-500" />
          <label htmlFor="remember" className="text-sm text-surface-600">Remember me for 30 days</label>
        </div>
        <Link to="/app/dashboard" className="btn-primary w-full justify-center group">
          Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </form>

      <p className="text-center text-sm text-surface-500 mt-8">
        Don't have an account? <Link to="/signup" className="text-brand-600 hover:text-brand-700 font-medium">Sign up free</Link>
      </p>

      <div className="mt-8 p-4 bg-brand-50 rounded-xl border border-brand-100">
        <p className="text-xs text-brand-700 font-medium mb-1.5">Demo Credentials</p>
        <p className="text-xs text-brand-600">Email: sarah@staticglobal.com</p>
        <p className="text-xs text-brand-600">Password: demo123</p>
      </div>
    </AuthShell>
  );
}

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <AuthShell>
      <div className="lg:hidden flex items-center gap-2.5 mb-8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-lg text-surface-900">Static Global</span>
      </div>

      <h2 className="text-2xl font-display font-bold text-surface-950 mb-2">Create your account</h2>
      <p className="text-surface-500 mb-8">Start your 14-day free trial. No credit card required.</p>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= s ? 'bg-brand-500 text-white' : 'bg-surface-100 text-surface-400'}`}>{s}</div>
            <span className={`text-xs font-medium ${step >= s ? 'text-surface-900' : 'text-surface-400'}`}>{s === 1 ? 'Account' : 'Organization'}</span>
            {s < 2 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-brand-500' : 'bg-surface-200'}`} />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <form onSubmit={e => { e.preventDefault(); setStep(2); }} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">First Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                <input type="text" className="input pl-10" placeholder="Sarah" />
              </div>
            </div>
            <div>
              <label className="label">Last Name</label>
              <input type="text" className="input" placeholder="Chen" />
            </div>
          </div>
          <div>
            <label className="label">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input type="email" className="input pl-10" placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input type={showPassword ? 'text' : 'password'} className="input pl-10 pr-10" placeholder="8+ characters" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex gap-1 mt-2">
              {[1,2,3,4].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? 'bg-success-500' : 'bg-surface-200'}`} />)}
            </div>
          </div>
          <button type="submit" className="btn-primary w-full justify-center group">
            Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      ) : (
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div>
            <label className="label">Company Name</label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input type="text" className="input pl-10" placeholder="Acme Inc." />
            </div>
          </div>
          <div>
            <label className="label">Company Size</label>
            <select className="select-input">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-1000 employees</option>
              <option>1000+ employees</option>
            </select>
          </div>
          <div>
            <label className="label">Your Role</label>
            <select className="select-input">
              <option>Recruiter</option>
              <option>Hiring Manager</option>
              <option>HR Director</option>
              <option>Talent Acquisition Lead</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4 rounded border-surface-300 text-brand-500 focus:ring-brand-500 mt-0.5" />
            <label htmlFor="terms" className="text-sm text-surface-500">I agree to the <Link to="/terms" className="text-brand-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link></label>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">Back</button>
            <Link to="/app/dashboard" className="btn-primary flex-1 justify-center group">
              Create Account <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </form>
      )}

      <p className="text-center text-sm text-surface-500 mt-8">
        Already have an account? <Link to="/login" className="text-brand-600 hover:text-brand-700 font-medium">Sign in</Link>
      </p>
    </AuthShell>
  );
}
