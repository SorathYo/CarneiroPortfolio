import type { CertificateId } from "@/types"

export interface Certificate {
  id: CertificateId
  year: string
}

/** Dados neutros ao idioma. Título/instituição/descrição ficam em `i18n/locales`. */
export const CERTIFICATES: readonly Certificate[] = [
  { id: "full-stack", year: "2025" },
  { id: "other-courses", year: "2025" },
]

const fullStackCertificateFolder = "/Certificados/Full%20Stack%20Dev"

export const FULL_STACK_CREDENTIAL_URL =
  `${fullStackCertificateFolder}/Certificado_Fullstack.pdf`

export const FULL_STACK_MICRO_CERTIFICATES = [
  { id: "javascript", title: "JavaScript", filename: "Certificado_JavaScript.pdf" },
  {
    id: "react",
    title: "Introdução ao React",
    filename: "Certificado_Introdução ao React.pdf",
  },
  {
    id: "node-intro",
    title: "Introdução ao Node.js",
    filename: "Certificado_Introdução ao Node.js.pdf",
  },
  {
    id: "node-fundamentals",
    title: "Fundamentos do Node.js",
    filename: "Certificado_Fundamentos do Node.js.pdf",
  },
  {
    id: "html-css",
    title: "Fundamentos de HTML e CSS",
    filename: "Certificado_Fundamentos de HTML e CSS.pdf",
  },
  {
    id: "git-github",
    title: "Git e GitHub",
    filename: "Certificado de Git e Github.pdf",
  },
] as const

export const FULL_STACK_MICRO_CERTIFICATE_DOCUMENTS = FULL_STACK_MICRO_CERTIFICATES.map(
  ({ filename, ...certificate }) => ({
    ...certificate,
    src: `${fullStackCertificateFolder}/${encodeURIComponent(filename)}`,
  }),
)

const otherCourseDocument = (
  id: string,
  title: string,
  filename: string,
  folder?: string,
) => ({
  id,
  title,
  src: `/Certificados/${folder ? `${encodeURIComponent(folder)}/` : ""}${encodeURIComponent(filename)}`,
})

export const OTHER_COURSE_DOCUMENT_GROUPS = [
  {
    id: "other",
    title: "Cursos complementares",
    documents: [
      otherCourseDocument(
        "figma",
        "Formação em Figma",
        "Certificado de formacao em Figma.pdf",
      ),
      otherCourseDocument("clean-code", "Clean Code", "Certificado_Clean Code.pdf"),
      otherCourseDocument(
        "prompt-engineering",
        "Engenharia de Prompt",
        "Certificado_Engenharia de Prompt.pdf",
      ),
      otherCourseDocument(
        "uml-modeling",
        "Modelagem UML",
        "Certificado_Modelagem_UML.pdf",
      ),
    ],
  },
  {
    id: "java",
    title: "Java",
    documents: [
      otherCourseDocument(
        "java-fundamentals",
        "Fundamentos de Java",
        "Certificado_Fundamentos de Java.pdf",
        "JAVA",
      ),
      otherCourseDocument(
        "spring-boot-fundamentals",
        "Fundamentos do Spring Boot",
        "Certificado_Fundamentos do Spring Boot.pdf",
        "JAVA",
      ),
    ],
  },
  {
    id: "programming-logic",
    title: "Lógica de programação",
    documents: [
      otherCourseDocument(
        "programming-logic",
        "Lógica de programação",
        "Certificado_Lógica de programação.pdf",
        "Lógica de programação",
      ),
      otherCourseDocument(
        "logic-fundamentals",
        "Fundamentos da Lógica de Programação",
        "Certificado_Fundamentos da Lógica de Programação.pdf",
        "Lógica de programação",
      ),
      otherCourseDocument(
        "logic-python",
        "Lógica de programação usando Python",
        "Certificado de Lógica de programação usando Python.pdf",
        "Lógica de programação",
      ),
      otherCourseDocument(
        "logic-javascript",
        "Lógica de programação usando JavaScript",
        "Certificado de Lógica de programação usando javascript.pdf",
        "Lógica de programação",
      ),
    ],
  },
] as const

export const OTHER_COURSE_DOCUMENTS = OTHER_COURSE_DOCUMENT_GROUPS.flatMap(
  (group) => group.documents,
)
