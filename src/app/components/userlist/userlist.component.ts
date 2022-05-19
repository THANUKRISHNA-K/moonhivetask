import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}
  userData: any[] = [];
  userForm: any;
  validForm() {
    this.userForm = this.fb.group({
      name: [null],
      email: [''],
      task: [''],
      hour: [''],
    });
  }
  ngOnInit(): void {
    this.validForm();
    this.userData = [
      {
        name: 'Ajay',
        email: 'ajay@gmail.com',
        task: 'Dynamic form',
        hour: '2',
      },
      {
        name: 'Arun',
        email: 'arun@gmail.com',
        task: 'Reactive form',
        hour: '5',
      },
      { name: 'Ashwin', email: 'ash@gmail.com', task: 'API integ', hour: '2' },
      { name: 'Ashok', email: 'ashok@gmail.com', task: 'Chart js', hour: '4' },
      { name: 'Akash', email: 'akash@gmail.com', task: 'Routing', hour: '3' },
      { name: 'Vijay', email: 'vj@gmail.com', task: 'Auth guard', hour: '2' },
    ];
    localStorage.setItem('user-Data', JSON.stringify(this.userData));
    this.userData = JSON.parse(localStorage.getItem('user-Data'));
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  viewForm(temp: TemplateRef<any>) {
    this.dialog.open(temp);
  }
  save() {
    let payload = {
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value,
      task: this.userForm.controls.task.value,
      hour: this.userForm.controls.hour.value,
    };
    this.userData.push(payload);
    localStorage.setItem('user-Data', JSON.stringify(this.userData));
  }
}
