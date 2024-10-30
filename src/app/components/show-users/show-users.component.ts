import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent implements OnInit{

  public username: string="";
  public users$!: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers()
    console.log(this.users$)
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.username).subscribe(resp => {
      alert("Korisnik uspesno obrisan.")
      window.location.reload();
    })
  }

}
