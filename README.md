# Ticket Stand

A film discovery app — browse what's popular, search the catalogue, watch
trailers, and rate what you've seen.

**Live at [ticket-stand-q3bd.vercel.app](https://ticket-stand-q3bd.vercel.app)**

## Screenshots

**[FILL: two or three. The app is live and looks good — show it.]**

## Features

**[FILL: trim this list to what actually ships. Each item is inferred from the
dependencies, so verify before keeping:]**

- Browse films by category and popularity
- Search across the catalogue
- In-app trailer playback
- Rate and review films
- Account sign-in with session persistence
- Carousel browsing and responsive layouts throughout

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js with TypeScript |
| UI | Material UI with Emotion |
| Server state | TanStack React Query |
| HTTP | Axios |
| Forms | React Hook Form |
| Media | React Player |
| Sessions | js-cookie |
| Feedback | React Toastify |
| Carousels | Swiper |
| Hosting | Vercel |

**Data source — [FILL: name the API, almost certainly TMDB. Credit it; most
film APIs require attribution in their terms.]**

## Running locally

```bash
git clone https://github.com/BerlinTheWall/ticket-stand.git
cd ticket-stand
npm install
cp .env.example .env.local    # [FILL: add a .env.example with variable names and no values]
npm run dev
```

Then open http://localhost:3000.

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the film data API |
| `NEXT_PUBLIC_API_KEY` | **[FILL: what this authenticates]** |
| `NEXT_PUBLIC_API_CODE` | **[FILL: what this is for]** |

Note that `NEXT_PUBLIC_` variables are bundled into the client and visible to
anyone using the site. Use keys scoped for public read access only.

## Notes

**[FILL: what was hard, what you'd change, what you learned. React Query caching
strategy, or handling a paginated third-party API, or how you structured the
component hierarchy — anything specific beats nothing.]**
