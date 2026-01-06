import { notFound } from "next/navigation";
import { findNavItem } from "@/lib/docs-navigation";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { IntroductionPage } from "./content/introduction";
import { InstallationPage } from "./content/installation";
import { CreateScaledStylesPage } from "./content/create-scaled-styles";
import { PlaceholderPage } from "./content/placeholder";

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  const navResult = findNavItem(slugPath);
  if (!navResult) {
    notFound();
  }

  const { section, item } = navResult;

  return (
    <div>
      <Breadcrumb category={section.title} page={item.title} />

      {slugPath === "introduction" ? (
        <IntroductionPage />
      ) : slugPath === "installation" ? (
        <InstallationPage />
      ) : slugPath === "auto-scale/create-scaled-styles" ? (
        <CreateScaledStylesPage />
      ) : (
        <PlaceholderPage title={item.title} />
      )}
    </div>
  );
}

export function generateStaticParams() {
  return [
    // Getting Started
    { slug: ["introduction"] },
    { slug: ["installation"] },
    // Auto Scale
    { slug: ["auto-scale", "create-scaled-styles"] },
    { slug: ["auto-scale", "s-function"] },
    { slug: ["auto-scale", "design-tokens"] },
    // Responsive
    { slug: ["responsive", "responsive-function"] },
    { slug: ["responsive", "use-device-type"] },
    { slug: ["responsive", "use-breakpoint"] },
    // Responsive Switch
    { slug: ["responsive-switch", "component"] },
    { slug: ["responsive-switch", "layout-patterns"] },
  ];
}
