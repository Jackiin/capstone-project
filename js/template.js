class Template {

    constructor(templateId) {
        this.templateId = templateId;
        return this;
    }

    /*  options.content = [
            { selector: '', attrs: [{name: '', value: ''}], textContent: '' }
        ]
        options.parent = "";
    */
    create(options) {
        let template = document.querySelector(this.templateId);
        let node = template.content.firstElementChild.cloneNode(true);

        if (options.content) {
            options.content.forEach(el => {
                if (node.querySelector(el.selector)) {
                    if (el.attrs) {
                        // set attributes to the node
                        for (let name in el.attrs) {
                            node.querySelector(el.selector).setAttribute(name, el.attrs[name]);
                        }
                    }
                    if (el.textContent) {
                        // set HTML text content to the node
                        node.querySelector(el.selector).textContent = el.textContent;
                    }
                } else {
                    console.log(`Element ${el.selector} not exist`);
                }
            });
        }
        if (options.rootAttrs) {
            for (let name in options.rootAttrs) {
                node.setAttribute(name, options.rootAttrs[name]);
            }
        }

        // append to an element
        if (!options.parent) {
            options.parent = 'default';
        }
        if (options.parent == 'default') {
            // by default, it will be appended to parent of <script>
            let scriptTag = document.getElementsByTagName('script')
            scriptTag = scriptTag[scriptTag.length - 1];
            scriptTag.parentNode.append(node);
        } else {
            document.querySelector(options.parent).append(node);
        }
        
        return this;
    }

}