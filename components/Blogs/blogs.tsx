import Image from "next/image";
import type { BlogData, BlogTableComponentKey } from "@/lib/blog";
import { BangaloreSEOPackagesTable, MumbaiSEOPackagesTable, SmallPackageSEOTable } from "./Table";

// Import all individual blog data files
import { howMuchDoesSEOCostInBangalore } from "@/lib/blog/data/HowMuchDoesSEOCostinBangalore";// Centralized blog data aggregation - all blogs are registered here
import { howToCreateWhiteLabelSEOReportsAndAutomateThem } from "@/lib/blog/data/howToCreateWhiteLabelSEOReportsAndAutomateThem";
import { sosoactiveSeoNews } from "@/lib/blog/data/sosoactiveSeoNews";
import { howImportantIsBrandingForSEO } from "@/lib/blog/data/howImportantIsBrandingForSEO";
import { whichEcommercePlatformIsBestForSEO } from "@/lib/blog/data/whichEcommercePlatformIsBestForSEO";
import { whatDoYouNeedToBalanceWhenDoingSEO } from "@/lib/blog/data/whatDoYouNeedToBalanceWhenDoingSEO";
import { howMuchDoesSEOCostInAustralia } from "@/lib/blog/data/howMuchDoesSEOCostInAustralia";
import { whyWhiteLabelSEOReportingIsImportantForAgencies } from "@/lib/blog/data/whyWhiteLabelSEOReportingIsImportantForAgencies";
import { bestSeoServicesForStartupsInBangalore } from "@/lib/blog/data/bestSeoServicesForStartupsInBangalore";
import { seoForStartups } from "@/lib/blog/data/seoForStartups";
import { howMuchDoesSEOCostInManchester } from "@/lib/blog/data/howMuchDoesSEOCostInManchester";
import { howMuchDoesSEOCostInBirmingham } from "@/lib/blog/data/howMuchDoesSEOCostInBirmingham";
import { howMuchDoesSEOCostInNewYork } from "@/lib/blog/data/howMuchDoesSEOCostInNewYork";
import { howMuchDoesSEOCostInLondon } from "@/lib/blog/data/howMuchDoesSEOCostInLondon";
import { howMuchDoesSEOCostInHouston } from "@/lib/blog/data/howMuchDoesSEOCostInHouston";
import { howMuchDoesSEOCostInSeattle } from "@/lib/blog/data/howMuchDoesSEOCostInSeattle";
import { howMuchDoesSEOCostInBoston } from "@/lib/blog/data/howMuchDoesSEOCostInBoston";
import { howMuchDoesSEOCostInSanFrancisco } from "@/lib/blog/data/howMuchDoesSEOCostInSanFrancisco";
import { howToUseScreamingFrogToImproveOnPageSEO } from "@/lib/blog/data/howToUseScreamingFrogToImproveOnPageSEO";
import { seoForEstatePlanningLawyers } from "@/lib/blog/data/seoForEstatePlanningLawyers";
import { bestToolsForSEOTopicalMap } from "@/lib/blog/data/bestToolsForSEOTopicalMap";
import { enterpriseSEOAudits } from "@/lib/blog/data/enterpriseSEOAudits";
import { bestPracticesForSEOEnhancingAIVisibility } from "@/lib/blog/data/bestPracticesForSEOEnhancingAIVisibility";
import { whySEOForPersonalInjuryLawyersMatters } from "@/lib/blog/data/whySEOForPersonalInjuryLawyersMatters";
import { howToCheckIfYourSEOIsWorking } from "@/lib/blog/data/howToCheckIfYourSEOIsWorking";
import { howDoesBenStaceDoSemanticSEO } from "@/lib/blog/data/howDoesBenStaceDoSemanticSEO";
import { howAISeoToolsHelpScaleAgileSolutionsFaster } from "@/lib/blog/data/howAISeoToolsHelpScaleAgileSolutionsFaster";
import { howToRankNationallyInSEO } from "@/lib/blog/data/howToRankNationallyInSEO";
import { seoForAddictionTreatmentCenters } from "@/lib/blog/data/seoForAddictionTreatmentCenters";
import { threeSixtyInternationalSEOService } from "@/lib/blog/data/threeSixtyInternationalSEOService";
import { bestFuneralHomeSEOCompany } from "@/lib/blog/data/bestFuneralHomeSEOCompany";
import { seoForMSPsBestPractices } from "@/lib/blog/data/seoForMSPsBestPractices";
import { fashionSEOAgency } from "@/lib/blog/data/fashionSEOAgency";
import {  howMuchDoesSEOCostInHyderabad } from "@/lib/blog/data/HowMuchDoesSEOCostinHyderabad"
import { howMuchDoesSEOCostInDelhiNCR } from "@/lib/blog/data/HowMuchDoesSEOCostinDelhiNCR";
import { howMuchDoesSEOCostInMumbai } from "@/lib/blog/data/HowMuchDoesSEOCostinMumbai";
import { seoForAutoBodyShops } from "@/lib/blog/data/seoForAutoBodyShops";
import { commonSEOMistakesSmallBusinesses } from "@/lib/blog/data/commonSEOMistakesSmallBusinesses";
import { localSEOForTradies } from "@/lib/blog/data/localSEOForTradies";
import { howCelebritySEOServicesBuildOnlineAuthority } from "@/lib/blog/data/howCelebritySEOServicesBuildOnlineAuthority";
import { seoForHomeInspectors } from "@/lib/blog/data/seoForHomeInspectors";
import { bestFintechSEOAgency } from "@/lib/blog/data/bestFintechSEOAgency";
import { seoFriendlyCMS } from "@/lib/blog/data/seoFriendlyCMS";
import { localSEORoadsideAssistance } from "@/lib/blog/data/localSEORoadsideAssistance";
import { seoForImmigrationAttorneys } from "@/lib/blog/data/seoForImmigrationAttorneys";
import { sevenReasonsInvestInSEO } from "@/lib/blog/data/sevenReasonsInvestInSEO";
import { localSEOForHotels } from "@/lib/blog/data/localSEOForHotels";
import { seoStrategyFunnel } from "@/lib/blog/data/seoStrategyFunnel";
import { technicalSEOContentSEOAudits } from "@/lib/blog/data/technicalSEOContentSEOAudits";
import { wordPressSEOOxfordshire } from "@/lib/blog/data/wordPressSEOOxfordshire";
import { travelSEOCompany } from "@/lib/blog/data/travelSEOCompany";
import { localSEOGeneralContractors } from "@/lib/blog/data/localSEOGeneralContractors";

