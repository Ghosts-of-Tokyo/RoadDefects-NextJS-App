/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { ContractorDTO } from './contractorDTO';
import type { PageInfoDTO } from './pageInfoDTO';

export interface ContractorPagedDTO {
  /** @nullable */
  contractors?: ContractorDTO[] | null;
  /** @nullable */
  models?: ContractorDTO[] | null;
  pagination?: PageInfoDTO;
}
