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

function mapCaseStudyAsset(path: string): string {
  if (!path?.startsWith("/case-studies/")) return path;
  return caseStudyAssetUrlByLocalPath.get(path) || path;
}

function normalizeCaseStudy(study: CaseStudy): CaseStudy {
  return {
    ...study,
    image: mapCaseStudyAsset(study.image),
    banner: mapCaseStudyAsset(study.banner),
    pdfUrl: mapCaseStudyAsset(study.pdfUrl),
    imageGrid1: study.imageGrid1?.map(mapCaseStudyAsset),
    imageGridOptional: study.imageGridOptional?.map(mapCaseStudyAsset),
    imageGrid2: study.imageGrid2?.map((item) => ({
      ...item,
      img: mapCaseStudyAsset(item.img),
      icon: mapCaseStudyAsset(item.icon),
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
