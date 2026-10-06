import PageTransition from '../components/PageTransition'

export default function Privacy() {
  return (
    <PageTransition title="Privacy Policy | SwasTek Solutions" description="SwasTek Solutions privacy policy â€” how we collect, use and protect your information.">
      <section className="pt-[74px] pb-10 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 bg-white">
        <div className="container-tight">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Privacy Policy</h1>
          <p className="text-xs sm:text-sm mb-6 sm:mb-12" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Last updated: September 2026</p>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>1. Who we are</h2>
              <p>SwasTek Solutions is a software development and digital solutions company. Our website address is swasteksolutions.com. If you have questions about this policy, contact us at info@swasteksolutions.com or swasteksolutions@gmail.com.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>2. What information we collect</h2>
              <p className="mb-3">We may collect the following information when you use our website or contact us:</p>
              <ul className="space-y-1.5 pl-4">
                <li className="list-disc">Your name, email address and company name when you submit a contact form.</li>
                <li className="list-disc">Information about the project or service you're enquiring about.</li>
                <li className="list-disc">Technical information such as your IP address and browser type, collected automatically for analytics purposes.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>3. How we use your information</h2>
              <p className="mb-3">We use the information you provide to:</p>
              <ul className="space-y-1.5 pl-4">
                <li className="list-disc">Respond to your enquiry or project request.</li>
                <li className="list-disc">Communicate with you about services you have requested.</li>
                <li className="list-disc">Improve our website and services based on aggregate usage data.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>4. Data storage and security</h2>
              <p>We take reasonable measures to protect the personal information you share with us. Your data is stored securely and is not sold, traded or rented to third parties.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>5. Your rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make such a request, contact us at info@swasteksolutions.com or swasteksolutions@gmail.com.</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>6. Updates to this policy</h2>
              <p>We may update this policy from time to time. The most current version will always be available on this page.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

