import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import StudyAbroad from './pages/StudyAbroad'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import AdminLogin from './pages/admin/AdminLogin'
import AdminPanel from './pages/admin/AdminPanel'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes — no navbar/footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />

        {/* Public routes */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/study-abroad" element={<StudyAbroad />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
