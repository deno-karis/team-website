## Team Name: Lab 2 Website

**Live site:** https://abelmungau31.github.io/team-website/

## Team
| Name              | Registration no. | GitHub username |
|-------------------|------------------|-----------------|
| Kariuki Joel      | COM/3471/26      | deno-karis      |
| Abel mungau       | Com/3482/26      | abelmungau31    |

## Who drove each part
- Part 0, 2, 4: Kariuki Joel
- Part 1, 3: Abel Mungau

## Personalisation
- Our colors: Blue, white and Black
- Projects we added: Tip calculator, student Management system
- Extension challenge(s) completed: Flexbox navigation bar, Responsive card grid

## Reflection
1.What we learnt: I learnt how to use html, git and git hub.
2.Challenges: We had a challenge learning the git code.
3.How we overcome the challenge: We practiced to code the git code until we understood it
4.collaboration: we collaborated with partner through out the entire project
5.what to improve on our website: add more interractivity.
6.skills gained: we gained much skill in web developement. team-website

1.	The menu toggle is a <button>, not a clickable <div>. Name two things you would lose with a <div>, and who would be affected.

## Type your answers here. Using a <div> would lose keyboard accessibility and built-in button functionality. A <button> can be activated using the Enter and Space keys, while a normal <div> cannot. This would disadvantage people who use keyboards instead of a mouse and people who use screen readers.

2.	What would break if you removed defer from the <script> tag in <head>? Explain why, in terms of how the browser parses HTML.

## Type your answers here. If defer is removed, the browser may execute the JavaScript before the HTML page has finished loading. This can cause errors because JavaScript may try to access HTML elements that have not yet been created. The defer attribute allows the browser to finish parsing the HTML before executing the script.

3.	renderProjects uses textContent rather than innerHTML. What could go wrong with innerHTML if project titles were typed in by visitors?

## Type your answers here. Using innerHTML could create a cross-site scripting (XSS) security risk. Visitors could enter harmful HTML or JavaScript code as project titles, which might execute in another user's browser. Using textContent displays the input as plain text, making it safer.

4.	Your form checks its input with JavaScript. Why will the server still need to validate the same data once the form is connected to one?

## Type your answers here. JavaScript validation can be bypassed by disabling JavaScript or sending data directly to the server. Server-side validation is necessary to ensure that all submitted data is correct, safe and follows the required rules before it is stored or processed.

5.	Your theme choice follows you from Home to Contact, but not from a double-clicked file to Live Server. Explain this using the idea of an origin.


## Type your answers here. Home and Contact share the same origin because they use the same protocol, domain and port. Therefore, they can access the same local storage and remember the selected theme. A double-clicked file uses a different origin from Live Server, so its local storage is separate and the theme preference does not automatically carry over.

6.	Name something duplicated across your HTML pages. What problem does that duplication cause, and how might it be avoided?

## Type your answers here. The navigation menu and footer are duplicated across the HTML pages. This causes problems because updating one page does not automatically update the others, which can lead to inconsistencies. Duplication can be avoided by using reusable components or shared HTML templates that allow the same navigation menu and footer to be used across all pages.



