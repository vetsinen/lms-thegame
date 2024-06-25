document.addEventListener('alpine:init', () => {
    Alpine.data('lmsthegame', () => ({
        title: 'Alpine.js',
        message: 'hello, vue',
        random: (n) => Math.floor(Math.random() * n),
        swap: '',
        tops: ['blacktopic', 'blacktshirt', 'leotopic', 'crosshirt'],
        downs: ['lightjeans', 'holejeans', 'whiteshorts', 'blueshorts'],
        field: [[], [], [], []],
        i: null,
        j: null,

        initData: function () {
            this.i = this.random(this.tops.length);
            this.j = this.random(this.downs.length);

            for (let i = 0; i < this.tops.length; i++)
                for (let j = 0; j < this.downs.length; j++) {
                    //console.log(i,j, this.tops[i],this.down[j]);
                    this.field[i][j] = this.tops[i] + '-' + this.downs[j];
                }
            this.update();
            //this.swap = 'static/buterin.png';
        },

        update: function () {
            this.swap = 'static/' + this.field[this.i][this.j] + '.jpg';
        },

        nextTop: function () {
            let i0 = this.i;
            do this.i = this.random(this.tops.length);
            while (i0 === this.i)
            this.update();
        },
        nextDown: function () {
            let j0 = this.j;
            do
                this.j = this.random(this.downs.length);
            while (j0 === this.j)
            this.update();
        },
    }));

    Alpine.data('counter', () => ({
        title: 'Alpine.js Counter',
        count: 0,
        initData: function () {
            this.title = 'pialne.js';
        }
    }))
})