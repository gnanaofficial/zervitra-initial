import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LayoutDashboard, Briefcase, Users, GitBranch, Brain, FileText, Calendar,
  BarChart3, Settings, Bell, Search, Menu, X, ChevronDown, LogOut, User,
  Building2, Shield, Key, Webhook, ClipboardList, Activity, Sparkles,
  MessageSquare, UserPlus, CreditCard, Lock, Eye, Database, HelpCircle,
  ChevronRight, PanelLeftClose, PanelLeft
} from 'lucide-react';
import { cn, getInitials } from '../../lib/utils';
import { mockUser, mockNotifications } from '../../lib/mock-data';

const navSections = [
  {
    title: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/app/dashboard' },
      { icon: Activity, label: 'Activity', href: '/app/activity' },
      { icon: Bell, label: 'Notifications', href: '/app/notifications' },
    ]
  },
  {
    title: 'Recruitment',
    items: [
      { icon: Briefcase, label: 'Jobs', href: '/app/jobs' },
      { icon: Users, label: 'Candidates', href: '/app/candidates' },
      { icon: GitBranch, label: 'Pipeline', href: '/app/pipeline' },
    ]
  },
  {
    title: 'AI Engine',
    items: [
      { icon: Brain, label: 'AI Screening', href: '/app/ai-screening' },
      { icon: FileText, label: 'Assessments', href: '/app/assessments' },
      { icon: Calendar, label: 'Interviews', href: '/app/interviews' },
    ]
  },
  {
    title: 'Insights',
    items: [
      { icon: BarChart3, label: 'Reports', href: '/app/reports' },
    ]
  },
  {
    title: 'Organization',
    items: [
      { icon: UserPlus, label: 'Team', href: '/app/team' },
      { icon: Shield, label: 'Roles', href: '/app/roles' },
      { icon: ClipboardList, label: 'Audit Logs', href: '/app/audit-logs' },
    ]
  },
];

