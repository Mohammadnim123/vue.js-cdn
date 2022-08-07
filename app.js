// Global component
Vue.component('my-component', {
    data: function () {
        return {
            count: 0,
        }
    },
    props: ['name', 'id'],
    template: `<p @click="count++">Test Component {{count}} hello {{name}}
                 your id is {{id}}</p>`,
})

// Local component
const myItem = {
    data: function () {
        return {
            likes: 0,
        }
    },
    props: ['name', 'id'],
    template: `<p @click="likes++">Test item {{likes}} hello {{name}}
                 your id is {{id}}</p>`,
}

// Vue app
const app = new Vue({
    el: '#app',

    data: {
        message: 'Hello Vue!',
        loop: [111, 222, 333, 411, 511, 611, 711, 118, 119, 1110],
        date: new Date(),
        age: 60,
        show: true,
        html: '<span style="color:red">This is red</span>',
        imgSrc: '',
        bind: '',
        posts: posts,
        jod: 0,
        riyal: 0,
        hour: 0,
        minute: 0,
        second: 0,
        color: 'red',
    },

    methods: {
        changeMessage: function () {
            console.log(data)
            this.message = 'Hello Vue!!!!!!!!!!!!!'
        },
        UpdateDate: function () {
            this.date = new Date()
        },
        fixImg: function () {
            this.imgSrc = 'levi.jpg'
        }
    },
    components: {
        myItem: myItem,
    },
    computed: {
        calcAge: function () {
            console.log('calcAge') //it will be executed one time
            return this.age * 2
        },
        newColor: function () {
            return `color:${this.color}`
        }
    },
    watch: {
        jod: function (newVal) {
            console.log('jod changed')
            this.riyal = newVal * 5
        },
        riyal: function (newVal) {
            console.log('riyal changed')
            this.jod = newVal / 5
        },
        hour: function (newVal) {
            console.log('hour changed')
            this.minute = newVal * 60
        },
        minute: function (newVal) {
            console.log('minute changed')
            this.hour = newVal / 60
            this.second = newVal * 60
        },
        second: function (newVal) {
            console.log('second changed')
            this.minute = newVal / 60
        }
    }
})

const secondVue = new Vue({
    el: '#second-vue',
    data: {
        message: 'Hello Second Vue!',
        coloredMessage: '',
    },
    methods: {
        changeMessage: function () {
            app.message = 'changed by Second Vue!!'
        },
        getColoredMessage: function () {
            this.coloredMessage = app.$refs.mohammad.outerHTML;
        }
    }
})