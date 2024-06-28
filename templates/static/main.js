document.addEventListener('alpine:init', () => {
    Alpine.data('lmsthegame', () => ({
        title: 'Alpine.js',
        swipeDirection: 'Nono direction',
        random: (n) => Math.floor(Math.random() * n),
        swap: '',
        tops: ['blacktopic', 'blacktshirt', 'leotopic', 'crosshirt'],
        downs: ['lightjeans', 'holejeans', 'whiteshorts', 'blueshorts'],
        field: [[], [], [], []],
        i: null,
        j: null,


        initData: function () {
            // this.setupSwipeEvents(this.$refs.top, 'top');
            // this.setupSwipeEvents(this.$refs.down, 'down');

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

    Alpine.data('swipemystyle', () => ({
        title: 'swipemystyle',
        swipeDirection: 'Nono direction',
        random: (n) => Math.floor(Math.random() * n),
        swap: '',
        tops: ['blacktopic', 'blacktshirt', 'leotopic', 'crosshirt'],
        downs: ['lightjeans', 'holejeans', 'whiteshorts', 'blueshorts'],
        field: [[], [], [], []],
        i: null,
        j: null,


        init: function () {
            console.log('initing sms');
            this.setupSwipeEvents(this.$refs.top, 'top');
            this.setupSwipeEvents(this.$refs.down, 'down');
            this.setupSwipeEvents(this.$refs.bonus, 'bonus');

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
        setupSwipeEvents(element, messageKey) {
            console.log('swipe   start');
            let touchstartX = 0;
            let touchendX = 0;
            let touchstartY = 0;
            let touchendY = 0;

            element.addEventListener('touchstart', (event) => {

                touchstartX = event.changedTouches[0].screenX;
                touchstartY = event.changedTouches[0].screenY;
            }, false);

            element.addEventListener('touchend', (event) => {
                touchendX = event.changedTouches[0].screenX;
                touchendY = event.changedTouches[0].screenY;
                console.log('touchend for ', messageKey);
                this.handleSwipeGesture(touchstartX, touchendX, touchstartY, touchendY, messageKey);
            }, false);
        },

        handleSwipeGesture(touchstartX, touchendX, touchstartY, touchendY, messageKey) {
            const swipeThreshold = 50; // Minimum distance to be considered a swipe
            const deltaX = touchendX - touchstartX;
            const deltaY = touchendY - touchstartY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (Math.abs(deltaX) > swipeThreshold) {
                    if (deltaX > 0) {
                        this[messageKey] = 'Swiped Right';
                    } else {
                        this[messageKey] = 'Swiped Left';
                    }
                }
            } else {
                if (Math.abs(deltaY) > swipeThreshold) {
                    if (deltaY > 0) {
                        this[messageKey] = 'Swiped Down';
                    } else {
                        this[messageKey] = 'Swiped Up';
                    }
                }
            }
            console.log(this[messageKey])
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
})