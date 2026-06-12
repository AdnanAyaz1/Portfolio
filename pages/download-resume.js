import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { HiArrowLeft, HiArrowDownTray } from 'react-icons/hi2';

const ATSResume = dynamic(() => import('../components/ATSResume'), { ssr: false });

const DownloadResume = () => {
  const resumeRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);

    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('Adnan_Ayaz_Resume.pdf');
    } catch (err) {
      console.error('PDF generation failed:', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Download Resume — Adnan Ayaz</title>
      </Head>
      <div className='min-h-screen bg-primary/30'>
        {/* Sticky header */}
        <div className='sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-4xl mx-auto px-4 py-3 flex items-center justify-between'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-300'
            >
              <HiArrowLeft className='text-base' />
              <span>Back</span>
            </Link>
            <h1 className='text-sm font-medium text-white/80 hidden sm:block'>Resume Preview</h1>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer disabled:cursor-not-allowed'
            >
              <HiArrowDownTray className='text-base' />
              {downloading ? 'Generating...' : 'Download PDF'}
            </button>
          </div>
        </div>

        {/* Resume */}
        <div className='max-w-4xl mx-auto px-4 py-8'>
          <div className='bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/5'>
            <ATSResume resumeRef={resumeRef} />
          </div>

          {/* Bottom CTA */}
          <div className='flex flex-col items-center gap-3 mt-8 mb-16'>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer disabled:cursor-not-allowed shadow-lg shadow-accent/20'
            >
              <HiArrowDownTray className='text-lg' />
              {downloading ? 'Generating PDF...' : 'Download as PDF'}
            </button>
            <p className='text-white/30 text-xs'>ATS-optimized &bull; Clean formatting &bull; One click download</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadResume;
