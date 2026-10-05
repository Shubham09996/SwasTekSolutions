import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  )
}

export default function Ecommerce() {
  return (
    <PageTransition title="E-commerce Development | SwasTek Solutions" description="Custom storefronts, checkout flows, product management and order systems built to your exact commercial model.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">E-commerce Development</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Storefronts built around the way you sell.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Custom e-commerce platforms, product catalogs, checkout experiences and order management systems built to fit your exact commercial model â€” not a template's limitations.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Build My Store <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">What we build</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Every layer of your online store.</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Custom Storefront', desc: 'Designed for your brand, not for a template library.' },
              { title: 'Product Catalog', desc: 'Categories, variants, filtering and search that works.' },
              { title: 'Checkout', desc: 'Fast, secure checkout flows with payment gateway integration.' },
              { title: 'Order Management', desc: 'Admin tools for managing orders, fulfilment and customers.' },
              { title: 'Customer Accounts', desc: 'Order history, saved addresses and account management.' },
              { title: 'Inventory', desc: 'Stock tracking, low-stock alerts and supplier integrations.' },
              { title: 'Promotions', desc: 'Discount codes, offers and campaign management tools.' },
              { title: 'Analytics', desc: 'Sales reports, conversion tracking and customer insights.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="p-5 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Ready to build your store?</h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us about your products, your customers and your commercial model.</p>
          <Link to="/contact" data-cta className="btn-primary-white">Start the Conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

