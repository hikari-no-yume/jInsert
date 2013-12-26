jInsert
=======

jInsert is my tiny DOM manipulation library. Some people like to j*Query* the DOM. I prefer to j*Insert* into it.

License
-------

MIT license, see header comment of jInsert.js.

API
---

* `$`(*props*)

  If `props` is a string, the value of `document.createTextNode(props)` is returned.

  Creates an element of type `props.tagName`. Iterates over `props`, copying each property from props to the new element, with the exception of:
  
  * `tagName`
  * `style` - If defined, `props.style` will be iterated over as an object, copying each property to the `style` property of the new element.
  * `parentElement` - If defined, `props.parentElement.appendChild` is run, being passed the new element.
  * `children` - If defined, it is iterated over as an array, and appendChild is called on the new element, being passed the item in the list.

  Returns the new element.

An example:

    $({
        tagName: 'div',
        parentElement: document.body,
        style: {
            backgroundColor: 'red',
            border: '1px solid black'
        },
        children: [1, 2, 3, 4].map(function (number) {
            return $({
                tagName: 'div',
                className: 'number',
                children: [
                    $(number.toString())
                ]
            });
        })
    });

Which is (essentially) equivalent to:

    var elem = document.createElement('div');
    elem.style.backgroundColor = 'red';
    elem.style.border = '1px solid black';
    [1, 2, 3, 4].forEach(function (number) {
        var numberElem = document.createElement('div');
        numberElem.className = 'number';
        numberElem.appendChild(document.createTextNode(number.toString()));
        elem.appendChild(numberElem);
    });
    document.body.appendChild(elem);