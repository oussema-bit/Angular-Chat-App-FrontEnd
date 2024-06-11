import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {User} from "../../../services/User/models/user";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {OptionsService} from "../../../services/radhouene/services/options.service";
import {OptionDto} from "../../../services/radhouene/models/option-dto";
import {Option} from "../../../services/radhouene/models/option";
import {CategoryProjects} from "../../../services/radhouene/models/category-projects";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements  OnInit{
  projectForm!:FormGroup
  niveauOptions = ['PREMIERE', 'DEUXIEME', 'TROIXIEME', 'QUATRIEME', 'CINQUEME'];
  categoryList : CategoryProjectsDto[] = [];
  user:User = {}
  constructor(
    private apiService : ProjectsService,
    private categoryService : CategoryService,
    private router: Router,
    private jwtHelper:HelperService,
    private activatedRoute : ActivatedRoute,
    private optionsService:OptionsService,
    private  http :HttpClient
  ) {
  }
  optionList:OptionDto[]=[]
  fillOptionSpeciality(){
    this.optionsService.getAllOptions1().subscribe({
      next : (data) =>{
        this.optionList=data;
        console.log(this.optionList);
      }
    })
  }
  projectId!:number
  ngOnInit(): void {
    this.fillOptionSpeciality()
    this.projectId=this.activatedRoute.snapshot.params["id"]
    this.categoryService.getAllCategories().subscribe(
      { next :(data)=>{
        this.categoryList=data
      }
      })

    this.projectForm= new FormGroup({
      category: new FormControl("", [Validators.required]),
      name: new FormControl('', [Validators.required]),
      groupName: new FormControl('', [Validators.required]),
      classe: new FormControl(''), // Optional field
      coach: new FormControl(''), // Optional field
      date: new FormControl(''), // Optional field (consider appropriate input type)
      niveau: new FormControl('', [Validators.required]),
      nominated: new FormControl(false), // Set default value for boolean
      numberOfVotes: new FormControl(0), // Set default value for number
      optionSpeciality: new FormControl("",[Validators.required]), // Allow for null value
      scolarYear: new FormControl(''), // Optional field
      votingpool: new FormControl(false), // Set default value for boolean
      winner: new FormControl(false),
      imageUrl: new FormControl(""),
      videoUrl: new FormControl("")
    })
    this.getTheCurrentProject()
  }
  getTheCurrentProject(){
    this.apiService.getProjectById({id:this.projectId}).subscribe({
      next : (data)=>{
        this.project=data;
        this.projectForm.patchValue(this.project)
      }
    })
  }

  project!:ProjectsDto
  elOption!:Option
  elCategory!:CategoryProjects
  bo:boolean=false
  getTheOptionAndCategory(){
    var categoryid=this.projectForm.get("category")?.value
    this.categoryService.getCategoryById({id : categoryid}).subscribe({
      next : (data)=>{
        this.elCategory=data
      }
    })
    var optionid=this.projectForm.get("optionSpeciality")?.value
    this.optionsService.getOptionById1({id :optionid}).subscribe({
      next : (data) =>{
        this.elOption=data
      }
    })
    this.bo=true
  }
  onSubmit() {
    this.getTheOptionAndCategory()
    if (!this.bo){
      console.log("wait")
    }else {


    console.log("this is the option id " , this.projectForm.get("optionSpeciality")?.value)
    console.log("this is the option id " , this.projectForm.get("category")?.value)
    this.project=this.projectForm.value

    this.project.optionSpeciality=this.elOption
    this.project.category=this.elCategory
    console.log(this.project.category);
    this.project.userId=this.jwtHelper.userId
    console.log(this.jwtHelper.userId);
    this.apiService.updateProject({
      projectId: this.projectId,
      optionId: this.projectForm.get("optionSpeciality")?.value,
      categoryId:this.projectForm.get("category")?.value,
      body: this.project
    }).subscribe(
      {next : (data) =>{
        console.log(this.project)
      }});
      this.uploadimage()
      Swal.fire('New Event Upcoming!','','success').then(res=>window.location.reload())

      this.router.navigate(["/contest"])
  }
  }











  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(event.target.files[0])
  }
  uploadimage(){
    this.uploadEventImage().subscribe()
  }
  uploadEventImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    return this.http.post(`http://localhost:8083/projects/add-image-to-project/${this.projectId}`, formData);

  }
  selectedFile!: File;
}
