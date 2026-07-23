export interface LegalSection {
  heading: string;
  body: string[];
}

export const disclaimer: { title: string; sections: LegalSection[] } = {
  title: "Medical Disclaimer",
  sections: [
    {
      heading: "For Informational Purposes Only",
      body: [
        "The calculators, risk scores, and educational content on this site are provided for informational and educational purposes only. They are intended to support, not replace, the independent clinical judgment of a qualified healthcare professional.",
        "Nothing on this site constitutes medical advice, diagnosis, or treatment. No calculator result should be used as the sole basis for a clinical decision, and no content here establishes a doctor-patient relationship between you and Doctors' Medical Center.",
      ],
    },
    {
      heading: "Intended Audience",
      body: [
        "Most tools on this site are designed for use by qualified healthcare professionals who can interpret results in the context of a full clinical assessment. Tools marked \"Public\" are written for a general audience but still do not replace consultation with a doctor.",
      ],
    },
    {
      heading: "No Warranty of Accuracy",
      body: [
        "While every tool is built from published, peer-reviewed scoring systems and reviewed against current clinical guidelines, medicine evolves continuously. Guidelines are periodically revised, and we cannot guarantee that every tool reflects the most recent update at every moment. Always cross-check against your local protocols and the most current primary literature before relying on any result.",
      ],
    },
    {
      heading: "Emergencies",
      body: [
        "If you are experiencing a medical emergency, call your local emergency number immediately. Do not use this website in place of emergency care.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "Doctors' Medical Center, its staff, and contributors accept no liability for any loss, injury, or damage arising from the use of, or reliance on, information provided through this site.",
      ],
    },
  ],
};

export const terms: { title: string; sections: LegalSection[] } = {
  title: "Terms & Conditions",
  sections: [
    {
      heading: "Acceptance of Terms",
      body: [
        "By accessing or using this website, you agree to be bound by these terms and conditions and by our Medical Disclaimer and Privacy Policy. If you do not agree, please do not use this site.",
      ],
    },
    {
      heading: "Use of the Site",
      body: [
        "This site provides clinical calculators and educational content free of charge. You may use it for personal, educational, or clinical reference purposes. You may not copy, redistribute, or republish the content or the calculator logic without permission.",
      ],
    },
    {
      heading: "No Medical Advice",
      body: [
        "As set out in our Medical Disclaimer, nothing on this site constitutes medical advice. All calculations are provided \"as is\" without warranty of any kind, express or implied.",
      ],
    },
    {
      heading: "Advertising",
      body: [
        "This site may display advertisements served by third-party providers, including Google AdSense. These providers may use cookies and similar technologies to serve relevant ads, as described in our Privacy Policy.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "This site may link to third-party websites, including our main site at doctorsmedical.org.pk. We are not responsible for the content or privacy practices of external sites.",
      ],
    },
    {
      heading: "Changes to These Terms",
      body: [
        "We may update these terms from time to time. Continued use of the site after a change constitutes acceptance of the revised terms.",
      ],
    },
  ],
};

export const privacy: { title: string; sections: LegalSection[]; lastUpdated: string } = {
  title: "Privacy Policy",
  lastUpdated: "July 2026",
  sections: [
    {
      heading: "What This Policy Covers",
      body: [
        "This Privacy Policy explains how Doctors' Medical Center collects, uses, and protects information when you use this clinical tools website and app.",
      ],
    },
    {
      heading: "No Patient Data Is Collected",
      body: [
        "Every calculator on this site runs entirely in your browser or on your device. The values you enter — patient vitals, lab results, symptoms, or any other clinical data — are never transmitted to, or stored on, our servers. Calculations happen locally and are discarded when you close or refresh the page.",
      ],
    },
    {
      heading: "Information We Do Collect",
      body: [
        "We use standard, privacy-respecting analytics to understand which tools are useful and to fix problems, which may include non-identifying technical information such as browser type, approximate location (country/region level), device type, and pages visited.",
        "If this site displays advertising (for example through Google AdSense), our advertising partners may set cookies or use similar technologies to serve ads based on your visit to this and other websites. You can learn more about Google's approach to advertising, and opt out of personalized advertising, at adssettings.google.com.",
      ],
    },
    {
      heading: "Progressive Web App & Offline Storage",
      body: [
        "This site can be installed as an app and works offline. To enable this, your browser caches the app's code and static assets locally on your device using standard service worker and cache storage technology. This cached data contains only application code, never any patient information you enter into a calculator.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "We use cookies only where necessary for the site to function and, where applicable, for analytics and advertising as described above. You can control or disable cookies through your browser settings at any time.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "This site is intended for use by healthcare professionals and adult members of the public. It is not directed at children, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. The \"last updated\" date above reflects the most recent revision.",
      ],
    },
  ],
};
