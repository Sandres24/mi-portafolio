window.onload = function() {

    (function() {
        const sections = document.querySelectorAll('[id$="section"]');
        const menuItems = document.querySelectorAll('.header__li>a')
        
        const sectionsObserver = new IntersectionObserver((entries) => {
            /* entries.forEach(entry => {
                const actualItem = Array.from(menuItems).find(item => item.getAttribute('href').includes(entry.target.id));
                if (entry.isIntersecting) {
                    actualItem.classList.add('header__a--selected');
                }
                for (const item of menuItems) {
                    if (item !== actualItem) {
                        item.classList.remove('header__a--selected');
                    }
                }
            }); */
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const menuItem = document.querySelector(`a.${id}`);

                if (entry.isIntersecting) {
                    document.querySelector('a.header__a--selected').classList.remove('header__a--selected');
                    menuItem.classList.add('header__a--selected');
                }
            });
        }, {
            rootMargin: '-25% 0% -75% 0%'
        });

        sections.forEach(section => sectionsObserver.observe(section));
    })();


    window.onscroll = function() {

        const skills = document.getElementById('skills-section');
        const barAnimation80 = document.querySelectorAll('.skills__bar--80p');
        const barAnimation95 = document.querySelector('.skills__bar--95p');
        const skillPercent = document.querySelectorAll('.skills__h2--skill-percent');
        let skillsSectionPosition = skills.getBoundingClientRect().top;
        let viewportHeight = window.innerHeight - (window.innerHeight * 0.2);

        if (skillsSectionPosition < viewportHeight) {
            skillPercent.forEach(percent => {
                percent.style.animation = 'displayPercent 1.5s ease';
                percent.style.visibility = 'visible';
            });
            barAnimation80.forEach(skillBar => {
                skillBar.style.width = '80%';
                skillBar.style.animation = 'barAnimation80 2s ease';
            });
            barAnimation95.style.width = '95%';
            barAnimation95.style.animation = 'barAnimation95 2s ease';
        }
    }

}