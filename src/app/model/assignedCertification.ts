import { Certification } from "./certification";

export interface AssignedCertification {
    _id?: String,
    certification?: Certification,
    issuedDateMonth?: Number,
    issuedDateYear?: Number,
    organization?:String,
    fileName?: String,
    fileUrl?: String,
}