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
                store,

                active : null,

                arrayTypes :[      
                    {
                        name : 'Maerketing',
                        color: 'blue'
                    }, 
                    {
                        name : 'Maerketing',
                        color: 'yellow'
                    },  
                    {
                        name : 'Maerketing',
                        color: 'red'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'purple'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'green'
                    },                      
                    {
                        name : 'Maerketing',
                        color: 'blue'
                    },   
                ],

                arrayTechnologies : [
                    {
                        name : 'HTML',
                        color: 'sand'
                    },                    
                    {
                        name : 'CSS',
                        color: 'blue'
                    },                    
                    {
                        name : 'Sass',
                        color: 'red'
                    },
                    {
                        name : 'JS',
                        color: 'yellow'
                    },
                    {
                        name : 'PHP',
                        color: 'green'
                    },
                    {
                        name : 'MySQL',
                        color: 'pink'
                    },
                    {
                        name : 'VsCode',
                        color: 'orange'
                    },
                    {
                        name : 'Figma',
                        color: 'grey'
                    },
                    {
                        name : 'Postman',
                        color: 'purple'
                    },

                ],

                images : ['../../public/img/1.jpeg',
                        '../../public/img/2.jpeg',
                        '../../public/img/3.jpeg',
                        '../../public/img/4.jpeg',
                        '../../public/img/5.jpeg',
                        '../../public/img/6.jpeg',
                        'https://picsum.photos/200/300'
                        ],

                projects : [
                    {
                        title : 'Netflix ',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/1.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Max Coach',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'tipologia',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/2.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'Max-coach',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Netflix',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/1.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Netflix',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/1.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Netflix',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/1.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },                    
                    {
                        title : 'Max Coach',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'tipologia',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/2.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'Max-coach',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Netflix',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/1.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Max Coach',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'tipologia',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name: 'tech1',
                                color: 'blue'
                            },
                            {
                                name: 'tech2',
                                color: 'red'
                            },
                            {
                                name: 'tech3',
                                color: 'green'
                            },
                            {
                                name: 'tech4',
                                color: 'orange'
                            },
                            {
                                name: 'tech5',
                                color: 'yellow'
                            },
                        ],
                        cover : '../../public/img/2.jpeg',
                        images : ['../../public/img/1.jpeg',
                                '../../public/img/2.jpeg',
                                '../../public/img/3.jpeg',
                                '../../public/img/4.jpeg',
                                '../../public/img/5.jpeg',
                                '../../public/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'Max-coach',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    
                ]
            }
        },

        methods : {
            selectProject(project) {  
                this.store.selectedProject = project
            }
        },

    }
</script>

<template>
    <div v-if="store.visual == 1" class="visual-1">

        <div v-for="project,index in projects"  class="card-project">  
            <CardProject :project="projects[index]"></CardProject>
        </div>

    </div>

    <div v-else-if="store.visual == 2" class="visual-2 d-flex bg-dark gap-4" > 

        <div v-for="project,index in projects"  class="col-11 col-lg-5 col-xl-5 col-xxl-3 small-card-project" @mouseover="active=index" @mouseleave="active=null" :style="index == active || active==null ? { opacity: 1}: {opacity : 0.5}">  
            <SmallCardProject :project="projects[index]"></SmallCardProject>
        </div>

    </div>
</template>

<style scoped lang="scss">



.visual-1{

    height: 100%;
    width: 100%;
    
    margin: auto;

    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    .card-project{

        display: flex;
        align-items: center;
        height: 100%;

        scroll-snap-align: start;

        div {
            height: 100%;
            width: 100%;
        }
    }
}

.visual-2{

    margin: auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .small-card-project {
        transition: 1s;

        &:hover {
            transform: scale(105%);
        }
    }
}
</style>