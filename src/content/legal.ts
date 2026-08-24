export interface LegalSection {
  heading: string;
  body: string[];
}

// This is the single canonical Terms/Privacy/Disclaimer for the whole
// Doctors' Medical ORG family — this domain (doctorsmedical.org.pk,
// including the clinical calculators at doctorsmedical.org.pk/tools),
// Doctors' Medical Center (our clinic, at clinic.doctorsmedical.org.pk),
// and Resus Runner (resus.doctorsmedical.org.pk) all link here rather than
// maintaining their own copies. Lives on this domain specifically because
// it's the one that runs ads — it's the only privacy-policy URL that needs
// registering in AdSense's Privacy & messaging settings, and keeps three
// domains' legal text from drifting out of sync.
//
// None of our sites take online payments or bookings — no Stripe, no
// booking widget, nothing that collects patient data through a website.
// Appointments and payments at the clinic happen offline (phone, email, or
// in person), which is why there's no "Payments"/"Online Appointments"/
// Refunds content here — there's nothing website-mediated to govern.

export const terms: { title: string; sections: LegalSection[] } = {
  title: "Terms & Conditions",
  sections: [
    {
      heading: "Acceptance of Terms",
      body: [
        "These terms apply to doctorsmedical.org.pk (Doctors' Medical ORG, including our clinical calculators at doctorsmedical.org.pk/tools), clinic.doctorsmedical.org.pk (Doctors' Medical Center, our clinic and teaching hospital), and resus.doctorsmedical.org.pk (our resuscitation-support tool) — together, \"our sites.\" By accessing or using any of our sites, you agree to be bound by these terms and by our Privacy Policy and Medical Disclaimer. If you do not agree, please do not use our sites.",
      ],
    },
    {
      heading: "Eligibility",
      body: [
        "Our sites are intended for use by healthcare professionals and adult members of the public. They are not directed at, and should not be used by, children under 13. If you are under 18, use our sites only with the involvement of a parent, guardian, or qualified healthcare professional.",
      ],
    },
    {
      heading: "No Online Booking or Payments",
      body: [
        "None of our sites offer online appointment booking or payment processing. Contacting Doctors' Medical Center by phone, email, or in person to arrange a consultation is an offline interaction with our clinic, not a transaction processed through any of our sites.",
      ],
    },
    {
      heading: "Clinical Tools and Resus Runner",
      body: [
        "doctorsmedical.org.pk/tools and resus.doctorsmedical.org.pk provide clinical calculators, risk scores, and workflow-support tools free of charge, for personal, educational, or clinical reference purposes. As set out in our Medical Disclaimer, nothing on either site constitutes medical advice, and all output is provided \"as is,\" without warranty of any kind.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "Our sites' content, design, and underlying calculator/tool logic are owned by or licensed to Doctors' Medical ORG. You may not copy, redistribute, republish, or create derivative works from this content without our prior written permission, except for personal, non-commercial reference.",
      ],
    },
    {
      heading: "Advertising",
      body: [
        "This domain (doctorsmedical.org.pk, including /tools) may display advertisements served by third-party providers, including Google AdSense. Neither clinic.doctorsmedical.org.pk nor resus.doctorsmedical.org.pk display advertising. These providers may use cookies and similar technologies to serve relevant ads, as described in our Privacy Policy. Depending on your location, you will be shown a consent or privacy-choices message before certain uses of cookies and personal data for ad personalisation — under Google's EU User Consent Policy for the EEA, UK, and Switzerland, and under applicable US state privacy laws for covered US residents — and you may change or withdraw that choice at any time via the \"Privacy Choices\" link in the footer.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "Our sites may link to each other and to third-party websites, including clinical guideline sources we cite. We are not responsible for the content, accuracy, or privacy practices of external sites, and linking to them does not imply endorsement.",
      ],
    },
    {
      heading: "Disclaimer of Warranties; Limitation of Liability",
      body: [
        "Our sites and their content are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, to the fullest extent permitted by law.",
        "To the fullest extent permitted by law, Doctors' Medical ORG will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our sites, even if advised of the possibility of such damages.",
      ],
    },
    {
      heading: "Indemnification",
      body: [
        "You agree to indemnify and hold harmless Doctors' Medical ORG, its staff, and contributors from any claim or demand arising from your misuse of our sites or your violation of these terms.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "We may suspend or restrict your access to our sites, without notice, if we reasonably believe you have misused them or violated these terms.",
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
        "We may update these terms from time to time. Continued use of any of our sites after a change constitutes acceptance of the revised terms.",
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
        "This Privacy Policy explains how Doctors' Medical ORG (\"we,\" \"us\") collects, uses, and protects information across doctorsmedical.org.pk (including our clinical calculators at doctorsmedical.org.pk/tools), clinic.doctorsmedical.org.pk (Doctors' Medical Center, our clinic), and resus.doctorsmedical.org.pk (our resuscitation-support tool) — together, \"our sites.\" It also explains your choices, including for visitors in the European Economic Area, the UK, and Switzerland.",
      ],
    },
    {
      heading: "No Online Booking, Payment, or Health Data Collection",
      body: [
        "None of our sites collect appointment, payment, or health information through the website itself — we don't offer online booking or payment processing anywhere. If you contact Doctors' Medical Center by phone, email, or in person, that's an offline interaction with our clinic, handled the same way any healthcare provider handles a phone call or a visit — it is not data processing by this website, and isn't covered by the rest of this policy.",
      ],
    },
    {
      heading: "Information We Collect — Clinical Tools and Resus Runner",
      body: [
        "doctorsmedical.org.pk/tools and resus.doctorsmedical.org.pk work differently: every calculator and guided workflow runs entirely in your browser or on your device. The values you enter — patient vitals, lab results, session logs, or any other clinical data — are never transmitted to, or stored on, our servers. Calculations and session data are kept only in your browser's local storage and are never sent to us.",
        "On both of those sites we use Google Analytics to understand which tools are useful and to fix problems — non-identifying technical information such as browser type, approximate location (country/region level), device type, and pages visited, never anything you type into a calculator or resuscitation log.",
      ],
    },
    {
      heading: "Usage of Data",
      body: [
        "Since none of our sites collect appointment, payment, or health information, the only data we process is the non-identifying analytics described above — used only to understand usage and fix problems.",
      ],
    },
    {
      heading: "Data Security",
      body: [
        "We take data security seriously. Since no health or appointment information is ever collected through any of our sites, there is nothing sensitive of that kind for us to secure — only the non-identifying analytics described above, and standard connection-level information handled by Cloudflare (see below).",
        "All of our sites sit behind Cloudflare, which we use as our content delivery network and security provider. Cloudflare processes standard connection information (IP address, browser type, request timing) for every visitor, on our behalf, to deliver pages quickly and to protect our sites from malicious traffic — see \"Hosting and Content Delivery (Cloudflare)\" below for detail.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "Google Analytics: used across our sites for non-identifying usage analytics.",
        "Google AdSense: used to display advertising on doctorsmedical.org.pk (including /tools) only — see \"Cookies and Advertising\" below.",
        "Cloudflare: our content delivery network, DNS, and security provider for all of our sites — see \"Hosting and Content Delivery (Cloudflare)\" below.",
      ],
    },
    {
      heading: "Hosting and Content Delivery (Cloudflare)",
      body: [
        "All of our sites are served through Cloudflare's network rather than directly from our own servers. As with any content delivery network, this means Cloudflare handles every request to our sites and, in doing so, processes standard connection-level information — IP address, browser and device type, and request timing — to route traffic, cache content for faster loading, and detect and block malicious or abusive traffic (for example, bots and denial-of-service attempts). This processing happens automatically at the network level; we do not receive or store this information ourselves beyond what's described elsewhere in this policy.",
        "We also use Cloudflare's own privacy-preserving traffic analytics on some of our sites, which measure aggregate visits and performance without cookies, without fingerprinting, and without retaining IP addresses in identifiable form. This is separate from, and in addition to, our use of Google Analytics described above.",
        "Cloudflare acts as our data processor for this connection-level information, under its own published security and privacy commitments, and may process it on servers outside your own country as part of its global network.",
      ],
    },
    {
      heading: "Categories of Personal Information We Collect",
      body: [
        "We do not collect identifiers, health information, or payment information through any of our sites — there is no online booking or payment flow anywhere on doctorsmedical.org.pk, clinic.doctorsmedical.org.pk, or resus.doctorsmedical.org.pk.",
        "Internet or network activity: browser type, device type, approximate location (country/region, derived from IP address), pages visited, and interaction with ads — collected across all our sites via Google Analytics and, where applicable, Google AdSense. This is the only category of information we collect.",
        "We collect this information automatically (via cookies and similar technology when you browse any of our sites), never directly from a form or account. We do not use it to build a profile for automated decision-making.",
      ],
    },
    {
      heading: "Cookies and Advertising (Google AdSense)",
      body: [
        "We use cookies to enhance your browsing experience; you can manage cookies through your browser settings at any time, though doing so may affect how our sites and their ads function. Advertising cookies apply only on doctorsmedical.org.pk (including /tools) — clinic.doctorsmedical.org.pk and resus.doctorsmedical.org.pk do not display ads.",
        "Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our sites and other websites. You can learn more about how Google uses this data, and opt out of personalized advertising generally, at adssettings.google.com or www.aboutads.info.",
        "EEA, UK, and Switzerland: we ask for your consent — through an on-screen consent message — before any cookies or personal data are used for ad personalisation, as required under Google's EU User Consent Policy.",
        "US states with comprehensive privacy laws (e.g. California, Colorado, Connecticut, Virginia, and others as they take effect): where required, we present a US privacy choices message before serving personalised ads, and honour opt-out preference signals (including Global Privacy Control) where technically supported by your browser.",
        "In both cases, you can change or withdraw your choice at any time using the \"Privacy Choices\" link in the footer of whichever of our sites you're on, where available.",
      ],
    },
    {
      heading: "Progressive Web App & Offline Storage",
      body: [
        "doctorsmedical.org.pk/tools and resus.doctorsmedical.org.pk can be installed as apps and work offline. To enable this, your browser caches each app's code and static assets locally on your device using standard service worker and cache storage technology. This cached data contains only application code, never any patient information you enter.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "Since we don't collect appointment, payment, or health information, there are no such records for us to retain. Analytics and advertising data is retained by our providers (Google Analytics, Google AdSense) according to their own retention settings. Any message you send us directly (by email) is kept only as long as needed to respond to and resolve your enquiry.",
      ],
    },
    {
      heading: "Your Rights and Choices — EEA, UK, and Switzerland",
      body: [
        "If data-protection law applies to you (for example, the UK/EU GDPR), you may have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion of your information; object to or restrict certain processing; request a copy of your information in a portable format; and withdraw consent you previously gave, at any time, without affecting the lawfulness of processing before withdrawal.",
        "Since we only collect non-identifying analytics and advertising data, most of these rights are exercised through the \"Privacy Choices\" link in our footer, or Google's own tools (Ads Settings, aboutads.info, or your Google Account). For anything else, email us using the contact details below.",
      ],
    },
    {
      heading: "Your Rights and Choices — US State Residents",
      body: [
        "If you are a resident of a US state with a comprehensive consumer privacy law (such as California's CCPA/CPRA, and comparable laws in other states), you may have the right to: know what personal information we have collected about you and why; delete personal information we hold about you; correct inaccurate personal information; opt out of the \"sale\" or \"sharing\" of your personal information (as those terms are broadly defined under some state laws, which can include certain advertising-cookie uses even without a literal sale for money); limit the use of sensitive personal information; and not be discriminated against for exercising any of these rights.",
        "We do not sell personal information for money. Advertising cookies used for ad personalisation may be considered \"sharing\" under some state laws' broad definitions — this is exactly what the \"Privacy Choices\" link in our footer lets you opt out of. We also honour the Global Privacy Control (GPC) signal, where your browser or a browser extension sends it, as a valid opt-out request.",
        "To exercise any of these rights, use the \"Privacy Choices\" link in our footer, or email us using the contact details below. You may also designate an authorized agent to make a request on your behalf; we may ask for proof of that authorization before responding. We will not discriminate against you for exercising any of these rights.",
      ],
    },
    {
      heading: "International Data Transfers",
      body: [
        "Google's advertising and analytics services, and Cloudflare's content delivery and security services, may process data on servers located outside your own country, including in the United States, under each provider's own compliance framework for international data transfers.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "Our sites are intended for use by healthcare professionals and adult members of the public. They are not directed at children under 13, and we do not knowingly collect personal information from children. We do not serve child-directed content and do not enable ad personalisation for any visitor known to be under 13.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. The \"last updated\" date above reflects the most recent revision. Material changes will be reflected by an updated date on this page.",
      ],
    },
  ],
};

