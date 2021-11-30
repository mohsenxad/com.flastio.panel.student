import { Contributor } from "./contributor";
import { Course } from "./course";
import { LinkUrl } from "./linkUrl";
import { Skill } from "./skill";
import { SupportingFile } from "./supportingFile";

export interface Project {
    _id?: String,
    summeryFileUrl?:String,
    projectType? : String,
    name?:String,
    relatedInternship?:String,
    description?:Number,
    skillList?:Skill[],
    yearCompleted?: Number,
    course?: Course,
    isPublished?:Boolean,
    linkUrlList?: LinkUrl[],
    supportingFileList? :SupportingFile[],
    contributorList?: Contributor[],
}