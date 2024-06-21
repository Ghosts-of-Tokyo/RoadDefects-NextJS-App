/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { DefectStatus } from './defectStatus';
import type { FixationDefectDTO } from './fixationDefectDTO';
import type { FixationWorkDTO } from './fixationWorkDTO';
import type { RoadInspectorDTO } from './roadInspectorDTO';
import type { StatusTask } from './statusTask';
import type { TaskDTO } from './taskDTO';

export interface FixationWorkTaskDTO {
  createdDateTime: string;
  defectFixation: FixationDefectDTO;
  defectStatus: DefectStatus;
  executor: RoadInspectorDTO;
  fixationWork: FixationWorkDTO;
  id: string;
  prevTask: TaskDTO;
  taskStatus: StatusTask;
}
