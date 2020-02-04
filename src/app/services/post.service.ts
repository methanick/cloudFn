import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Form, FormGroup } from '@angular/forms'

@Injectable({
    providedIn: 'root'
})
export class PostService {
    postUrl = 'https://us-central1-cloudfn-6cdb1.cloudfunctions.net/posts/'

    constructor(private http: HttpClient) {}

    getPost() {
        return this.http.get(this.postUrl)
    }
    getPostById(id) {
        return this.http.get(this.postUrl + id)
    }

    addPost(postForm: FormGroup) {
        return this.http.post(this.postUrl, postForm.value)
    }

    deletePost(id) {
        return this.http.delete(this.postUrl + id)
    }

    updatePost(id, postForm) {
        return this.http.put(this.postUrl + id, postForm)
    }
}
