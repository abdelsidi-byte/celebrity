#!/usr/bin/env python3
"""
Hermes Agent Skill: Create Article
===================================
Place this file in your Hermes skills directory.

Usage in Hermes:
  >> create_article("Taylor Swift new album announcement", "Music", ["Taylor Swift", "album"])

Or via API call to this server:
  POST /api/hermes/create-article
"""

import aiohttp
import json
from typing import List, Optional

SUPABASE_URL = "https://akcdfdwhakvivefhxctk.supabase.co"
# Note: In production, use proper auth. This is for Hermes local agent.
ANON_KEY = "sb_publishable_7NjGnQtcykuuPWsar-mfXQ_llUPm6lj"


async def create_article(
    topic: str,
    category: str = "Celebrity",
    tags: Optional[List[str]] = None,
    image_url: Optional[str] = None,
    author_id: str = "ea2570c6-1051-47ab-84a5-1eee2f7773a1"  # Default author
) -> dict:
    """
    Create a new article using AI generation.

    Args:
        topic: Article topic or headline
        category: Category (Celebrity, Movies, TV, Music, Fashion, Royals)
        tags: List of tag strings
        image_url: Optional featured image URL
        author_id: Author UUID from authors table

    Returns:
        dict: Created article with all fields
    """
    url = f"{SUPABASE_URL}/functions/v1/hermes-create-article"

    payload = {
        "topic": topic,
        "category": category,
        "tags": tags or [],
        "image_url": image_url,
        "author_id": author_id
    }

    async with aiohttp.ClientSession() as session:
        async with session.post(
            url,
            json=payload,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {ANON_KEY}"
            }
        ) as response:
            result = await response.json()

            if response.status != 200:
                raise Exception(f"Failed to create article: {result.get('error', result)}")

            return result


# Alternative: Direct API call via curl/HTTP
"""
POST /api/hermes/create-article

{
  "topic": "Princess Kate's Royal Foundation Announces New Mental Health Initiative",
  "category": "Royals",
  "tags": ["Kate Middleton", "royal family", "mental health", "charity"],
  "author_id": "ea2570c6-1051-47ab-84a5-1eee2f7773a1",
  "image_url": "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
}

Response:
{
  "success": true,
  "article": { ... full article object ... },
  "message": "Article '...' created successfully"
}
"""


if __name__ == "__main__":
    import asyncio

    async def test():
        result = await create_article(
            topic="Jennifer Lopez Announces Las Vegas Residency for 2026",
            category="Celebrity",
            tags=["Jennifer Lopez", "Las Vegas", "residency", "concert"]
        )
        print(json.dumps(result, indent=2))

    asyncio.run(test())
