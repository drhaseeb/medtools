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
        "Calculators depend on the accuracy of the values you enter. We are not responsible for outcomes arising from incorrect data entry, a device or browser malfunction, or a misinterpretation of a result.",
      ],
    },
    {
      heading: "Emergencies",
      body: [
        "If you are experiencing a medical emergency, call your local emergency number immediately. Do not use this website in place of emergency care.",
      ],
    },
    {
      heading: "No Doctor-Patient Relationship",
      body: [
        "Using this site, including submitting a contact form or emailing us with a question, does not create a doctor-patient relationship with Doctors' Medical Center or any individual clinician associated with it.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "Doctors' Medical Center, its staff, and contributors accept no liability for any loss, injury, or damage arising from the use of, or reliance on, information provided through this site, to the fullest extent permitted by law.",
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
      heading: "Eligibility",
      body: [
        "This site is intended for use by healthcare professionals and adult members of the public. It is not directed at, and should not be used by, children under 13. If you are under 18, use this site only with the involvement of a parent, guardian, or qualified healthcare professional.",
      ],
    },
    {
      heading: "Use of the Site",
      body: [
        "This site provides clinical calculators and educational content free of charge. You may use it for personal, educational, or clinical reference purposes.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "The site's content, design, and underlying calculator logic are owned by or licensed to Doctors' Medical Center. You may not copy, redistribute, republish, or create derivative works from this content without our prior written permission, except for personal, non-commercial reference.",
      ],
    },
    {
      heading: "No Medical Advice",
      body: [
        "As set out in our Medical Disclaimer, nothing on this site constitutes medical advice. All calculations are provided \"as is\" without warranty of any kind, express or implied, including warranties of accuracy, merchantability, or fitness for a particular purpose.",
      ],
    },
    {
      heading: "Advertising",
      body: [
        "This site displays advertisements served by third-party providers, including Google AdSense. These providers may use cookies and similar technologies to serve relevant ads, as described in our Privacy Policy. Where you are located in the European Economic Area, the UK, or Switzerland, you will be asked for your consent to certain uses of cookies and personal data before personalised ads are shown, and you may withdraw that consent at any time.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "This site may link to third-party websites, including our main site at doctorsmedical.org.pk. We are not responsible for the content, accuracy, or privacy practices of external sites, and linking to them does not imply endorsement.",
      ],
    },
    {
      heading: "Disclaimer of Warranties; Limitation of Liability",
      body: [
        "This site and its content are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, to the fullest extent permitted by law.",
        "To the fullest extent permitted by law, Doctors' Medical Center will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this site, even if advised of the possibility of such damages.",
      ],
    },
    {
      heading: "Indemnification",
      body: [
        "You agree to indemnify and hold harmless Doctors' Medical Center, its staff, and contributors from any claim or demand arising from your misuse of this site or your violation of these terms.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "We may suspend or restrict your access to this site, without notice, if we reasonably believe you have misused it or violated these terms.",
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These terms are governed by the laws of Pakistan, without regard to its conflict-of-law provisions. This does not remove any statutory protection you have as a consumer under the mandatory laws of your own country of residence.",
      ],
    },
    {
      heading: "Severability",
      body: [
        "If any provision of these terms is found unenforceable, the remaining provisions will continue in full force and effect.",
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
  lastUpdated: "August 2026",
  sections: [
    {
      heading: "What This Policy Covers",
      body: [
        "This Privacy Policy explains how Doctors' Medical Center (\"we,\" \"us\") collects, uses, and protects information when you use this clinical tools website and app, tools.doctorsmedical.org.pk. It also explains your choices, including for visitors in the European Economic Area, the UK, and Switzerland.",
      ],
    },
    {
      heading: "No Patient Data Is Collected",
      body: [
        "Every calculator on this site runs entirely in your browser or on your device. The values you enter — patient vitals, lab results, symptoms, or any other clinical data — are never transmitted to, or stored on, our servers. Calculations happen locally and are discarded when you close or refresh the page.",
      ],
    },
    {
      heading: "Information We Collect",
      body: [
        "We use Google Analytics to understand which tools are useful and to fix problems. This collects non-identifying technical information such as browser type, approximate location (country/region level, derived from IP address), device type, and pages visited — never anything you type into a calculator.",
        "If you contact us directly (for example by email), we collect whatever information you choose to include in that message, only to respond to you.",
      ],
    },
    {
      heading: "Cookies and Advertising (Google AdSense)",
      body: [
        "Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. You can learn more about how Google uses this data, and opt out of personalized advertising generally, at adssettings.google.com or www.aboutads.info.",
        "If you are located in the European Economic Area, the UK, or Switzerland, we ask for your consent — through an on-screen consent message — before any cookies or personal data are used for ad personalisation, as required under Google's EU User Consent Policy. You can change or withdraw your choice at any time using the \"Privacy Choices\" link in the site footer.",
        "You can control or disable cookies generally through your browser settings at any time, though doing so may affect how the site and its ads function.",
      ],
    },
    {
      heading: "Progressive Web App & Offline Storage",
      body: [
        "This site can be installed as an app and works offline. To enable this, your browser caches the app's code and static assets locally on your device using standard service worker and cache storage technology. This cached data contains only application code, never any patient information you enter into a calculator.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We do not operate our own database of visitor information. Analytics and advertising data is retained by our providers (Google Analytics, Google AdSense) according to their own retention settings, which you can review in Google's own privacy documentation. Any message you send us directly is kept only as long as needed to respond to and resolve your enquiry.",
      ],
    },
    {
      heading: "Your Rights and Choices",
      body: [
        "Depending on where you live, you may have the right to ask what information is held about you, request its correction or deletion, object to certain processing, or withdraw consent you previously gave. Since we don't collect an account or profile tied to your identity, most of these rights are exercised through Google's own tools (Ads Settings, aboutads.info, or your Google Account) for advertising/analytics data, or by emailing us directly for anything you've sent us personally.",
        "If you are in the EEA, the UK, or Switzerland, you can withdraw consent to ad personalisation at any time — see \"Cookies and Advertising\" above.",
      ],
    },
    {
      heading: "International Data Transfers",
      body: [
        "Google's advertising and analytics services may process data on servers located outside your own country, including in the United States, under Google's own compliance frameworks for international data transfers.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "This site is intended for use by healthcare professionals and adult members of the public. It is not directed at children under 13, and we do not knowingly collect personal information from children. We do not serve child-directed content and do not enable ad personalisation for any visitor known to be under 13.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "This site may link to our main site, clinical guideline sources, and original research we cite. We are not responsible for the privacy practices of those external sites — review their own policies before sharing any information with them.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. The \"last updated\" date above reflects the most recent revision. Material changes will be reflected by an updated date on this page.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about this policy, or a request relating to your data, can be sent to the contact address below.",
      ],
    },
  ],
};
