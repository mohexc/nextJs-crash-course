import stylesArticle from '../styles/Header.module.css'
import ArticleItem from '../components/ArticleItem'

const ArticleList = ({ articles }) => {
  return (
    <div className={stylesArticle.grid}>
      {articles.map(article => <ArticleItem key={article.title} article={article} />)}

    </div>
  )
}

export default ArticleList
