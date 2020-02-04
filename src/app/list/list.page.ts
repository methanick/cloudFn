import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public postForm: FormGroup;
  postUrl = 'https://us-central1-cloudfn-6cdb1.cloudfunctions.net/posts'
  sub: Subscription

  constructor(
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public postService: PostService,
    private navCtrl: NavController) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }

    this.postForm = this.formBuilder.group({
      userId: [''],
      title: [''],
      body: ['']
    });
  }


  addPost() {
    this.sub = this.postService.addPost(this.postForm).subscribe( () =>{
      console.log('post success')
      this.navCtrl.navigateBack('/home')
    }
      
    )
  }
}
