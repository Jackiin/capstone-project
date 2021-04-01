/*
    jQuery Breadcrumb Plugin
    @Author Jack Lam
    Developed with jQuery 3.5
	
    getRoute function requires a JSON file and will return the location of the current page
*/

// https://www.smashingmagazine.com/2011/10/essential-jquery-plugin-patterns/ 
// https://blog.teamtreehouse.com/writing-your-own-jquery-plugins 
// https://www.w3schools.com/tags/ref_urlencode.ASP#:~:text=URLs%20cannot%20contain%20spaces.,(%2B)%20sign%20or%20with%20%20. (space in address will be encoded as %20)
(function ($) {
    // fetch the JSON and render the breadcrumb
    $.fn.getRoute = function(options) {
        let pathName = $(location).attr("pathname");
        let pathList = [];
        let el = this; // the HTML element
        $.getJSON(options.jsonUrl, (data) => {
            findUrl(data, pathName, pathList);
            // append the directories to the breadcrumb parent element (usually <ul>)
            console.log(`Path to this directory: ${JSON.stringify(pathList)}`);
            pathList.forEach(path => {
                if (path === "") {
                    el.append(`<li class="${options.classAppendToChild}"><a>${path.name}</a></li>`);
                } else {
                    el.append(`<li class="${options.classAppendToChild}"><a href="${path.url}">${path.name}</a></li>`);
                }
            });
        })
        return pathList;
    }
    /* 
        recursive function using depth first search to get the list of path to the current directory
        @dir current searching directory
        @urlToFind node to be find
        @pathList an array containing all nodes (a route) to urlToFind
    */
    const findUrl = (dir, urlToFind, pathList) => {
        pathList.push({ "name": dir.name, "url": dir.url[0] });
        for (let i = 0; i < dir.url.length; i++) {
            if (urlToFind == dir.url[i]) {
                return dir.url;
            }
        }
        if (dir.sub == null) {
            return null;
        }
        for (let i = 0; i < dir.sub.length; i++) {
            let result = findUrl(dir.sub[i], urlToFind, pathList);
            if (result == null) {
                pathList.pop();
            } else {
                return result;
            }
        }
        return null;
    }
}(jQuery));