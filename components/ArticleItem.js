import Link from 'next/link'
import stylesArticle from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`} >
      <div className={stylesArticle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  )
}

export default ArticleItem