export const disclaimer: { title: string; sections: LegalSection[] } = {
  title: "Medical Disclaimer",
  sections: [
    {
      heading: "Our Clinical Services",
      body: [
        "In-person and virtual consultations at Doctors' Medical Center are provided by qualified clinicians as part of an ongoing doctor-patient relationship, subject to the same standards of care as any medical consultation. If you are experiencing a medical emergency, call your local emergency number immediately — do not wait for or rely on contacting the clinic.",
      ],
    },
    {
      heading: "Clinical Tools and Resus Runner — Informational Only",
      body: [
        "The calculators, risk scores, and educational content on doctorsmedical.org.pk/tools, and the timing/prompting/documentation workflow on resus.doctorsmedical.org.pk, are provided for informational and educational purposes only. They are intended to support, not replace, the independent clinical judgment of a qualified healthcare professional.",
        "Nothing on either site constitutes medical advice, diagnosis, or treatment. No calculator result or workflow prompt should be used as the sole basis for a clinical decision, and simply using either site does not establish a doctor-patient relationship between you and Doctors' Medical Center.",
        "Resus Runner specifically is a timing, prompting, and documentation aid for clinicians already trained in the relevant resuscitation algorithm — it never administers anything itself, and it does not replace the judgment of the team leader running a resuscitation. It is currently in beta; report anything that looks wrong via the contact details for that site.",
      ],
    },
    {
      heading: "Intended Audience",
      body: [
        "Most tools on doctorsmedical.org.pk/tools are designed for use by qualified healthcare professionals who can interpret results in the context of a full clinical assessment. Tools marked \"Public\" are written for a general audience but still do not replace consultation with a doctor. Resus Runner is built for use by trained healthcare professionals during an actual resuscitation or in simulation/training, not for use by the public.",
      ],
    },
    {
      heading: "No Warranty of Accuracy",
      body: [
        "While every tool and workflow is built from published, peer-reviewed sources and reviewed against current clinical guidelines, medicine evolves continuously. Guidelines are periodically revised, and we cannot guarantee that every tool reflects the most recent update at every moment. Always cross-check against your local protocols and the most current primary literature before relying on any result.",
        "Calculators and workflows depend on the accuracy of the values you enter. We are not responsible for outcomes arising from incorrect data entry, a device or browser malfunction, or a misinterpretation of a result.",
      ],
    },
    {
      heading: "No Doctor-Patient Relationship (Tools and Resus Runner)",
      body: [
        "Using doctorsmedical.org.pk/tools or resus.doctorsmedical.org.pk, including emailing us with a question about either, does not create a doctor-patient relationship with Doctors' Medical Center or any individual clinician associated with it.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "Doctors' Medical ORG, its staff, and contributors accept no liability for any loss, injury, or damage arising from the use of, or reliance on, information or workflow guidance provided through our sites, to the fullest extent permitted by law.",
      ],
    },
  ],
};
