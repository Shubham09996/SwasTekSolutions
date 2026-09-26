import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import WebDevelopment from './pages/services/WebDevelopment'
import CustomSoftware from './pages/services/CustomSoftware'
import CRMDevelopment from './pages/services/CRMDevelopment'
import SaaSDevelopment from './pages/services/SaaSDevelopment'
import WebApplications from './pages/services/WebApplications'
import BusinessAutomation from './pages/services/BusinessAutomation'
import ApiIntegrations from './pages/services/ApiIntegrations'
import Ecommerce from './pages/services/Ecommerce'
import AiSolutions from './pages/services/AiSolutions'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Process from './pages/Process'
import About from './pages/About'
import Insights from './pages/Insights'
import Article from './pages/Article'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/crm-development" element={<CRMDevelopment />} />
          <Route path="/services/saas-development" element={<SaaSDevelopment />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/services/business-automation" element={<BusinessAutomation />} />
          <Route path="/services/api-integrations" element={<ApiIntegrations />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/ai-solutions" element={<AiSolutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
