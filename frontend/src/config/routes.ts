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
  PrivacyPage
} from "@/pages";

export const routes = [
  { path: "/", element: HomePage, name: "Home" },
  { path: "/features", element: FeaturesPage, name: "Features" },
  { path: "/about", element: AboutPage, name: "About" },
  { path: "/pricing", element: PricingPage, name: "Pricing" },
  { path: "/contact", element: ContactPage, name: "Contact" },
  { path: "/blog", element: BlogPage, name: "Blog" },
  { path: "/documentation", element: DocumentationPage, name: "Documentation" },
  { path: "/tutorials", element: TutorialsPage, name: "Tutorials" },
  { path: "/community", element: CommunityPage, name: "Community" },
  { path: "/teams", element: TeamsPage, name: "For Teams" },
  { path: "/developers", element: DevelopersPage, name: "For Developers" },
  { path: "/solutions", element: SolutionsPage, name: "Solutions" },
  { path: "/education", element: EducationPage, name: "Education" },
  { path: "/business", element: BusinessPage, name: "Business" },
  { path: "/support", element: SupportPage, name: "Support" },
  { path: "/news", element: NewsPage, name: "News" },
  { path: "/careers", element: CareersPage, name: "Careers" },
  { path: "/partners", element: PartnersPage, name: "Partners" },
  { path: "/security", element: SecurityPage, name: "Security" },
  { path: "/privacy", element: PrivacyPage, name: "Privacy Policy" }
];

export const getPageName = (pathname: string): string => {
  const route = routes.find(route => route.path === pathname);
  return route ? route.name : "OneLast AI";
};