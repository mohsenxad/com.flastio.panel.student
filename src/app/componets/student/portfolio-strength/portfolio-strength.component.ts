import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../../model/student';

@Component({
  selector: 'portfolio-strength',
  templateUrl: './portfolio-strength.component.html',
  styleUrls: ['./portfolio-strength.component.scss']
})
export class PortfolioStrengthComponent implements OnInit, OnChanges {
  @Input() student : Student;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.calculate();
  }

  itemList: any[]=[
    {
      title: 'Personal Information',
      isCompeleted: false,
      url: '/student/editDetail'
    },
    {
      title: 'Project',
      isCompeleted:false,
      url: '/student/panel#secProject'
    },
    {
      title: 'Resume',
      isCompeleted:false,
      url: '/student/panel#secResumeAndTranscript'
    },
    // {
    //   title: 'Transcript',
    //   isCompeleted:false,
    //   url: '#'
    // },
    {
      title: 'Certifications',
      isCompeleted:false,
      url: 'secCertification'
    },
    {
      title: 'Recommendations',
      isCompeleted:false,
      url: '#'
    },
    // {
    //   title: 'Work Style',
    //   isCompeleted:false,
    //   url: '#'
    // }
  ];

  strengthValue:Number;
  strengthMaxValue:Number = this.itemList.length;
  strengthTitle:String;

  ngOnInit(): void {
  }

  

  isCompeletePesronalInforamtion(student : Student):Boolean{
    let result:Boolean = true;

    if(
      !student.pictureFileUrl ||
      !student.countryRegion ||
      !student.postalCode ||
      !student.gender ||
      !student.ethnicity ||
      !student.collegeStatus 
    ){
      result = false;
    }

    if(
      student.collegeStatus &&
      (
        !student.graduationMonth ||
        !student.graduationYear
      )
    ){
      result = false;
    }

    //student.isGenderSharable
    //student.isEthnicitySharable

    return result;
  }


  setItemListStatus(){
    this.itemList = [
      {
        title: 'Personal Information',
        isCompeleted: this.isCompeletePesronalInforamtion(this.student),
        url: '/student/editDetail'
      },
      {
        title: 'Project',
        isCompeleted:(this.student.projectList && this.student.projectList.length > 0),
        url: '/student/panel#secProject'
      },
      {
        title: 'Resume',
        isCompeleted: (this.student.resume),
        url: '/student/panel#secResumeAndTranscript'
      },
      // {
      //   title: 'Transcript',
      //   isCompeleted:(this.student.transcript),
      //   url: '#'
      // },
      {
        title: 'Certifications',
        isCompeleted:(this.student.assignedCertificationList && this.student.assignedCertificationList.length > 0),
        url: '/student/panel#secCertification'
      },
      {
        title: 'Recommendations',
        isCompeleted:(this.student.recommendationList && this.student.recommendationList.length > 0),
        url: '/student/panel#secRecommendation'
      },
      // {
      //   title: 'Work Style',
      //   isCompeleted:false,
      //   url: '#'
      // }
    ];
    
  }
 
  getCount(total : number, item: any ): number {
    if(item.isCompeleted){
      return total +1; 
    }else{
      return total;
    }
    
  }

  calculate(): Number{
    this.setItemListStatus();
    let result : number = 0;
    result = this.itemList.reduce(this.getCount,0)
    return result;
  }

  close(){
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          detail.removeAttribute("open");
        });
      });
    });
  }

}
