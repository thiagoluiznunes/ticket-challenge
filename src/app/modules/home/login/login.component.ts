import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  title: string;
  user = new User()

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [this.user.email, [Validators.required]],
      password: [this.user.password, [Validators.required]],
    })
  }

  onSubmit() {
    if (!this.userForm.invalid) {
      this.dialogRef.close(this.userForm.value);
      this.userForm.reset();
    } else {

    }
  }

  close() {
    this.dialogRef.close();
  }
}
