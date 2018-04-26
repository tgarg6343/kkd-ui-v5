import { Component, OnInit } from '@angular/core';
import { SupportService } from '../../services/support.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  providers: [SupportService]
})

export class SupportComponent implements OnInit {

  rForm: FormGroup;
	post:any;   
  issueTitle : String;
  issueDescription : String;
  inputEmail : String;
  screenshotUrl : String;
  issueSubmission;


  constructor(private supportService : SupportService,private fb: FormBuilder,public router: Router) { 
    this.rForm = fb.group({
      issueTitle : [null, Validators.compose([Validators.required])],
      issueDescription : [null, Validators.compose([Validators.required])],
      inputEmail : [null, Validators.compose([Validators.required])],
  })
}

  ngOnInit() {
  
  }

  submitIssue(post) {
    this.issueSubmission = {
      "issueTitle" : post.issueTitle,
      "description" : post.issueDescription,
      "emailId" : post.inputEmail,
      "screenShoturl" : post.screenshotUrl
    }
    console.log(this.issueSubmission)
    this.supportService.addNewIssue(this.issueSubmission).subscribe((res) => {

      alert("Your Isssue has been submitted");

    },(error) => {
      console.log(error)

    })
  }

    // console.log(post.issueTitle);
    // console.log(post.issueDescription);
    // console.log(post.email);
    // console.log(post.screenshotUrl);


    //this.supportService.addIssue()

    }

