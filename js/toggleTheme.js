let body = document.querySelector('body');
let about = document.querySelector('#about');
let nav = document.querySelector('#nav');
let toggle = document.querySelector('#toggle');


toggle.addEventListener('click', function () {
    if (body.classList.contains('bg-gray-800')) {
        body.classList.remove('bg-gray-800');
        body.classList.add('bg-indigo-500');

        about.classList.remove('text-gray-300');
        about.classList.add('text-gray-900');
        about.classList.remove('font-semibold');
        about.classList.add('font-bold');

        nav.classList.remove('bg-indigo-600');
        nav.classList.add('bg-gray-800');
    } else {
        body.classList.add('bg-gray-800');
        body.classList.remove('bg-indigo-500');

        about.classList.add('text-gray-300');
        about.classList.remove('text-gray-900');
        about.classList.add('font-semibold');
        about.classList.remove('font-bold');

        nav.classList.add('bg-indigo-600');
        nav.classList.remove('bg-gray-800');
    }
});
