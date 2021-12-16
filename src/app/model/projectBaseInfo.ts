import { Company } from "./company";
import { Course } from "./course";
import { Skill } from "./skill";


export interface ProjectBaseInfo {
    summeryFileUrl?:String,
    projectType? : String,
    name?:String,
    relatedInternship?:String,
    description?:String,
    skillList?:Skill[],
    yearCompleted?: Number,
    course?: Course,
    company?: Company,
}