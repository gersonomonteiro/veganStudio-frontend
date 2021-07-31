import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContestService } from '../_services/contest/contest.service';
import { NotificacaoService } from '../_services/notification/notification.service';

@Component({
  selector: 'app-veganstudio',
  templateUrl: './veganstudio.component.html',
  styleUrls: ['./veganstudio.component.css'],
})
export class VeganstudioComponent implements OnInit {
  data: {};
  contests: any;
  Form: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private contestService: ContestService,
    private notificacaoService: NotificacaoService
  ) {
    this.Form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      recipe_name: ['', Validators.required],
      ingredients: ['', Validators.required],
      method: ['', Validators.required],
      region: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllContest();
  }

  getAllContest() {
    this.contestService.index().subscribe((res) => {
      this.contests = res.contest;
    });
  }

  onSubmit(): void {
    this.contestService.store(this.Form.value).subscribe(
      (contests) => {
        this.contests.push(this.Form.value);
        this.ToasterSuccess(contests.message);
        this.Form.reset();
      },
      (err) => {
        console.log(err);
        this.ToasterError(err.error.message, 'Error', '');
      }
    );
  }

  delete(id, index) {
    console.log(id);
    this.contestService.remove(id).subscribe(
      (res) => {
        this.contests.splice(index, 1);
        this.ToasterSuccess(res.message);
      },
      (err) => {
        console.log(err);
        this.ToasterError(err.message, 'Error', '');
      }
    );
  }

  ToasterSuccess(message) {
    this.notificacaoService.showSuccess(message);
  }
  ToasterError(message, title, toastConfig) {
    this.notificacaoService.showError(message, title, toastConfig);
  }
}
