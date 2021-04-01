// js
$.get({
    url: "/js/bootstrap.bundle.min.js",
    dataType: "script"
})
$.get({
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js",
    dataType: "script"
});
$.get({
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js",
    dataType: "script"
});
$.get({
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/TextPlugin.min.js",
    dataType: "script"
})
// $.get({
//     url: "https://unpkg.com/swup@latest/dist/swup.min.js",
//     dataType: "script"
// })

// css
$('<link/>', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
}).appendTo('head');
$('<link/>', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/fontawesome.min.css'
}).appendTo('head');
$('<link/>', {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/main.css'
}).appendTo('head');