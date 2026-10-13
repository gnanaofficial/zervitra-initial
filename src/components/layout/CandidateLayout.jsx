import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, User, FileText, Briefcase, ClipboardList, Calendar,
  MessageSquare, Shield, Settings, LogOut, Sparkles, Bell, Menu, X
} from 'lucide-react';
import { cn, getInitials } from '../../lib/utils';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const candidateNav = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/candidate/dashboard' },
  { icon: User, label: 'Profile', href: '/candidate/profile' },
  { icon: FileText, label: 'Resume', href: '/candidate/resume' },
  { icon: Briefcase, label: 'Applications', href: '/candidate/applications' },
  { icon: ClipboardList, label: 'Assessments', href: '/candidate/assessments' },
  { icon: Calendar, label: 'Interviews', href: '/candidate/interviews' },
  { icon: MessageSquare, label: 'Messages', href: '/candidate/messages' },
  { icon: Shield, label: 'Privacy', href: '/candidate/privacy' },
  { icon: Settings, label: 'Settings', href: '/candidate/settings' },
];

export default function CandidateLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Top header */}
      <header className="sticky top-0 z-40 bg-white border-b border-surface-200">
        <div className="container-wide flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-surface-100">
              <Menu className="w-5 h-5 text-surface-600" />
            </button>
            <Link to="/candidate/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display font-bold text-sm">Static Global</span>
            </Link>
            <span className="badge-neutral text-[10px] hidden sm:inline-flex">Candidate Portal</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-surface-100 relative">
              <Bell className="w-[18px] h-[18px] text-surface-600" />
            </button>
            <div className="avatar avatar-sm bg-purple-100 text-purple-700">AJ</div>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="md:hidden fixed inset-0 bg-black/40 z-40" />
            <motion.div initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="md:hidden fixed left-0 top-0 h-full w-60 bg-white z-50 shadow-xl">
              <div className="flex items-center justify-between px-4 h-14 border-b border-surface-200">
                <span className="font-display font-bold text-sm">Navigation</span>
                <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
              </div>
              <nav className="p-3 space-y-0.5">
                {candidateNav.map(item => {
                  const Icon = item.icon;
                  const active = location.pathname === item.href;
                  return (
                    <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                      className={cn('flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium', active ? 'bg-brand-50 text-brand-700' : 'text-surface-600 hover:bg-surface-100')}>
                      <Icon className="w-[18px] h-[18px]" /><span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container-wide py-6 flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-52 shrink-0">
          <nav className="sticky top-20 space-y-0.5">
            {candidateNav.map(item => {
              const Icon = item.icon;
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    active ? 'bg-brand-50 text-brand-700' : 'text-surface-600 hover:bg-surface-100'
                  )}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-surface-200">
              <Link to="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-danger-600 hover:bg-danger-50">
                <LogOut className="w-[18px] h-[18px]" /> Sign Out
              </Link>
            </div>
          </nav>
        </aside>
        <main className="flex-1 min-w-0"><Outlet /></main>
      </div>
    </div>
  );
}
