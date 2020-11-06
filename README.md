# Angular + Scully + Tailwind = 🚀

Jamstack [Angular](https://angular.io) app with [Scully](https://scully.io) and styled with [Tailwind CSS](https://tailwindcss.com).

Learn more about [Angular 10 with Tailwind CSS](https://notiz.dev/blog/angular-10-with-tailwindcss) and [Angular Tailwind CSS Schematics](https://github.com/notiz-dev/ngx-tailwind).

[Demo](https://angular-scully-tailwindcss.web.app/blog) of this blog is deployed to Firebase Hosting. Read about how to deploy it to [Firebase Hosting: Preview and Deploy via GitHub Actions](https://notiz.dev/blog/firebase-hosting-preview-deploy).

## Getting Started

```bash
npm i

npm run build:prod

npm run scully

npm run scully:serve
```

Open your favorite browser and go to [localhost:1668/](http://localhost:1668/) for the Scully static server and [localhost:1864/](http://localhost:1864/) for the Angular server.

## New Blog post

[Creating](https://scully.io/docs/learn/create-a-blog/generate-new-blog-posts/) new blog post for Scully:

```bash
ng generate @scullyio/init:post --name="Cool post"
```
