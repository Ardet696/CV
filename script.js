document.addEventListener('DOMContentLoaded', () => {
    const cvPhoto = document.getElementById('cv-photo');

    if (cvPhoto) {
        cvPhoto.addEventListener('click', () => {
            cvPhoto.classList.toggle('maximized');
        });
    }

    const sectionsToHover = document.querySelectorAll(
        '.education-item li, .experience-item li, .project-item li, .certifications-header li'
    );

    sectionsToHover.forEach(item => {
        const dateSpan = item.querySelector('.date-hidden');

        if (dateSpan) {
            item.addEventListener('mouseenter', () => {
                dateSpan.classList.add('date-visible');
            });

            item.addEventListener('mouseleave', () => {
                dateSpan.classList.remove('date-visible');
            });
        }
    });

});
