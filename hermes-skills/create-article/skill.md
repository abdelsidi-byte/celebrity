# Create Article Skill

## Description
Generates and publishes a celebrity news article to the Style & Society CMS using AI.

## Parameters
- `topic` (string, required): The article topic or headline
- `category` (string, optional): Category name (Celebrity, Movies, TV, Music, Fashion, Royals). Default: Celebrity
- `tags` (string[], optional): Array of tag strings
- `image_url` (string, optional): Featured image URL
- `author_id` (string, required): The author's UUID from authors table

## Usage
```
create_article(
  topic="Taylor Swift announces new world tour dates for 2026",
  category="Music",
  tags=["Taylor Swift", "concert", "tour", "music"],
  author_id="your-author-uuid"
)
```

## Output
Returns the created article object with ID, slug, and all fields.

## Implementation
Calls `/api/hermes/create-article` endpoint which:
1. Generates article content via Claude AI
2. Creates SEO metadata
3. Calculates read time
4. Generates slug
5. Inserts into Supabase `articles` table
6. Returns full article object
