export type CompanyContact = {
  name: string;
  area: string;
  areaKey: string;
  phone: string;
  phoneHref: string;
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
      phone: "+372 5594 2216",
      phoneHref: "tel:+37255942216",
    },
    {
      name: "Lauri Sal-al-Saller",
      area: "Roheenergia",
      areaKey: "roles.greenEnergy",
      phone: "+372 505 9917",
      phoneHref: "tel:+3725059917",
    },
  ] as CompanyContact[],
  locationKey: "contact.info.locationValue",
  hoursKey: "contact.info.hoursValue",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};
