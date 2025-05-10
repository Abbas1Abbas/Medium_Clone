/app
│
├── page.tsx                  → Home page `/`
├── login
│   └── page.tsx             → `/login`
├── signup
│   └── page.tsx             → `/signup`
├── profile
│   ├── [username]
│   │   └── page.tsx         → `/profile/[username]`
│   └── myblogs
│       └── page.tsx         → `/profile/myblogs`
├── blog
│   ├── page.tsx             → `/blog` (grid of all blogs)
│   ├── create
│   │   └── page.tsx         → `/blog/create`
│   ├── edit
│   │   └── [slug]
│   │       └── page.tsx     → `/blog/edit/[slug]`
│   └── [slug]
│       └── page.tsx         → `/blog/[slug]` (single blog with comments)