// Centralized blog data aggregation - all blogs are registered here
export const allBlogsData: BlogData[] = [
  bestSeoServicesForStartupsInBangalore,
  seoForStartups,
  howMuchDoesSEOCostInManchester,
  howMuchDoesSEOCostInBirmingham,
  howMuchDoesSEOCostInNewYork,
  howMuchDoesSEOCostInLondon,
  howMuchDoesSEOCostInHouston,
  howMuchDoesSEOCostInSeattle,
  howMuchDoesSEOCostInBoston,
  howMuchDoesSEOCostInSanFrancisco,
  howMuchDoesSEOCostInBangalore,
  howToCreateWhiteLabelSEOReportsAndAutomateThem,
  sosoactiveSeoNews,
  howImportantIsBrandingForSEO,
  whichEcommercePlatformIsBestForSEO,
  whatDoYouNeedToBalanceWhenDoingSEO,
  howMuchDoesSEOCostInAustralia,
  whyWhiteLabelSEOReportingIsImportantForAgencies,
  howToUseScreamingFrogToImproveOnPageSEO,
  seoForEstatePlanningLawyers,
  bestToolsForSEOTopicalMap,
  enterpriseSEOAudits,
  bestPracticesForSEOEnhancingAIVisibility,
  whySEOForPersonalInjuryLawyersMatters,
  howToCheckIfYourSEOIsWorking,
  howDoesBenStaceDoSemanticSEO,
  howAISeoToolsHelpScaleAgileSolutionsFaster,
  howToRankNationallyInSEO,
  seoForAddictionTreatmentCenters,
  threeSixtyInternationalSEOService,
  bestFuneralHomeSEOCompany,
  seoForMSPsBestPractices,
  fashionSEOAgency,
  howMuchDoesSEOCostInHyderabad,
  howMuchDoesSEOCostInDelhiNCR,
  howMuchDoesSEOCostInMumbai,
  seoForAutoBodyShops,
  commonSEOMistakesSmallBusinesses,
  localSEOForTradies,
  howCelebritySEOServicesBuildOnlineAuthority,
  seoForHomeInspectors,
  bestFintechSEOAgency,
  seoFriendlyCMS,
  localSEORoadsideAssistance,
  seoForImmigrationAttorneys,
  sevenReasonsInvestInSEO,
  localSEOForHotels,
  seoStrategyFunnel,
  technicalSEOContentSEOAudits,
  wordPressSEOOxfordshire,
  travelSEOCompany,
  localSEOGeneralContractors,
];

/** Section shape expected by StickyScroll (with React nodes) */
export interface BlogSection {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface Blog {
  slug: string;
  heading: string;
  coverImage: string;
  sections: BlogSection[];
}

const TABLE_COMPONENTS: Record<BlogTableComponentKey, React.ReactNode> = {
  MumbaiSEOPackagesTable: <MumbaiSEOPackagesTable />,
  SmallPackageSEOTable: <SmallPackageSEOTable />,
  BangaloreSEOPackagesTable: <BangaloreSEOPackagesTable />
};

function hydrateBlog(data: BlogData): Blog {
  return {
    slug: data.slug,
    heading: data.heading,
    coverImage: data.coverImage,
    sections: data.sections.map((section, index) => ({
      title: index === 0 ? `${data.heading} | Geekonomy` : section.title,
      description: section.description,
      image: (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          className="object-cover rounded-xl"
          priority={index === 0}
        />
      ),
      ...(section.tableComponent && {
        table: TABLE_COMPONENTS[section.tableComponent],
      }),
    })),
  };
}

/** All blogs with hydrated sections (Image + Table components). Used by /blog and /blog/[slug]. */
export const BLOGS: Blog[] = allBlogsData.map(hydrateBlog);
