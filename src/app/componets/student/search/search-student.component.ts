import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  @Input() selectedStudent: Student;
  @Output() onStudentSelected = new EventEmitter<Student>();
  @Output() onInviteStudentWithEmailSelected = new EventEmitter<String>();

  studentKeyWord: String;
  studentList: Student[];
  isLoading: Boolean = false;

  keywordMinCharLengthToSearch: Number = 3;

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.studentList &&
      this.studentKeyWord &&
      this.studentKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.studentKeyWord, this.studentList)
    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(studentKeyWord: String,studentList:Student[]):Boolean{
    let result: Boolean = false;
    let foundStudentWithEmail = studentList.find((currentStudent:Student) => {
      if(currentStudent.email.trim().toLowerCase() == studentKeyWord.trim().toLowerCase()){
        return currentStudent
      }
    })

    if(foundStudentWithEmail){
      result = true;
    }

    return result;
  }

  onKeyup(event) {
    console.log(event);
    if(
      event.code == "Enter" &&
      this.isAddable()
    ){
      this.inviteStudent();
    }
  }

  changed(value){
    console.log(value);
    
    if(
      value && 
      value.length >= this.keywordMinCharLengthToSearch
    ){
      this.studentKeyWord = value;
      this.search();
    }else{
      this.studentList = [];
    }
  }

  async search():Promise<void>{
    this.isLoading = true;
    this.studentList = await this.studentService.search(this.studentKeyWord);
    this.isLoading = false;
  }

  selected(student:Student){
    this.selectedStudent = student;
    this.onStudentSelected.emit(student);
    this.studentKeyWord = '';
    this.studentList = [];
  }

  inviteStudent(){
    this.onInviteStudentWithEmailSelected.emit(this.studentKeyWord);
  }

  remove(){
    console.log('here to remove');
    
    this.selectedStudent = undefined;
    this.onStudentSelected.emit(this.selectedStudent);
  }

}
