export const siteConfig = {
  name: "OneLast AI",
  domain: "onelastai.com",
  description: "Empowering Youth Through Artificial Intelligence",
  
  // Subdomain structure for future expansion
  subdomains: [
    { name: "app", description: "Main application interface" },
    { name: "docs", description: "Documentation portal" },
    { name: "community", description: "Community forum" },
    { name: "blog", description: "AI insights and tutorials" },
    { name: "api", description: "Developer API portal" },
    { name: "status", description: "System status page" },
    { name: "support", description: "Customer support portal" },
    { name: "admin", description: "Administrative dashboard" },
    { name: "edu", description: "Educational resources" },
    { name: "business", description: "Business solutions" },
    { name: "partners", description: "Partner portal" },
    { name: "careers", description: "Job opportunities" },
    { name: "news", description: "Latest news and updates" },
    { name: "events", description: "Events and webinars" },
    { name: "sandbox", description: "AI experimentation environment" },
    { name: "analytics", description: "Analytics dashboard" },
    { name: "security", description: "Security center" },
    { name: "legal", description: "Legal documents and policies" },
    { name: "media", description: "Media kit and resources" },
    { name: "research", description: "AI research publications" }
  ],
  
  // Main navigation structure
  navigation: {
    main: [
      { 
        name: "Features", 
        href: "/features",
        dropdown: [
          { name: "AI Generation", href: "/features" },
          { name: "Education Tools", href: "/education" },
          { name: "Business Solutions", href: "/business" },
          { name: "Security & Privacy", href: "/security" }
        ]
      },
      { 
        name: "Solutions", 
        href: "/solutions",
        dropdown: [
          { name: "All Solutions", href: "/solutions" },
          { name: "Education", href: "/education" },
          { name: "Business", href: "/business" },
          { name: "Teams", href: "/teams" }
        ]
      },
      { 
        name: "Resources", 
        href: "/documentation",
        dropdown: [
          { name: "Documentation", href: "/documentation" },
          { name: "Tutorials", href: "/tutorials" },
          { name: "Community", href: "/community" },
          { name: "Blog", href: "/blog" },
          { name: "News", href: "/news" }
        ]
      },
      { 
        name: "Company", 
        href: "/about",
        dropdown: [
          { name: "About Us", href: "/about" },
          { name: "Careers", href: "/careers" },
          { name: "Partners", href: "/partners" },
          { name: "Privacy Policy", href: "/privacy" }
        ]
      }
    ],
    direct: [
      { name: "Developers", href: "/developers" },
      { name: "Pricing", href: "/pricing" },
      { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" }
    ]
  },
  
  // Social links
  social: {
    twitter: "https://twitter.com/onelastai",
    github: "https://github.com/onelastai",
    linkedin: "https://linkedin.com/company/onelastai",
    discord: "https://discord.gg/onelastai"
  }
};