
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'old-age-care',
    title: 'Beloved Elders',
    icon: '🌸',
    description: 'Nurturing our senior family members with healthcare, comfort, deep companionship through monetary support or otherwise .',
    details: [
      'Warm and loving day-care homes for senior citizens.',
      'Specialized geriatric healthcare and nutritional planning.',
      'Social interaction and recreational activities.',
      'Nursing care support for the abandoned and lonely.',
      'Emotional counseling and legal support for dignity in old age.'
    ]
  },
  {
    id: 'skill-training',
    title: 'Empowered Hands',
    icon: '🛠️',
    description: 'Building futures through vocational training and modern job-ready skill development.',
    details: [
      'Tailoring, weaving, and traditional artisan workshops.',
      'Computer literacy and basic coding for local youth.',
      'Micro-entrepreneurship coaching for women-led businesses.',
      'Professional soft skills and communication training.',
      'Market-linking support for products made by local trainees.'
    ]
  },
  {
    id: 'education',
    title: 'Glowing Minds',
    icon: '✏️',
    description: 'Igniting the sparks of curiosity in children through holistic learning support.',
    details: [
      'Interactive after-school learning centers in rural clusters.',
      'Distribution of educational kits, uniforms, and digital tablets.',
      'Special education support for children with learning disabilities.',
      'Educational resources and community liabrary access.',
      'Merit-based scholarships for technical and higher education.'
    ]
  },
  {
    id: 'health-wellness',
    title: 'Vibrant Life',
    icon: '☀️',
    description: 'Ensuring health is a right, not a privilege, through community-wide wellness programs.',
    details: [
      'Community medical outreach and on-site care.',
      'Maternal health and infant nutrition intervention.',
      'Need-based food assistance and nutritional support.',
      'Sanitation drives and clean drinking water access.',
      'Emergency surgery support and medicine distribution.'
    ]
  }
];

export const PROJECTS = {
  ongoing: [
    {
      title: "Project Vidya: Digital Horizons",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      story: "Setting up computer labs in 5 rural schools to bridge the digital divide for over 1,200 children."
    },
    {
      title: "Silver Lining Sanctuary",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop",
      story: "Expanding our main elderly day-care center to accommodate 30 more residents with specialized palliative care."
    }
  ],
  completed: [
    {
      title: "Project Arpan 2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      story: "Successful distribution of 5,000 nutrition kits to expectant mothers in underserved urban clusters."
    },
    {
      title: "Loom of Hope",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop",
      story: "Trained 200 women in traditional weaving, establishing a self-sustaining cooperative that now exports globally."
    }
  ]
};
