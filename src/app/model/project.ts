import { AssignedCertification } from "./assignedCertification";
import { Contributor } from "./contributor";
import { LinkUrl } from "./linkUrl";
import { ProjectBaseInfo } from "./projectBaseInfo";
import { SupportingFile } from "./supportingFile";

export interface Project {
    _id?: String,
    baseInfo:ProjectBaseInfo,
    role?: String,
    isPublished?:Boolean,
    linkUrlList?: LinkUrl[],
    supportingFileList? :SupportingFile[],
    contributorList?: Contributor[],
    assignedCertification?: AssignedCertification,
}