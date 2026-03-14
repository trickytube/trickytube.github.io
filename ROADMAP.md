18/01/2026 --> we no longer will support url on cover with this commit, the new image directory for news cover images is "/src/assets/news". although I am planning to intigrate a cms, so this is a decision I had to make in order to the process go smoother, I added the image resolver function on the "/src/lib/resolveNewsImage.ts", which will resolve the images from now on. for now how it basiclaly works is I put the cover image on "/src/assets/news" and mention the filename (not full path!) on my article as image: "filename", which resolves the image, but failing to render any image causes the whole site to crash, so I need to handle that exception later!


## 15/03/2026 — Major Refactor Migration Guide

This release introduces a **major refactor**. Some setups may break.
Follow the steps below to migrate your project.

### 1. Reapply Custom Styles

Some component files were modified or reorganized.
If you had custom styling applied to components, you may need to **reapply those styles**.

### 2. Update Environment Variables

Check the new environment configuration files:

* `.env.example`
* `.env.development`

Ensure all required variables are defined in your environment.

Environment variables should now be accessed directly using:

```
import.meta.env
```

### 3. Removed Helper Modules

The following helper files were removed:

* `resolveNewsImages.ts`
* `site.ts`

**Migration:**

* Replace the custom image resolver with Astro's built-in `image()` helper in the content collection schema.
* Instead of using `site.ts`, import configuration values directly from environment variables using `import.meta.env`.

### 4. Markdown Page Architecture Change

Previously, standard pages (e.g. `about`, `tos`) were stored in:

```
content/pages/
```

and then imported into:

```
pages/somepage.astro
```

This approach has been **removed**.

**New approach:**

* Markdown files should now live directly inside:

```
src/pages/
```

* They use `ContentLayout.astro` as their layout.

Example:

```
src/pages/about.md
src/layouts/ContentLayout.astro
```

This follows Astro's **standard Markdown page pattern** and simplifies the project structure.
