---
title: Get Involved
---

Any and all help we can get with building up, maintaining, and fact checking within these docs would be really appreciated!  This page will give you a quick rundown of how to contribute to the docs, a list of tricks we use when creating pages and more!

[TOC]

&nbsp;

<div class="alert alert-info" role="alert">
    <strong>AGD Account Required</strong> In order to suggest edits to our documentation you must have an account at <a href="https://www.ascensiongamedev.com">Ascension Game Dev</a>.
</div>

&nbsp;

Contributing
---------------------------

**Step 1: Find what you'd like to edit:**

Go to any page where you would like to see content added, removed, or changed then click on the "Suggest an Edit" button located in the top right corner. <a href="http://www.ascensiongamedev.com/resources/filehost/0ad0d3fc51418931f9e6a7b10dc372a2.png" data-lity><i class="fa fa-play-circle"></i></a>

&nbsp;

**Step 2: Edit to your heart's content!**
You will be presented with a visual editor at Ascension Game Dev where you can modify the page's contents. The left hand side is the editor and the right side is a preview of your changes: <a href="http://www.ascensiongamedev.com/resources/filehost/e4d730e1a822febc372c37fa9b286d3c.png" data-lity><i class="fa fa-play-circle"></i></a>

&nbsp;

**Step 3: Describe your edits and hit submit!**
When you're done making changes to the page, fill out the box under the editor with a quick reason for your edits. Reasons like "fixing a typo", "adding missing documentation", etc are all fine. <a href="http://www.ascensiongamedev.com/resources/filehost/a35b2d532fe1296a9418400097701b75.png" data-lity><i class="fa fa-play-circle"></i></a>


&nbsp;

**Step 4: You're done! It's on us to approve the changes now!**
We will review your suggested edits and most likely add them to the live documentation!


&nbsp;

Helpful Notes
---------------------------

#### Creating the Play Icon for media
Inserting an icon like this <a href="#" data-lity><i class="fa fa-play-circle"></i></a> that can be used to display images or video that you only want shown when clicked is easy! Simply copy the markdown code below, add it to your page, and then replace YOUR_LINK_HERE with a link to your image or video.
```
<a href="YOUR_LINK_HERE" data-lity><i class="fa fa-play-circle"></i></a>
```

&nbsp;

#### Uploading Images & Video
Please upload all images to the [AGD Filehost](https://www.ascensiongamedev.com/filehost/). By uploading images there we know that they will never expire whilst these docs are available.  Uploading video to Youtube is fine, but JC may ask for the video file to put on his own Youtube account just in case something happens and you don't want it associated with your Youtube account anymore.

&nbsp;

#### Alerts
Sometimes you need to get your audiences' attention. We use alerts in the upgrading guides to make sure users create backups before attempting an upgrade of the engine. Below are all different kinds of alerts that you can include in your documentation pages, use them wisely!

**Danger Alert**
<div class="alert alert-danger">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>

```
<div class="alert alert-danger">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
```

&nbsp;

**Warning Alert**
<div class="alert alert-warning">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>

```
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
```

&nbsp;

**Info Alert**
<div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This alert needs your attention,
    but it's not super important.
</div>

```
<div class="alert alert-info">
    <strong>Heads up!</strong> This alert needs your attention,
    but it's not super important.
</div>
```

&nbsp;

**Success Alert**
<div class="alert alert-success">
    <strong>Well done!</strong> You successfully read this
    important alert message.
</div>

```
<div class="alert alert-success">
    <strong>Well done!</strong> You successfully read this
    important alert message.
</div>
```