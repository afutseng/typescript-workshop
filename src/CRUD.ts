/*
/// <reference path="jquery.dts">
*/

interface Post {
    id: number,
    title: string;
    content: string;
}

var post: Post = {
    id: 1,
    title: 'title~',
    content: 'blahblah'
}


// class ServiceBase<T> 
class PostService {
    baseUrl: string;

// constructor(private urlPrefix: string)
    constructor() {
        // this.baseUrl = `/api/${this.urlPrefix}`;
        this.baseUrl = '/api/Post';

    }

    GetList(): jQueryXHR {
        return $.get(this.baseUrl);
    }

    Get(id: number) {
        return $.get(`${this.baseUrl}/${id}`);
    }

    Create(post: Post) {
        return $.post(this.baseUrl, post);
    }

    Update(post: Post) {
        return $.ajax({
            url: `${this.baseUrl}/${post.id}`,
            method: 'PUT',
            data: post
        })
        
    }

    delete(id: number) {
        return $.ajax({
            url: `${this.baseUrl}/${post.id}`,
            method: 'DELETE'
        })
    }
}



class DemoPostService extends ServiceBase<Post>
{
    constructor() {
        super('Posts');
    }
}


