import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, Users, CreditCard, BarChart3, Sparkles, 
  Activity, Settings, HeartPulse, ListTodo, ClipboardList, HelpCircle,
  Shield, ChevronDown, LogOut, Menu, X, Bell, PanelLeftClose, PanelLeft
} from 'lucide-react';
import { cn, getInitials } from '../../lib/utils';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const adminNav = [
  { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
  { icon: Building2, label: 'Organizations', href: '/admin/organizations' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: CreditCard, label: 'Subscriptions', href: '/admin/subscriptions' },
  { icon: BarChart3, label: 'Usage', href: '/admin/usage' },
  { icon: Sparkles, label: 'AI Settings', href: '/admin/ai-settings' },
  { icon: Activity, label: 'AI Usage', href: '/admin/ai-usage' },
  { icon: HeartPulse, label: 'System Health', href: '/admin/system-health' },
  { icon: ListTodo, label: 'Queues', href: '/admin/queues' },
  { icon: ClipboardList, label: 'Audit Logs', href: '/admin/audit-logs' },
  { icon: HelpCircle, label: 'Support', href: '/admin/support' },
  { icon: Settings, label: 'Platform Settings', href: '/admin/platform-settings' },
];

export default function AdminLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-950 text-white">
      {/* Sidebar */}
      <aside className={cn(
        'hidden lg:flex fixed left-0 top-0 h-full bg-surface-900 border-r border-surface-800 z-40 flex-col transition-all duration-300',
        collapsed ? 'w-[68px]' : 'w-60'
      )}>
        <div className="flex items-center gap-2.5 px-4 h-16 border-b border-surface-800 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          {!collapsed && <span className="font-display font-bold text-sm text-white">Admin Console</span>}
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin">
          {adminNav.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all',
                  active ? 'bg-white/10 text-white' : 'text-surface-400 hover:bg-white/5 hover:text-white'
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="w-[18px] h-[18px] shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="px-3 py-3 border-t border-surface-800">
          <button onClick={() => setCollapsed(!collapsed)} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-surface-400 hover:text-white hover:bg-white/5 w-full">
            {collapsed ? <PanelLeft className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="lg:hidden fixed inset-0 bg-black/60 z-40" />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="lg:hidden fixed left-0 top-0 h-full w-60 bg-surface-900 z-50 flex flex-col">
              <div className="flex items-center gap-2.5 px-4 h-16 border-b border-surface-800">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center"><Shield className="w-4 h-4 text-white" /></div>
                <span className="font-display font-bold text-sm text-white">Admin Console</span>
              </div>
              <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {adminNav.map(item => {
                  const Icon = item.icon;
                  const active = location.pathname === item.href;
                  return (
                    <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                      className={cn('flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all', active ? 'bg-white/10 text-white' : 'text-surface-400 hover:bg-white/5 hover:text-white')}>
                      <Icon className="w-[18px] h-[18px]" /><span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className={cn('transition-all duration-300', collapsed ? 'lg:ml-[68px]' : 'lg:ml-60')}>
        <header className="sticky top-0 z-30 bg-surface-950/80 backdrop-blur-xl border-b border-surface-800 h-14 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-white/5"><Menu className="w-5 h-5" /></button>
            <h1 className="text-sm font-semibold text-surface-300">Super Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/app/dashboard" className="text-xs text-surface-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">← Back to App</Link>
            <div className="avatar avatar-sm bg-red-900/50 text-red-400">SA</div>
          </div>
        </header>
        <main><Outlet /></main>
      </div>
    </div>
  );
}
