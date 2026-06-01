const FeatureCard = {
    props: ['title', 'description'],

    template: `
        <div class="flex items-center justify-center text-center text-[#111] my-6 w-80">
            <div class="rounded-xl bg-linear-to-r from-[#b26eff] to-[#54d5b8] p-[6px]">
                <div class="rounded-[10px] bg-white p-4">
                    <h3 class="text-xl">
                        {{ title }}
                    </h3>

                    <p>
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    `
}

const HeroSection = {
    props: ['title', 'img_src'],

    template: `
        <div class="flex flex-col md:flex-row
            items-center justify-between
            gap-10 p-6 bg-[#222]
            md:p-16
        ">
            <div class="flex items-center justify-center  py-40 md:bg-[#222] py-40">
                <h1 class="text-5xl lg:text-6xl text-center">
                {{ title }}
                </h1>
            </div>
            
            <div class="">
                <img class="w-full max-w-4xl h-full rounded-xl" :src="img_src">
            </div>
        </div>
    `
}

const NavBar = {
    
    data() {
        return {
            menuOpen: false,

            links: [
                {
                    text: 'Home',
                    href: 'index.html'
                },
                {
                    text: 'Products',
                    href: '#products'
                },
                {
                    text: 'About',
                    href: '#about'
                },
                {
                    text: 'Support',
                    href: '#support'
                },
                {
                    text: 'Careers',
                    href: '#careers'
                }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    },

    template: `
        <div class="bg-linear-30 from-[#b26eff] to-[#54d5b8] max-h-28">
            <nav class="inline px-10 py-4">
        <ul class="hidden text-center md:block lg:text-2xl text-lg gap-8">
        <li class="absolute hover:invert-[.20] inline select-none cursor-pointer text-center px-2 left-5"><span class=""><a href="index.html">Vue + Tailwind</a></span></li>
                <li class="
                    inline-block 
                    px-2 
                    hover:invert-[.20]
                    cursor-pointer"
                    v-for="link in links"
                    :key="link.text"
                >
                    <a :href="link.href">
                        {{ link.text }}
                    </a>
                </li>     
        </ul>

        <ul class="block md:hidden md:size-12 px-2 py-2 text-right  ">
            <li class="select-none inline absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xl px-2 text-center"><span class="text-center"><a href="index.html">Vue + Tailwind</a></span></li>
            <li @click="toggleMenu" class="absolute md:right-10 right-1 -translate-x-1/2 -translate-y-1/2  inline mx-auto"><button><svg class="inline size-12 hover:bg-sky-500/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg></button></li>
        </ul>
        </nav>
        </div>


        <!-- DROPDOWN -->
        <Transition name="menu">
            <div 
            v-show="menuOpen" 
            class="flex flex-col justify-evenly fixed inset-0 z-50 w-screen h-screen overflow-y-auto bg-linear-30 from-[#b26eff] to-[#54d5b8] 
            ">
                <ul class="text-center text-5xl divide-y-4 rounded-3xl">
                    <button @click="toggleMenu" class="absolute top-2 right-4 text-white hover:text-gray-600">
                        <svg class="size-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <li 
                        v-for="link in links"
                        :key="link.text"
                        class="block p-[12vw] select-none hover:bg-sky-500/40 cursor-pointer">
                            <a :href="link.href">
                                {{ link.text }}
                            </a>
                    </li>     
                </ul>
            </div>
        </Transition>
    `
}


const customButton = {
    props: {
        text: String,
        href: String,
        customClass: String
    },

    template: `
    <a
        :href="href"
        class="
            inline-block
            select-none
            border-4
            rounded-2xl
            cursor-pointer
            hover:border-violet-200
            hover:text-violet-200
            transition-colors
            duration-200
        "
    >
        <span :class="[
            'block px-6 py-2 rounded-xl text-2xl text-center transition-colors duration-200 bg-[#101010]',
            customClass
        ]">
            {{ text }}
        </span>
    </a>
    `
}

const gradientButton = {
    props: ['href', 'text'],

    template: `
    <a
        :href="href"
        class="inline-block select-none border-4 rounded-2xl cursor-pointer 
        hover:sepia-[.30]
        transition-colors duration-200"
    >
        <div class="px-6 py-2 text-2xl bg-linear-30 from-[#b26eff] to-[#54d5b8] rounded-xl text-center">
            {{ text }}
        </div>
    </a>
    `
}


const Footer = {
    
    data() {
        return {
            links: [
                {
                    text: 'Terms',
                    href: '#terms'
                },
                {
                    text: 'Legal',
                    href: '#legal'
                },
                {
                    text: 'Advertise',
                    href: '#advertise'
                }
            ],
            socialLinks: [
                {
                    src: 'img/github-icon.png',
                    href: '#github'
                },
                {
                    src: 'img/linkedin-icon.png',
                    href: '#linkedin'
                },
                {
                    src: 'img/instagram-icon.png',
                    href: '#instagram'
                },
                {
                    src: 'img/tiktok-icon.png',
                    href: '#tiktok'
                },
                {
                    src: 'img/youtube-icon.png',
                    href: '#youtube'
                }
            ],
            largeLinks: [
                {
                    text: 'About',
                    href: '#about'
                },
                {
                    text: 'Support',
                    href: '#support'
                },
                {
                    text: 'Careers',
                    href: '#careers'
                }
            ]
        }
    },
    template: `
        <div class="
            place-items-center 
            w-full 
            bg-neutral-900 
            p-15
            
            px-4
            md:grid 
            md:grid 
            md:grid-cols-2
         "> 
            <div class="text-center md:text-2xl sm:text-lg py-4">
                <h1 class=" py-4 ">Vue + Tailwind Example</h1>
                <a v-for="link in largeLinks" :key="link.text" :href="link.href" class="px-4 cursor-pointer hover:text-violet-300">{{ link.text}}</a>
            </div>

            <div class="grid place-items-center py-4">
                <!-- SOCIALS -->
                <div class="flex items-center justify-center py-8">
                    <a v-for="link in socialLinks" :key="link.text" :href="link.href" class="px-1 cursor-pointer"><img class="rounded-3xl md:w-12 w-8" :src="link.src"></a>
                </div>

                <!-- LINKS-->
                <div class="flex items-center justify-center">
                    <a v-for="link in links" :key="link.text" :href="link.href" class="px-2 text-sm cursor-pointer hover:text-violet-300">{{ link.text }}</a>
                </div>
            </div>
        </div>
    `
}

const dropDown = {
    props: ['text'],
    data() {
        return {
            dropOpen: false,

            links: [
                {
                    text: 'Products',
                    href: '#products'
                },
                {
                    text: 'About',
                    href: '#about'
                },
                {
                    text: 'Support',
                    href: '#support'
                },
                {
                    text: 'Careers',
                    href: '#careers'
                }
            ]
        }
    },

    methods: {
        toggleDrop() {
            this.dropOpen = !this.dropOpen;
        }
    },

    template: `
    <div class="relative">
            
        <my-button 
            @click="toggleDrop" 
            :text="text"
            class="w-32"
        ></my-button>

        <div v-if="dropOpen">
            <ul 
                class="absolute w-32 top-full left-0 mt-2 text-center z-50 inline-block border-4 rounded-2xl cursor-pointer p-2 bg-[#222]">
                   <li v-for="link in links"
                :key="link.text"
                class="hover:text-violet-200 transition-colors duration-200 py-2 select-none">
                        <a :href="link.href">
                        {{ link.text}}     
                        </a>
                    </li>
                </ul>
        </div>
    </div>
    `
}

const badge = {
    props: ['text','bgColor'],

    template: `
        <span :class="['px-2 py-1 font-extrabold text-[#eee] rounded-md', bgColor]"> 
            {{ text }}
         </span>
    `
}

const modal = {
    props:['title','text','bgColor'],
   data() {
        return {
            modalOpen: false,
        }
    },
    methods: {
        toggleModal() {
            this.modalOpen = !this.modalOpen;
        }
    },
    template: `
    <my-button @click="toggleModal"  text="Open Dialouge" href="#open"></my-button>
    <!-- Backdrop Wrapper - Blurs the screen -->
        <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" >
            
            <!--  Modal Content Card - Parent Element -->
            <div :class="['relative w-full max-w-md rounded-lg p-6 shadow-xl text-[#222]',bgColor]">
                <!-- CONTENT STARTS HERE-->
                <!-- Close Button (Absolutely positioned relative to the card) -->
                <button @click="toggleModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <!-- Content -->
                <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
                    <p class="mt-2 text-sm text-gray-500">
                        {{ text }}
                    </p>

                <!-- Action Buttons - Not Required for all Modals-->
                <!-- <div class="mt-6 flex justify-end gap-3">
                    <button class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Confirm</button>
                </div> -->
            </div>  
        </div>
        `
}


const accordion = {
    props:['title','text','bgColor'],
   data() {
        return {
            content: [
                {
                    title: 'Title One',
                    text: 'Text One',
                    isOpen: false
                },
                {
                    title: 'Title Two',
                    text: 'Text Two',
                    isOpen: false
                },
                {
                    title: 'Title Three',
                    text: 'Text Three',
                    isOpen: false
                }
            ]
        }
    },
    methods: {
        // Pass the specific item being clicked and toggle its state
        toggleSection(item) {
            item.isOpen = !item.isOpen;
        }
    },
    template: `
    <div class="bg-[#111]">
            <div class="p-6">
                Accordion Title
            </div>

            <div class="p-6 bg-[#222]">
                Accordion Content Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

    </div>
        `
}


// GOOGLE GEMINI

const LayoutSection = {
    props: {
        // Accepts tailwind color suffixes like 'bg-neutral-900', 'bg-white', etc.
        bgColor: {
            type: String,
            default: 'bg-transparent'
        },
        title: {
            type: String,
            default: ''
        }
    },
    template: `
        <section :class="['flex flex-wrap justify-center py-16 px-6 md:px-16 w-full flex flex-wrap', bgColor]">
            <div class="max-w-8xl mx-auto">
                
                <h2 v-if="title" class="text-4xl text-center mb-12 font-semibold">
                    {{ title }}
                </h2>
                
                <div class="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap">
                    <slot></slot>
                </div>

            </div>
        </section>
    `
};

// 1. CONTENT PREVIEW CARD (Standard Image Tag)
const PreviewCard = {
    // 1. Add 'badges' to the props array
    props: ['title', 'description', 'imgSrc', 'badges'], 
    
    template: `
        <div class="w-80 bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
            <div class="aspect-video w-full overflow-hidden">
                <img :src="imgSrc" :alt="title" class="w-full h-full object-cover">
            </div>
            
            <div class="p-5">
                <div v-if="badges && badges.length" class="flex flex-wrap gap-2 mb-3">
                    <badge 
                        v-for="(badgeData, index) in badges" 
                        :key="index"
                        :text="badgeData.text"
                        :bg-color="badgeData.bgColor"
                    ></badge>
                </div>

                <h3 class="text-xl font-bold mb-2 text-white">{{ title }}</h3>
                <p class="text-neutral-400 text-sm mb-4">{{ description }}</p>
                <slot></slot>
            </div>
        </div>
    `
};

// 2. BLURRED BACKGROUND CARD (Inline BG Image + Backdrop Blur)
const BlurredBgCard = {
    props: ['title', 'description', 'imgSrc'],
    template: `
        <div 
            :style="{ backgroundImage: \`url(\${imgSrc})\` }" 
            class="w-80 h-96 rounded-2xl overflow-hidden bg-cover bg-center border border-white/10 flex flex-col justify-end shadow-2xl"
        >
            <div 
                class="p-6 bg-linear-to-t from-neutral-950 via-neutral-900/80 to-transparent backdrop-blur-md pt-20"
                style="-webkit-mask-image: linear-gradient(to top, black 40%, transparent 100%); mask-image: linear-gradient(to top, black 40%, transparent 100%);"
            >
                <h3 class="text-xl font-bold mb-2 text-white">{{ title }}</h3>
                <p class="text-neutral-300 text-sm">{{ description }}</p>
                <slot></slot>
            </div>
        </div>
    `
};

const app = Vue.createApp({
    data() {
        return {
            // This is the list of objects containing the configuration for our badges
            mountainBadges: [
                { text: 'Trending', bgColor: 'bg-[#30e8bf]' },
                { text: 'Travel', bgColor: 'bg-[#e088f1]' }
            ],
            
            cityBadges: [
                { text: 'New', bgColor: 'bg-[#30e8bf]' },
                { text: 'Wilderness', bgColor: 'bg-[#e088f1]' }
            ]
        }
    }
})

app.component('feature-card', FeatureCard);
app.component('hero-section', HeroSection);
app.component('navbar-dropdown', NavBar);
app.component('new-button', customButton);
app.component('my-button', gradientButton);
app.component('my-footer', Footer);
app.component('my-dropdown', dropDown);
app.component('badge', badge);
app.component('layout-section', LayoutSection);
app.component('preview-card', PreviewCard);
app.component('blurred-bg-card', BlurredBgCard); 
app.component('modal', modal);


app.mount('#app')