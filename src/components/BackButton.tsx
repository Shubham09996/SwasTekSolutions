import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  fallback?: string
  label?: string
  className?: string
}

export default function BackButton({ fallback, label = 'Back', className = '' }: BackButtonProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else if (fallback) {
      navigate(fallback)
    } else {
      if (location.pathname.startsWith('/services/')) navigate('/services')
      else if (location.pathname.startsWith('/industries/')) navigate('/industries')
      else if (location.pathname.startsWith('/work/')) navigate('/work')
      else if (location.pathname.startsWith('/insights/')) navigate('/insights')
      else navigate('/')
    }
  }

  return (
    <div className={`mb-2 sm:mb-3 ${className}`}>
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-all cursor-pointer group shadow-xs active:scale-95"
        aria-label={label}
      >
        <ArrowLeft size={13} className="text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
        <span>{label}</span>
      </button>
    </div>
  )
}