const settingsLinks = [
  { icon: User, label: 'Profile', href: '/app/settings/profile' },
  { icon: Building2, label: 'Company', href: '/app/settings/company' },
  { icon: Lock, label: 'Security', href: '/app/settings/security' },
  { icon: Bell, label: 'Notifications', href: '/app/settings/notifications' },
  { icon: Eye, label: 'Privacy', href: '/app/settings/privacy' },
  { icon: Database, label: 'Retention', href: '/app/settings/retention' },
  { icon: CreditCard, label: 'Billing', href: '/app/settings/billing' },
  { icon: Sparkles, label: 'AI Settings', href: '/app/settings/ai' },
  { icon: Key, label: 'API Keys', href: '/app/settings/api-keys' },
  { icon: Webhook, label: 'Webhooks', href: '/app/settings/webhooks' },
  { icon: Settings, label: 'Integrations', href: '/app/settings/integrations' },
];

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const location = useLocation();
  const isSettings = location.pathname.startsWith('/app/settings');

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 h-16 border-b border-surface-200 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {sidebarOpen && <span className="font-display font-bold text-base text-surface-900">Static Global</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-thin">
        {navSections.map(section => (
          <div key={section.title}>
            {sidebarOpen && (
              <p className="px-3 mb-2 text-[10px] font-semibold text-surface-400 uppercase tracking-wider">{section.title}</p>
            )}
            <div className="space-y-0.5">
              {section.items.map(item => {
                const Icon = item.icon;
                const active = location.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                      active
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-surface-600 hover:bg-surface-100 hover:text-surface-900'
                    )}
                    title={!sidebarOpen ? item.label : undefined}
                  >
                    <Icon className={cn('w-[18px] h-[18px] shrink-0', active ? 'text-brand-600' : '')} />
                    {sidebarOpen && <span>{item.label}</span>}
                    {item.label === 'Notifications' && sidebarOpen && (
                      <span className="ml-auto bg-danger-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">2</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Settings link */}
      <div className="px-3 pb-3 border-t border-surface-200 pt-3 shrink-0">
        <Link
          to="/app/settings/profile"
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all',
            isSettings ? 'bg-brand-50 text-brand-700' : 'text-surface-600 hover:bg-surface-100'
          )}
        >
          <Settings className="w-[18px] h-[18px]" />
          {sidebarOpen && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Desktop Sidebar */}
      <aside className={cn(
        'hidden lg:flex fixed left-0 top-0 h-full bg-white border-r border-surface-200 z-40 flex-col transition-all duration-300',
        sidebarOpen ? 'w-60' : 'w-[68px]'
      )}>
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className="lg:hidden fixed left-0 top-0 h-full w-60 bg-white border-r border-surface-200 z-50 flex flex-col"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={cn('transition-all duration-300', sidebarOpen ? 'lg:ml-60' : 'lg:ml-[68px]')}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-surface-200">
          <div className="flex items-center justify-between h-14 px-4 lg:px-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-surface-100">
                <Menu className="w-5 h-5 text-surface-600" />
              </button>
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden lg:flex p-2 rounded-lg hover:bg-surface-100 text-surface-500">
                {sidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
              </button>
              <div className="hidden md:flex items-center bg-surface-100 rounded-xl px-3 py-1.5 w-72">
                <Search className="w-4 h-4 text-surface-400 mr-2" />
                <input type="text" placeholder="Search anything..." className="bg-transparent text-sm outline-none w-full placeholder-surface-400" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Notifications */}
              <div className="relative">
                <button onClick={() => { setShowNotif(!showNotif); setShowUser(false); }} className="p-2 rounded-lg hover:bg-surface-100 relative">
                  <Bell className="w-[18px] h-[18px] text-surface-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full" />
                </button>
                {showNotif && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-xl border border-surface-200 shadow-xl z-50 animate-fade-in-down">
                    <div className="flex items-center justify-between p-4 border-b border-surface-100">
                      <h3 className="font-semibold text-sm">Notifications</h3>
                      <button className="text-xs text-brand-600 hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {mockNotifications.map(n => (
                        <div key={n.id} className={cn('px-4 py-3 border-b border-surface-50 hover:bg-surface-50 cursor-pointer', !n.read && 'bg-brand-50/30')}>
                          <p className="text-sm font-medium text-surface-900">{n.title}</p>
                          <p className="text-xs text-surface-500 mt-0.5">{n.message}</p>
                          <p className="text-[10px] text-surface-400 mt-1">{n.time}</p>
                        </div>
                      ))}
                    </div>
                    <Link to="/app/notifications" onClick={() => setShowNotif(false)} className="block text-center py-3 text-xs text-brand-600 hover:bg-surface-50 font-medium">
                      View all notifications
                    </Link>
                  </div>
                )}
              </div>

              {/* User menu */}
              <div className="relative">
                <button onClick={() => { setShowUser(!showUser); setShowNotif(false); }} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface-100">
                  <div className="avatar avatar-sm bg-brand-100 text-brand-700">{getInitials(mockUser.name)}</div>
                  <span className="hidden md:block text-sm font-medium text-surface-700">{mockUser.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-surface-400" />
                </button>
                {showUser && (
                  <div className="absolute right-0 top-12 w-56 bg-white rounded-xl border border-surface-200 shadow-xl z-50 animate-fade-in-down">
                    <div className="p-3 border-b border-surface-100">
                      <p className="text-sm font-semibold text-surface-900">{mockUser.name}</p>
                      <p className="text-xs text-surface-500">{mockUser.email}</p>
                      <span className="badge-primary mt-1.5 text-[10px]">{mockUser.organization}</span>
                    </div>
                    <div className="p-1.5">
                      <Link to="/app/settings/profile" onClick={() => setShowUser(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-surface-600 hover:bg-surface-50">
                        <User className="w-4 h-4" /> Profile
                      </Link>
                      <Link to="/app/settings/company" onClick={() => setShowUser(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-surface-600 hover:bg-surface-50">
                        <Building2 className="w-4 h-4" /> Organization
                      </Link>
                      <Link to="/app/settings/ai" onClick={() => setShowUser(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-surface-600 hover:bg-surface-50">
                        <Sparkles className="w-4 h-4" /> AI Settings
                      </Link>
                    </div>
                    <div className="p-1.5 border-t border-surface-100">
                      <Link to="/login" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-danger-600 hover:bg-danger-50">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content with optional settings sidebar */}
        <div className="flex">
          {isSettings && (
            <aside className="hidden md:block w-56 shrink-0 border-r border-surface-200 bg-white min-h-[calc(100vh-3.5rem)]">
              <div className="p-4">
                <h3 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3 px-3">Settings</h3>
                <nav className="space-y-0.5">
                  {settingsLinks.map(link => {
                    const Icon = link.icon;
                    const active = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          active ? 'bg-brand-50 text-brand-700' : 'text-surface-600 hover:bg-surface-100'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>
          )}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
