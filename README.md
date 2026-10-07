# Interactive Portfolio

A responsive, animated portfolio website built with HTML, CSS, and JavaScript.

## Files

- `index.html` – page structure
- `styles.css` – theme, layout, and animations
- `script.js` – profile data, project cards, and interactions

## Customize your profile

Open `script.js` and update the `profileData` object:

```js
const profileData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/yourusername/',
  leetcode: 'https://leetcode.com/yourusername/',
  linkedin: 'https://www.linkedin.com/in/yourusername/'
};
```

You can also edit the project cards and skill sections directly in the same file.

## Preview locally

```bash
cd Portfolio
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
