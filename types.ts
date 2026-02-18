import React from 'react';

export interface ProjectPillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface DemocracyMechanism {
  title: string;
  description: string;
  howItWorks: string;
  benefit: string;
}

export interface NavLink {
  label: string;
  path: string;
}