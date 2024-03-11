class Author:
    _authors = []

    def __init__(self, name):
        if not isinstance(name, str) or len(name) < 2 or len(name) > 30:
            raise ValueError("Name must be a string between 2 and 30 characters.")
        self._name = name
        self._articles = []
        Author._authors.append(self)

    @property
    def name(self):
        return self._name

    @property
    def articles(self):
        return self._articles

    def add_article(self, magazine, title):
        if not isinstance(magazine, Magazine) or not isinstance(title, str) or len(title) < 5 or len(title) > 50:
            raise ValueError("Invalid magazine or title.")
        article = Article(self, magazine, title)
        self._articles.append(article)
        return article
