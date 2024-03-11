import unittest
from author import Author
from magazine import Magazine
from article import Article

class TestArticle(unittest.TestCase):
    def setUp(self):
    
        self.author = Author("Nicole")
        self.magazine = Magazine("Tech Magazine", "Technology")

    def test_article_creation(self):
        article = Article(self.author, self.magazine, "Python Programming")
        self.assertEqual(article.title, "Python Programming")
        self.assertEqual(article.author, self.author)
        self.assertEqual(article.magazine, self.magazine)

if __name__ == '__main__':
    unittest.main()
