import { Component,inject } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';

  constructor(private userService: UserService) {}
userForm : FormGroup = new FormGroup(
  {
    username: new FormControl(''),
    password: new FormControl('')
  }
)

router = inject(Router);

onLogin(){
  this.userService.updateUsername(this.username);
  const formValue = this.userForm.value;
  if(formValue.username=='buyer' && formValue.password=='112233')
  {
    this.router.navigateByUrl('dashboard')
  }
  else if(formValue.username=='seller' && formValue.password=='112233')
  {
    this.router.navigateByUrl('createproperty')
  }
  else
  {
    alert('Wrong Credentials')
  }
}
}
