import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../../model/student';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
import { ValidationResult } from 'src/app/model/validationResult';
import { base64ToFile, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component(
	{
		selector: 'add-detail-student',
		templateUrl: './add-detail-student.component.html',
		styleUrls: ['./add-detail-student.component.scss']
	}
)
export class AddDetailStudentComponent implements OnInit
	{

		profilePicture: File;
		student: Student;
		isLoading: Boolean = false;
		isLoadingUploadImage: Boolean = false;
		confirmDicardIsVisible : Boolean = false;
		validationResult: ValidationResult = 
			{
				hasError : false,
				messageList: []
			};
		selectedProfileImage:any;
	

		constructor
		(
			private localStorageService: LocalStorageService,
			private studentService: StudentService,
			private router: Router,
		)
			{ 
				this.student = this.localStorageService.getStudent();
			}

		ngOnInit(): void {
		}

		fileChangeEvent(event: any): void {
			if
			(
				event &&
				event.target && 
				event.target.files &&
				event.target.files.length > 0
			)
				{
					this.selectedProfileImage = event;
					console.log(event);
				}
			
			
		}

		onProfileImageChanged(file:any){

		}

		setGender(gender:String)
			{
				this.student.gender = gender;
			}

		setEthnicity(ethnicity:String)
			{
				this.student.ethnicity = ethnicity;
			}

		setCountryRegion(countryRegion:String)
			{
				this.student.countryRegion = countryRegion;
			}

		setCollegeStatus(collegeStatus: String)
			{
				this.student.collegeStatus = collegeStatus;
			}

		async changeImage()
			{
				this.isLoadingUploadImage = true;
				this.student = await this.studentService.updateDetail(this.student);
				this.localStorageService.setStudent(this.student);
				this.isLoadingUploadImage = false;
			}

		validate(student: Student): ValidationResult
			{
				let result: ValidationResult = {
					hasError:false,
					messageList: []
				};

				if(!student.countryRegion){
					result.hasError = true;
					result.messageList.push("Select Your Location");
				}

				if(!student.postalCode || student.postalCode.toString().trim() == ""){
					result.hasError = true;
					result.messageList.push("Enter Your Postal Code");
				}

				if(!student.gender){
					result.hasError = true;
					result.messageList.push("Select Your Gender");
				}

				if(!student.ethnicity){
					result.hasError = true;
					result.messageList.push("Select Your Ethnicity/Race");
				}

				if(!student.collegeStatus){
					result.hasError = true;
					result.messageList.push("Set Year of College");
				}

				if(
					student.collegeStatus &&
					student.collegeStatus == "Graduated" &&
					!student.graduationMonth
				){
					result.hasError = true;
					result.messageList.push("Select Your Graduation Month");
				}

				if(
					student.collegeStatus &&
					student.collegeStatus == "Graduated" &&
					!student.graduationYear
				){
					result.hasError = true;
					result.messageList.push("Select Your Graduation Year");
				}


				return result;
			}

		hideProfileImageCropper()
			{
				this.selectedProfileImage = undefined;
			}

		async save()
			{
				this.validationResult = this.validate(this.student);
				if(!this.validationResult.hasError)
					{
						this.isLoading = true;
						this.student = await this.studentService.updateDetail(this.student);
						this.localStorageService.setStudent(this.student);
						this.isLoading = false;
						window.location.replace('/student');
					}
			}

		async handleFileInput(file: any) 
			{
				this.isLoadingUploadImage =true;
				let response:any = await this.studentService.getUploadUrl()
				let signedUploadUrl = response.presignedUrl;
				await this.uploadFile(signedUploadUrl, file);
				this.selectedProfileImage = undefined;
				this.student.pictureFileName = response.fileName.toString();
				this.student.pictureFileUrl = signedUploadUrl.split('?')[0];
				this.isLoadingUploadImage =false;
			}


		async uploadFile(uploadPresignUrl: string, imageFile: any)
			{
				const contentType = imageFile.type;
				await this.studentService
					.upload(uploadPresignUrl,imageFile, contentType)
					.then(data=>
						{
							console.log('uploaded');	
						}
					)
					.catch(err => 
						{
							console.log(err);
						}
					)
			}

		skip()
			{
				if(this.isChanged())
					{
						this.confirmDicardIsVisible = true;
					}
				else
					{
						this.goToStudentPanel();
					}
			}

		goToStudentPanel()
			{
				this.router.navigateByUrl('/student/panel')
			}

		hideConfirmDiscardModal()
			{
				this.confirmDicardIsVisible = false;
			}

		isChanged():Boolean
			{
				let result: Boolean = false;
				let localStorageStudent = this.localStorageService.getStudent();
				if
				(
					this.student.pictureFileUrl != localStorageStudent.pictureFileUrl ||
					this.student.countryRegion != localStorageStudent.countryRegion ||
					this.student.postalCode != localStorageStudent.postalCode ||
					this.student.gender != localStorageStudent.gender ||
					this.student.ethnicity != localStorageStudent.ethnicity ||
					this.student.isGenderSharable != localStorageStudent.isGenderSharable ||
					this.student.isEthnicitySharable != localStorageStudent.isEthnicitySharable ||
					this.student.collegeStatus != localStorageStudent.collegeStatus ||
					this.student.graduationMonth != localStorageStudent.graduationMonth ||
					this.student.graduationYear != localStorageStudent.graduationYear
				)
					{
						result = true;
					}

				return result;

			}

		removePicture()
			{
				this.student.pictureFileName = undefined;
				this.student.pictureFileUrl = undefined;
			}

		selectedGraduationDateMonth(issuedDateMonth: Number)
			{
				this.student.graduationMonth = issuedDateMonth;
			}

		selectedGraduationDateYear(issuedDateYear: Number)
			{
				this.student.graduationYear  = issuedDateYear;
			}

	}
