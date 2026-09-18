export type CompanyContact = {
  name: string;
  area: string;
  areaKey: string;
  email: string;
};

export const company = {
  name: "HeilAres OÜ",
  tagline: "ROHEENERGIA SPETSIALISTID",
  email: "info@heilares.ee",
  contacts: [
    {
      name: "Kristjan Lepik",
      area: "Tööjõu rent",
      areaKey: "roles.workforce",
      email: "kristjan@heilares.ee",
    },
    {
      name: "Lauri Sal-al-Saller",
      area: "Roheenergia",
      areaKey: "roles.greenEnergy",
      email: "lauri@heilares.ee",
    },
    {
      name: "Karl-Heinrich Raigo",
      area: "Partnership Manager",
      areaKey: "roles.partnershipManager",
      email: "karl@heilares.ee",
    },
  ] as CompanyContact[],
  locationKey: "contact.info.locationValue",
  social: {
    linkedin: "https://www.linkedin.com/company/heilares-o%C3%BC/",
  },
};
