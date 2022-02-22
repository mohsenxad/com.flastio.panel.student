import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


import { StudentSignupComponent } from './componets/student/signup/student-signup.component';
import { AddProjectComponent } from './componets/project/add/add-project.component';
import { AssignCertifictionComponent } from './componets/certification/assign/assign-certifiction.component';
import { SearchCertificationComponent } from './componets/certification/search/search-certification.component';
import { StudentPanelComponent } from './componets/student/panel/student-panel.component';
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
import { SearchSkillComponent } from './componets/skill/search/search-skill.component';
import { SearchCourseComponent } from './componets/course/search/search-course.component';
import { SelectTypeProjectComponent } from './componets/project/select-type/select-type-project.component';
import { AddPagingProjectComponent } from './componets/project/add-paging/add-paging-project.component';
import { RequestRecommendationComponent } from './componets/recommendation/request/request-recommendation.component';
import { PostalCodeInputComponent } from './componets/share/postal-code-input/postal-code-input.component';
import { GenderSelectComponent } from './componets/share/gender-select/gender-select.component';
import { EthnicitySelectComponent } from './componets/share/ethnicity-select/ethnicity-select.component';
import { AddDetailStudentComponent } from './componets/student/add-detail/add-detail-student.component';
import { AssignLinkProjectComponent } from './componets/urlLink/assign/assign-link-project.component';
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
import { AssignSupportingFileProjectComponent } from './componets/supportingFile/assign/assign-supporting-file-project.component';
import { SupportingFilePanelComponent } from './componets/supportingFile/panel/supporting-file-panel.component';
import { SupportingFileListComponent } from './componets/supportingFile/list/supporting-file-list.component';
import { SupportingFileListItemComponent } from './componets/supportingFile/list-item/supporting-file-list-item.component';
import { WorkStylePanelComponent } from './componets/workStyle/panel/work-style-panel.component';
import { EmptyWorkStyleComponent } from './componets/workStyle/empty/empty-work-style.component';
import { PortfolioStrengthComponent } from './componets/student/portfolio-strength/portfolio-strength.component';
import { WorkStyleGraphComponent } from './componets/workStyle/graph/work-style-graph.component';
import { ConfirmDeleteComponent } from './componets/share/confirm-delete/confirm-delete.component';
import { StudentActionPanelComponent } from './componets/student/action-panel/student-action-panel.component';
import { StudentModalBannerComponent } from './componets/student/modal-banner/student-modal-banner.component';
import { AssignContributorComponent } from './componets/contributor/assign/assign-contributor.component';
import { ContributorPanelComponent } from './componets/contributor/panel/contributor-panel.component';
import { ContributorListComponent } from './componets/contributor/list/contributor-list.component';
import { ContributorListItemComponent } from './componets/contributor/list-item/contributor-list-item.component';
import { StudentHeaderComponent } from './componets/student/header/student-header.component';
import { SchoolStatusComponent } from './componets/school/status/school-status.component';
import { StudentPlaneComponent } from './componets/student/plane/student-plane.component';
import { MonthSelectComponent } from './componets/share/month-select/month-select.component';
import { YearSelect2Component } from './componets/share/year-select2/year-select2.component';

import { ShareProfileByEmailComponent } from './componets/shareProfile/by-email/share-profile-by-email.component';
import { ShareProfileByLinkComponent } from './componets/shareProfile/by-link/share-profile-by-link.component';
import { ShareProfileByQRCodeComponent } from './componets/shareProfile/by-qrcode/share-profile-by-qrcode.component';
import { ShareProfilePanelComponent } from './componets/shareProfile/panel/share-profile-panel.component';
import { MobileNumberInputComponent } from './componets/share/mobile-number-input/mobile-number-input.component';

import { ShareProfileSelectComponent } from './componets/shareProfile/select/share-profile-select.component';
import { ProjectStrengthComponent } from './componets/project/strength/project-strength.component';
import { WorkStyleTestComponent } from './componets/workStyle/test/work-style-test.component';
import { CertificationFileUploaderComponent } from './componets/certification/file-uploader/certification-file-uploader.component';
import { CertificationActionPanelComponent } from './componets/certification/action-panel/certification-action-panel.component';
import { ProjectBaseInfoComponent } from './componets/project/base-info/project-base-info.component';
import { ProjectFileUploaderComponent } from './componets/project/file-uploader/project-file-uploader.component';
import { MonthLabelComponent } from './componets/share/month-label/month-label.component';
import { EditProjectComponent } from './componets/project/edit/edit-project.component';
import { EditCertificationComponent } from './componets/certification/edit/edit-certification.component';
import { WorkStyleTestPanelComponent } from './componets/workStyle/test/panel/work-style-test-panel.component';

