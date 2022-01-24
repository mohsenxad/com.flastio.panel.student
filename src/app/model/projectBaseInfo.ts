import { Company } from "./company";
import { Course } from "./course";
import { Skill } from "./skill";
import { SummaryFile } from "./summaryFile";


export interface ProjectBaseInfo {
    summaryFile?:SummaryFile,
    projectType? : String,
    name?:String,
    relatedInternship?:String,
    description?:String,
    skillList?:Skill[],
    yearCompleted?: Number,
    course?: Course,
    company?: Company,
}
