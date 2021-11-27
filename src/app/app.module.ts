import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './componets/user/singup/singup.component';
import { FormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './componets/user/confirm-email/confirm-email.component';
import { LoginComponent } from './componets/user/login/login.component';
import { StudentSignupComponent } from './componets/student/signup/student-signup.component';
import { AddProjectComponent } from './componets/project/add/add-project.component';
import { AddCertificationComponent } from './componets/certification/add/add-certification.component';
import { SelectCertificationComponent } from './componets/certification/select/select-certification.component';
import { AssignCertifictionComponent } from './componets/certification/assign/assign-certifiction.component';
import { SearchCertificationComponent } from './componets/certification/search/search-certification.component';
import { StudentPanelComponent } from './componets/student/panel/student-panel.component';
import { AddSchoolComponent } from './componets/school/add/add-school.component';
import { AddMajorComponent } from './componets/major/add/add-major.component';
import { SearchMajorComponent } from './componets/major/search/search-major.component';
import { SearchSchoolComponent } from './componets/school/search/search-school.component';
import { ProjectPanelComponent } from './componets/project/panel/project-panel.component';
import { EmptyProjectComponent } from './componets/project/empty/empty-project.component';
import { CertificationPanelComponent } from './componets/certification/panel/certification-panel.component';
import { EmptyCertificationComponent } from './componets/certification/empty/empty-certification.component';
import { SkillPanelComponent } from './componets/skill/panel/skill-panel.component';
import { EmptySkillComponent } from './componets/skill/empty/empty-skill.component';
import { EmptyRecommendationComponent } from './componets/recommendation/empty/empty-recommendation.component';
import { RecommendationPanelComponent } from './componets/recommendation/panel/recommendation-panel.component';
import { YearSelectComponent } from './componets/share/year-select/year-select.component';
import { AddSkillComponent } from './componets/skill/add/add-skill.component';
import { SearchSkillComponent } from './componets/skill/search/search-skill.component';
import { AddCourseComponent } from './componets/course/add/add-course.component';
import { SearchCourseComponent } from './componets/course/search/search-course.component';
import { SelectCourseComponent } from './componets/course/select/select-course.component';
import { SelectTypeProjectComponent } from './componets/project/select-type/select-type-project.component';
import { AddPagingProjectComponent } from './componets/project/add-paging/add-paging-project.component';
import { RequestRecommendationComponent } from './componets/recommendation/request/request-recommendation.component';
import { PostalCodeInputComponent } from './componets/share/postal-code-input/postal-code-input.component';
import { GenderSelectComponent } from './componets/share/gender-select/gender-select.component';
import { EthnicitySelectComponent } from './componets/share/ethnicity-select/ethnicity-select.component';
import { AddDetailStudentComponent } from './componets/student/add-detail/add-detail-student.component';
import { AssignLinkProjectComponent } from './componets/project/assign-link/assign-link-project.component';
import { ProjectListComponent } from './componets/project/list/project-list.component';
import { ProjectListItemComponent } from './componets/project/list-item/project-list-item.component';
import { CertificationListComponent } from './componets/certification/list/certification-list.component';
import { CertificationListItemComponent } from './componets/certification/list-item/certification-list-item.component';
import { RecommendationListItemComponent } from './componets/recommendation/list-item/recommendation-list-item.component';
import { RecommendationListComponent } from './componets/recommendation/list/recommendation-list.component';
import { SkillListComponent } from './componets/skill/list/skill-list.component';
import { SkillListItemComponent } from './componets/skill/list-item/skill-list-item.component';
import { ProjectActionPanelComponent } from './componets/project/action-panel/project-action-panel.component';
import { StudentInfoComponent } from './componets/student/info/student-info.component';
import { LinkUrlPanelComponent } from './componets/urlLink/panel/link-url-panel.component';
import { LinkUrlListComponent } from './componets/urlLink/list/link-url-list.component';
import { LinkUrlListItemComponent } from './componets/urlLink/list-item/link-url-list-item.component';
import { CountryRegionSelectComponent } from './componets/share/country-region-select/country-region-select.component';
import { CollegeStatusSelectComponent } from './componets/share/college-status-select/college-status-select.component';
import { AnalyticsSummaryComponent } from './componets/analytics/summary/analytics-summary.component';
import { StudentBannerComponent } from './componets/student/banner/student-banner.component';
import { TranscriptPanelComponent } from './componets/transcript/panel/transcript-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumePanelComponent } from './componets/resume/panel/resume-panel.component';
import { LoadingComponent } from './componets/share/loading/loading.component';





@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    ConfirmEmailComponent,
    LoginComponent,
    StudentSignupComponent,
    AddProjectComponent,
    AddCertificationComponent,
    SelectCertificationComponent,
    AssignCertifictionComponent,
    SearchCertificationComponent,
    StudentPanelComponent,
    AddSchoolComponent,
    AddMajorComponent,
    SearchMajorComponent,
    SearchSchoolComponent,
    ProjectPanelComponent,
    EmptyProjectComponent,
    CertificationPanelComponent,
    EmptyCertificationComponent,
    SkillPanelComponent,
    EmptySkillComponent,
    EmptyRecommendationComponent,
    RecommendationPanelComponent,
    YearSelectComponent,
    AddSkillComponent,
    SearchSkillComponent,
    AddCourseComponent,
    SearchCourseComponent,
    SelectCourseComponent,
    SelectTypeProjectComponent,
    AddPagingProjectComponent,
    RequestRecommendationComponent,
    PostalCodeInputComponent,
    GenderSelectComponent,
    EthnicitySelectComponent,
    AddDetailStudentComponent,
    AssignLinkProjectComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    CertificationListComponent,
    CertificationListItemComponent,
    RecommendationListItemComponent,
    RecommendationListComponent,
    SkillListComponent,
    SkillListItemComponent,
    ProjectActionPanelComponent,
    StudentInfoComponent,
    LinkUrlPanelComponent,
    LinkUrlListComponent,
    LinkUrlListItemComponent,
    CountryRegionSelectComponent,
    CollegeStatusSelectComponent,
    AnalyticsSummaryComponent,
    StudentBannerComponent,
    TranscriptPanelComponent,
    ResumePanelComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