import { WorkStyleTestListItemComponent } from './componets/workStyle/test/list-item/work-style-test-list-item.component';
import { WorkStyleTestListComponent } from './componets/workStyle/test/list/work-style-test-list.component';
import { CompanySearchComponent } from './componets/company/search/company-search.component';
import { SkillsetListItemComponent } from './componets/skillSet/list-item/skillset-list-item.component';
import { SkillsetListComponent } from './componets/skillSet/list/skillset-list.component';
import { SkillsetPanelComponent } from './componets/skillSet/panel/skillset-panel.component';
import { EmptySkillsetComponent } from './componets/skillSet/empty/empty-skillset.component';
import { ShareModule } from './share/share.module';
import { AuthModule } from './auth/auth.module';
import { ConfirmDiscardComponent } from './componets/share/confirm-discard/confirm-discard.component';
import { SearchStudentComponent } from './componets/student/search/search-student.component';
import { InviteStudentComponent } from './componets/student/invite/invite-student.component';
import { UploadingComponent } from './componets/share/uploading/uploading.component';
import { UpgradePlaneComponent } from './componets/plane/upgrade/upgrade-plane.component';
import { PlaneCalculatorComponent } from './componets/plane/calculator/plane-calculator.component';
import { FileViwerComponent } from './componets/share/file-viwer/file-viwer.component';
import { SelectAssignedCertificationComponent } from './componets/assignedCertification/select/select-assigned-certification.component';
import { SelectOrAddAssignedCertificationComponent } from './componets/assignedCertification/select-or-add/select-or-add-assigned-certification.component';
import { StudentHomeComponent } from './componets/student/home/student-home.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentSignupComponent,
    AddProjectComponent,
    AssignCertifictionComponent,
    SearchCertificationComponent,
    StudentPanelComponent,
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
    SearchSkillComponent,
    SearchCourseComponent,
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
    AssignSupportingFileProjectComponent,
    SupportingFilePanelComponent,
    SupportingFileListComponent,
    SupportingFileListItemComponent,
    WorkStylePanelComponent,
    EmptyWorkStyleComponent,
    PortfolioStrengthComponent,
    WorkStyleGraphComponent,
    ConfirmDeleteComponent,
    StudentActionPanelComponent,
    StudentModalBannerComponent,
    AssignContributorComponent,
    ContributorPanelComponent,
    ContributorListComponent,
    ContributorListItemComponent,
    StudentHeaderComponent,
    SchoolStatusComponent,
    StudentPlaneComponent,
    MonthSelectComponent,
    YearSelect2Component,
    ShareProfileByLinkComponent,
    ShareProfileByQRCodeComponent,
    ShareProfileByEmailComponent,
    ShareProfilePanelComponent,
    MobileNumberInputComponent,
    ShareProfileSelectComponent,
    ProjectStrengthComponent,
    WorkStyleTestComponent,
    CertificationFileUploaderComponent,
    CertificationActionPanelComponent,
    ProjectBaseInfoComponent,
    ProjectFileUploaderComponent,
    MonthLabelComponent,
    EditProjectComponent,
    EditCertificationComponent,
    WorkStyleTestPanelComponent,
    WorkStyleTestListComponent,
    WorkStyleTestListItemComponent,
    CompanySearchComponent,
    SkillsetPanelComponent,
    SkillsetListComponent,
    SkillsetListItemComponent,
    EmptySkillsetComponent,
    ConfirmDiscardComponent,
    SearchStudentComponent,
    InviteStudentComponent,
    UploadingComponent,
    UpgradePlaneComponent,
    PlaneCalculatorComponent,
    FileViwerComponent,
    SelectAssignedCertificationComponent,
    SelectOrAddAssignedCertificationComponent,
    StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxQRCodeModule,
    ShareModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
