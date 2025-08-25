import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List, X, CaretDown } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 relative transition-all duration-300">
      {/* Animated bottom border - hidden when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 animate-gradient-spin transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors duration-300">
              OneLast.Ai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>AI Services</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2 max-h-96 overflow-y-auto"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/neochat" className="w-full">NeoChat</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/emotisense" className="w-full">EmotiSense</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/cinegen" className="w-full">CineGen</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/contentcrafter" className="w-full">ContentCrafter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/memora" className="w-full">Memora</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/netscope" className="w-full">NetScope</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/datavision" className="w-full">DataVision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/infoseek" className="w-full">InfoSeek</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/personax" className="w-full">PersonaX</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/authwise" className="w-full">AuthWise</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/ideaforge" className="w-full">IdeaForge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/vocamind" className="w-full">VocaMind</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/taskmaster" className="w-full">TaskMaster</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/reportly" className="w-full">Reportly</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/datasphere" className="w-full">DataSphere</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/configai" className="w-full">ConfigAI</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/labx" className="w-full">LabX</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Features</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/features" className="w-full">AI Generation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/education" className="w-full">Education Tools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/business" className="w-full">Business Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/security" className="w-full">Security & Privacy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Solutions</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/solutions" className="w-full">All Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/education" className="w-full">Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/business" className="w-full">Business</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/teams" className="w-full">Teams</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Resources</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/documentation" className="w-full">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/tutorials" className="w-full">Tutorials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/community" className="w-full">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/news" className="w-full">News</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Company</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/careers" className="w-full">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/partners" className="w-full">Partners</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  <Link to="/privacy" className="w-full">Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Regular Navigation Items */}
            <Link to="/developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Developers
            </Link>
            <Link to="/pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Pricing
            </Link>
            <Link to="/support" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Support
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20"
            >
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/90 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between text-white/90 hover:text-white transition-colors duration-300 font-medium w-full text-left">
                  <span>AI Services</span>
                  <CaretDown size={14} className="transition-transform duration-200" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2 w-full max-h-64 overflow-y-auto"
                  align="start"
                >
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/neochat" className="w-full" onClick={() => setIsMenuOpen(false)}>NeoChat</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/emotisense" className="w-full" onClick={() => setIsMenuOpen(false)}>EmotiSense</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/cinegen" className="w-full" onClick={() => setIsMenuOpen(false)}>CineGen</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/contentcrafter" className="w-full" onClick={() => setIsMenuOpen(false)}>ContentCrafter</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/memora" className="w-full" onClick={() => setIsMenuOpen(false)}>Memora</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/netscope" className="w-full" onClick={() => setIsMenuOpen(false)}>NetScope</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/datavision" className="w-full" onClick={() => setIsMenuOpen(false)}>DataVision</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/infoseek" className="w-full" onClick={() => setIsMenuOpen(false)}>InfoSeek</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/personax" className="w-full" onClick={() => setIsMenuOpen(false)}>PersonaX</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/authwise" className="w-full" onClick={() => setIsMenuOpen(false)}>AuthWise</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/ideaforge" className="w-full" onClick={() => setIsMenuOpen(false)}>IdeaForge</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/vocamind" className="w-full" onClick={() => setIsMenuOpen(false)}>VocaMind</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/taskmaster" className="w-full" onClick={() => setIsMenuOpen(false)}>TaskMaster</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/reportly" className="w-full" onClick={() => setIsMenuOpen(false)}>Reportly</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/datasphere" className="w-full" onClick={() => setIsMenuOpen(false)}>DataSphere</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/configai" className="w-full" onClick={() => setIsMenuOpen(false)}>ConfigAI</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    <Link to="/labx" className="w-full" onClick={() => setIsMenuOpen(false)}>LabX</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/features" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link to="/solutions" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                Solutions
              </Link>
              <Link to="/documentation" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                Documentation
              </Link>
              <Link to="/teams" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                For Teams
              </Link>
              <Link to="/developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                For Developers
              </Link>
              <Link to="/pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4">
                <Button 
                  className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium rounded-full"
                >
                  Launch App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}