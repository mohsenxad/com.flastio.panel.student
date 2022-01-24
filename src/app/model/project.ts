import { AssignedCertification } from "./assignedCertification";
import { Company } from "./company";
import { Contributor } from "./contributor";
import { Course } from "./course";
import { LinkUrl } from "./linkUrl";
import { ProjectBaseInfo } from "./projectBaseInfo";
import { Skill } from "./skill";
import { SupportingFile } from "./supportingFile";

export interface Project {
    _id?: String,
    baseInfo:ProjectBaseInfo
    isPublished?:Boolean,
    linkUrlList?: LinkUrl[],
    supportingFileList? :SupportingFile[],
    contributorList?: Contributor[],
    assignedCertification?: AssignedCertification,
}