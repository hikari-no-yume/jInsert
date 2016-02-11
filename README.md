jInsert
=======

jInsert is my tiny DOM manipulation library. Some people like to j*Query* the DOM. I prefer to j*Insert* into it.

License
-------

MIT license, see header comment of jInsert.js.

API
---

* `$`(*tagName*[, *props*][, *children*])

  Creates an element of type `tagName`.
  
  If given, `props` is iterated over, copying each property from props to the new element. If there is a `style` property, it is not copied directly, but rather its properties are copied to the new element's `.style` object.
  
  If given, `children` is iterated over, with each item being appended (with `appendChild`) to the new element. If the item is a string, it is converted to a DOM text node before being appended.
  
  Returns the new element.

Thus you can build DOM elements with a leaner syntax closer to HTML. For example, this jInsert code produces a form:

```JavaScript
document.body.appendChild($('form', {action: '/submit', method: 'POST'}, [
    $('input', {type: 'text', name: 'username'}),
    $('br'),
    $('input', {type: 'password', name: 'password'}),
    $('br'),
    $('input', {type: 'submit'})
]));
```

And is equivalent to this HTML:

```HTML
<form action=/submit method=POST>
    <input type=text name=username><br>
    <input type=password name=password<br>
    <input type=submit>
</form>
```
