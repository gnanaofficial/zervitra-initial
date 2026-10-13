import { useState, createContext, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Bell, Search, Settings, LogOut, User, Building2, 
  Moon, Sun, HelpCircle, Sparkles, ExternalLink
} from 'lucide-react';
import { cn, getInitials } from '../../lib/utils';
import { mockUser, mockNotifications } from '../../lib/mock-data';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
      <div className={dark ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}

// Public site header
export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-surface-200 shadow-sm' : 'bg-transparent'
    )}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-surface-900">Static Global</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="btn-ghost text-sm">Sign In</Link>
            <Link to="/signup" className="btn-primary text-sm">
              Get Started <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-surface-100">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-surface-200 overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-surface-700 hover:bg-surface-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-surface-100 space-y-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block w-full btn-secondary text-center">Sign In</Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)} className="block w-full btn-primary text-center">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Public site footer
export function PublicFooter() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security', href: '/security' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Trust Center', href: '/trust' },
      { label: 'Status', href: '/status' },
    ],
    Resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Resources', href: '/resources' },
      { label: 'Demo', href: '/demo' },
      { label: 'API Docs', href: '/resources' },
    ],
    Legal: [
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'AI Transparency', href: '/legal/ai-transparency' },
      { label: 'AI Screening Disclosure', href: '/legal/ai-screening-disclosure' },
      { label: 'Candidate Rights', href: '/legal/candidate-rights' },
    ],
  };

  return (
    <footer className="bg-surface-950 text-surface-400">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">Static Global</span>
            </Link>
            <p className="text-sm text-surface-500 leading-relaxed">
              AI-powered recruitment platform built on Anthropic Claude. Screen candidates with evidence-based intelligence.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-surface-500 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-600">&copy; {new Date().getFullYear()} Static Global. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-surface-600">
            <span>Powered by Anthropic Claude</span>
            <span>·</span>
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </div>
  );
}

// Cookie consent banner
export function CookieConsent() {
  const [show, setShow] = useState(true);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, preferences: false, analytics: false, marketing: false });

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4"
      >
        <div className="container-wide">
          <div className="bg-white rounded-2xl border border-surface-200 shadow-xl p-6">
            {!showCustomize ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-surface-900 mb-1">🍪 Cookie Preferences</h3>
                  <p className="text-sm text-surface-600">
                    We use cookies to enhance your experience. Some are essential, others help us improve our services.{' '}
                    <Link to="/legal/cookies" className="text-brand-600 hover:underline">Learn more</Link>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => setShowCustomize(true)} className="btn-ghost text-sm">Customize</button>
                  <button onClick={() => setShow(false)} className="btn-secondary text-sm">Reject Optional</button>
                  <button onClick={() => setShow(false)} className="btn-primary text-sm">Accept All</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-surface-900 mb-4">Cookie Preferences</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { key: 'necessary', label: 'Strictly Necessary', desc: 'Required for the site to function. Cannot be disabled.', locked: true },
                    { key: 'preferences', label: 'Preferences', desc: 'Remember your settings and choices.' },
                    { key: 'analytics', label: 'Analytics', desc: 'Help us understand how visitors use our site.' },
                    { key: 'marketing', label: 'Marketing', desc: 'Used to deliver relevant advertisements.' },
                  ].map(cookie => (
                    <div key={cookie.key} className="flex items-center justify-between py-2 border-b border-surface-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-surface-900">{cookie.label}</p>
                        <p className="text-xs text-surface-500">{cookie.desc}</p>
                      </div>
                      <button
                        disabled={cookie.locked}
                        onClick={() => setPrefs(p => ({ ...p, [cookie.key]: !p[cookie.key] }))}
                        className={cn(
                          'w-10 h-6 rounded-full transition-colors relative',
                          prefs[cookie.key] ? 'bg-brand-500' : 'bg-surface-300',
                          cookie.locked && 'opacity-60 cursor-not-allowed'
                        )}
                      >
                        <span className={cn(
                          'absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform',
                          prefs[cookie.key] ? 'translate-x-5' : 'translate-x-1'
                        )} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <button onClick={() => setShowCustomize(false)} className="btn-ghost text-sm">Back</button>
                  <button onClick={() => setShow(false)} className="btn-primary text-sm">Save Preferences</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
