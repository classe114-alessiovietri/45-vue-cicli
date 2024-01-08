const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '45 Vue cicli',
            spesa: ['mele', 'pere', 'mandarinE'],
            newElem: ''
        };
    },
    methods: {
        addToList() {
            if (this.newElem.length > 0) {
                console.log(this.newElem);

                this.spesa.push(this.newElem);

                this.newElem = '';
            }
        }
    }
}).mount('#app');