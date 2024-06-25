document.addEventListener('alpine:init', () => {
    Alpine.data('counter', () => ({
        title: 'Alpine.js Counter',
        count: 0,
        initData: function (){this.title='pialne.js';}
    }))
})