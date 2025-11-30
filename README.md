# Sri Lanka School Documents – Next.js site

Simple Next.js website for students and teachers to **download documents for Grade 1 to A/L**.

## 1. Install dependencies

Open PowerShell in this folder (`studnets web`) and run:

```bash
npm install
```

This will download Next.js and React.

## 2. Run the website in development

```bash
npm run dev
```

Then open your browser and go to:

`http://localhost:3000`

You will see:

- a **home page** with cards for:
  - Grade 1 – 5
  - Grade 6 – 9
  - O/L
  - A/L
- a **grade page** showing subjects and example download buttons.

## 3. Add your real PDF documents

1. Create a folder: `public/docs`
2. Copy your PDF files there, for example:
   - `public/docs/grade1-maths.pdf`
   - `public/docs/ol-science-paper-2023.pdf`
3. Edit the file: `pages/grade/[id].js`
4. Change the `href="#"` to your real paths, for example:

```jsx
<a className="button secondary" href="/docs/grade1-maths.pdf">
  Download PDF
</a>
```

## 4. Build for production (optional)

When you are ready to deploy:

```bash
npm run build
npm start
```

You can also deploy for free on Vercel (the official Next.js hosting).




