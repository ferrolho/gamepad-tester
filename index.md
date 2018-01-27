---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

# Embedding

You can embed this interactive controller on your own pages.
Just copy-paste one of the code snippets below, according to the position where you would like it to show up.
You can change the size by changing the percentage `width="25%"` to whatever you prefer.


## Top left corner

```html
<script type="text/javascript" src="https://cdn.rawgit.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js"></script>
<iframe width="25%" src="{{ '/controller' | absolute_url }}" scrolling="no" style="border: initial; position: absolute; top: 0; left: 0;"></iframe>
<script>iFrameResize()</script>
```

## Top right corner

```html
<script type="text/javascript" src="https://cdn.rawgit.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js"></script>
<iframe width="25%" src="http://127.0.0.1:4000/gamepad-tester/controller" scrolling="no" style="border: initial; position: absolute; top: 0; right: 0;"></iframe>
<script>iFrameResize()</script>
```

## Bottom left corner

```html
<script type="text/javascript" src="https://cdn.rawgit.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js"></script>
<iframe width="25%" src="http://127.0.0.1:4000/gamepad-tester/controller" scrolling="no" style="border: initial; position: absolute; bottom: 0; left: 0;"></iframe>
<script>iFrameResize()</script>
```

## Bottom right corner

```html
<script type="text/javascript" src="https://cdn.rawgit.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js"></script>
<iframe width="25%" src="http://127.0.0.1:4000/gamepad-tester/controller" scrolling="no" style="border: initial; position: absolute; bottom: 0; right: 0;"></iframe>
<script>iFrameResize()</script>
```
