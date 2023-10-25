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
                        color: 'orange'
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
                        color: 'aqua'
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

                images : ['img/1.jpeg',
                        'img/2.jpeg',
                        'img/3.jpeg',
                        'img/4.jpeg',
                        'img/5.jpeg',
                        'img/6.jpeg',
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
                                name : 'CSS',
                                color: 'blue'
                            },                    
                            {
                                name : 'Sass',
                                color: 'red'
                            },
                        ],
                        cover : '/img/1.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Max Coach',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'Back-end',
                            color: 'green'
                        },
                        technologies : [
                            {
                                name : 'Sass',
                                color: 'red'
                            },
                            {
                                name : 'PHP',
                                color: 'green'
                            },
                            {
                                name : 'JS',
                                color: 'yellow'
                            },
                            {
                                name : 'MySQL',
                                color: 'pink'
                            },
                        ],
                        cover : '/img/2.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'Max-coach',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Spotify',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'yellow'
                        },
                        technologies : [
                            {
                                name : 'Sass',
                                color: 'red'
                            },
                            {
                                name : 'PHP',
                                color: 'green'
                            },
                            {
                                name : 'MySQL',
                                color: 'pink'
                            },
                        ],
                        cover : '/img/3.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Campo minato',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'purple'
                        },
                        technologies : [
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
                        ],
                        cover : '/img/4.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Dc Comics',
                        repo :  'repo-netflix-tech',
                        type: {
                            name: 'FrontEnd',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'JS',
                                color: 'yellow'
                            },
                            {
                                name : 'HTML',
                                color: 'aqua'
                            },                    
                            {
                                name : 'CSS',
                                color: 'blue'
                            },     
                        ],
                        cover : '/img/5.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },                    
                    {
                        title : 'Whatsapp',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'Back-end',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: 'aqua'
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
                        ],
                        cover : '/img/6.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
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
                                name : 'Sass',
                                color: 'red'
                            },
                            {
                                name : 'JS',
                                color: 'yellow'
                            },
                            {
                                name : 'HTML',
                                color: 'aqua'
                            },                    
                            {
                                name : 'CSS',
                                color: 'blue'
                            },                    
                        ],
                        cover : '/img/1.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
                                'https://picsum.photos/200/300'
                                ],
                        slug : 'project-1',
                        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, praesentium qui. Assumenda deleniti perferendis consequuntur nobis ratione quibusdam aspernatur? Illo impedit libero voluptates! Earum facere omnis laboriosam iste aspernatur. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati cupiditate quas, veniam qui dignissimos. At totam tempore ipsa consectetur sint, provident accusamus sequi eius unde veniam laboriosam aspernatur porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident praesentium ratione sequi fugiat eaque porro dicta voluptate ullam, officia, modi unde enim. Mollitia, fugiat facere. Aliquid expedita deserunt autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium beatae quisquam asperiores nam in! Consectetur veritatis rerum facilis. Sint odio laudantium natus blanditiis nulla adipisci cum quos earum ullam molestiae.'
                    },
                    {
                        title : 'Max Coach',
                        repo :  'repo-MaxCoach-tech',
                        type: {
                            name: 'Back-end',
                            color: 'blue'
                        },
                        technologies : [
                            {
                                name : 'HTML',
                                color: 'aqua'
                            },                    
                            {
                                name : 'CSS',
                                color: 'blue'
                            },                    
                            {
                                name : 'Sass',
                                color: 'red'
                            },

                        ],
                        cover : '/img/2.jpeg',
                        images : ['/img/1.jpeg',
                                '/img/2.jpeg',
                                '/img/3.jpeg',
                                '/img/4.jpeg',
                                '/img/5.jpeg',
                                '/img/6.jpeg',
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
            },

            pageControl(name) {
                if (this.$route.name == name) {
                    return true
                } else {
                    return false
                }
            },

            nextVisual() {
                if(this.store.visual == 2) {
                    this.store.visual = 1
                } else {
                    this.store.visual += 1
                }
            },

            changeVisual1() {
                console.log('ciao')
                this.store.visual = 1
            },

            changeVisual2() {
                this.store.visual = 2
            },
        },
    }
</script>

<template>
    <div class="projects">

        <div v-if="store.visual == 1" class="visual-1">
            <div v-for="project,index in projects"  class="card-project">  
                <CardProject :project="projects[index]"></CardProject>
            </div>
        </div>

    
        <div v-else-if="store.visual == 2" class="visual-2 d-flex gap-4" :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'" > 
            <div v-for="project,index in projects" class="small-card-project col-11 col-lg-5 col-xl-5 col-xxl-3" @mouseover="active=index" @mouseleave="active=null" :style="index == active || active==null ? { opacity: 1}: {opacity : 0.5}">  
                <SmallCardProject :project="projects[index]" :index='index'></SmallCardProject>
            </div>
        </div>


        <div id="visual-switcher" v-if="pageControl('projects')" class="btn-group dropstart d-flex " :class="store.checked ? 'bg-light' : 'bg-dark' , { 'top-0': store.isNavbarHidden }">
            <button v-if="store.language == 'italian'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">Vista</button>
            <button v-if="store.language == 'german'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">Ansicht</button>
            <button v-if="store.language == 'english'" v-on:click="nextVisual" class="btn btn-sinistro" :class="store.checked ? 'text-dark' : 'text-light'" type="button">View</button>

            <button type="button" class="btn btn-destro dropdown-toggle dropdown-toggle-split" :class="store.checked ? 'text-dark' : 'text-light'" data-bs-theme="dark" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu" :class="store.checked ? 'bg-light' : 'bg-dark'">
                <li>
                    <a v-if="store.language == 'italian'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual1">Singolo full screen</a>
                    <a v-if="store.language == 'german'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual1">Vollbild-Einzeldarstellung</a>
                    <a v-if="store.language == 'english'" class="dropdown-item" :class="store.checked ? '' : 'text-light'" v-on:click="changeVisual1">Full-screen single</a>
                </li>
                <li>
                    <a v-if="store.language == 'italian'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual2">Griglia</a>
                    <a v-if="store.language == 'german'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual2">Gitter</a>
                    <a v-if="store.language == 'english'" class="dropdown-item" :class="store.checked ? '' : 'text-light'"  v-on:click="changeVisual2">Grid</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped lang="scss">



#visual-switcher {

    position: fixed;
    width: 25%;
    top: 60px;
    right: 50%;

    transform: translateX(50%);

    border: 1px gray solid;
    border-radius:  0 0 50px 50px;
    border-top: 0;

    opacity: 0.5;

    transition: 0.5s;


    &:hover {
        opacity: 1;
    }


    .btn-sinistro {
        border-radius:  0 0 0 50px ;


    }

    .btn-destro {
        border-radius:  0 0 50px 0;
    }

    li {
        cursor: pointer;

        a {

            transition: 0.5s;

             &:hover {

                background-color: black;
                color: white;
                opacity: 1;

                text-shadow: #e0e0e0 1px 1px 0;
            }

        }
    }
}

.visual-1{

    width: 100%;
    
    margin: auto;

    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    height: calc(100vh);


    .card-project{

        display: flex;
        align-items: center;
        height: 100%;

        scroll-snap-align: start;

        position: relative;

        .visual-switcher {

            position: absolute;
            top: 50%;
            right: 50%;
            }

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

    padding-top: 120px;
    height: 100%;

    overflow: hidden;


    .small-card-project {

        transition: 1s;

        &:hover {
            transform: scale(105%);
        }
    }
}
</style>