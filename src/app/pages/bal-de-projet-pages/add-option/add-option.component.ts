import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OptionDto} from "../../../services/radhouene/models/option-dto";
import {OptionsService} from "../../../services/radhouene/services/options.service";

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit{
  constructor(
    private optionsService: OptionsService
  ) {}
  option!:OptionDto
  bo!:boolean
  addOption(){
    this.option=this.optionForm.value
    this.optionsService.addOption1({body:this.option}).subscribe({
      next :(data)=>{
        console.log(data);
      }
    })
    this.bo=true
  }



  optionForm!:FormGroup
  ngOnInit(): void {
    this.bo=false
    this.optionForm = new FormGroup({
      description: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
    })

  }

}
