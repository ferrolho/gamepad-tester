---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<link rel="stylesheet" type="text/css" href="{{ '/assets/custom.css' | absolute_url }}">

<span id="helper-assets-path" hidden>{{ '/assets' | absolute_url }}</span>
<div id="img-controller-overlays">
	<img id="stick_axis_left" src="{{ '/assets/xbox-one-s-wireless-controller-stick_axis_left.png' | absolute_url }}">
	<img id="stick_axis_right" src="{{ '/assets/xbox-one-s-wireless-controller-stick_axis_right.png' | absolute_url }}">
</div>
<img id="img-controller" src="{{ '/assets/xbox-one-s-wireless-controller.png' | absolute_url }}">

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

<script type="text/javascript" src="{{ '/gamepad.js/gamepad.js' | absolute_url }}"></script>
<script type="text/javascript" src="{{ '/js/app.js' | absolute_url }}"></script>
