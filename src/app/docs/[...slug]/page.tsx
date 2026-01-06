import { notFound } from "next/navigation";
import { findNavItem } from "@/lib/docs-navigation";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { IntroductionPage } from "./content/introduction";
import { InstallationPage } from "./content/installation";
import { CreateScaledStylesPage } from "./content/create-scaled-styles";
import { SFunctionPage } from "./content/s-function";
import { DesignTokensPage } from "./content/design-tokens";
import { ResponsiveFunctionPage } from "./content/responsive-function";
import { ResponsiveSwitchPage } from "./content/responsive-switch";
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
      ) : slugPath === "auto-scale/s-function" ? (
        <SFunctionPage />
      ) : slugPath === "auto-scale/design-tokens" ? (
        <DesignTokensPage />
      ) : slugPath === "responsive/responsive-function" ? (
        <ResponsiveFunctionPage />
      ) : slugPath === "responsive-switch/component" ? (
        <ResponsiveSwitchPage />
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
