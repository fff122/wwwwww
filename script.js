let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['Reward brother', "Dog"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

class Year0Timer {
    constructor() {
        this.timeElement = document.getElementById('time');
        this.startTimer();
    }

    calculateTime() {
        const now = new Date();
        const year0 = new Date(0, 0, 1);
        const timePassed = now - year0;

        return {
            years: now.getFullYear(),
            days: Math.floor(timePassed / (1000 * 60 * 60 * 24)),
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        };
    }

    formatTime(timeObj) {
        return `自公元0年以来我已经戒色了 ${timeObj.years} 年 ${timeObj.days} 天 ${timeObj.hours} 小时 ${timeObj.minutes} 分钟 ${timeObj.seconds} 秒`;
    }

    updateDisplay() {
        const timeObj = this.calculateTime();
        this.timeElement.textContent = this.formatTime(timeObj);
    }

    startTimer() {
        this.updateDisplay();
        setInterval(() => this.updateDisplay(), 1000);
    }
}

const timer = new Year0Timer();
