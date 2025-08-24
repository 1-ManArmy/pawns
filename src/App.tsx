import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ConsentScripts } from "@/components/ConsentScripts";
import './styles/ambient.css';
import {
  HomePage,
  FeaturesPage,
  AboutPage,
  PricingPage,
  ContactPage,
  BlogPage,
  DocumentationPage,
  TutorialsPage,
  CommunityPage,
  TeamsPage,
  DevelopersPage,
  SolutionsPage,
  EducationPage,
  BusinessPage,
  SupportPage,
  NewsPage,
  CareersPage,
  PartnersPage,
  SecurityPage,
    PrivacyPage,
    CookiePolicyPage,
    FAQPage,
  // Core Domain Pages
  PrivacyPolicyPage,
  TermsConditionsPage,
  AboutUsPage,
  ContactUsPage,
  SupportTicketPage,
  SuggestionsPage,
  UpcomingModulesPage,
  OneLastAIModulesPage,
  OneManArmyPage,
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SubscriptionPage,
  // AI Service Pages
  ChatPage,
  MoodAnalyzerPage,
  CinematicPage,
  CreatorToolsPage,
  MemoryPage,
  IPInfoPage,
  APIAnalyticsDashboard,
  SearchPage,
  ProfilePage,
  AuthPage,
  AIStudioPage,
  VoiceAssistantPage,
  TaskManagerPage,
  ReportsPage,
  DataDashboardPage,
  SettingsPage,
  AILabPage
} from "@/pages";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black relative overflow-hidden">
                {/* Animated Background Grid */}
                <div className="fixed inset-0 opacity-[0.03] z-0 bg-grid-moving" />
                
                {/* Subtle Gradient Overlay */}
                <div className="fixed inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20 z-0" />
                
                {/* Floating Gradient Orbs */}
                <div className="fixed top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse z-0" />
                <div className="fixed bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-green-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse z-0 anim-delay-2000" />
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/8 via-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse z-0 anim-delay-4000" />
                
                {/* Content */}
                <div className="relative z-10">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/features" element={<FeaturesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/documentation" element={<DocumentationPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/teams" element={<TeamsPage />} />
                        <Route path="/developers" element={<DevelopersPage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/business" element={<BusinessPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/security" element={<SecurityPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                        
                        {/* Core Domain Pages */}
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/contact-us" element={<ContactUsPage />} />
                        <Route path="/support-ticket" element={<SupportTicketPage />} />
                        <Route path="/suggestions" element={<SuggestionsPage />} />
                        <Route path="/upcoming-modules" element={<UpcomingModulesPage />} />
                        <Route path="/upcoming-modules/onelastai" element={<OneLastAIModulesPage />} />
                        <Route path="/upcoming-modules/onemanarmy" element={<OneManArmyPage />} />
                        <Route path="/signin" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/reset-password" element={<ResetPasswordPage />} />
                        <Route path="/subscription" element={<SubscriptionPage />} />
                        
                        {/* AI Service Subdomains - Available as Routes */}
                        <Route path="/neochat" element={<ChatPage />} />
                        <Route path="/emotisense" element={<MoodAnalyzerPage />} />
                        <Route path="/cinegen" element={<CinematicPage />} />
                        <Route path="/contentcrafter" element={<CreatorToolsPage />} />
                        <Route path="/memora" element={<MemoryPage />} />
                        <Route path="/netscope" element={<IPInfoPage />} />
                        <Route path="/aiblogster" element={<BlogPage />} />
                        <Route path="/datavision" element={<APIAnalyticsDashboard />} />
                        <Route path="/infoseek" element={<SearchPage />} />
                        <Route path="/documind" element={<DocumentationPage />} />
                        <Route path="/carebot" element={<SupportPage />} />
                        <Route path="/personax" element={<ProfilePage />} />
                        <Route path="/authwise" element={<AuthPage />} />
                        <Route path="/ideaforge" element={<AIStudioPage />} />
                        <Route path="/vocamind" element={<VoiceAssistantPage />} />
                        <Route path="/taskmaster" element={<TaskManagerPage />} />
                        <Route path="/reportly" element={<ReportsPage />} />
                        <Route path="/datasphere" element={<DataDashboardPage />} />
                        <Route path="/configai" element={<SettingsPage />} />
                        <Route path="/labx" element={<AILabPage />} />
                    </Routes>
                    <Footer />
                    <ConsentScripts />
                    <CookieConsent />
                </div>
            </div>
        </Router>
    )
}

export default App