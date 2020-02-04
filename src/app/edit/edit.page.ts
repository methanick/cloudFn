import {
    Component,
    OnInit,
    SimpleChanges,
    OnChanges,
    OnDestroy
} from '@angular/core'
import { NavController } from '@ionic/angular'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../services/post.service'
import { Subscription } from 'rxjs'
import { Post } from '../models/post'
import { AlertController } from '@ionic/angular'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit, OnChanges, OnDestroy {
    childKey: string
    postForm: FormGroup
    sub: Subscription
    post: Post
    id: string

    constructor(
        private navCtrl: NavController,
        public formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private postService: PostService,
        public alertController: AlertController
    ) {}

    ngOnChanges(changes: SimpleChanges) {}
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('childKey')
        console.log(this.id)
        this.getPostById(this.id)
        this.postForm = this.formBuilder.group({
            userId: ['', Validators.required],
            title: ['', Validators.required],
            body: ['', Validators.required]
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    goBack() {
        this.navCtrl.navigateBack('/home')
    }

    getPostById(id) {
        this.sub = this.postService.getPostById(id).subscribe((post: any) => {
            this.postForm.setValue({
                userId: post.userId,
                title: post.title,
                body: post.body
            })
            console.log('postById: ', post)
        })
    }

    updatePost() {
        this.sub = this.postService
            .updatePost(this.id, this.postForm.value)
            .subscribe(() => {
                console.log('post success')
                this.navCtrl.navigateBack('/home')
            })
    }

    async deletePost() {
        // this.sub = this.postService.deletePost(this.id).subscribe(() =>{
        //   console.log('delete success')
        // })
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Do you want to delete this post?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: blah => {
                        console.log('Confirm Cancel: blah')
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.sub = this.postService.deletePost(this.id).subscribe((data) =>{
                          console.log('delete success', data)
                          this.navCtrl.navigateBack('/home')
                        })
                    }
                }
            ]
        })

        await alert.present()
    }
}
