#ITWS2110-millen11
Lab 1: Creating a group home page and personal portfolio

Technologies: HTML5, CSS3

SUMMARY:
In Lab1, I as well as my peers in <group name>, created a portfolio page to document our work and achievements toegther. Additionally, each person's section on index.html contains a link to each person's respective personal portfolio/resume.

DOCUMENTATION:
Relaearning basics of classes and IDs
 https://www.w3schools.com/html/tryit.asp?filename=tryhtml_id_class

How to make an entire div a link to another page:
 https://forum.freecodecamp.org/t/making-a-whole-div-have-a-dynamic-href-link-react/340805

How to crop images (circle):
 https://ianrmedia.unl.edu/resources\rounded-corners-images#:~:text=The%20border%2Dradius%20CSS%20property%20is%20what%20adds%20the%20rounded%20corners.&text=You%20c\an%20experiment%20with%20different,
 
How to integrate/use <br>:
 ChatGPT for line break

Reference website:
  https://tangiblematerials.com/

How to apply opacity to an element:
  https://blog.hubspot.com/website/opacity-css#:~:text=To%20set%20the%20opacity%20of,invisible).

How to create a navigation bar:
  https://www.w3schools.com/howto/howto_js_topnav.asp

How to fix an element (Navigation bar) at a postion:
  https://www.w3schools.com/howto/howto_css_fixed_menu.asp

The margin shorthand notation/order:
https://www.w3schools.com/css/css_margin.asp

DESIGN DECISIONS of index.html:
   We decided to list each member in alphabetical order and display some basic information. 

DESIGN of resume.html:
   1. I decided to keep my website very simple but more or less modern compared to my last designed website (in INTRO)
   2. As someone who wants to work in the Quant realm, I tried to emphasize such on my page
   3. My IT and CS concentration is in ML, so I tried to mention my novice abilities
   4. I attempted to match the index.html's styling while having a personal element to it

ISSUES THAT AROSE:
   1. Floating summary text rightward next to headshot
      a.) Fixed using margin-right and fixing headshots sizing
   2. Creating universal sizing for headshots on index.html
      a.) Figure out a balance between size and lack of stretch, I ended up applying a height and width of 200 and 150 pixels respectively
   3. Getting snippets from summaries and displaying it on index.html 
      a.) I was going to use a technique similar to Lab 8 in Intro to get data from a JSON file and display a small portion of a members summary on the index.html. However, that approach was a bit too much for this assignment.
   4. Centering major and role on index next to headshot
      a.) I just moved the paragraph tags that contained the major and role above the headshots. Order does matter in tags, did not realize at first (yikes)
   5. My major and role formatting being wonky
      a.) For some reason my major and role formatting drifted to the bottom left of my headshot, however I wanted it in the "middle" right of the headshot.
      b.) The issue is it's long length, so I have to find a way to create a certain size for the info
      c.) Alex just used padding and percentages instead of pixels to fix this
   6. Skills section indented more than all others
      a.) It was in the experience div, making it a child of such the other subsections
   7. Footer not centered, despite using text-align:center