import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts (AppLayout, AdminLayout, CandidateLayout used as <Route element>)
import AppLayout from './components/layout/AppLayout';
import AdminLayout from './components/layout/AdminLayout';
import CandidateLayout from './components/layout/CandidateLayout';

// Public Pages
import HomePage from './pages/public/HomePage';
import {
  ProductPage, FeaturesPage, SolutionsPage, HowItWorksPage, PricingPage,
  DemoPage, ContactPage, AboutPage, CareersPage, CareerDetailPage,
  BlogPage, BlogDetailPage, ResourcesPage, IntegrationsPage, SecurityPage,
  TrustPage, HelpPage, HelpArticlePage, StatusPage, PublicJobsPage,
  PublicJobDetailPage, JobApplyPage, ApplicationSubmittedPage, ApplicationStatusPage,
} from './pages/public/PublicPages';

// Auth Pages
import { LoginPage, SignupPage } from './pages/auth/AuthPages';

// Recruiter App Pages
import { DashboardPage } from './pages/app/DashboardPage';
import {
  JobsPage, JobDetailPage, CandidatesPage, CandidateDetailPage,
  PipelinePage, AIScreeningPage, AssessmentsPage, InterviewsPage,
  ReportsPage, ActivityPage, NotificationsPage, TeamPage, RolesPage, AuditLogsPage,
} from './pages/app/AppPages';

// Settings Pages
import {
  ProfileSettings, CompanySettings, SecuritySettings, NotificationSettings,
  PrivacySettings, RetentionSettings, BillingSettings, AISettings,
  APIKeysSettings, WebhooksSettings, IntegrationsSettings,
} from './pages/app/SettingsPages';

// Candidate Portal Pages
import {
  CandidateDashboard, CandidateProfile, CandidateResume, CandidateApplications,
  CandidateAssessments, CandidateInterviews, CandidateMessages,
  CandidatePrivacy, CandidateSettings,
} from './pages/candidate/CandidatePages';

// Admin Pages
import {
  AdminOverview, AdminOrganizations, AdminUsers, AdminSubscriptions,
  AdminUsage, AdminAISettings, AdminAIUsage, AdminSystemHealth,
  AdminQueues, AdminAuditLogs, AdminSupport, AdminPlatformSettings,
} from './pages/admin/AdminPages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── PUBLIC ROUTES ── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<CareerDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/trust" element={<TrustPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/help/:slug" element={<HelpArticlePage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/jobs" element={<PublicJobsPage />} />
        <Route path="/jobs/:slug" element={<PublicJobDetailPage />} />
        <Route path="/jobs/:slug/apply" element={<JobApplyPage />} />
        <Route path="/application/submitted" element={<ApplicationSubmittedPage />} />
        <Route path="/application/status" element={<ApplicationStatusPage />} />

        {/* ── AUTH ROUTES ── */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ── RECRUITER APP ROUTES ── */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="notifications" element={<NotificationsPage />} />

          {/* Jobs */}
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/new" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobDetailPage />} />

          {/* Candidates */}
          <Route path="candidates" element={<CandidatesPage />} />
          <Route path="candidates/:id" element={<CandidateDetailPage />} />

          {/* Pipeline */}
          <Route path="pipeline" element={<PipelinePage />} />

          {/* AI Engine */}
          <Route path="ai-screening" element={<AIScreeningPage />} />
          <Route path="assessments" element={<AssessmentsPage />} />
          <Route path="interviews" element={<InterviewsPage />} />

          {/* Insights */}
          <Route path="reports" element={<ReportsPage />} />

          {/* Organization */}
          <Route path="team" element={<TeamPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="audit-logs" element={<AuditLogsPage />} />

          {/* Settings */}
          <Route path="settings" element={<Navigate to="/app/settings/profile" replace />} />
          <Route path="settings/profile" element={<ProfileSettings />} />
          <Route path="settings/company" element={<CompanySettings />} />
          <Route path="settings/security" element={<SecuritySettings />} />
          <Route path="settings/notifications" element={<NotificationSettings />} />
          <Route path="settings/privacy" element={<PrivacySettings />} />
          <Route path="settings/retention" element={<RetentionSettings />} />
          <Route path="settings/billing" element={<BillingSettings />} />
          <Route path="settings/ai" element={<AISettings />} />
          <Route path="settings/api-keys" element={<APIKeysSettings />} />
          <Route path="settings/webhooks" element={<WebhooksSettings />} />
          <Route path="settings/integrations" element={<IntegrationsSettings />} />
        </Route>

        {/* ── CANDIDATE PORTAL ROUTES ── */}
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<Navigate to="/candidate/dashboard" replace />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="resume" element={<CandidateResume />} />
          <Route path="applications" element={<CandidateApplications />} />
          <Route path="assessments" element={<CandidateAssessments />} />
          <Route path="interviews" element={<CandidateInterviews />} />
          <Route path="messages" element={<CandidateMessages />} />
          <Route path="privacy" element={<CandidatePrivacy />} />
          <Route path="settings" element={<CandidateSettings />} />
        </Route>

        {/* ── SUPER ADMIN ROUTES ── */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="organizations" element={<AdminOrganizations />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="subscriptions" element={<AdminSubscriptions />} />
          <Route path="usage" element={<AdminUsage />} />
          <Route path="ai-settings" element={<AdminAISettings />} />
          <Route path="ai-usage" element={<AdminAIUsage />} />
          <Route path="system-health" element={<AdminSystemHealth />} />
          <Route path="queues" element={<AdminQueues />} />
          <Route path="audit-logs" element={<AdminAuditLogs />} />
          <Route path="support" element={<AdminSupport />} />
          <Route path="platform-settings" element={<AdminPlatformSettings />} />
        </Route>

        {/* ── 404 FALLBACK ── */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
