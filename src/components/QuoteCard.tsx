interface QuoteCardProps {
  text: string
  author: string
}

function QuoteCard({ text, author }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <h3>💡 Daily Quote</h3>
      <blockquote className="quote-text">"{text}"</blockquote>
      <p className="quote-author">— {author}</p>
    </div>
  )
}

export default QuoteCard
