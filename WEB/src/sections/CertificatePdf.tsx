import { memo, useCallback, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString()

interface CertificatePdfProps {
  file: string
  pageNumber: number
  pageHeight: number
  loadingLabel: string
  errorLabel: string
  onPageCountChange: (count: number) => void
}

function CertificatePdf({
  file,
  pageNumber,
  pageHeight,
  loadingLabel,
  errorLabel,
  onPageCountChange,
}: CertificatePdfProps) {
  const [error, setError] = useState(false)
  const handleDocumentLoad = useCallback(
    ({ numPages }: { numPages: number }) => onPageCountChange(numPages),
    [onPageCountChange],
  )

  if (error) {
    return (
      <p role="alert" className="p-8 text-center text-sm text-fg-muted">
        {errorLabel}
      </p>
    )
  }

  return (
    <Document
      file={file}
      loading={<p className="p-8 text-center text-sm text-fg-muted">{loadingLabel}</p>}
      onLoadSuccess={handleDocumentLoad}
      onLoadError={() => setError(true)}
    >
      <Page
        pageNumber={pageNumber}
        height={pageHeight}
        renderTextLayer
        renderAnnotationLayer
        onRenderError={() => setError(true)}
      />
    </Document>
  )
}

export default memo(CertificatePdf)
