import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute){}

  user:User = new User();
  ngOnInit(): void {  
  }

  register(form: { invalid: any; }) {
    console.log(1)
    console.log(this.user.userType.name)
    if (form.invalid) {
      alert("Invalid form")
    }
    else {
      this.userService.register(this.user).subscribe(resp => {
        if (resp == false) {
          alert("Vec postoji neko sa tim username-om")
        }
        else {
          console.log(3)
          alert("Uspesno ste se registrovali");
          this.router.navigate(['/login'])
        }

      })
    }

  }
}
