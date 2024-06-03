---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Gamepad Tester
layout: home
---

# Embedding

You can embed this interactive controller on your own pages.
Just copy-paste one of the code snippets below, according to the position where you would like it to show up.
You can change the size by changing the percentage `width="25%"` to whatever you prefer.


## Top left corner

```html
<iframe width="25%" src="{{ '/controller' | absolute_url }}" scrolling="no" style="border: initial; position: absolute; top: 0; left: 0;"></iframe>
<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent@5.0.2"></script>
<script>iframeResize({ license: 'GPLv3' })</script>
```

## Top right corner

```html
<iframe width="25%" src="{{ '/controller' | absolute_url }}" scrolling="no" style="border: initial; position: absolute; top: 0; right: 0;"></iframe>
<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent@5.0.2"></script>
<script>iframeResize({ license: 'GPLv3' })</script>
```

## Bottom left corner

```html
<iframe width="25%" src="{{ '/controller' | absolute_url }}" scrolling="no" style="border: initial; position: absolute; bottom: 0; left: 0;"></iframe>
<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent@5.0.2"></script>
<script>iframeResize({ license: 'GPLv3' })</script>
```

## Bottom right corner

```html
<iframe width="25%" src="{{ '/controller' | absolute_url }}" scrolling="no" style="border: initial; position: absolute; bottom: 0; right: 0;"></iframe>
<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent@5.0.2"></script>
<script>iframeResize({ license: 'GPLv3' })</script>
```
