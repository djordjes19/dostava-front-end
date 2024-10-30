import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements  OnInit{

  public username: string = '';
  public password: string = '';

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
      
  }

  login(){
      this.userService.login(this.username, this.password).subscribe((resp:any)=>{

        if(resp.username == ""){
          alert("Pogresno korisnicko ime ili lozinka")
        }
        else{

          if(resp.iduserType!= 2){

            sessionStorage.setItem("imeKorisnika", resp.ime)
            sessionStorage.setItem("prezimeKorisnika", resp.prezime)
            sessionStorage.setItem("token", resp.username)
          }else{

            sessionStorage.setItem("admin", resp.username);
            
          }
          console.log(sessionStorage)
          this.router.navigate(['/restaurants']).then(()=>{
            window.location.reload();
          });
        }
      })
      
  }
}
