import PageTransition from '../components/PageTransition'

export default function Terms() {
  return (
    <PageTransition title="Terms of Use | SwasTek Solutions" description="SwasTek Solutions terms of use for our website and services.">
      <section className="pt-32 pb-20 bg-white">
        <div className="container-tight">
          <h1 className="font-heading text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Terms of Use</h1>
          <p className="text-sm mb-12" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Last updated: September 2026</p>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>1. Use of this website</h2>
              <p>By accessing this website, you agree to these terms. This website is operated by SwasTek Solutions. The content is for general information purposes. We reserve the right to modify or discontinue any part of this website without notice.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>2. Intellectual property</h2>
              <p>All content on this website â€” including text, images, design elements and code â€” is the property of SwasTek Solutions unless otherwise stated. You may not reproduce, distribute or use any content without prior written permission.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>3. Limitation of liability</h2>
              <p>SwasTek Solutions is not liable for any losses arising from your use of this website or reliance on its content. The website is provided "as is" without warranties of any kind.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>4. Links to other websites</h2>
              <p>This website may contain links to third-party websites. We are not responsible for the content or practices of those sites.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>5. Governing law</h2>
              <p>These terms are governed by applicable law. Any disputes will be subject to the jurisdiction of the courts in the relevant territory.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>6. Contact</h2>
              <p>For questions about these terms, contact us at hello@swastek.com.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

