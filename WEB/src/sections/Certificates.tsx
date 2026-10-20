import { Suspense, lazy, useEffect, useRef, useState } from "react"
import { Icon, Panel, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import {
  CERTIFICATES,
  FULL_STACK_CREDENTIAL_URL,
  FULL_STACK_MICRO_CERTIFICATE_DOCUMENTS,
  OTHER_COURSE_DOCUMENT_GROUPS,
} from "@/data"
import { formatIndex } from "@/utils"

const CertificatePdf = lazy(() => import("./CertificatePdf"))

export default function Certificates() {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null)
  const [activeCourse, setActiveCourse] = useState<"full-stack" | "other-courses">(
    "full-stack",
  )
  const [showDocuments, setShowDocuments] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewerReady, setViewerReady] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  const closeViewer = () => {
    dialogRef.current?.close()
  }

  useEffect(() => {
    if (selectedDocumentId && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
      setViewerReady(true)
    }
  }, [selectedDocumentId])

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight)
    window.addEventListener("resize", updateViewportHeight)
    return () => window.removeEventListener("resize", updateViewportHeight)
  }, [])

  const openCourse = (course: "full-stack" | "other-courses") => {
    setActiveCourse(course)
    setPageCount(0)
    setPageNumber(1)
    setIsFullscreen(false)
    setShowDocuments(course === "other-courses")
    setSelectedDocumentId(course === "full-stack" ? "full-stack" : "figma")
  }

  const selectDocument = (id: string) => {
    setPageCount(0)
    setPageNumber(1)
    setSelectedDocumentId(id)
  }

  const selectedDocument =
    activeCourse === "full-stack"
      ? selectedDocumentId === "full-stack"
        ? {
            title: t.certificates.items["full-stack"].title,
            src: FULL_STACK_CREDENTIAL_URL,
          }
        : FULL_STACK_MICRO_CERTIFICATE_DOCUMENTS.find(
            (document) => document.id === selectedDocumentId,
          )
      : OTHER_COURSE_DOCUMENT_GROUPS.flatMap((group) => group.documents).find(
          (document) => document.id === selectedDocumentId,
        )

  const courseToggleLabel =
    activeCourse === "full-stack"
      ? showDocuments
        ? t.certificates.hideMicroCertificates
        : t.certificates.viewMicroCertificates
      : showDocuments
        ? t.certificates.hideOtherCourses
        : t.certificates.viewOtherCourses
  const pageHeight = Math.max(
    90,
    isFullscreen
      ? viewportHeight - 112
      : Math.min(viewportHeight * 0.52, viewportHeight - 280),
  )

  return (
    <Panel
      id="certificados"
      className="mt-[22px] px-[4vw] pt-[52px] pb-[45px] max-md:px-7 max-md:py-[45px] max-sm:px-[21px] max-sm:py-10"
    >
      <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-[18px]">
        <SectionTitle eyebrow={t.certificates.eyebrow} title={t.certificates.title} />
        <p className="copy max-w-[500px] text-[15px] leading-normal text-fg-muted">
          {t.certificates.intro}
        </p>
      </div>

      <div className="mt-[34px] grid grid-cols-2 gap-[15px] max-sm:grid-cols-1">
        {CERTIFICATES.map((certificate, index) => {
          const text = t.certificates.items[certificate.id]
          return (
            <article
              key={certificate.id}
              className="relative min-h-[265px] overflow-hidden border border-card-line bg-card bg-linear-145 from-brand/7 to-transparent to-45% p-[26px] transition duration-200 after:absolute after:-right-9 after:-bottom-[58px] after:size-[150px] after:rounded-full after:border-[12px] after:border-dashed after:border-brand/8 after:transition after:duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_45px_rgba(0,0,0,.4)] hover:after:rotate-[15deg] hover:after:border-brand/20"
            >
              <div
                aria-hidden="true"
                className="absolute top-[17px] right-5 font-display text-5xl leading-none font-extrabold text-brand/13"
              >
                {formatIndex(index)}
              </div>
              <div className="mb-6 grid size-12 place-items-center border border-brand/35 text-brand shadow-glow-sm">
                <Icon name="layers" size={25} />
              </div>
              <span className="text-[9px] font-bold tracking-[1.5px] text-brand uppercase">
                {text.issuer}
              </span>
              <h3 className="mt-[7px] mb-2.5 font-display text-[23px] leading-[1.1] font-bold text-fg uppercase">
                {text.title}
              </h3>
              <p className="copy max-w-[340px] text-sm leading-[1.45] text-fg-muted">
                {text.description}
              </p>
              <div className="absolute inset-x-[25px] bottom-[22px] z-[1] flex items-center justify-between">
                <span className="text-[11px] tracking-[1.5px] text-fg-faint">
                  {certificate.year}
                </span>
                <button
                  type="button"
                  onClick={() => openCourse(certificate.id)}
                  className="flex cursor-pointer items-center gap-[7px] border-0 bg-transparent p-0 text-[10px] font-bold tracking-[1px] text-brand"
                >
                  {t.certificates.credential} <Icon name="arrow" size={16} />
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <p className="mt-[22px] text-[10px] tracking-[0.8px] text-fg-faint">
        {t.certificates.note}
      </p>

      {selectedDocumentId && (
        <dialog
          ref={dialogRef}
          aria-labelledby="certificate-viewer-title"
          className="certificate-dialog"
          onClose={() => {
            setSelectedDocumentId(null)
            setShowDocuments(false)
            setIsFullscreen(false)
            setViewerReady(false)
          }}
          onCancel={(event) => {
            event.preventDefault()
            closeViewer()
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer()
          }}
        >
          <div className="certificate-dialog__content">
            <header
              className="certificate-dialog__header"
              inert={isFullscreen}
            >
              <div>
                <span className="text-[9px] font-bold tracking-[1.5px] text-brand uppercase">
                  {t.certificates.viewerLabel}
                </span>
                <h2
                  id="certificate-viewer-title"
                  className="mt-1 font-display text-2xl font-bold text-fg uppercase"
                >
                  {selectedDocument?.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeViewer}
                aria-label={t.certificates.closeViewer}
                className="grid size-10 shrink-0 cursor-pointer place-items-center border border-card-line bg-card text-fg transition hover:border-brand hover:text-brand"
              >
                <Icon name="close" />
              </button>
            </header>

            <div
              className="certificate-dialog__toolbar"
              inert={isFullscreen}
            >
              <button
                type="button"
                aria-expanded={showDocuments}
                onClick={() => setShowDocuments((visible) => !visible)}
                className="flex cursor-pointer items-center gap-2 border border-card-line bg-card px-3 py-2 text-[10px] font-bold tracking-[1px] text-brand transition hover:border-brand"
              >
                <Icon name="layers" size={17} />
                {courseToggleLabel}
              </button>
              {!isFullscreen && (
                <div className="flex items-center gap-3">
                  {pageCount > 0 && (
                    <>
                      <button
                        type="button"
                        aria-label={t.certificates.previousPage}
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
                        className="certificate-page-button"
                      >
                        &lt;
                      </button>
                      <span className="text-[11px] tracking-[1px] text-fg-muted">
                        {t.certificates.pageCount(pageNumber, pageCount)}
                      </span>
                      <button
                        type="button"
                        aria-label={t.certificates.nextPage}
                        disabled={pageNumber >= pageCount}
                        onClick={() =>
                          setPageNumber((page) => Math.min(pageCount, page + 1))
                        }
                        className="certificate-page-button"
                      >
                        &gt;
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    aria-label={t.certificates.fullScreen}
                    aria-pressed="false"
                    onClick={() => setIsFullscreen(true)}
                    className="certificate-page-button"
                  >
                    <Icon name="maximize" size={18} />
                  </button>
                </div>
              )}
            </div>

            {showDocuments && (
              <nav
                aria-label={courseToggleLabel}
                className="certificate-dialog__documents"
                inert={isFullscreen}
              >
                {activeCourse === "full-stack" ? (
                  <>
                    <button
                      type="button"
                      aria-pressed={selectedDocumentId === "full-stack"}
                      onClick={() => selectDocument("full-stack")}
                      className={`certificate-document-option${selectedDocumentId === "full-stack" ? " is-selected" : ""}`}
                    >
                      {t.certificates.items["full-stack"].title}
                    </button>
                    {FULL_STACK_MICRO_CERTIFICATE_DOCUMENTS.map((document) => (
                      <button
                        key={document.id}
                        type="button"
                        aria-pressed={selectedDocumentId === document.id}
                        onClick={() => selectDocument(document.id)}
                        className={`certificate-document-option${selectedDocumentId === document.id ? " is-selected" : ""}`}
                      >
                        {document.title}
                      </button>
                    ))}
                  </>
                ) : (
                  OTHER_COURSE_DOCUMENT_GROUPS.map((group) => (
                    <div key={group.id} className="certificate-document-group">
                      <span className="certificate-document-group__title">
                        {t.certificates.otherCourseGroups[group.id]}
                      </span>
                      <div className="certificate-document-group__options">
                        {group.documents.map((document) => (
                          <button
                            key={document.id}
                            type="button"
                            aria-pressed={selectedDocumentId === document.id}
                            onClick={() => selectDocument(document.id)}
                            className={`certificate-document-option${selectedDocumentId === document.id ? " is-selected" : ""}`}
                          >
                            {document.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </nav>
            )}

            <div
              className={`certificate-dialog__viewer${isFullscreen ? " is-fullscreen" : ""}`}
            >
              {isFullscreen && (
                <div className="certificate-viewer-fullscreen-controls">
                  {pageCount > 0 && (
                    <>
                      <button
                        type="button"
                        aria-label={t.certificates.previousPage}
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
                        className="certificate-page-button"
                      >
                        &lt;
                      </button>
                      <span className="text-[11px] tracking-[1px] text-fg-muted">
                        {t.certificates.pageCount(pageNumber, pageCount)}
                      </span>
                      <button
                        type="button"
                        aria-label={t.certificates.nextPage}
                        disabled={pageNumber >= pageCount}
                        onClick={() =>
                          setPageNumber((page) => Math.min(pageCount, page + 1))
                        }
                        className="certificate-page-button"
                      >
                        &gt;
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    aria-label={t.certificates.exitFullScreen}
                    aria-pressed="true"
                    onClick={() => setIsFullscreen(false)}
                    className="certificate-page-button"
                  >
                    <Icon name="minimize" size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label={t.certificates.closeViewer}
                    onClick={closeViewer}
                    className="certificate-page-button"
                  >
                    <Icon name="close" size={18} />
                  </button>
                </div>
              )}
              {selectedDocument && viewerReady && (
                <Suspense
                  fallback={
                    <p className="p-8 text-center text-sm text-fg-muted">
                      {t.certificates.loadingPdf}
                    </p>
                  }
                >
                  <CertificatePdf
                    key={selectedDocumentId}
                    file={selectedDocument.src}
                    pageNumber={pageNumber}
                    pageHeight={pageHeight}
                    loadingLabel={t.certificates.loadingPdf}
                    errorLabel={t.certificates.pdfError}
                    onPageCountChange={setPageCount}
                  />
                </Suspense>
              )}
            </div>
          </div>
        </dialog>
      )}
    </Panel>
  )
}
