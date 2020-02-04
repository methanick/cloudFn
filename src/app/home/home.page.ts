import { Component, OnInit, OnDestroy, SimpleChanges, OnChanges } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post'
import { PostService } from '../services/post.service'
import { Subscription } from 'rxjs'
import { NavController } from '@ionic/angular'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy, OnChanges {

    post: any
    posts: any[]
    sub: Subscription

    constructor(
      private http: HttpClient,
      private postService: PostService,
      private navCtrl: NavController) {}

    ionViewWillEnter(){
      console.log("view will enter home")
      this.getPost()
    }

    ngOnChanges(changes: SimpleChanges): void {
      
      
    }

    ngOnInit() {
        this.getPost()
    }

    ngOnDestroy(): void {
     this.sub.unsubscribe()
    }

    getPost() {
        this.sub = this.postService.getPost().subscribe(
          (posts: any) => {
            this.posts = posts
          }
        )
    }

    goToEdit(id){
      this.navCtrl.navigateForward(['/edit', {
        childKey: id
      }])
    }
}
