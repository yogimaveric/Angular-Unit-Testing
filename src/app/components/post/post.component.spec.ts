import { Post } from "../../models/Posts"
import { PostComponent } from "./post.component";

describe('Post Component',() =>{
    let POSTS:Post[];
    let component: PostComponent;
    let mockpostcomponent:any;
    beforeEach(() =>{
        POSTS = [{
            id:1,
            body:'Body 1',
            title:'Title 1'
        },
        {
            id:2,
            body:'Body 2',
            title:'Title 2'
        },
        {
            id:3,
            body:'Body 3',
            title:'Title 3'
        }];
        mockpostcomponent = jasmine.createSpyObj(['getPosts','delete']);
        component = new PostComponent(mockpostcomponent);
    });

    describe('deleteMethod',() =>{
        it('Should delete post from Posts',() =>{
            POSTS = POSTS.filter(p =>p.id !=POSTS[2].id);
            expect(POSTS.length).toEqual(2);
        })
    })

    describe('PostMethhod',() =>{
        it('should add post to POSTS', () =>{
            let post={
                id:4,
                body:'Body 4',
                title:'Title 4'
            }
            POSTS.push(post);
            expect(POSTS.length).toEqual(4)
        })
    })
})