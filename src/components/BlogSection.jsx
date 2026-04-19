import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { client, urlFor } from '../sanity'

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "post"] | order(publishedAt desc)[0...3] {
            _id,
            title,
            slug,
            publishedAt,
            featuredImage,
            excerpt
          }`
        )
        console.log('Fetched posts:', data)
        setPosts(data || [])
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-6 bg-white rounded-b-lg">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-4 border border-blue-200">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Blog & Artikel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Baru dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Blog Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan artikel terbaru tentang pengembangan web, tips SEO, dan strategi digital untuk bisnis Anda
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-lg mb-4">Belum ada artikel.</p>
            {error && <p className="text-sm text-red-500">Error: {error}</p>}
            <p className="text-sm text-gray-400 mt-2">Buka console browser (F12) untuk melihat detail.</p>
          </div>
        ) : (
          <>
            {/* Blog Cards - 3 Kolom Sama Rata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 shrink-0">
                    {post.featuredImage ? (
                      <img
                        src={urlFor(post.featuredImage).width(400).height(250).url()}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <span className="text-4xl text-blue-300">📄</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col grow">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })
                        : ''}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {post.excerpt && (
                      <p className="text-gray-600 mb-3 line-clamp-2 text-sm grow">
                        {post.excerpt}
                      </p>
                    )}

                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors mt-auto"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Lihat Artikel Lainnya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default BlogSection