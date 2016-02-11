/* 
 * jInsert v2.0 - https://github.com/TazeTSchnitzel/jInsert
 *
 * Code except where otherwise noted © 2013–2016 Andrea Faulds.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function () {
    'use strict';

    window.$ = function (tagName, props, children) {
        /* We allow the caller to omit `props` and pass `children`. In that
         * case, `children` argument ends up in the `props` variable, so
         * we need to move it.
         */
        if (props instanceof Array) {
            children = props;
            props = {};
        } else if (props === undefined) {
            props = {};
        }

        var elem = document.createElement(tagName);
        for (var name in props) {
            if (props.hasOwnProperty(name)) {
                if (name === 'style') {
                    for (var styleName in props.style) {
                        if (props.style.hasOwnProperty(styleName)) {
                            elem.style[styleName] = props.style[styleName];
                        }
                    }
                } else if (name !== 'tagName' && name !== 'parentElement' && name !== 'children') {
                    elem[name] = props[name];
                }
            }
        }

        if (children) {
            children.forEach(function (child) {
                if (typeof child === "string") {
                    child = document.createTextNode(child);
                }
                elem.appendChild(child); 
            });
        }

        return elem;
    };
}());
