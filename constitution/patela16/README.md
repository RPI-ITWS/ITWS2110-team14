# ITWS2110-patela16
## Lab 2

Technologies: HTML5, CSS3, Git, GitHub, Microsoft Azure\
Team: Rensselaer Polytechnic Marketplace

#### Resources Used

HTML Color Picker:  
https://www.w3schools.com/colors/colors_picker.asp  

Color Theory 101: A Complete Guide to Color Wheels & Color Schemes:  
https://blog.hubspot.com/marketing/color-theory-design  

Custom Card Container:  
https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_custom_elements  
https://css-tricks.com/creating-a-custom-element-from-scratch/

CSS Layout - The position Property:  
https://www.w3schools.com/Css/css_positioning.asp  

align-items:  
https://developer.mozilla.org/en-US/docs/Web/CSS/align-items  

CSS flex-direction Property:  
https://www.w3schools.com/cssref/css3_pr_flex-direction.php  

#### Conflicts
- Creating containers that float correctly in their surrounding divs - creating the layout of each container before implementing the text, dropdowns, buttons, etc. took a while.
- Learning to create the global file Card.js was very difficult since it was something I had almost no knowledge of. My research has helped me learn that creating a Card class which extends the functions of HTMLElement class is used for this. After constructing the attributes of each Card component, it is rendered to HTML. My previous knowledge of creating similar components through the React framework has helped me understand how to do this through vanilla javascript.

#### Future notes / tasks
- Create globals for navigation bar at the top of page, so that the same code won't have to be pasted in every new file - this will also be efficient when slight changes are made to the navigation bar since this could cause issues if the changes aren't brought out on every file
- Instead of pasting article text, we could have taken data from Congress's API