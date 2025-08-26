import { useState } from 'react';
import './FAQSection.css';
// import { CaretDown, CaretUp } from '@phosphor-icons/react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'What is OneLast AI?',
        answer: 'OneLast AI is an advanced AI-powered education and productivity platform designed for youth and professionals in UAE, UK, and USA. It offers smart assistants, memory tools, and creative AI services.'
    },
    {
        question: 'How much does OneLast AI cost?',
        answer: 'Our pricing is $5/month, $3/week, or $50/year. Lifetime offers are available for early adopters.'
    },
    {
        question: 'Which AI services are included?',
        answer: 'You get access to chat assistants, document analysis, emotion AI, astrology insights, PDF tools, and more.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, we use advanced encryption and follow strict privacy standards. Your data is never sold or shared.'
    },
    {
        question: 'Can I use OneLast AI on mobile?',
        answer: 'Yes, our platform is fully responsive and works on all devices.'
    },
    {
        question: 'How do I sign up?',
        answer: 'Click the Sign Up button on our homepage and follow the registration steps.'
    },
    {
        question: 'What payment methods are accepted?',
        answer: 'We accept credit cards, PayPal, and Stripe.'
    },
    {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel anytime from your account dashboard.'
    },
    {
        question: 'Is there a free trial?',
        answer: 'We offer a free trial for new users. Details are available on the pricing page.'
    },
    {
        question: 'Who is Grand Pa United?',
        answer: 'Grand Pa United is our strategic partner supporting affordable AI education for youth.'
    },
    {
        question: 'How do I contact support?',
        answer: 'You can reach us via the contact form or email support@onelastai.com.'
    },
    {
        question: 'Do you offer team or enterprise plans?',
        answer: 'Yes, we have special plans for schools, teams, and enterprises. Contact us for details.'
    },
    {
        question: 'What languages are supported?',
        answer: 'English is fully supported. More languages are coming soon.'
    },
    {
        question: 'Can I integrate OneLast AI with other tools?',
        answer: 'Yes, API access and integrations are available for developers.'
    },
    {
        question: 'How do I reset my password?',
        answer: 'Use the Forgot Password link on the login page to reset your password.'
    }
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Animated Background with Purple/Pink Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-pink-950/30 to-purple-900/40" />
            
            {/* Animated Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.15] faq-grid-pattern"
            />

            {/* Floating Gradient Orbs */}
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 via-purple-500/20 to-pink-600/15 rounded-full blur-3xl animate-pulse faq-orb-delay" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 via-purple-500/20 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Animated Border Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Everything you need to know about OneLast AI and how it can help you succeed.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            className="group relative"
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-full bg-black/60 rounded-xl" />
                            </div>
                            
                            {/* Content */}
                            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-white pr-4">
                                        {item.question}
                                    </h3>
                                    <div className="flex-shrink-0 w-6 h-6 text-purple-400">
                                        {openItems.includes(index) ? (
                                            <></>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </button>
                                
                                {/* Answer */}
                                <div className={`transition-all duration-300 ease-in-out ${
                                    openItems.includes(index) 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                } overflow-hidden`}>
                                    <div className="px-6 pb-5 pt-0">
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                        <span className="relative z-10">Contact Support</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}