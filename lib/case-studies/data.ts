import { CaseStudy } from "@/types";
import { musashiCaseStudy } from "./case-studies/musashi";
import { vstCaseStudy } from "./case-studies/vst";
import { divyasreeCaseStudy } from "./case-studies/divyasree";
import { hindustanCaseStudy } from "./case-studies/hindustan";
import { kinfolkCaseStudy } from "./case-studies/kinfolk";
import caseStudyAssetMapping from "../../scripts/migrateImagesToR2.mapping.json";

type MappingEntry = { localPath: string; url: string };

const caseStudyAssetUrlByLocalPath = new Map<string, string>(
  (caseStudyAssetMapping as MappingEntry[])
    .filter((entry) => entry.localPath.startsWith("/case-studies/"))
    .map((entry) => [entry.localPath, entry.url])
);

function normalizeCaseStudyAsset(path: string): string {
  if (!path?.startsWith("/case-studies/")) return path;
  const mapped = caseStudyAssetUrlByLocalPath.get(path);
  if (mapped) return mapped;
  const withoutLeadingSlash = path.replace(/^\//, "");
  const key = withoutLeadingSlash.replace(/\s+/g, "-");
  return `https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/${key}`;
}

function normalizeCaseStudy(study: CaseStudy): CaseStudy {
  return {
    ...study,
    image: normalizeCaseStudyAsset(study.image),
    banner: normalizeCaseStudyAsset(study.banner),
    pdfUrl: normalizeCaseStudyAsset(study.pdfUrl),
    imageGrid1: study.imageGrid1?.map(normalizeCaseStudyAsset),
    imageGridOptional: study.imageGridOptional?.map(normalizeCaseStudyAsset),
    imageGrid2: study.imageGrid2?.map((item) => ({
      ...item,
      img: normalizeCaseStudyAsset(item.img),
      icon: normalizeCaseStudyAsset(item.icon),
    })),
  };
}

export const caseStudies: CaseStudy[] = [
  musashiCaseStudy,
  vstCaseStudy,
  divyasreeCaseStudy,
  hindustanCaseStudy,
  kinfolkCaseStudy,
].map(normalizeCaseStudy);
