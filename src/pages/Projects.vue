<script>
    import CardProject from '../components/CardProject.vue';
    import SmallCardProject from '../components/SmallCardProject.vue';
    import { store } from '../store.js';

    export default {
        name: 'Projects',

        components : {
            CardProject,
            SmallCardProject
        },

        data() {
            return {

                images : ['../../public/img/1.jpeg',
                        '../../public/img/2.jpeg',
                        '../../public/img/3.jpeg',
                        '../../public/img/4.jpeg',
                        '../../public/img/5.jpeg',
                        '../../public/img/6.jpeg',
                        ],
                store,
                projects : [
                    {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/1.jpeg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/2.jpeg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/3.jpeg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/4.jpeg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/5.jpeg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                                        {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                                        {
                        title : 'project 1',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1','img-2','img-3'],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 2',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-2',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 3',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-3',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 4',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-4',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'project 5',
                        repo :  'repo-git',
                        type: 'tipologia',
                        technologies : ['tech1','tech2','tech3','tech4','tech5'],
                        cover : '../../public/img/25829.jpg',
                        images : ['img-1,img-2,img-3'],
                        slug : 'project-5',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                ]
            }
        },

        methods : {
            selectProject(project) {  
                this.store.selectedProject = project
            }
        }
    }
</script>

<template>
    

        <div v-if="store.visual == 1" :class="`cont-projects-visual-1`">

            <div v-for="project,index in projects"  class="single-project">  
                <CardProject :project="projects[index]"></CardProject>
            </div>

        </div>

        <div v-else-if="store.visual == 2" class="cont-projects-visual-2 d-flex bg-dark gap-4">
            <div v-for="project,index in projects"  class="col-11 col-md-5 col-xl-3">  
                <SmallCardProject :project="projects[index]"></SmallCardProject>
            </div>
        </div>
</template>

<style scoped lang="scss">

.cont-projects-visual-1{

    height: 100%;
    width: 100%;
    
    margin: auto;

    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

}

.cont-projects-visual-2{

    margin: auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.single-project{

    display: flex;
    align-items: center;
    height: 100%;

    
    div {
        height: 100%;
        width: 100%;

    }
    
    scroll-snap-align: start;
}
</style>