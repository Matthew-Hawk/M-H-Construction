import kitchen from '../assets/kitchen-concept.png';
import bathroom from '../assets/bathroom-concept.png';

export const business = {
  name: 'M&H Construction',
  phone: '979-739-7486',
  phoneHref: 'tel:+19797397486',
  email: 'Matthew@mandhconstructionbcs.com',
  emailHref: 'mailto:Matthew@mandhconstructionbcs.com',
  area: 'Bryan · College Station · Brazos County',
};

export const services = [
  {
    slug: 'kitchen-remodeling', name: 'Kitchen Remodeling', short: 'Kitchens', image: kitchen,
    alt: 'AI-generated kitchen concept with ivory cabinetry, a white oak island, and brass pendants; not an M&H project',
    headline: 'The heart of your home. Reimagined.',
    description: 'A place to gather, cook, and make everyday memories. Let’s explore a kitchen that feels right for the way you live.',
    intro: 'A kitchen remodel starts with how you use your home. Whether you have a clear vision or are still gathering ideas, we can discuss your priorities and the right approach for your space.',
    questions: [
      ['Do I need a complete design before we talk?', 'No. You can bring your own ideas or plans, or discuss where design assistance would be helpful. The level of assistance depends on your project.'],
      ['Can we keep the existing layout?', 'Bring your preferences to the first conversation. We can discuss what you want to keep and what you want to change, then assess the scope for your home.'],
      ['What should I prepare?', 'A few photos of the current space, inspiration you like, and a short list of what works and what doesn’t are a helpful starting point.'],
      ['What affects the scope and cost?', 'The size of the space, finish selections, layout changes, existing conditions, and any specialist work can affect scope. An individual conversation is the best starting point.'],
    ],
    priorities: ['How you cook & gather', 'Layout & everyday flow', 'Materials & finishes'],
  },
  {
    slug: 'bathroom-remodeling', name: 'Bathroom Remodeling', short: 'Bathrooms', image: bathroom,
    alt: 'AI-generated bathroom concept with an oak vanity, arched mirrors, and a glass shower; not an M&H project',
    headline: 'A better beginning. A quieter end.',
    description: 'Thoughtful spaces for daily routines. Start a conversation about a bathroom that balances comfort, character, and function.',
    intro: 'Your bathroom should work for your daily routine. Share what you would like to improve, from the feel of the space to the way you use it, and we can discuss a remodeling approach tailored to your goals.',
    questions: [
      ['Can you work with my ideas or plans?', 'Yes. M&H can work from homeowner ideas or plans, with design assistance considered according to the project.'],
      ['Where should I start?', 'Think about what is missing in your current bathroom: comfort, storage, layout, or simply a look that feels more like you. Photos and inspiration help us begin.'],
      ['Can I discuss shower and vanity changes?', 'Yes. Tell us what you have in mind so the specific work, materials, and specialist requirements can be assessed for your project.'],
      ['How long will a remodel take?', 'Timing depends on scope, selections, material availability, and existing conditions. We will discuss expectations for your project rather than promise a fixed duration here.'],
    ],
    priorities: ['Comfort & daily routines', 'Storage & use of space', 'Finishes & personal style'],
  },
];

export const process = [
  { title: 'Start a conversation', text: 'Tell us about your space, your ideas, and what you would like to change.' },
  { title: 'Find the right approach', text: 'Discuss scope and planning, with design assistance where it fits your project.' },
  { title: 'Bring it to life', text: 'Move from an agreed plan into remodeling and a final walkthrough.' },
];

export const homeFAQs = [
  ['Where do you work?', 'Our primary service area is Brazos County, including Bryan and College Station. Projects farther out are considered based on scope.'],
  ['Do I need to know exactly what I want?', 'No. Bring your ideas, questions, or existing plans. Design assistance can be part of the conversation, depending on the project.'],
  ['Do I need a budget before contacting you?', 'No. A rough budget can be helpful, but it is optional. You are welcome to ask for guidance as you explore your project.'],
  ['How do I get started?', 'Call or email Matthew with a short description of your kitchen or bathroom project and its general location. We’ll take the next step from there.'],
];
