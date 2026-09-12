export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  description?: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Master of Arts",
    field: "International Relations",
    institution: "University of Oklahoma",
    description: "Advanced graduate study emphasizing analytical methodology, geopolitical risk analysis, and strategic communication."
  },
  {
    degree: "Bachelor's Degree",
    field: "Electronics Engineering",
    institution: "Turkish Air Force Academy",
    description: "Rigorous engineering foundation in signal processing, electronic systems, telecommunications, and digital logic."
  }
];
