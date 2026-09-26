import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

const industryData: Record<string, {
  name: string;
  headline: string;
  intro: string;
  context: string;
  challenges: string[];
  solutions: { title: string; desc: string }[];
  services: string[];
  cta: string;
}> = {
  'real-estate': {
    name: 'Real Estate',
    headline: 'Property technology that works like your business.',
    intro: 'Property businesses deal with large databases of listings, long client relationships, multi-stage transactions and complex team coordination â€” all at the same time.',
    context: 'The tools most property businesses use weren\'t built for how estate agencies and developers actually operate. We build platforms around your exact workflow.',
    challenges: [
      'Managing thousands of property listings across multiple databases',
      'Tracking client relationships through long, multi-stage sales cycles',
      'Coordinating viewings, valuations and team calendars',
      'Managing vendor, buyer and tenant communications',
      'Compliance documentation and audit trails',
    ],
    solutions: [
      { title: 'Property CRM', desc: 'A CRM built around property sales cycles â€” with leads, properties, viewings and offers managed in one place.' },
      { title: 'Client Portals', desc: 'Secure portals where vendors and buyers can track progress, view documents and communicate.' },
      { title: 'Property Management Platforms', desc: 'Systems for managing rental portfolios, tenants, maintenance and financials.' },
      { title: 'Operations Dashboards', desc: 'Visibility across your team\'s pipeline, performance and operations in real time.' },
    ],
    services: ['CRM Development', 'Web Applications', 'Custom Software', 'API Integrations'],
    cta: 'Build a property technology platform',
  },
  'construction': {
    name: 'Construction',
    headline: 'Operations software for complex project environments.',
    intro: 'Construction firms manage multi-site projects, subcontractors, compliance requirements and tight cost margins â€” often with tools that weren\'t built for the job.',
    context: 'The right software reduces administrative overhead, improves project visibility and keeps compliance documentation in order.',
    challenges: [
      'Tracking project costs across multiple sites and phases',
      'Managing subcontractors, certifications and compliance documents',
      'Providing clients with accurate project progress updates',
      'Health & safety documentation and incident tracking',
      'Tender management and project pipeline visibility',
    ],
    solutions: [
      { title: 'Project Management Systems', desc: 'Track tasks, costs, milestones and team activity across all active projects.' },
      { title: 'Compliance Documentation', desc: 'Centralise certifications, H&S records and audit trails in a secure, accessible system.' },
      { title: 'Client Reporting Portals', desc: 'Give clients real-time visibility into their project without exposing internal operations.' },
      { title: 'Subcontractor Management', desc: 'Track subcontractor agreements, documents and work progress from a single interface.' },
    ],
    services: ['Custom Software', 'Web Applications', 'Business Automation', 'API Integrations'],
    cta: 'Build your construction operations platform',
  },
  'finance': {
    name: 'Finance',
    headline: 'Precise, secure and auditable financial software.',
    intro: 'Financial services businesses require software that is accurate, secure, compliant and easy for both staff and clients to use.',
    context: 'We build systems that meet the operational and compliance requirements of financial services, without the overhead of enterprise platforms built for much larger organisations.',
    challenges: [
      'Regulatory compliance, audit trails and reporting obligations',
      'Secure client data storage and access management',
      'Portfolio and account visibility for advisors and clients',
      'Onboarding and KYC documentation processes',
      'Reporting accuracy and automation',
    ],
    solutions: [
      { title: 'Secure Client Portals', desc: 'Authenticated portals where clients access account information, documents and communications.' },
      { title: 'Compliance Systems', desc: 'Manage KYC, AML and regulatory documentation with audit trails and workflow automation.' },
      { title: 'Reporting Dashboards', desc: 'Management and client-facing reporting built around your specific metrics and obligations.' },
      { title: 'Onboarding Workflows', desc: 'Streamlined digital onboarding for new clients, reducing manual steps and documentation delays.' },
    ],
    services: ['Custom Software', 'Web Applications', 'Business Automation', 'API Integrations'],
    cta: 'Build your financial operations platform',
  },
  'healthcare': {
    name: 'Healthcare',
    headline: 'Reliable software for healthcare operations.',
    intro: 'Healthcare providers need software that is reliable, secure and makes their operational complexity easier to manage â€” for both staff and patients.',
    context: 'We build healthcare operations software with the appropriate security, data handling and usability standards these environments require.',
    challenges: [
      'Secure management of patient records and clinical data',
      'Appointment scheduling across multiple practitioners and locations',
      'Cross-team communication and task management',
      'Compliance with data protection and healthcare regulations',
      'Reporting for clinical and operational purposes',
    ],
    solutions: [
      { title: 'Patient Management Systems', desc: 'Centralised, secure systems for managing patient records, appointments and communications.' },
      { title: 'Booking & Scheduling', desc: 'Online and internal booking systems with practitioner calendars, reminders and confirmation.' },
      { title: 'Staff Operations Tools', desc: 'Internal platforms for task management, communication and shift coordination.' },
      { title: 'Reporting & Compliance', desc: 'Operational and clinical reporting built around your specific documentation requirements.' },
    ],
    services: ['Custom Software', 'Web Applications', 'Business Automation', 'CRM Development'],
    cta: 'Build your healthcare operations platform',
  },
  'logistics': {
    name: 'Logistics',
    headline: 'Operations visibility for logistics businesses.',
    intro: 'Logistics businesses depend on real-time visibility â€” of shipments, vehicles, warehouses and delivery status â€” to operate efficiently and keep customers informed.',
    context: 'We build operations platforms that give logistics teams the visibility and control they need, integrated with the systems and data sources already in place.',
    challenges: [
      'Real-time visibility of shipments and delivery status',
      'Fleet management and route optimisation',
      'Warehouse capacity and inventory management',
      'Customer delivery communication and tracking',
      'Driver coordination and dispatch',
    ],
    solutions: [
      { title: 'Operations Dashboards', desc: 'Central visibility over your shipments, drivers, fleet and warehouse in real time.' },
      { title: 'Tracking Platforms', desc: 'Customer-facing and internal shipment tracking with status updates and notifications.' },
      { title: 'Driver & Dispatch Tools', desc: 'Mobile-accessible tools for drivers and dispatch teams to manage routes and deliveries.' },
      { title: 'System Integrations', desc: 'Connect your logistics platform with warehouse systems, carriers and customer tools.' },
    ],
    services: ['Custom Software', 'Web Applications', 'API Integrations', 'Business Automation'],
    cta: 'Build your logistics operations platform',
  },
  'retail': {
    name: 'Retail',
    headline: 'Retail software that connects your operations.',
    intro: 'Modern retail businesses need tools that connect their online channels, physical stores, inventory and customer relationships in a coherent operational picture.',
    context: 'We build retail platforms that unify your channels and give your team the tools to manage products, customers and operations efficiently.',
    challenges: [
      'Inventory management across online and physical channels',
      'Customer loyalty, CRM and repeat purchase management',
      'Order management, fulfilment and returns',
      'Point-of-sale and online channel integration',
      'Supplier management and purchase orders',
    ],
    solutions: [
      { title: 'Custom E-commerce Platforms', desc: 'Storefronts built around your product catalog, brand and commercial model.' },
      { title: 'Inventory Management', desc: 'Real-time stock visibility across channels, with low-stock alerts and supplier orders.' },
      { title: 'Retail CRM', desc: 'Customer purchase history, loyalty management and segmented communications.' },
      { title: 'Operations Dashboard', desc: 'A central view of orders, stock, suppliers and performance metrics for your team.' },
    ],
    services: ['E-commerce', 'CRM Development', 'Custom Software', 'API Integrations'],
    cta: 'Build your retail technology platform',
  },
  'education': {
    name: 'Education',
    headline: 'Education platforms that work for learners and administrators.',
    intro: 'Education providers need platforms that manage course delivery, student progress, assessments and administrative operations without adding unnecessary complexity.',
    context: 'We build education platforms around the actual delivery and administration model of your institution or training provider.',
    challenges: [
      'Managing course content, enrollment and student progress',
      'Assessment and results tracking',
      'Administrative complexity across multiple programmes',
      'Student and parent communication',
      'Compliance and record-keeping obligations',
    ],
    solutions: [
      { title: 'Learning Management Systems', desc: 'Course delivery, content management and student progress tracking in a single platform.' },
      { title: 'Student Portals', desc: 'Authenticated portals where students access their courses, assessments and grades.' },
      { title: 'Admin Operations Tools', desc: 'Internal systems for enrollment management, scheduling and staff coordination.' },
      { title: 'Communication Platforms', desc: 'Automated and manual communication tools for students, parents and stakeholders.' },
    ],
    services: ['Custom Software', 'Web Applications', 'Business Automation', 'CRM Development'],
    cta: 'Build your education platform',
  },
  'professional-services': {
    name: 'Professional Services',
    headline: 'Software for practices that run on client relationships.',
    intro: 'Consultancies, agencies and professional practices run on client relationships, project delivery and billing accuracy. The right software makes all three easier to manage.',
    context: 'We build business software for professional services firms that need more than a spreadsheet but don\'t want to pay enterprise software prices for tools that only half-fit.',
    challenges: [
      'Tracking project time, costs and profitability across clients',
      'Managing client relationships and account history',
      'Accurate billing, invoicing and revenue reporting',
      'Team capacity planning and task assignment',
      'Client reporting and communication',
    ],
    solutions: [
      { title: 'Custom CRM', desc: 'Client management built around how your practice manages relationships and accounts.' },
      { title: 'Project Management', desc: 'Time tracking, task management and project visibility across your team.' },
      { title: 'Billing & Reporting', desc: 'Accurate billing, invoice management and financial reporting for your practice.' },
      { title: 'Client Portals', desc: 'Secure spaces where clients access project updates, documents and communications.' },
    ],
    services: ['CRM Development', 'Custom Software', 'Web Applications', 'Business Automation'],
    cta: 'Build your practice management system',
  },
  'ecommerce': {
    name: 'E-commerce',
    headline: 'More than a storefront â€” the infrastructure behind it.',
    intro: 'Online retailers need more than a product listing and a payment button. They need the operational infrastructure â€” inventory, orders, fulfilment, customers â€” all working together.',
    context: 'We build e-commerce platforms and the operational systems behind them, designed around your specific commercial model.',
    challenges: [
      'Storefront performance and conversion optimisation',
      'Inventory management and fulfilment integration',
      'Customer account management and retention',
      'Returns, refunds and post-purchase operations',
      'Analytics, attribution and reporting',
    ],
    solutions: [
      { title: 'Custom E-commerce Platforms', desc: 'Storefronts designed for your brand, catalog and commercial model.' },
      { title: 'Operations Infrastructure', desc: 'Admin tools for order management, fulfilment and customer service.' },
      { title: 'Integrations', desc: 'Connect with payment gateways, logistics partners and marketing platforms.' },
      { title: 'Customer Management', desc: 'Loyalty, CRM and retention tools for post-purchase customer relationships.' },
    ],
    services: ['E-commerce', 'Custom Software', 'API Integrations', 'Business Automation'],
    cta: 'Build your e-commerce platform',
  },
  'startups': {
    name: 'Startups',
    headline: 'Build the right thing. Build it to scale.',
    intro: 'Startups need to move fast, validate ideas quickly and build on a foundation that won\'t require a complete rewrite when the product takes off.',
    context: 'We work with early and growth-stage companies to build MVPs, SaaS platforms and digital products â€” with architecture decisions made for where you\'re going, not just where you are.',
    challenges: [
      'Building fast without wasting limited budget on the wrong things',
      'Validating product assumptions before over-engineering',
      'Building an architecture that can scale as users grow',
      'Making the right technology choices early',
      'Balancing speed of delivery with code quality',
    ],
    solutions: [
      { title: 'MVP Development', desc: 'A focused, working product that tests your core assumptions without unnecessary features.' },
      { title: 'SaaS Product Development', desc: 'Full product development from authentication and billing to user dashboards and APIs.' },
      { title: 'Technical Strategy', desc: 'Architecture, technology stack and product roadmap advice from engineers with startup experience.' },
      { title: 'Scaling Support', desc: 'Ongoing development as your product grows â€” new features, performance and maintenance.' },
    ],
    services: ['SaaS Development', 'Custom Software', 'Web Applications', 'API Integrations'],
    cta: 'Start building your product',
  },
}

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const data = industryData[slug || '']

  if (!data) {
    return (
      <PageTransition title="Industry Not Found | SwasTek Solutions">
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Industry not found</h1>
          <Link to="/industries" className="btn-primary mt-6 inline-flex">View all industries <ArrowUpRight size={14} /></Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition title={`${data.name} Software Solutions | SwasTek Solutions`} description={data.intro}>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-blue-600" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
              <ArrowLeft size={14} /> Industries
            </Link>
            <p className="section-label">{data.name}</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              {data.headline}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mb-4" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              {data.intro}
            </p>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
              {data.context}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeUp>
              <p className="section-label">Common challenges</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                What {data.name} businesses need to solve.
              </h2>
              <ul className="space-y-3">
                {data.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#1860D4' }} />
                    {c}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <div>
              <FadeUp delay={0.1}>
                <p className="section-label">What we build</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                  Our solutions for {data.name}.
                </h2>
              </FadeUp>
              <div className="space-y-4">
                {data.solutions.map((s, i) => (
                  <FadeUp key={s.title} delay={i * 0.07}>
                    <div className="p-5 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                      <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{s.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Relevant services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Services we typically apply.
            </h2>
          </FadeUp>
          <div className="flex flex-wrap gap-3">
            {data.services.map((s) => (
              <div key={s} className="px-5 py-2.5 rounded-full border text-sm font-semibold" style={{ borderColor: '#E4EDF7', color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            {data.cta}.
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
            Tell us about your business and what you're trying to build.
          </p>
          <Link to="/contact" data-cta className="btn-primary-white">
            Start the conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

