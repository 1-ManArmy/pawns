# AI Image Editor Landing Page

Create a modern AI image editing application landing page that showcases the "Edit with AI" feature through an interactive interface mockup.

**Experience Qualities**: 
1. **Professional** - Clean, sophisticated design that conveys cutting-edge AI technology
2. **Intuitive** - Clear visual hierarchy that immediately communicates the product's value proposition
3. **Engaging** - Interactive elements and beautiful gradients that capture attention without overwhelming

**Complexity Level**: Content Showcase (information-focused)
- Primary purpose is to present the AI image editing feature in an appealing way that encourages user engagement through a clear call-to-action.

## Essential Features

**Hero Section Display**
- Functionality: Present the main value proposition with visual demonstration
- Purpose: Immediately communicate what the product does and its benefits
- Trigger: Page load
- Progression: User lands on page → sees headline and description → views interactive mockup → clicks CTA
- Success criteria: Clear understanding of the AI editing feature and strong visual appeal

**Interactive Interface Mockup**
- Functionality: Display a realistic representation of the AI editing interface
- Purpose: Show users exactly what they'll experience when using the product
- Trigger: Automatic display alongside hero content
- Progression: Interface visible → shows AI editing prompt → displays before/after images → demonstrates generation process
- Success criteria: Users can visualize themselves using the product

**Call-to-Action Button**
- Functionality: Primary conversion point directing users to try the product
- Purpose: Convert interested visitors into users
- Trigger: User click after being convinced by the presentation
- Progression: User interested → clicks "Try Phoenix" → redirected to application
- Success criteria: Clear, prominent button that drives conversions

## Edge Case Handling
- **Mobile Responsiveness**: Stack layout vertically on smaller screens with adjusted spacing
- **Slow Loading**: Ensure text content loads first, followed by visual elements
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## Design Direction
The design should feel cutting-edge, premium, and slightly futuristic - conveying advanced AI technology while remaining approachable and professional. Minimal interface with rich visual elements that support rather than distract from the core message.

## Color Selection
Analogous color scheme focusing on purple-to-blue gradient progression to convey innovation and technology.

- **Primary Color**: Deep Purple (oklch(0.4 0.2 300)) - Represents innovation and premium technology
- **Secondary Colors**: Gradient from purple to blue for depth and visual interest  
- **Accent Color**: Bright Pink/Magenta (oklch(0.7 0.25 320)) - For call-to-action elements and highlights
- **Foreground/Background Pairings**: 
  - Background (Deep Black #000000): White text (oklch(1 0 0)) - Ratio 21:1 ✓
  - Primary Purple: White text (oklch(1 0 0)) - Ratio 8.2:1 ✓  
  - Accent Pink: White text (oklch(1 0 0)) - Ratio 5.1:1 ✓

## Font Selection
Typography should convey modernity and professionalism with excellent readability for both headlines and body text.

- **Typographic Hierarchy**: 
  - H1 (Main Headline): Inter Bold/48px/tight letter spacing
  - Body Text (Description): Inter Regular/18px/relaxed line height
  - Button Text: Inter Medium/16px/normal spacing
  - Interface Labels: Inter Medium/14px/tight spacing

## Animations
Subtle, purposeful animations that enhance the premium feel without being distracting - focus on smooth transitions and gentle hover effects.

- **Purposeful Meaning**: Gentle hover effects on interactive elements convey responsiveness and quality
- **Hierarchy of Movement**: Primary focus on CTA button hover, secondary on interface mockup elements

## Component Selection
- **Components**: Button for CTA, Card for interface mockup container, custom gradient backgrounds
- **Customizations**: Custom gradient overlays, rounded interface mockup with realistic shadows
- **States**: Button hover with scale and color transitions, interactive elements with subtle feedback
- **Icon Selection**: Sparkles or AI-related icons for enhancement, close and settings icons for interface realism
- **Spacing**: Generous padding using Tailwind's xl and 2xl spacing for premium feel
- **Mobile**: Single column layout with adjusted text sizes and maintained visual hierarchy