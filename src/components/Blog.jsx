import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../sanity'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

const SITE_URL = 'https://www.digilabkreasi.my.id'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // Update meta tags for Blog page
  useEffect(() => {
    const pageTitle = 'Blog & Artikel - Insights Terbaru | Digilabs Kreasi'
    const pageDescription = 'Temukan insight terbaru tentang pengembangan web, tips bisnis online, dan teknologi digital untuk memperkuat bisnis Anda. Artikel terbaru dari Digilabs Kreasi.'
    const canonicalUrl = `${SITE_URL}/blog`

    // Update title
    document.title = pageTitle

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', pageDescription)

    // Update Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    const ogDescTag = document.querySelector('meta[property="og:description"]')
    const ogImageTag = document.querySelector('meta[property="og:image"]')
    const ogUrlTag = document.querySelector('meta[property="og:url"]')

    if (ogTitleTag) ogTitleTag.setAttribute('content', pageTitle)
    if (ogDescTag) ogDescTag.setAttribute('content', pageDescription)
    if (ogImageTag) ogImageTag.setAttribute('content', 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1744975511/OG_Image_Digilabs_2_jpg_f8y4kc.jpg')
    if (ogUrlTag) ogUrlTag.setAttribute('content', canonicalUrl)

    // Update Twitter cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    const twitterUrl = document.querySelector('meta[name="twitter:url"]')

    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle)
    if (twitterDesc) twitterDesc.setAttribute('content', pageDescription)
    if (twitterImage) twitterImage.setAttribute('content', 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1744975511/OG_Image_Digilabs_2_jpg_f8y4kc.jpg')
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl)

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl)
  }, [])

  useEffect(() => {
    client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        featuredImage,
        excerpt,
        "category": category->title
      }
    `).then((data) => {
      setPosts(data)
      setLoading(false)
    }).catch((err) => {
      console.error('Error fetching posts:', err)
      setLoading(false)
    })
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-gray-500 font-medium">Memuat artikel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Modern & Clean */}
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
              Blog & Artikel
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Temukan Insight Terbaru
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Artikel Terbaru tentang pengembangan web, tips bisnis online, dan teknologi digital untuk memperkuat bisnis Anda.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Belum Ada Artikel</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Artikel akan segera hadir. Tambahkan artikel di Sanity Studio Anda.
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Artikel Tidak Ditemukan</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Tidak ada artikel yang matches dengan "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Artikel
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Featured Image */}
                <Link to={`/blog/${post.slug.current}`} className="block relative overflow-hidden">
                  {post.featuredImage ? (
                    <img
                      src={urlFor(post.featuredImage).width(500).height(300).url()}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-52 bg-linear-to-br from-primary/20 to-blue-100 flex items-center justify-center">
                      <span className="text-4xl">📄</span>
                    </div>
                  )}
                  {post.category && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    <Link to={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })
                          : '-'}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
                    >
                      Baca
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Info */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12 text-gray-500 text-sm">
            Menampilkan {filteredPosts.length} dari {posts.length} artikel
          </div>
        )}
      </section>
    </div>
  )
}