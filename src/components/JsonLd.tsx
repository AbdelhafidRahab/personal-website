export const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdelhafid Rahab",
    url: "https://abdelhafidrahab.net",
    sameAs: ["https://github.com/AbdelhafidRahab", "https://www.linkedin.com/in/abdelhafidrahab"],
    jobTitle: "Full Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    description: "Full Stack Engineer & AI Enthusiast, expert in creating digital solutions.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
