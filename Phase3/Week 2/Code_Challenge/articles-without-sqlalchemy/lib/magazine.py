class Magazine:
    _magazines = []

    def __init__(self, name, category):
        if not isinstance(name, str) or not isinstance(category, str) or len(name) < 2 or len(name) > 16 or len(category) == 0:
            raise ValueError("Invalid input for name or category.")
        self._name = name
        self._category = category
        self._articles = []
        Magazine._magazines.append(self)

    @property
    def name(self):
        return self._name

    @property
    def category(self):
        return self._category

    def get_article_titles(self):
        return [article.title for article in self._articles]

    def contributing_authors(self):
        authors = {}
        for article in self._articles:
            if article.author.name in authors:
                authors[article.author.name] += 1
            else:
                authors[article.author.name] = 1
        return [author for author, count in authors.items() if count > 2]

    def add_article(self, author, title):
        if not isinstance(author, Author) or not isinstance(title, str) or len(title) < 5 or len(title) > 50:
            raise ValueError("Invalid author or title.")
        article = Article(author, self, title)
        self._articles.append(article)
        return article