import { AssignedCertification } from "./assignedCertification";
import { Contributor } from "./contributor";
import { LinkUrl } from "./linkUrl";
import { ProjectBaseInfo } from "./projectBaseInfo";
import { Student } from "./student";
import { SupportingFile } from "./supportingFile";

export interface Project {
    _id?: String,
    baseInfo:ProjectBaseInfo,
    role?: String,
    isPublished?:Boolean,
    creator?: Student,
    isInvitedToContribution?:Boolean,
    linkUrlList?: LinkUrl[],
    supportingFileList? :SupportingFile[],
    contributorList?: Contributor[],
    assignedCertification?: AssignedCertification,
}
