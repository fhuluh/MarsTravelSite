import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MaldivesServiceService } from 'src/app/shared/maldives-service.service';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-maldives',
  templateUrl: './maldives.component.html',
  styleUrls: ['./maldives.component.css']
})
export class MaldivesComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  
  progressValue = 0;
  progressColor = 'primary';

  progressTimer: number;

  // This will be used to force stop (if an error occurs, or the user stops loading)
  stopProgress = false;

  maldiveslist;
  
  constructor(public service: ContactServiceService,
              public maldives: MaldivesServiceService,
              private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.refreshList();
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      this.toastr.success("Form Submitted!");
      this.myform.reset();
    }
  }




reloading()
{
  location.reload();  
}

  refreshList(){
    this.maldives.GetmaldivesPrices().then(res => this.maldiveslist = res);    
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_pbiqmq6', 'template_ld2cvgn', e.target as HTMLFormElement, 'user_HBtVc74M9uD7kZ8NBsk2J')
      .then((result: EmailJSResponseStatus) => { 
        
        this.toastr.success("Your Enquiry Has been sent. We will get in touch with you.", 'Successfully Sent!'); 
        console.log(result.text);      
       
      this.showSuccess();

      }, (error) => {
        this.toastr.success(error.text, 'Error!'); 
        console.log(error.text);
      });
  }
  

  showSuccess()
  {
    // this.toastr.error('fhulu','Hanyahanya');
    if(this.toastr.success)
    { 
  
    }
  }

}


