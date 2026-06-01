# Publish Article Skill

## Description
Publishes a generated article to the Style & Society CMS database.

## Endpoint
```
POST https://your-site.com/api/hermes/insert-article
```

## Parameters
- `title` (string, required): Article headline
- `content` (string, required): Full article body (markdown supported)
- `excerpt` (string, optional): Short summary for previews
- `category` (string, optional): Celebrity, Movies, TV, Music, Fashion, Royals
- `tags` (string[], optional): Array of tag strings
- `image_url` (string, optional): Featured image URL
- `author_id` (string, required): Author UUID
- `status` (string, optional): "published" or "draft"

## Example Usage in Hermes

### Step 1: Generate content with Claude
```
Use Claude to write a celebrity news article about [topic]
```

### Step 2: Publish to CMS
```
Call publish_article with:
  title: "Generated Headline"
  content: "Full article text from Claude..."
  category: "Celebrity"
  tags: ["tag1", "tag2"]
  author_id: "ea2570c6-1051-47ab-84a5-1eee2f7773a1"
```

## Hermes Configuration

Add to your Hermes skills configuration:

```yaml
skills:
  - name: publish_article
    description: Publish article to Style & Society CMS
    endpoint: https://your-site.com/api/hermes/insert-article
    method: POST
    headers:
      Content-Type: application/json
    body_template:
      title: "{{title}}"
      content: "{{content}}"
      excerpt: "{{excerpt}}"
      category: "{{category}}"
      tags: "{{tags}}"
      author_id: "{{author_id}}"
```

## Response
```json
{
  "success": true,
  "article": { ... },
  "url": "/news/article-slug-here"
}
```
