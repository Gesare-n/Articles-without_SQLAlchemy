import unittest
from magazine import Magazine
from author import Author
from article import Article

class TestMagazine(unittest.TestCase):
    def setUp(self):
        # Create instances needed for testing
        self.author = Author("John Doe")
        self.magazine = Magazine("Tech Magazine", "Technology")

    def test_magazine_creation(self):
        self.assertEqual(self.magazine.name, "Tech Magazine")
        self.assertEqual(self.magazine.category, "Technology")
        self.assertEqual(self.magazine.articles, [])

    def test_add_article(self):
        article = self.magazine.add_article(self.author, "Python Programming")
        self.assertEqual(len(self.magazine.articles), 1)
        self.assertIn(article, self.magazine.articles)
        self.assertEqual(article.title, "Python Programming")
        self.assertEqual(article.author, self.author)
        self.assertEqual(article.magazine, self.magazine)

if __name__ == '__main__':
    unittest.main()
