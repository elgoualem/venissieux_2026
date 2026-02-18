import React from 'react';
import { 
  ShieldCheck, 
  Sparkles,
  Vote, 
  TreePine,
  Percent
} from 'lucide-react';
import { ProjectPillar } from './types';

export const COLORS = {
  navy: 'bg-slate-900',
  orange: 'text-orange-500',
  orangeBg: 'bg-orange-500',
  white: 'bg-white',
};

export const DEFAULT_CANDIDATE_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";

export const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'Mon Projet', path: '/projet' },
  { label: 'Démocratie Permanente', path: '/methode' },
  { label: 'Transparence & Data', path: '/transparence' },
  { label: 'Parcours & Valeurs', path: '/parcours' },
  { label: 'Agir avec nous', path: '/agir' },
];

export const DATA_INDICATORS = [
  { label: "Budget Participatif", value: "3.2M€", trend: "+5%", icon: <Percent className="w-5 h-5 text-orange-500" /> },
  { label: "Qualité de l'air (Minguettes)", value: "72/100", trend: "Stable", icon: <TreePine className="w-5 h-5 text-green-500" /> },
  { label: "Police Municipale", value: "85 agents", trend: "+12", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
  { label: "Dépôts sauvages traités", value: "94%", trend: "+8%", icon: <Sparkles className="w-5 h-5 text-purple-500" /> },
];

export const PROJECT_PILLARS: ProjectPillar[] = [
  {
    id: 'security',
    title: '1. Sécurité & Tranquillité publique',
    description: "Rétablir l'ordre par le renforcement des moyens humains et technologiques.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    details: [
      "Augmentation des effectifs de la Police Municipale pour une présence 24h/24.",
      "Modernisation et amélioration complète des équipements des agents.",
      "Déploiement stratégique du réseau de vidéo-surveillance.",
      "Tolérance zéro contre les trafics."
    ]
  },
  {
    id: 'cleanliness',
    title: '2. Cadre de vie & Propreté',
    description: "Zéro tolérance pour les dépôts sauvages, respect total de l'espace public.",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    details: [
      "Lutte active contre les dépôts sauvages.",
      "Propreté renforcée des rues.",
      "Sanctions fermes pour les contrevenants."
    ]
  },
  {
    id: 'democracy',
    title: '3. Démocratie Directe',
    description: "Rendre le pouvoir de décision aux habitants.",
    icon: <Vote className="w-8 h-8 text-orange-500" />,
    details: [
      "Budget Participatif (5% de l'investissement).",
      "RIC Local pour les décisions majeures.",
      "Assemblées citoyennes tirées au sort."
    ]
  }
];