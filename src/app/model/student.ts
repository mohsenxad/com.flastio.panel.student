import { AssignedCertification } from "./assignedCertification";
import { Major } from "./major";
import { Project } from "./project";
import { Recommendation } from "./recommendation";
import { School } from "./school";
import { Skill } from "./skill";
import { WorkStyle } from "./workStyle";

export interface Student {
    _id?: String,
    firstName?:String,
    lastName?:String,
    countryMobileNumberCode?:Number,
    mobileNumber?:String,
    school?: School,
    major?: Major,
    graduationMonth?:Number,
    graduationYear?:Number,
    projectList?: Project[],
    assignedCertificationList?: AssignedCertification[],
    skillList?:Skill[],
    recommendationList? : Recommendation[],
    countryRegion?: String,
    postalCode?: Number,
    gender?: String,
    isGenderSharable?: Boolean,
    ethnicity?: String,
    isEthnicitySharable?: Boolean,
    collegeStatus? : String,
    transcriptFileName? : String,
    transcriptFileUrl? : String,
    resumeFileName?: String,
    resumeFileUrl?: String,
    pictureFileName?: String,
    pictureFileUrl?: String,
    workStyleList?: WorkStyle[],
    isRequestedResumeFeedback?:Boolean,
    requestedResumeFeedbackDate?: Date,

}