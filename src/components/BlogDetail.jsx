import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../sanity'
import { ChevronLeft, Calendar, Clock, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Globe } from 'lucide-react'

// ============================================
// EDIT DATA AUTHOR / PENULIS DI BAWAH INI:
// ============================================
const AUTHOR_CONFIG = {
  nama: 'Mas Dewa',
  role: 'Web Developer & Content Writer',
  bio: 'Web developer dan content writer yang tertarik menggabungkan teknologi dan storytelling untuk menciptakan pengalaman digital yang bermakna.',
  foto: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1776485334/Porto_Mas_Dewa_fynaxv.png',
  social: {
    facebook: 'https://facebook.com/digilabs',
    instagram: 'https://instagram.com/digilabs',
    linkedin: 'https://linkedin.com/company/digilabs',
    twitter: 'https://twitter.com/digilabs',
    website: 'https://digilabs.co.id'
  }
}
// ============================================

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        content,
        publishedAt,
        featuredImage,
        excerpt,
        author->{
          name,
          image,
          bio,
          role
        },
        "category": category->title
      }
    `, { slug }).then((data) => {
      setPost(data)
      setLoading(false)
    }).catch((err) => {
      console.error('Error fetching post:', err)
      setLoading(false)
    })
  }, [slug])

  useEffect(() => {
    if (!loading && post) {
      window.scrollTo(0, 0)
    }
  }, [loading, post])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          <p className="text-gray-500 text-sm">Memuat...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-24">
        <div className="text-center px-4">
          <div className="w-20 h-20 mx-auto mb-5 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">📄</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h1>
          <p className="text-gray-500 mb-6">Artikel yang Anda cari tidak tersedia.</p>
          <Link to="/blog" className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali
          </Link>
        </div>
      </div>
    )
  }

  const renderContent = (content) => {
    if (!content) return null
    return content.map((block, index) => {
      if (block._type === 'block') {
        // Render text with formatting (bold, italic, etc.)
        const renderText = (children) => {
          if (!children) return null
          return children.map((child, i) => {
            const text = child.text
            const marks = child.marks || []
            if (marks.includes('strong') || marks.includes('bold')) {
              return <strong key={i}>{text}</strong>
            }
            if (marks.includes('em') || marks.includes('italic')) {
              return <em key={i}>{text}</em>
            }
            if (marks.includes('underline')) {
              return <u key={i}>{text}</u>
            }
            if (marks.includes('strike-through')) {
              return <s key={i}>{text}</s>
            }
            if (marks.includes('code')) {
              return <code key={i} className="bg-gray-100 px-1 rounded text-sm">{text}</code>
            }
            return text
          })
        }

        const children = renderText(block.children)

        // Handle list items and styling
        const listItem = block.listItem
        if (listItem) {
          const ListTag = block.style === 'numbered' ? 'ol' : 'ul'
          return (
            <li key={index} className="text-gray-700 leading-7 ml-4 pl-2">
              {children}
            </li>
          )
        }

        switch (block.style) {
          case 'h1':
            return <h1 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h1>
          case 'h2':
            return <h2 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">{children}</h2>
          case 'h3':
            return <h3 key={index} className="text-lg font-semibold text-gray-900 mb-2 mt-5">{children}</h3>
          case 'blockquote':
            return (
              <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-6 bg-gray-50 rounded-r">
                <p className="text-gray-700 italic">{children}</p>
              </blockquote>
            )
          default:
            return <p key={index} className="text-gray-700 leading-7 mb-5">{children}</p>
        }
      }
      if (block._type === 'image') {
        return (
          <figure key={index} className="my-8">
            <img src={urlFor(block.asset).width(900).url()} alt={block.alt || ''} className="w-full rounded-lg" />
            {block.caption && <figcaption className="mt-2 text-sm text-gray-500 text-center">{block.caption}</figcaption>}
          </figure>
        )
      }
      return null
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Featured Image as Background */}
      <div className="relative h-[70vh] min-h-125">
        {/* Featured Image Background */}
        {post.featuredImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${urlFor(post.featuredImage).width(1920).url()})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-700" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

        {/* Back Link */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-6">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Blog
          </Link>
        </div>

        {/* Title at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-3xl mx-auto px-4">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-white/80 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 menit baca
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-base leading-7">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Author Section */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="border-t border-gray-200 pt-8">
          {/* Avatar - Full width on mobile */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-5">
            <div className="shrink-0">
              {post.author?.image ? (
                <img src={urlFor(post.author.image).width(100).url()} alt={post.author.name} className="w-24 h-24 rounded-lg object-cover shadow-sm" />
              ) : (
                <img
                  src={AUTHOR_CONFIG.foto}
                  alt="Author"
                  className="w-24 h-24 rounded-lg object-cover shadow-sm"
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg">{post.author?.name || AUTHOR_CONFIG.nama}</p>

              {/* Bio */}
              <p className="text-gray-600 text-sm mt-1">
                {post.author?.bio || AUTHOR_CONFIG.bio}
              </p>

              {/* Social Media */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
                <a href={AUTHOR_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={AUTHOR_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={AUTHOR_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={AUTHOR_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={AUTHOR_CONFIG.social.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Baca artikel lainnya?</h3>
          <p className="text-blue-100 text-sm mb-5">Temukan lebih banyak artikel menarik di blog kami.</p>
          <Link to="/blog" className="inline-flex items-center px-6 py-2.5 bg-white text-primary text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}