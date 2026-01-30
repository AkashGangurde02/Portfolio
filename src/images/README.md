# Images Folder Structure

This document describes the organized folder structure for all images in the portfolio.

## 📁 Folder Organization

```
/images
├── /profile  
│   └── Profile images and about photos
│
├── /case-studies
│   ├── /case-study-1
│   │   └── Related images for case study 1
│   ├── /case-study-2
│   │   └── Related images for case study 2
│   └── /case-study-3
│       └── Related images for case study 3
│
├── /experience
│   ├── /somvanshi
│   │   └── /images
│   │       └── ~10 images from Somvanshi Technologies experience
│   │
│   ├── /non-technical
│   │   └── /images
│   │       └── ~10 images from Non-Technical Head experience
│   │
│   └── /robotics
│       └── /images
│           └── ~10 images from Robotics Club experience
│
├── /projects
│   ├── /project-1
│   │   └── Project 1 related images
│   └── /project-2
│       └── Project 2 related images
│
├── /icons
│   └── Icon files and assets
│
├── /illustrations
│   └── Illustration files
│
└── /backgrounds
    └── Background images and patterns
```

## 📋 Usage Guidelines

### Profile Images
- Location: `/images/profile/`
- Use for: About page profile photos, hero section images
- Current files: `about-image.jpg`

### Case Study Images
- Location: `/images/case-studies/case-study-X/`
- Use for: Case study pages, before/after comparisons, wireframes
- Naming: Use descriptive names like `before.jpg`, `after.jpg`, `wireframe.jpg`

### Experience Images
- Location: `/images/experience/[experience-name]/images/`
- Use for: Photo galleries in experience detail pages
- Capacity: ~10 images per experience
- Experiences:
  - `somvanshi` - UX/UI Designer Intern at Somvanshi Technologies
  - `non-technical` - Non-Technical Head at VIIT Robotics Club
  - `robotics` - Software Team Member at VIIT Robotics Club

### Project Images
- Location: `/images/projects/project-X/`
- Use for: Project showcase images, screenshots, mockups

### Icons
- Location: `/images/icons/`
- Use for: UI icons, social media icons, feature icons

### Illustrations
- Location: `/images/illustrations/`
- Use for: Custom illustrations, graphics, decorative elements

### Backgrounds
- Location: `/images/backgrounds/`
- Use for: Hero backgrounds, section backgrounds, patterns

## 🔄 Updating Images

To update an image:
1. Navigate to the appropriate folder
2. Replace the existing image file
3. Keep the same filename to avoid code updates
4. If adding new images, use descriptive, kebab-case names

## 📝 Naming Conventions

- Use lowercase letters
- Use hyphens (-) for spaces
- Be descriptive but concise
- Examples: `team-photo.jpg`, `design-process.png`, `wireframe-v2.jpg`

## 🎯 Import Paths in Code

When importing images in your components:

```javascript
// Profile images
import profileImage from '../images/profile/about-image.jpg'

// Case study images
import beforeImage from '../images/case-studies/case-study-1/before.jpg'

// Experience images
import roboconPhoto from '../images/experience/robotics/images/robocon-team.jpg'

// Icons
import logoIcon from '../images/icons/logo.svg'
```

---

Last Updated: 2026-01-30
