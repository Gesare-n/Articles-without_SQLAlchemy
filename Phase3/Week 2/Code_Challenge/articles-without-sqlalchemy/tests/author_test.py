import unittest
from author import Author
from magazine import Magazine

class TestAuthor(unittest.TestCase):
    def setUp(self):
        #  instances needed for testing
        self.author = Author"Nicole Onyiego")
        self.magazine = Magazine("Tech Magazine", "Technology")

    def test_author_creation(self):
        self.assertEqual(self.author.name,"Nicole Onyiego")
        self.assertEqual(self.author.articles, [])

    def test_add_article(self):
        article = self.author.add_article(self.magazine, "Python Programming")
        self.assertEqual(len(self.author.articles), 1)
        self.assertIn(article, self.author.articles)
        self.assertEqual(article.title, "Python Programming")
        self.assertEqual(article.author, self.author)
        self.assertEqual(article.magazine, self.magazine)

if __name__ == '__main__':
    unittest.main()
