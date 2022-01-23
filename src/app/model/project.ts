import { AssignedCertification } from "./assignedCertification";
import { Company } from "./company";
import { Contributor } from "./contributor";
import { Course } from "./course";
import { LinkUrl } from "./linkUrl";
import { ProjectBaseInfo } from "./projectBaseInfo";
import { Skill } from "./skill";
import { Student } from "./student";
import { SupportingFile } from "./supportingFile";

export interface Project {
    _id?: String,
    baseInfo:ProjectBaseInfo
    summeryFileUrl?:String,
    projectType? : String,
    name?:String,
    relatedInternship?:String,
    description?:String,
    skillList?:Skill[],
    yearCompleted?: Number,
    course?: Course,
    company?: Company,
    isPublished?:Boolean,
    linkUrlList?: LinkUrl[],
    supportingFileList? :SupportingFile[],
    contributorList?: Contributor[],
    assignedCertification?: AssignedCertification,
}