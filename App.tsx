
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/photography" element={<PhotographyPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
