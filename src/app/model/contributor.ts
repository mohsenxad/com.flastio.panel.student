import { Student } from "./student";

export interface Contributor {
    _id?: String,
    student? :Student,
    role? : String,
}